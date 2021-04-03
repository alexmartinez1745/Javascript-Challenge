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
  console.log(`FILTERS --> Date: ${userDate} 
            City: ${userCity} 
            State: ${userState} 
            Country: ${userCountry} 
            Shape: ${userShape}`);

  // Set variable for table data to use in statements
  newFilter = tableData;

  // If statments for multiple filters
  // ####### DATE #########
  // Empty array for date filter
  let dateFilter = [];
  // See if user value corresponds to the data
  if (userDate) {
    newFilter.forEach((doc) => {
      if (doc.datetime === userDate) {
        dateFilter.push(doc);
        console.log("Filter sucess!")
      }
      // If filter has values, set it to our running filter
      newFilter = dateFilter;
    });
  }

  // ####### CITY #########
  // Empty array for city filter
  let cityFilter = [];
  // See if user value corresponds to the data
  if (userCity) {
    newFilter.forEach((doc) => {
      if (doc.city === userCity) {
        cityFilter.push(doc);
        console.log("Filter sucess!")
      }
      // If filter has values, set it to our running filter
      newFilter = cityFilter;
    });
  }

  // ####### STATE #########
  // Empty array for state filter
  let stateFilter = [];
  // See if user value corresponds to the data
  if (userState) {
    newFilter.forEach((doc) => {
      if (doc.state === userState) {
        stateFilter.push(doc);
        console.log("Filter sucess!")
      }
      // If filter has values, set it to our running filter
      newFilter = stateFilter;
    });
  }

  // ####### COUNTRY #########
  // Empty array for country filter
  let countryFilter = [];
  // See if user value corresponds to the data
  if (userCountry) {
    newFilter.forEach((doc) => {
      if (doc.country === userCountry) {
        countryFilter.push(doc);
        console.log("Filter sucess!")
      }
      // If filter has values, set it to our running filter
      newFilter = countryFilter;
    });
  }
 
  // ####### SHAPE #########
  // Empty array for shape filter
  let shapeFilter = [];
  // See if user value corresponds to the data
  if (userShape) {
    newFilter.forEach((doc) => {
      if (doc.shape === userShape) {
        shapeFilter.push(doc);
        console.log("Filter sucess!")
      }
      // If filter has values, set it to our running filter
      newFilter = shapeFilter;
    });
  }

  // If no filters have been used, tell user in console to add filter(s)
  if (newFilter === tableData) {
    console.log("Please enter filter(s)")
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
