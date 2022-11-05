//show the map
L.mapbox.accessToken ="pk.eyJ1IjoiY2F0aGVyaW5lbGlpaWlpIiwiYSI6ImNsYTMzZGtsbDBuOWIzbm1vY3RveWRtNDYifQ.hbr58j4aPCWcEk_-a80fEQ";
var map = L.mapbox
.map("map")
.setView([60.192059, 24.945831], 6)
.addLayer(L.mapbox.styleLayer("mapbox://styles/catherineliiiii/cla3o8rmi000214l74oo3zint"));
