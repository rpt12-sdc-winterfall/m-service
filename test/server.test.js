/* You'll need to have the express server running
 * for these tests to pass. */

const axios = require('axios');
const { CreateFakeDocument } = require('../server/database/CreateFakeDocument');

describe('the server', () => {
  test('should GET a well-structured object', () => {
    expect.assertions(2);

    return axios('http://localhost:3004/books/1')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.data).toContainAllKeys([
          'id',
          '__v',
          '_id',
          'title',
          'author',
          'description',
          'ratings',
          'reviews',
          'links',
          'type',
          'pages',
          'publishDate',
          'publisher',
          'metadata',
          'image',
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  test('should POST a new book to the database', () => {
    const newBook = CreateFakeDocument(10000009);

    expect.assertions(3);

    return axios.post('http://localhost:3004/books', newBook)
      .then(() => axios('http://localhost:3004/books/10000009')
        .then((response) => {
          expect(response.data).toHaveProperty('title', newBook.title);
          expect(response.data).toHaveProperty('author', newBook.author);
          expect(response.data).toHaveProperty('reviews', newBook.reviews);
        }))
      .catch((err) => {
        console.log(err);
      });
  });

  test('should update the book details in the database', () => {
    expect.assertions(1);

    return axios.patch('http://localhost:3004/books/4', {
      author: 'Jamal',
    })
      .then(() => axios('http://localhost:3004/books/4')
        .then((response) => {
          expect(response.data).toHaveProperty('author', 'Jamal');
        }))
      .catch((err) => {
        console.log(err);
      });
  });

  test('should DELETE the specified book from the database', () => {
    expect.assertions(1);

    return axios.delete('http://localhost:3004/books/1')
      .then(() => axios('http://localhost:3004/books/1')
        .then((response) => {
          expect(response.data).toBe('This book doesn\'t exist!');
        }))
      .catch((err) => {
        console.log(err);
      });
  });
});
