// Notes relating to differences from other tutorials:
// 1 - Renamed "Map, Map, Map" to "myMapID, gMap, map"

var gMap;

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3})

    // Add marker for Canoe Bay, WI
    var marker = new google.maps.Marker({position:{lat:45.3306,lng:-91.4918}, map:gMap})

    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map:gMap})
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png')

    var infoWindow = new google.maps.InfoWindow({content:'Santorini, Greece'})
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2)
    })

    // Note that several message boards suggested using 'idle' instead of 'bounds_changed' because
    // 'bounds_chaged' gets called over and over when the user drags the map
    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    })
}

function updateGame() {
    console.log('function updateGame()!')
    var zoomLevel = gMap.getZoom()
    var inBounds = false

    // Check if Canoe Bay, WI is in the current displayed map
    if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})) {
        inBounds = true
    }
}

function initApplication() {
    console.log('Map Mania Lite - Starting!')
}