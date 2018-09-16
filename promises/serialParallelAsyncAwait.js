const fetch = require("node-fetch");
const now = require("performance-now")
//https://www.npmjs.com/package/performance-now



const URL = "https://swapi.co/api/people/";

function fetchPerson(url) {
  return fetch(url)
    .then((res) => { return res.json() })
    .then((res) => { return res })
}

async function printNames() {
  console.log("Before");

  var start = now()

  //SERIEL IMPLEMENTATION 1/2
  // const person1 = await fetchPerson(URL + 1);
  // const person2 = await fetchPerson(URL + 2);

  //PARELLEL IMPLEMENTATION  1/2
  const person1 = fetchPerson(URL + 1);
  const person2 = fetchPerson(URL + 2);
  const results = [await person1, await person2]

  var end = now()

  //SERIEL IMPLEMENTAITON   2/2
  // console.log(person1.name);
  // console.log(person2.name)

  //PARELLEL IMPLEMENTATION   2/2
  console.log(results[0].name + "\n" + results[1].name)

  console.log("After all");

  console.log(start.toFixed(3))
  console.log((start - end).toFixed(3))
}


printNames()