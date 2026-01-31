/* global __ENV */
import http from 'k6/http';
import { check, sleep } from 'k6';

// Load test: Normal expected load
export const options = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '10s', target: 50 },  // Ramp up to 50 users
    { duration: '30s', target: 50 },  // Stay at 50 users
    { duration: '10s', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }], // Less than 1% errors
    http_req_duration: [{ threshold: 'p(95)<250', abortOnFail: true }], // 95% of requests under 250ms
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8080';

export default function () {
  let res = http.get(`${BASE_URL}/books`);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
