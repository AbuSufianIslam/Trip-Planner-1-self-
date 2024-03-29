//console.log('Hello from JavaScript');
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

console.log('fgfdgf', buildMarker);

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWJ1c3VmaWFuaXNsYW0iLCJhIjoiY2swenN4YWlnMHM5ajNsbzV2NHEyM3FncSJ9.wKxlavfgHkP0fPU5tHJThA';

const fullstackCoords = [ -74.009, 40.705 ]; // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
	container: 'map',
	center: fullstackCoords, // FullStack coordinates
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', fullstackCoords);
marker.addTo(map);
