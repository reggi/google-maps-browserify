console.log('loading main');
var bromote = require('bromote');
var jquery = require("jquery");

$(document).ready(function() {
    bromote.google(function(google) {
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 11,
            center: new google.maps.LatLng(40.670287895547006, -73.9865255355835)
        });
    });
});