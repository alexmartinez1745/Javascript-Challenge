// from data.js
var tableData = data;
console.log(tableData);

// Reference to the table body
let tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach((sightings) => {
    let row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
  


// let date = "1/11/2010";

// tableData.filter(dates) => {
//     return dates.datetime === date;
// }