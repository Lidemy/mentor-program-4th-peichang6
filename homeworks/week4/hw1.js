/* eslint-disable */
const request = require ('request');
const apiUrl = 'https://lidemy-book-store.herokuapp.com';


request(`${apiUrl}/books?_limit=10`, (error, response, body) => {
  const books = JSON.parse(body);
  for (let i = 0; i < books.length; i += 1) {
    console.log(`${books[i].id} ${books[i].name}`);
  }
});
