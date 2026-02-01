const test = require('ava');
const request = require('supertest');
const app = require('../index');

/* Books routes */
// test GET /books (returns all books)
test('GET /books returns 200', async (t) => {
  const response = await request(app).get('/books');
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(Array.isArray(response.body));
});

// test GET /books/{bookId} (returns a single book by ID)
test('GET /books/{bookId} returns 200', async (t) => {
  const response = await request(app).get('/books/1');
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test POST /books (creates a new book)
test('POST /books returns 201', async (t) => {
  const response = await request(app)
    .post('/books')
    .send({ title: 'Test Book', author_id: 1, category_id: 1 });
  t.is(response.status, 201);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test PUT /books/{bookId} (updates a book by ID)
test('PUT /books/{bookId} returns 200', async (t) => {
  const response = await request(app)
    .put('/books/1')
    .send({ title: 'Updated Book' });
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test DELETE /books/{bookId} (deletes a book by ID)
test('DELETE /books/{bookId} returns 204', async (t) => {
  const response = await request(app).delete('/books/1');
  t.is(response.status, 204);
});

// Authors routes
// test GET /authors (returns all authors)
test('GET /authors returns 200', async (t) => {
  const response = await request(app).get('/authors');
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(Array.isArray(response.body));
});

// test GET /authors/{authorId} (returns a single author by ID)
test('GET /authors/{authorId} returns 200', async (t) => {
  const response = await request(app).get('/authors/1');
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test POST /authors (creates a new author)
test('POST /authors returns 201', async (t) => {
  const response = await request(app)
    .post('/authors')
    .send({ name: 'Test Author' });
  t.is(response.status, 201);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test PUT /authors/{authorId} (updates an author by ID)
test('PUT /authors/{authorId} returns 200', async (t) => {
  const response = await request(app)
    .put('/authors/1')
    .send({ name: 'Updated Author' });
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test DELETE /authors/{authorId} (deletes an author by ID)
test('DELETE /authors/{authorId} returns 204', async (t) => {
  const response = await request(app).delete('/authors/1');
  t.is(response.status, 204);
});

// Categories routes
// test GET /categories (returns all categories)
test('GET /categories returns 200', async (t) => {
  const response = await request(app).get('/categories');
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(Array.isArray(response.body));
});

// test GET /categories/{categoryId} (returns a single category by ID)
test('GET /categories/{categoryId} returns 200', async (t) => {
  const response = await request(app).get('/categories/1');
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test POST /categories (creates a new category)
test('POST /categories returns 201', async (t) => {
  const response = await request(app)
    .post('/categories')
    .send({ name: 'Test Category' });
  t.is(response.status, 201);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test PUT /categories/{categoryId} (updates a category by ID)
test('PUT /categories/{categoryId} returns 200', async (t) => {
  const response = await request(app)
    .put('/categories/1')
    .send({ name: 'Updated Category' });
  t.is(response.status, 200);
  t.truthy(response.body);
  t.true(typeof response.body === 'object');
});

// test DELETE /categories/{categoryId} (deletes a category by ID)
test('DELETE /categories/{categoryId} returns 204', async (t) => {
  const response = await request(app).delete('/categories/1');
  t.is(response.status, 204);
});
