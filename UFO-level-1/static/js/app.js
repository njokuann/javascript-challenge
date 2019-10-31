// Get a reference to the table body
var tbody = d3.select("tbody");

var aliens = data;

// Console.log the alien data from data.js
console.log(data);

// // Step 5: Use d3 to update each cell's text with
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


var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(aliens);

    var filteredData = aliens.filter(aliens => aliens.datetime === inputValue);

    console.log(filteredData);
}); 

