function buildMetadata(selection) {
    d3.json('/plotlydata').then(function (participants) {
        console.log(participants);

        console.log(typeof participants);

        try {

            var participant = participants.filter(item => item.Participant_Number == selection);
            console.log(participant);

            var metadata = d3.select('#sample-metadata').html('');

            Object.entries(participant[0]).forEach(([key, value]) => {
                metadata.append('p').text(`${key}: ${value}`);
            });
            console.log(metadata);
        }
        catch (err) {
            metadata.append('p').text(`no match for participant`);
        }
    });
    // });
}

// // Define a function that will create charts for given sample
function buildCharts(selection) {

    // //     // Read the json data
    d3.json('/plotlydata').then(function (participants) {
        console.log(participants);
        try {

            // var participant = participants.filter(item => item.Participant_Number == selection);
            // console.log(participant);

            // var metadata = d3.select('#sample-metadata').html('');
            var happiness = [];

            for (var i = 0; i < participants.length; i++) {
                // pName = participants[0];
                happiness[i] = participants[i].expectations_of_happiness;


            }


            var dates = [];

            for (var i = 0; i < participants.length; i++) {
                // pName = participants[0];
                dates[i] = participants[i].Number_of_Dates;


            }

            // Object.entries(participant[0]).forEach(([key, value]) => {
            //     metadata.append('p').text(`${key}: ${value}`);
            // });
            // console.log(metadata);
        }
        catch (err) {
            console.log(err);
        }
        console.log(happiness);
        console.log(dates);

        //  line graph

        var number_of_dates = {
            y: dates,
            name: 'Number of Dates',
            type: 'line'
        };

        var happiness_expectations = {
            y: happiness,
            name: 'Happiness Expectations',
            type: 'line'
        }

        data = [number_of_dates, happiness_expectations]

        Plotly.newPlot('line', data);
        var number_of_dates = {
            y: dates,
            name: 'Number of Dates',
            type: 'box'
        };

        var happiness_expectations = {
            y: happiness,
            name: 'Happiness Expectations',
            type: 'box'
        }

        data = [number_of_dates, happiness_expectations]

        Plotly.newPlot('box', data);

        //         // Parse and filter the data to get the sample's OTU data
        //         // Pay attention to what data is required for each chart
        //         var parsedData = sampleData.samples;
        //         console.log(parsedData);

        //         var sampleDict = parsedData.filter(item => item.id == selection)[0];
        //         console.log(sampleDict);


        //         var sampleValues = sampleDict.sample_values; 
        //         var barChartValues = sampleValues.slice(0, 10).reverse();
        //         console.log(barChartValues);

        //         var idValues = sampleDict.otu_ids;
        //         var barChartLabels = idValues.slice(0, 10).reverse();
        //         console.log(barChartLabels);

        //         var reformattedLabels = [];
        //         barChartLabels.forEach((label) => {
        //             reformattedLabels.push("OTU " + label);
        //         });

        //         console.log(reformattedLabels);

        //         var hovertext = sampleDict.otu_labels;
        //         var barCharthovertext = hovertext.slice(0, 10).reverse();
        //         console.log(barCharthovertext);

        //         // Create bar chart in correct location

        //         var barChartTrace = {
        //             type: "bar",
        //             y: reformattedLabels,
        //             x: barChartValues,
        //             text: barCharthovertext,
        //             orientation: 'h'
        //         };

        //         var barChartData = [barChartTrace];

        //         Plotly.newPlot("bar", barChartData);

        //         // Create bubble chart in correct location

        //         var bubbleChartTrace = {
        //             x: idValues,
        //             y: sampleValues,
        //             text: hovertext,
        //             mode: "markers",
        //             marker: {
        //                 color: idValues,
        //                 size: sampleValues
        //             }
        //         };

        //         var bubbleChartData = [bubbleChartTrace];

        //         var layout = {
        //             showlegend: false,
        //             height: 600,
        //             width: 1000,
        //             xaxis: {
        //                 title: "OTU ID"
        //             }
        //         };

        //         Plotly.newPlot("bubble", bubbleChartData, layout);
    });
}

function init() {
    // Read json data
    // d3.csv("../references/ptable.csv").then((participantNumber) => {
    //     console.log(participantNumber);
    // Parse and filter data to get participant number
    // var parsedData = participantNumber;
    // console.log(parsedData);
    // Object.entries(sample[0]).forEach(([key, value]) => {
    // for (const [key, value] of Object.entries(participantNumber[0]) {
    //     participantNumbers = value
    //     console.log(participantNumbers);
    // });

    // // Add dropdown option for each participant
    participant = new Array(449);
    for (let index = 1; index < 450; index++) {
        participant.push(index);
    }
    console.log(participant);
    var dropdownMenu = d3.select("#selDataset");

    participant.forEach((name) => {
        dropdownMenu.append("option").property("value", name).text(name);
    })

    // // Use first sample to build metadata and initial plots
    // buildMetadata(parsedData[0]);

    // buildCharts(parsedData[0]);

    // });
}

function optionChanged(newSelection) {

    //     // Update metadata with newly selected sample
    buildMetadata(newSelection);
    //     // Update charts with newly selected sample
    buildCharts(newSelection);
}

init();