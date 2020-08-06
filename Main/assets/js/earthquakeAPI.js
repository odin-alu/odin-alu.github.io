var map;

var quakeFeeds = {
    "past hour": {
        "all earthquakes": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
        "1.0+ Magnitude": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson",
        "2.5+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson",
        "4.5+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson",
        "all significant": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_hour.geojson"
    },
    "past day": {
        "all earthquakes": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
        "1.0+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson",
        "2.5+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
        "4.0+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",
        "all significant": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson"
    },
    "past week": {
        "all earthquakes": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
        "1.0+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson",
        "2.5+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
        "4.0+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
        "all significant": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
    },
    "past month": {
        "all earthquakes": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
        "1.0+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson",
        "2.5+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",
        "4.0+ Magnitude": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson",
        "all significant": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
    }
};

/* Build buttons with class feed-name with speciafied URL */
function makeChildProps(obj, currentProp) {
    var childProps = '';

    for (var prop in obj[currentProp]) {
        var el = "<div class='child-prop'><button class='feed-name' data-feedurl='" + obj[currentProp][prop] + "'>" + prop + "</button></div>";
        childProps += el;
    }

    return childProps;
}

    for (var prop in quakeFeeds) {
    if (!quakeFeeds.hasOwnProperty(prop)) {
        continue;
    }
    $('#feedSelector').append("<div class='feed-date'>" + prop + "</div>" + makeChildProps(quakeFeeds, prop));
    console.log(makeChildProps(quakeFeeds, prop));
}
/* Function for actions after pressing feed-name button */
$('.feed-name').click(function (e) {
    // Find earthquake type associated with the button pressed.
    $.ajax({
        url: $(e.target).data('feedurl'), // Fetch URL

        success: function (data) {  // Get data
        // Store earhquake data in an array
            var places = []; 
            $.each(data.features, function (_key, val) { 
                places.push(val.properties.place); 
            });
            buildMap($(e.target).data('feedurl'))
        }
    });
});

function buildMap(url, places) {
    // Set Google map  to its start state
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
        mapTypeId: 'satellite' // can be any valid type
    });
    // The following uses JQuery library
    $.ajax({
        // The URL of the specific data required
        url: url,

        // Called if there is a problem loading the data
        error: function () {
            $('#info').html('<p>An error has occurred</p>');
        },
        // Called when the data has succesfully loaded
        success: function (data) {
            i = 0;
            var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
            $.each(data.features, function (key, val) {
                // Get the content for the Info Window and the lat and lng data for use in the markers
                var infoContent = val.properties.title;
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                // Create marker on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map
                });

                // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                var infowindow = new google.maps.InfoWindow({
                    content: infoContent
                });
                marker.addListener('click', function () {
         
                    infowindow.open(map, marker);
                });
                markers[i++] = marker; // Add the marker to array to be used by clusterer
            });
            var markerCluster = new MarkerClusterer(map, markers,
                { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        }
    });
}

$(document).ready(function () {
        buildMap("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson");
});
