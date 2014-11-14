// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(window).ready(function(){

// var map = L.map('map').setView([51.505, -0.09], 13);
// var marker = L.marker([51.5, -0.09]).addTo(map);
// var popup = L.popup();
//
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }
//
// map.on('click', onMapClick);



  window.map = L.map('map').setView([19.2944337,-99.6397071], 16);


  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  	maxZoom: 20,
  	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  	id: 'examples.map-i875mjb7'
  }).addTo(window.map);

var marker = L.marker([19.293500,-99.6397071]).addTo(map);

var popup = L.popup()
    .setLatLng([19.2944337,-99.6397071], 16)
    .setContent("<b>Hello world!</b><br>Efrain was born here, in <b>Toluca, Mexico!</b>")
    .openOn(map);


    var circle = L.circle([29.746224,-95.350293], 17, {
        color: 'blue',
        fillColor: '#2980b9',
        fillOpacity: 0.5
    }).addTo(map);
    

});
