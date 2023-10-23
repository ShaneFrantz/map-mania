// Notes relating to differences from other tutorials:
// 1 - Renamed "Map, Map, Map" to "myMapID, gMap, map"

var gMap;

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3})

    // Add marker for Spectrum Center
    var marker = new google.maps.Marker({position:{lat:35.2252,lng:-80.8393}, map:gMap})
    // Add marker for KFC Yum Center
    var marker2 = new google.maps.Marker({position:{lat:38.2578,lng:-85.7539}, map:gMap})

    console.log(location.lat)
    console.log(location.lng)

    var infoWindow = new google.maps.InfoWindow({content:'2022 BHS International Convention'})
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker)
    })

    var infoWindow2 = new google.maps.InfoWindow({content:'2023 BHS International Convention'})
    marker2.addListener('click', function() {
        infoWindow2.open(gMap, marker2)
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
    console.log(zoomLevel)
    var inBounds = false

    // Check if location is on the map
    if (gMap.getBounds().contains({lat:38.2578,lng:-85.7539})) {
        inBounds = true
    }
    console.log(inBounds)
}

function initApplication() {
    console.log('Map Mania Lite - Starting!')
}