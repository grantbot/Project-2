
// Get a reference to the table body
var tbody = d3.select("tbody");
function buildTable() {
    d3.json('/plotlydata').then(function (data) {
        // Loop through the plotlytabledata

        data.forEach((date) => {
            var row = tbody.append("tr");
            Object.entries(date).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
            console.log(data);
        });
    });


}

buildTable();

d3.json('/plotlydata').then(function (data) {
    data.forEach(function (date) {
        console.log(date);

        // Append one table row 'tr' for each report
        var row = tbody.append('tr');

        // Use object.entries to console.log each report
        Object.entries(date).forEach(function ([key, value]) {
            console.log(key, value);
            // append a cell to the row for each value
            var cell = row.append('td');
            cell.text(value);
        })
    });
});

// Select the button

var button = d3.select("#filter-btn");
button.on("click", function () {
    d3.json('/plotlydata').then(function (data) {


        tbody.html("");

        //     // Select the input date get the raw HTML nodes
        var inputElement = d3.select("#wavenumber");
        //     // Get the value property of the input date, state, shape
        var inputValue = inputElement.property("value");
        //     // console.log input value
        console.log(inputValue);
        //     // Filter Data with datetime equal to input value
        var filteredData = data.filter(happiness => happiness.expectations_of_happiness === inputValue);
        //     // console.log filter values
        console.log(filteredData);

    });
    d3.json('/plotlydata').then(function (data) {
        filteredData.forEach(function (selections) {

            console.log(selections);
            // Append one table row `tr` for each UFO Sighting object
            var row = tbody.append("tr");
            // Use `Object.entries` to console.log each UFO Sighting value
            Object.entries(selections).forEach(function ([key, value]) {
                console.log(key, value);
                // Append a cell to the row for each value
                var cell = row.append("td");
                cell.text(value);
            });

        });
    })
});
