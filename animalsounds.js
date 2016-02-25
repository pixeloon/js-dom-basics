// initial data
var animals = [
  {name: "Animal", sound: "Sound"}, 
  {name: "cow", sound: "moo"}, 
  {name: "dog", sound: "woof"}, 
  {name: "cat", sound: "meow"}, 
  {name: "pig", sound: "oink"}, 
  {name: "fox", sound: "Ring-ding-ding-ding-dingeringeding!"}
];

// create table and tbody
var table = document.createElement("table");
var tbody = document.createElement("tbody");

// append table to DOM
document.querySelector('body').appendChild(table);
table.appendChild(tbody);

for (var i = 0; i < animals.length; i++) {

  // 1. create tr 
  // 2. for each tr, create two tds
  // 3. for each td, modify the innerText
  // 4. append the tds to the tr
  // 5. append the tr to the tbody

}