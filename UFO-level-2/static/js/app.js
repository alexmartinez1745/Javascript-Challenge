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
  let userDate = d3.select("#datetime").property("value");
  let userCity = d3.select("#city").property("value");
  let userState = d3.select("#state").property("value");
  let userCountry = d3.select("#country").property("value");
  let userShape = d3.select("#shape").property("value");
  console.log(userDate, userCity, userState, userCountry, userShape);

  // Set variable for table data to use in statements
  newFilter = tableData;

  // If statments for multiple filters
  if (userDate) {
    newFilter = tableData.filter((doc) => doc.datetime === userDate);
  }

  if (userCity) {
    newFilter = tableData.filter((doc) => doc.city === userCity);
  }
  
  if (userState) {
    newFilter = tableData.filter((doc) => doc.state === userState);
  }

  if (userCountry) {
    newFilter = tableData.filter((doc) => doc.country === userCountry);
  }

  if (userShape) {
    newFilter = tableData.filter((doc) => doc.shape === userShape);
  }



  // Use filtered data to append the new table
  newFilter.forEach((filter) => {
    // Append each row to the table
    let row = tbody.append("tr");

    // Use object entries to append and display the table data
    Object.entries(filter).forEach(([key, value]) => {
      let tcell = row.append("td");
      tcell.text(value);
    });
  });
}
