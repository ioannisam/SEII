import http from 'k6/http';
import { check, sleep } from 'k6';

// Spike test: Sudden traffic spike
export const options = {
  stages: [
    { duration: '10s', target: 20 },   // Normal load
    { duration: '5s', target: 300 },   // Sudden spike!
    { duration: '30s', target: 300 },  // Stay at spike
    { duration: '10s', target: 0 },    // Drop to 0
  ],
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8080';

export default function () {
  let res = http.get(`${BASE_URL}/books`);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
