/* global __ENV */
import http from 'k6/http';
import { check, sleep } from 'k6';

// Stress test: Push beyond normal capacity
export const options = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '10s', target: 100 },  // Ramp up to 100 users
    { duration: '20s', target: 200 },  // Increase to 200 users
    { duration: '20s', target: 300 },  // Push to 300 users
    { duration: '10s', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_failed: [{ threshold: 'rate<0.05', abortOnFail: true }], // Less than 5% errors
    http_req_duration: [{ threshold: 'p(95)<500', abortOnFail: true }], // 95% of requests under 500ms
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8080';

export default function () {
  let res = http.get(`${BASE_URL}/books`);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
