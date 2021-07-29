
// // from data.js
// var tableData = data;
// console.log(data);
// // YOUR CODE HERE!




// Get a reference to the table body
var tbody = d3.select("tbody");
function buildTable() {
    d3.json('/plotlydata').then(function (data) {
        // Loop through the tableData and console.log each ufo report

        // BONUS: Refactor to use Arrow Functions!
        data.forEach((date) => {
            var row = tbody.append("tr");
            Object.entries(date).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    });


}

buildTable();
// tableData.forEach(function(ufoReport) {
//     console.log(ufoReport);

//     // Append one table row 'tr' for each report
//     var row = tbody.append('tr');

//     // Use object.entries to console.log each report
//     Object.entries(ufoReport).forEach(function([key, value]) {
//         console.log(key, value);
//         // append a cell to the row for each value
//         var cell = row.append('td');
//         cell.text(value);
//     })
// });

// Select the button
// var button = d3.select("#filter-btn");
// button.on("click", function() {

//     tbody.html("");

//     // Select the input date get the raw HTML nodes
//     var inputElement = d3.select("#wavenumber");
//     // Get the value property of the input date, state, shape
//     var inputValue = inputElement.property("value");
//     // console.log input value
//     console.log(inputValue);
//     // Filter Data with datetime equal to input value
//     var filteredData = tableData.filter(wave => wave.wavenumber === inputValue);
//     // console.log filter values
//     console.log(filteredData);


//     filteredData.forEach(function(selections) {

//     console.log(selections);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");
//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(selections).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
