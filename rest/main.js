


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
    "title" : title,
    "author" : author,
    "copyright" : data.publishedDate,
    "genre" : data.categories[0],
    "synopsis" : data.description,
    }));
  }

      // return responses.map(response => {
      //   let responseArray = [];
      //   let copyright = response.data.items[0].volumeInfo.publishedDate;
      //   let genre = JSON.stringify(response.data.items[0].volumeInfo.categories[0]);
      //   let synopsis = JSON.stringify(response.data.items[0].volumeInfo.description);
      //   responseArray.push(id);
      //   responseArray.push(title);
      //   responseArray.push(author);
      //   responseArray.push(copyright);
      //   responseArray.push(genre);
      //   responseArray.push(synopsis);
      //   console.log(responseArray);
      //   return (responseArray);
      //   });
      // }

function loadDatabase(){
  let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"My_Library"
});
    let id;
    let title;
    let author;

    con.connect (err => {
      if (err) {
        throw err;
      }
      con.query(`SELECT id FROM books`, (err, results, fields) => {
        if (err) {
          throw err;
        }
        id = results[0].id;
      });
      con.query(`SELECT title FROM books WHERE id = id`, (err, results, fields) => {
        if (err) {
          throw err;
        }
        title = results[0].title;
      });
      con.query(`SELECT author FROM books WHERE id = id`, (err, results, fields) => {
        if (err) {
          throw err;
        }
        author = results[0].author;

        callAPI(id, title, author);    
    });
    con.end();
  });
}

async function callAPI(id, title, author) {
data = await getFromAPI(id, title, author,`${apiUrl}"${title}"+inauthor:"${author}"`);
data = JSON.stringify(data);
console.log(data);

let con = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "",
  database:"My_Library"
});
  con.connect (err => {
    if (err) {
      throw err;
    }       
  });
  con.query(`SELECT title FROM books WHERE id = id`, (err, results, fields) => {
    if (err) {
      throw err;
    }

  });
}

loadDatabase();