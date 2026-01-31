import http from 'k6/http';
import { check, sleep } from 'k6';

// Spike test: Sudden traffic spike
export const options = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '10s', target: 20 },   // Normal load
    { duration: '5s', target: 300 },   // Sudden spike!
    { duration: '30s', target: 300 },  // Stay at spike
    { duration: '10s', target: 0 },    // Drop to 0
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
