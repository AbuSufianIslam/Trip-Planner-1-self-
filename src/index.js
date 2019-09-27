//console.log('Hello from JavaScript');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWJ1c3VmaWFuaXNsYW0iLCJhIjoiY2swenN4YWlnMHM5ajNsbzV2NHEyM3FncSJ9.wKxlavfgHkP0fPU5tHJThA';

const map = new mapboxgl.Map({
	container: 'map',
	center: [ -74.009, 40.705 ], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});
