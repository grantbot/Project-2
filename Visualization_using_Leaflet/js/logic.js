// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Define a markerSize function that will give each city a different radius based on its population
  function markerSize(population) {
    return Math.sqrt(population) / 40;
  }
  
  // Each city object contains the state's and cities name, location and population
  var states,cities = [
    {
        name: "New York",
        location: [40.7128, -74.0059],
        population: 8550405,
        zipcode: [11028,11561,10025]
      },
      {
        name: "Chicago",
        location: [41.8781, -87.6298],
        population: 2720546,
        zipcode: [60521,6883,60089,60521,60519]
      },
      {
        name: "Houston",
        location: [29.7604, -95.3698],
        population: 2296224,
        zipcode: [77026]
      },
      {
        name: "Los Angeles",
        location: [34.0522, -118.2437],
        population: 3971883,
        zipcode: [60521]
      },
      {
        name: "Albama",
        location: [32.3182, 86.9023],
        population: 446599,
        zipcode: [35223]
      },
      {
        name: "Connecticut",
        location: [41.6032, 73.0877],
        population: 446599,
        zipcode: [6268,6880,6098,6019]
      },
      {
        name: "Texas",
        location: [31.9686, 99.9018],
        population: 446599,
        zipcode: [77096,76116,76513,77546,76710,77401]
      },
      {
        name: "Bowdoin College",
        location: [43.9077, 69.9640],
        population: 446599,
        zipcode: [94022]
      },
      {
        name: "MD",
        location: [39.2904, 76.6122],
        population: 446599,
        zipcode: [20878]
      },
      {
        name: "Southern California",
        location: [34.9592, 116.4194],
        population: 446599,
        zipcode: [91360,92821,]
      },
      {
        name: "London,England",
        location: [51.5074, 0.1278],
        population: 446599,
        zipcode: [91360,92821]
      },
      {
        name: "Palm Springs California",
        location: [33.8303, 116.5453],
        population: 446599,
        zipcode: []
      },
      {
        name: "Cincinnati Ohio",
        location: [39.1031, 84.5120],
        population: 446599,
        zipcode: [45243,45213]
      },
      {
        name: "Miami",
        location: [25.7617, 80.1918],
        population: 446599,
        zipcode: [33183]
      },
      {
        name: "Milan Italy",
        location: [45.4642, 9.1900],
        population: 446599,
        zipcode: [26900,80131]
      },
      {
        name: "Georgia USA",
        location: [32.1656, 82.9001],
        population: 446599,
        zipcode: [30677]
      },
      {
        name: "Georgia USA",
        location: [32.1656, 82.9001],
        population: 446599,
        zipcode: [30677]
      },
      {
        name: "Washington DC",
        location: [38.9072, 77.0369],
        population: 446599,
        zipcode: [3031,22151,13413]
      },
      {
        name: "New Jersy",
        location: [32.1656, 82.9001],
        population: 446599,
        zipcode: [7661,8820,7045,7747,7746,7705,8820,7661,7624]
      },
      {
        name: "Ann Arbor MI",
        location: [42.279594, -83.732124],
        population: 446599,
        zipcode: [48104,48331,48334]
      },
      {
        name: "Iowa",
        location: [42.032974, -93.581543],
        population: 446599,
        zipcode: [52803]
      },
      {
        name: "Westchester NY",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Washington DC",
        location: [38.9072, 77.0369],
        population: 5378000,
        zipcode: [3031,20817,5401]
      },
      {
        name: "Boston",
        location: [42.3601, 71.0589],
        population: 4314893,
        zipcode: [1867,8071,4605,53705,2021,1890,10536,1851,1173,46818,6437,1742,12302,1890]
      },
      {
        name: "Michigan",
        location: [44.3148, 85.6024],
        population: 10093455,
        zipcode: [48124,48306]
      },
      {
        name: "Singapore",
        location: [1.3521, 103.8198],
        population:5896686,
        zipcode: [807931,650206,10027,597627]
      },
      {
        name: "Brazil",
        location: [14.2350, 51.9253],
        population: 213993437,
        zipcode: [29055]
      },
      {
        name: "Brandeis University",
        location: [42.3657, 71.2586],
        population: 5825,
        zipcode: [2691]
      },
      {
        name: "Cincinnati Ohio",
        location: [39.1031, 84.5120],
        population: 301394,
        zipcode: [45243,44118,43229,45242,45213]
      },
      {
        name: "Los Angeles",
        location: [34.0522, 118.2437],
        population: 39538223,
        zipcode: [90026,94133,91206,90026,16803,90036,10016,94133,]
      },
      {
        name: "China",
        location: [35.8617, 104.1954],
        population: 1445281898,
        zipcode: [10027,411101,300151,200065,200000,10027,11572,471001]
      },
      {
        name: "Spain",
        location: [40.4637, 3.7492],
        population: 46774154,
        zipcode: [6700,28035]
      },
      {
        name: "Israel",
        location: [31.0461, 34.8516],
        population:  8800278,
        zipcode: [22442,62150,92425]
      },
      {
        name: "Switzerland",
        location: [46.8182, 8.2275],
        population:  8722252,
        zipcode: [10012]
      },
      {
        name: "Italy",
        location: [41.8719, 12.5674],
        population: 60366432,
        zipcode: [26900,100,80131,9012,80136,20129,16146,136]
      },
      {
        name: "Philadephia",
        location: [39.9526, 75.1652],
        population:  1585010,
        zipcode: [19422,19151,33511,10019]
      },
      {
        name: "Brooklyn",
        location: [40.6782, 73.9442],
        population: 2589970,
        zipcode: [11204,11215,11214,11234,11212,27701,11235]
      },
      {
        name: "Florida",
        location: [27.6648, 81.5158],
        population: 21837568,
        zipcode: [33496,33414,33021,33418,32780,33418]
      },
      {
        name: "California",
        location: [36.7783, 119.4179],
        population: 39466917,
        zipcode: [91360,92821,2467,94596,94596,91730,94306,48895,92064,
                   92683,11104,92833]
      },
      {
        name: "Albuquerque NM ",
        location: [35.0844, 106.6504],
        population: 929000,
        zipcode: [87004]
      },
      {
        name: "Mexico",
        location: [19.4326, 99.1332],
        population: 130262216,
        zipcode: [11000,11910,78666,]
      },
      {
        name: "New Mexico",
        location: [34.5199, 105.8701],
        population: 2119428,
        zipcode: [87110]
      },
      {
        name: "St.Louis MO",
        location: [38.6270, 90.1994],
        population: 2216000,
        zipcode: [63034]
      },
      {
        name: "London UK",
        location: [51.5074, 0.1278],
        population: 9425622,
        zipcode: [77077,11570]
      },
      {
        name: "Minnesota",
        location: [46.7296, 94.6859],
        population:  5709752,
        zipcode: [55446,55424]
      },
      {
        name: "Phillippines",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Spain",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Panama",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "India",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Arizona",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Argentina",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Canada",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Colorado",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Hong kong",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Milwaukee WI",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Memphis TN",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Louisiana",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Maryland",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "France",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Staten Island",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Massachusetts",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Taiwan",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Virginia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Indiana",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Montana",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Oregon",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Seattle",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Lexington MA",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Chile",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Japan",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Northern Virginia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Taiwan",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Siberia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "New Hope PA",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Russia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Budapest",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Nepal",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Atlanta",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Bronx Science",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Nashville TN",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Australia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Costa Rica",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "UK/Turkey",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "South Korea",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Yugoslavia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "San Fransisco Bay Area",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Hawaii",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Korea",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Woburn MA",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Greece/Germany",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Baltimore",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Burlington Vermont",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Detroit Subrubs",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Santa Barbara CA",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Belgium",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Romania",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Kansas City Missouri",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Romania",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Salt Lake City",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Bangladesh",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Iran",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Persia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Indonesia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Genova",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Persia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Persia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Persia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Persia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      {
        name: "Persia",
        location: [41.325,73.4738],
        population: 446599,
        zipcode: [10523]
      },
      
    ];
  
  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < cities.length; i++) {
    L.circleMarker(cities[i].location, {
      fillOpacity: 0.75,
      color: "Red",
      fillColor: "yellow",
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      radius: markerSize(cities[i].population)
    }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>population: " + cities[i].population + "<br>zipcode: " + cities[i].zipcode +" </h3>").addTo(myMap);
  }
  