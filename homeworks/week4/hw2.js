const request = require('request');
const process = require('process');

const apiUrl = 'https://lidemy-book-store.herokuapp.com';
const action = process.argv[2];
const param = process.argv[3];
const bookName = process.argv[4];

/* eslint-disable no-use-before-define */
switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks(param);
    break;
  case 'delete':
    deleteBooks(param);
    break;
  case 'create':
    createBooks(param);
    break;
  case 'update':
    updateBooks(param, bookName);
    break;
  default:
    console.log('請輸入 list, read, delete, create 或 update');
}

function listBooks() {
  request(`${apiUrl}/books?_limit=20`, (error, response, body) => {
    /* eslint-disable no-unused-vars */
    let books;
    try {
      books = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    for (let i = 0; i < books.length; i += 1) {
      console.log(`${books[i].id} ${books[i].name}`);
    }
  });
}

function readBooks(id) {
  request(`${apiUrl}/books/${id}`, (error, response, body) => {
    /* eslint-disable no-unused-vars */
    let books;
    try {
      books = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    console.log(`${books.id} ${books.name}`);
  });
}

function deleteBooks(id) {
  request.delete(`${apiUrl}/books/${id}`, (error, response, body) => {
    /* eslint-disable no-unused-vars */
    let books;
    try {
      books = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    console.log(`刪除id為 ${id} 的書籍`);
  });
}

function createBooks(name) {
  request.post(`${apiUrl}/books`,
    { form: { name } },
    (error, response, body) => {
    /* eslint-disable no-unused-vars */
      let books;
      try {
        books = JSON.parse(body);
      } catch (e) {
        console.log(e);
        return;
      }
      console.log(`新增一本名為 ${name} 的書籍`);
    });
}

function updateBooks(id, name) {
  request.patch(`${apiUrl}/books/${id}`,
    { form: { name } },
    (error, response, body) => {
    /* eslint-disable no-unused-vars */
      let books;
      try {
        books = JSON.parse(body);
      } catch (e) {
        console.log(e);
        return;
      }
      console.log(`更新 id 為 ${id} 的書名為 ${name}`);
    });
}
