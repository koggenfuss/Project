


const express = require('express');
const mysql = require("mysql");
const axios = require('axios');
const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

const app = express();
const port = 3000;

// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`)
// });

  async function getFromAPI(bookTitleAndAuthorAPIURL){
    let promises = [];
    for (let i = 1; i <= 5; i++){
      let response = axios.get(bookTitleAndAuthorAPIURL);
      promises.push(response);
    }
    let responses = await Promise.all(promises);
    console.log(responses);
    return responses.map(response => response.data).map(data => ({

  }
 
}
  getFromAPI();

function loadDatabase(){
  let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "KillEric5050",
    database:"My_Library"
});
    let title;
    let author;

    con.connect (err => {
      if (err) {
        throw err;
      }
    for (let i = 1; i <= 5; i++) {
      con.query(`SELECT title FROM books WHERE id = ${i}`, (err, results, fields) => {
        if (err) {
          throw err;
        }
        title = results[0].title;
        console.log(title);
      });
      con.query(`SELECT author FROM books WHERE id = ${i}`, (err, results, fields) => {
        if (err) {
          throw err;
        }
        author = results[0].author;
        console.log(author);
        //getFromAPI
        
        console.log(`${apiUrl}"${title}"+inauthor:"${author}"`);
    });
    

    
  }
  con.end();
 });
}

loadDatabase();

