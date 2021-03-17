


const express = require('express');
const mysql = require("mysql");
const axios = require('axios');
const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

  async function getFromAPI(){
    let promises = []
    for (let i = 1; i <= 151; i++){
      let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      promises.push(response)
    }
    let responses = await Promise.all(promises)
    return responses.map(response => response.data).map(data => ({
      "id": data.id,
      "name": data.name,
      "types": data.types.map(type => type.type.name),
      "img": data.sprites["other"]["official-artwork"]["front_default"]
    }))
 
  }
  getFromAPI();

function loadDatabase(){
  let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: password,
    database:"My_Library"
});

    for (let i = 1; i <= 1; i++) {
      console.log(con.query("SELECT COUNT(*) FROM books"));
      console.log(con.query(`SELECT title FROM books WHERE id = ${i}`));
      console.log(con.query(`SELECT author FROM books WHERE id = ${i}`));
      //getFromAPI(`${apiUrl}"${title}+inauthor:${author}`);
    }
  }
  loadDatabase();

//   //let name = con.query("SELECT name FROM books")
//   let data = await getFromAPI(); 
//   data.forEach(pokemon => {
//     con.query(`INSERT INTO pokemon (id, name, img) VALUES (${pokemon.id}, "${pokemon.name}", "${pokemon.img}");`);
//   })
//   let uniqueTypes = new Set();
//     data.forEach(pokemon => {
//       pokemon.types.forEach(type => {
//       uniqueTypes.add(type) 
//     })
//   }) 
//   uniqueTypes = [...uniqueTypes]
//   for(let i = 0; i < uniqueTypes.length; i++) {
//     con.query(`INSERT INTO type (id, name) VALUES (${i+1}, "${uniqueTypes[i]}");`)
//   }
//   data.forEach(pokemon => {
//     pokemon.types.forEach(type => {
//       let typeId = uniqueTypes.indexOf(type) + 1;
//       con.query(`INSERT INTO pokemon_type (pokemonId, typeId) VALUES (${pokemon.id}, ${typeId});`)
//     })
//   })
//   console.log(data)
//   con.end();
// }
//loadDatabase()

// async function getPokemonsFromDatabase(){
//   let con = mysql.createConnection({
//         host:"localhost",
//         user: "root",
//         password: password,
//         database:"pokedex"
//     });

//     let data = await new Promise((resolve, reject) => {
//      con.query("SELECT * FROM pokemon", (err, result, fields) => {
//       (err) ? reject(err) : resolve(result);
//       });
//     });
    
//    con.end();
//    return data;
// }
