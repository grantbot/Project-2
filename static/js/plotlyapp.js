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


            var happiness = [];

            for (var i = 0; i < participants.length; i++) {

                happiness[i] = participants[i].expectations_of_happiness;


            }


            var dates = [];

            for (var i = 0; i < participants.length; i++) {

                dates[i] = participants[i].Number_of_Dates;


            }

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

    });
}

function init() {


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
}

function optionChanged(newSelection) {

    //     // Update metadata with newly selected sample
    buildMetadata(newSelection);
    //     // Update charts with newly selected sample
    buildCharts(newSelection);
}

init();