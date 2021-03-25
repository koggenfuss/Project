


const express = require('express');
const mysql = require("mysql");
const axios = require('axios');
const e = require('express');
const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";


const app = express();
const port = 3000;

// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`)
// });

async function getFromAPI(id, title, author, bookTitleAndAuthorAPIURL){
  let promises = [];
  let response = axios.get(bookTitleAndAuthorAPIURL);
    promises.push(response);
  let responses = await Promise.all(promises)

  return responses.map(response => response.data.items[0].volumeInfo).map(data => ({
    "id" : id,
    "copyright" : data.publishedDate,
    "genre" : data.categories[0],
    "synopsis" : data.description
  }));
}


function loadDatabase(){
  let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database:"My_Library"
});
  let id;
  let title;
  let author;
  let numberOfBooks = 39;
  con.connect (err => {
    if (err) {
      throw err;
    }
  for (i = 1; i <= numberOfBooks; i++){
  con.query(`SELECT id FROM books WHERE id = ${i}`, (err, results, fields) => {
    if (err) {
      throw err;
    }
    id = results[0].id;
  
  });
  con.query(`SELECT title FROM books WHERE id = ${i}`, (err, results, fields) => {
    if (err) {
      throw err;
    }
    title = results[0].title;
  });
  con.query(`SELECT author FROM books WHERE id = ${i}`, (err, results, fields) => {
    if (err) {
      throw err;
    }
    author = results[0].author;

    callAPI(id, title, author);  
    
    });
   }
    con.end();
  });
}

async function callAPI(id, title, author) {

  data = await getFromAPI(id, title, author,`${apiUrl}"${title}"+inauthor:"${author}"`);

let con = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "password",
  database:"My_Library"
});

  con.connect (err => {
    if (err) {
      throw err;
    }       
  });

  console.log(data);
  data.forEach(({copyright, genre, synopsis, id}) => {
    const query = `UPDATE books set copyright="${copyright}", genre="${genre}", synopsis="${synopsis}" WHERE id=${id}`;
    con.query(query, (err,results,fields)=>{
      console.log({err});
      console.log({results});
      console.log({fields});
    })
  });
}

loadDatabase();