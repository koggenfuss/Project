


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
    let response = axios.get(bookTitleAndAuthorAPIURL);
      promises.push(response);
    let responses = await Promise.all(promises)

    return responses.map(response => response.data.items[0].volumeInfo).map(data => ({
      "copyright": data.publishedDate,
      "genre": data.categories[0],
      "synopsis": data.description
    }))

    
    // return responses.map(response => {
    //   let copyright = JSON.stringify(response.data.items[0].volumeInfo.publishedDate);
    //   console.log(JSON.stringify(response.data.items[0].volumeInfo.publishedDate));
    //   let genre = JSON.stringify(response.data.items[0].volumeInfo.categories[0]);
    //   console.log(JSON.stringify(response.data.items[0].volumeInfo.categories[0]));
    //   let synopsis = JSON.stringify(response.data.items[0].volumeInfo.description);
    //   console.log(JSON.stringify(response.data.items[0].volumeInfo.description));
    //   console.log("-______________________________________________________________________")
    // });



  }

async function loadDatabase(){
  let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"My_Library"
});
    let title;
    let author;

    con.connect (err => {
      if (err) {
        throw err;
      }
    for (let i = 1; i <= 1; i++) {
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

        let data = await getFromAPI(`${apiUrl}"${title}"+inauthor:"${author}"`);
        console.log(data);
        


        console.log("*********************************TITLE AND AUTHOR  ---" + title + "   " + author);
    });
  }
  con.end();
 });
}

loadDatabase();

