import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


class Person {
  constructor(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
  }
}

const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
]


function makeTable(data) {
  // Make the header for the table
  let headerKeys = _.keys(data[0]);
  let tblHeaders = headerKeys.map(h => `<th>${_.startCase(h)}</th>`).join(" ")
  

  // Make the body for the table
  let body = [];
  for (let i in data) {
    let res = "<tr>";
    for (var props in data[i]) {
      res += `<td>${data[i][props]}</td>`
    }
    res += "</tr>"
    body.push(res);
  }
  body = body.join("");
  

  // Make the table with the header and body. Provide the table element with class="table"
  // to style with Bootstrap
  return `<table class="table"><thead>${tblHeaders}</thead>${body}</table>`;
  
}

// You must implement the makeTable(..) function, used below:
const cities = [
  {city: "Lyngby",zipCode: "2800"},
  {city: "Hvidovre",zipCode: "2650"},
  {city: "Glostrup",zipCode: "2600"},
 ]
 
const table = makeTable(cities);
document.getElementById('my-table').innerHTML = table;