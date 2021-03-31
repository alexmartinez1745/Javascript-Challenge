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
    let tcell = row.append("td");
    tcell.text(value);
  });
});

// Use d3 to find button and create variable
let button = d3.select("#filter-btn");
let form = d3.select("#form");

// Create event handlers
button.on("click", runFilter);
// Submit using enter key
form.on("submit", runFilter);

// Event handler function
function runFilter() {
  // Clear the current HTML table
  tbody.html("");

  // Preventing page from reload
  d3.event.preventDefault();

  // Get raw HTML by selecting where user inputs
  let date = d3.select("#datetime");
  let city = d3.select("#city");
  let state = d3.select("#state");
  let country = d3.select("#country");
  let shape = d3.select("#shape");
  

  // Use filtered data to append the new table
  filtdata.forEach((filter) => {
    // Append each row to the table
    let row = tbody.append("tr");

    // Use object entries to append and display the table data
    Object.entries(filter).forEach(([key, value]) => {
      let tcell = row.append("td");
      tcell.text(value);
    });
  });
}
