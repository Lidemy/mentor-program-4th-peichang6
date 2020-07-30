/* eslint-disable */
const request = require ('request');
const apiUrl = 'https://lidemy-book-store.herokuapp.com';


request(`${apiUrl}/books?_limit=10`, (error, response, body) => {
  let books
  try {
    books = JSON.parse(body);
  } catch(e) {
  	console.log(e); //錯誤處理
  	return
  }
  for (let i = 0; i < books.length; i += 1) {
    console.log(`${books[i].id} ${books[i].name}`);
  }
});
