console.log('loading main');
var bromote = require('bromote');
bromote.jquery(function($) {
    console.log('jquery version: ', $().jquery);
    $(document).ready(function() {
        bromote.google(function(google) {
            var map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: 11,
                center: new google.maps.LatLng(40.670287895547006, -73.9865255355835)
            });
        });
    });
});