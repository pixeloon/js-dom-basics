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
var tr;
var td1, td2;

// append table to DOM
document.querySelector('body').appendChild(table);
table.appendChild(tbody);

for (var i = 0; i < animals.length; i++) {
    // 1. create tr 
  tr = document.createElement("tr");
  // 2. for each tr, create two tds
      td1 = document.createElement("td");
      // 3. for each td, modify the innerText
      // 4. append the tds to the tr
      td1.innerText = animals[i].name;
      tr.appendChild(td1);
      td2 = document.createElement("td");
      td2.innerText = animals[i].sound;
      tr.appendChild(td2);
      // 5. append the tr to the tbody
  tbody.appendChild(tr);
}