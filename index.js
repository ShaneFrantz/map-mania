var gMap;
var markers = [];
var gameWon = false;
var currentLocationIndex = 0;

var conventionLocations = [
    { name: '2013 Convention', lat: 43.6532, lng: -79.3832 },
    { name: '2014 Convention', lat: 36.1716, lng: -115.1391 },
    { name: '2015 Convention', lat: 40.4406, lng: -79.9959 },
    { name: '2016 Convention', lat: 36.1627, lng: -86.7816 },
    { name: '2018 Convention', lat: 28.5384, lng: -81.3789 },
    { name: '2019 Convention', lat: 40.7608, lng: -111.8910 },
    { name: '2022 Convention', lat: 35.2271, lng: -80.8431 },
    { name: '2023 Convention', lat: 38.2527, lng: -85.7585 }
];

var playerScore = 0;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: { lat: 37.0902, lng: -95.7129 },
        zoom: 4
    });

    document.getElementById('topText').textContent = 'Start looking for ' + conventionLocations[0].name + '!';

    conventionLocations.forEach(function (location, index) {
        var marker = new google.maps.Marker({ position: { lat: location.lat, lng: location.lng }, map: gMap, visible: false });
        markers.push(marker);
    });

    google.maps.event.addListener(gMap, 'idle', function () {
        var zoomLevel = gMap.getZoom();

        if (!gameWon && zoomLevel >= 8) {
            if (currentLocationIndex < conventionLocations.length && gMap.getBounds().contains({ lat: conventionLocations[currentLocationIndex].lat, lng: conventionLocations[currentLocationIndex].lng })) {
                var marker = markers[currentLocationIndex];
                playerScore++;
                console.log(playerScore);
                marker.setVisible(true);
                gMap.setCenter({ lat: 37.0902, lng: -95.7129 });
                gMap.setZoom(4);
                currentLocationIndex++;
                if (playerScore === conventionLocations.length) {
                    gameWon = true;
                    alert('Congratulations! You found all convention locations. You win!');
                    document.getElementById('topText').textContent = 'Congraulations! All Locations Found!';
                    document.getElementById('scoreText').style.display = 'none';
                } else {
                    document.getElementById('topText').textContent = 'Location found! Now look for ' + conventionLocations[playerScore].name + '!';
                    document.getElementById('scoreText').textContent = 'Score: ' + playerScore;
                }
            }
        }
    });
}

function initApplication() {
    console.log('Map Mania - Starting!')
    showInstructions()
}

//Hint Stuff

function showHint() {
    if (currentLocationIndex < conventionLocations.length) {
        var currentHint = getHint(conventionLocations[currentLocationIndex].name);
        alert(currentHint);
    }
}

//Displays champion quartet from the respective year

function getHint(locationName) {
    switch (locationName) {
        case '2013 Convention':
            return 'Hint: Masterpiece';
        case '2014 Convention':
            return 'Hint: Musical Island Boys';
        case '2015 Convention':
            return 'Hint: Instant Classic';
        case '2016 Convention':
            return 'Hint: Forefront';
        case '2018 Convention':
            return 'Hint: After Hours';
        case '2019 Convention':
            return 'Hint: Signature';
        case '2022 Convention':
            return 'Hint: Quorum';
        case '2023 Convention':
            return 'Hint: Midtown';
        default:
            return 'No hint available';
    }
}

// Instructions Window

function showInstructions() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

function closeInstructions() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}