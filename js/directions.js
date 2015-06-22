/*    Leaflet and the map    */

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([38.9039, -77.0355], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> © <a href="http://mapbox.com">Mapbox</a>',
    detectRetina: true,
	id: 'mslee.iyrjm7vi',
    accessToken: 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg'
}).addTo(map);