//Pyramid of Doom
// async1(function(){
//     async2(function(){
//         async3(function(){
//             async4(function(){
//                 async5(function(){
//                 ....
//             });
//         });
//     });
// });


////////////// PYRAMID OF DOOM EXAMPLE /////////////////////////
// const cbImpl = require("./callbackImplementation");

// const nr = [48, 40, 32, 24, 16, 8]; //List of sizes
// let res = { "title": "6 Secure Randoms", "randoms": [] };
// let cbImplRun = cbImpl(nr[0], (err, data) => {
//     if (err) {
//         console.log("ERROR: " + err);
//     } else {
//         res.randoms.push({ "length": nr[0], "random": data.toString() });
//         cbImpl(nr[1], (err, data) => {
//             if (err) {
//                 console.log("ERROR: " + err);
//             } else {
//                 res.randoms.push({ "length": nr[1], "random": data.toString() });
//                 cbImpl(nr[1], (err, data) => {
//                     if (err) {
//                         console.log("ERROR: " + err);
//                     } else {
//                         res.randoms.push({ "length": nr[2], "random": data.toString() });
//                         console.log(res);
//                     }
//                 })
//             }
//         })
//     }
// })

// cbImplRun();


//Handling with Promises
// async1
//   then(async2).
//   then(async3).
//   then(async4).
//   then(async5).
//   catch(errorHandlingForAll);
// });

//////////////////////////// PROMISES EXAMPLE //////////////////////////////////

// const fetch = require("node-fetch");
// const URL = "https://swapi.co/api/people/";
// var res = {}

// function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
//     fetch(URL + id)
//         .then(data => data.json())
//         .then(person => {
//             res.name = person.name;
//             fetch(person.films[0])
//                 .then(data => data.json())
//                 .then(film => {
//                     res.firstfilm = film.title;
//                     fetch(film.species[0])
//                         .then(data => data.json())
//                         .then(specie => {
//                             res.specie = specie.name
//                             fetch(specie.homeworld)
//                                 .then(data => data.json())
//                                 .then(homeworld => {
//                                     res.homeworld = homeworld.name;
//                                     console.log(res)
//                                 })
//                         })
//                 })
//         }).catch(err => console.log("Error: " + err))

// }

// getPlanetforFirstSpeciesInFirstMovieForPerson(1);


////////////////// ASYN AWAIT SOLUTION /////////////////////////////////

// const fetch = require("node-fetch");
// const URL = "https://swapi.co/api/people/";
// var res = {}

// async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
//     try {
//         var pers = await fetch(URL + id).then(data => data.json())
//         var film = await fetch(pers.films[0]).then(data => data.json())
//         var specie = await fetch(film.species[0]).then(data => data.json())
//         var planet = await fetch(specie.homeworld).then(data => data.json())
//         res.name = pers.name;
//         res.firstFilm = film.title;
//         res.specie = specie.name;
//         res.planet = planet.name;

//         console.log(res)

//     } catch (err) {
//         console.log("ERROR: " + err);
//     }
// }

// getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);