// from data.js
var tableData = data;
console.log(tableData);

// Reference to the table body
let tbody = d3.select("tbody");

// YOUR CODE HERE!
// Create an arrow function for each sighting
tableData.forEach((sighting) => {
    
  // Append each row to the table
  let row = tbody.append("tr");

  // Use object entries to append and display the table data
  Object.entries(sighting).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

// let date = "1/11/2010";

// tableData.filter(dates) => {
//     return dates.datetime === date;
// }
