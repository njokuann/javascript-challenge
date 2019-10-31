// Get a reference to the table body
var tbody = d3.select("tbody");

// Assign data to descriptive variable
var aliens = data;

// Console.log the alien data from data.js
console.log(data);

// // Use d3 to update each cell's text with
// // alien report values (weekday, date, high, low)
data.forEach(function(data) {
    console.log(data);
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]) {
      console.log(key, value);
    // Append a cell to the row for each value
    // in the alien object
      var cell = row.append("td");
      cell.text(value);
  });
});

// # Select the button
var button = d3.select("#filter-btn");

//# Select the input element and get the raw HTML node
button.on("click", function() {
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(aliens);

    var filteredData = aliens.filter(aliens => aliens.datetime === inputValue);

    console.log(filteredData);
}); 

