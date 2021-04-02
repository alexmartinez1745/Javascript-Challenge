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
  // Empty array for date filter
  let dateFilter = [];
  // See if user value corresponds to the data
  if (userDate) {
    newFilter.forEach((doc) => {
      if (doc.datetime === userDate) {
        dateFilter.push(doc);
      }
    });
  }
  // If filter has values, set it to our running filter
  if (dateFilter.length > 0) {
    newFilter = dateFilter
  }

  // Empty array for city filter
  let cityFilter = [];
  // See if user value corresponds to the data
  if (userCity) {
    newFilter.forEach((doc) => {
      if (doc.city === userCity) {
        cityFilter.push(doc);
      }
    });
  }
  // If filter has values, set it to our running filter
  if (cityFilter.length > 0) {
    newFilter = cityFilter;
  }

  // Empty array for state filter
  let stateFilter = [];
  // See if user value corresponds to the data
  if (userState) {
    newFilter.forEach((doc) => {
      if (doc.state === userState) {
        stateFilter.push(doc);
      }
    });
  }
  // If filter has values, set it to our running filter
  if (stateFilter.length > 0) {
    newFilter = stateFilter;
  }

  // if (userCountry) {
  //   countryFilter = stateFilter.filter((doc) => doc.country === userCountry);
  // }
  // else {
  //   countryFilter = stateFilter;
  // }

  // if (userShape) {
  //   shapeFilter = countryFilter.filter((doc) => doc.shape === userShape);
  // }
  // else {
  //   shapeFilter = countryFilter;
  // }

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
