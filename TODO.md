# TODO

## SETUP
Go to https://swagger-editor.issel.ee.auth.gr/ and generate nodejs sever with the yml
Go to https://se2-exams.cyclopt.com/ and upload to see issues

npm install and npm start
curl http://localhost:8080/books to verify

## METRICS
Remove unused variables/ void req
Add comments

## TESTING

### ENDPOINTS
npm install -D c8 ava supertest
Edit package.json to include "test": "c8 ava" in scripts

Create ava tests with c8 and supertest in /test

-- In index.js
module.exports = app;
if (require.main === module) {
    ...
}

GET -> 200
POST -> 201
PUT -> 200 204
DELETE -> 200 204

### PERFORMANCE
Have k6 installed
Edit package.json to include "test:perf": "k6 run k6-tests/load-test.js && k6 run k6-tests/stress-test.js && k6 run k6-tests/spike-test.js" in scripts
add k6-test directory

## CI/CD

add .github/workflows/ci.yml