//show the map
mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGVyaW5lbGlpaWlpIiwiYSI6ImNsYTMzZGtsbDBuOWIzbm1vY3RveWRtNDYifQ.hbr58j4aPCWcEk_-a80fEQ';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/catherineliiiii/cla3o8rmi000214l74oo3zint',
center: [24.945831,60.192059],
zoom: 6
});
 
// Add the control to the map.
map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);

