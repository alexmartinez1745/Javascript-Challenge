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

// Use d3 to find button and create variable
let button = d3.select("#filter-btn");
let form = d3.select("#formgroup");

// Create event handler
button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler function
function runEnter() {
  // Preventing page from reload
  d3.event.preventDefault();

  // Get raw HTML by selecting where user inputs
  let usrinput = d3.select("#datetime");

  // Grab the value of the input from user
  let usrvalue = usrinput.property("value");
  console.log(usrvalue);

  // Filter the data and display it to the console
  let filtdata = tableData.filter((date) => date.datetime === usrvalue);
  console.log(filtdata);
}
