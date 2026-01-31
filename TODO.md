# TODO

## SETUP

Go to: 
- https://swagger-editor.issel.ee.auth.gr/ (generate nodejs sever with the .yml)
- https://se2-exams.cyclopt.com/ (upload to see issues)

Run:
``` bash
    npm install
    npm start
    curl http://localhost:8080/ROUTE #to verify (REPLACE "ROUTE")
```

## METRICS

- Remove unused variables (void req; // for default.js)
- Add comments (/* */ style to cheese density)

## TESTING

### ENDPOINTS

- Install dependencies
```bash
    npm install -D c8 ava supertest
```

- Edit package.json to include "test": "c8 ava" in scripts

- Create ava tests with c8 and supertest in /test

- In index.js:
```js
    module.exports = app;
    if (require.main === module) {
        ...
    }
```

The expected return codes are:
- GET -> 200
- POST -> 201
- PUT -> 200 204
- DELETE -> 200 204
(Use or 200 in all cases)

### PERFORMANCE

- Have k6 installed
- Edit package.json to include "test:perf": "k6 run k6-tests/load-test.js && k6 run k6-tests/stress-test.js && k6 run k6-tests/spike-test.js" in scripts
- add k6-test directory (spike.js, load.js or stress.js)
- verify
```bash
    npm start
    npm run test:perf
```
## CI/CD

- add .github/workflows/ci.yml (CHANGE BOOKS TO SOMETHING ELSE)