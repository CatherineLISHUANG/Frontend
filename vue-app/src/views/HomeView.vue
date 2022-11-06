<script setup>
import HomeSum from "../components/HomeSum.vue";
import get_environment from "../environment.js";
</script>

<script>
export default {
  name: "freight-info",
  components: {
    HomeSum,
  },
  data() {
    this.explore_options();
    return {
      error_feedback: "",
      query_result_info: [],
    };
  },
  methods: {
    async explore_options() {
      const backend_url = get_environment().backend_url;
      const url = `${backend_url}/api/v1/grouped`;
      const data = await this._get_request(url);
      this.query_result_info = data.map((d) => {
        return d;
      });
    },
    async _get_request(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        this.error_feedback = "Failed to get the data.";
        return [];
      }
    },
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2F0aGVyaW5lbGlpaWlpIiwiYSI6ImNsYTMzZGtsbDBuOWIzbm1vY3RveWRtNDYifQ.hbr58j4aPCWcEk_-a80fEQ";
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/catherineliiiii/cla3qmm8200fl14nxi500yc65",
      center: [25.57, 62.25],
      zoom: 5,
    });

    const distanceContainer = document.getElementById("distance");

    // GeoJSON object to hold our measurement features
    const geojson = {
      type: "FeatureCollection",
      features: [],
    };

    // Used to draw a line between points
    const linestring = {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [],
      },
    };

    map.on("load", () => {
      map.addSource("geojson", {
        type: "geojson",
        data: geojson,
      });

      // Add styles to the map
      map.addLayer({
        id: "measure-points",
        type: "circle",
        source: "geojson",
        paint: {
          "circle-radius": 5,
          "circle-color": "#000",
        },
        filter: ["in", "$type", "Point"],
      });
      map.addLayer({
        id: "measure-lines",
        type: "line",
        source: "geojson",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#000",
          "line-width": 2.5,
        },
        filter: ["in", "$type", "LineString"],
      });

      map.on("click", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["measure-points"],
        });

        // Remove the linestring from the group
        // so we can redraw it based on the points collection.
        if (geojson.features.length > 1) geojson.features.pop();

        // Clear the distance container to populate it with a new value.
        distanceContainer.innerHTML = "";

        // If a feature was clicked, remove it from the map.
        if (features.length) {
          const id = features[0].properties.id;
          geojson.features = geojson.features.filter(
            (point) => point.properties.id !== id
          );
        } else {
          const point = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [e.lngLat.lng, e.lngLat.lat],
            },
            properties: {
              id: String(new Date().getTime()),
            },
          };

          geojson.features.push(point);
        }

        if (geojson.features.length > 1) {
          linestring.geometry.coordinates = geojson.features.map(
            (point) => point.geometry.coordinates
          );

          geojson.features.push(linestring);

          // Populate the distanceContainer with total distance
          const value = document.createElement("pre");
          const distance = turf.length(linestring);
          value.textContent = `Total distance: ${distance.toLocaleString()}km`;
          distanceContainer.appendChild(value);
        }

        map.getSource("geojson").setData(geojson);
      });
    });

    map.on("mousemove", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["measure-points"],
      });
      // Change the cursor to a pointer when hovering over a point on the map.
      // Otherwise cursor is a crosshair.
      map.getCanvas().style.cursor = features.length ? "pointer" : "crosshair";
    });

    // Add the control to the map.
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: {
          color: "green",
        },
        mapboxgl: mapboxgl,
      })
    );
  },
};
</script>
<template>
  <main class="container mt-5" role="main">
    <!--Map-->
    <div class="row">
      <div class="col-12" id="map"></div>
      <div id="distance" class="distance-container"></div>
    </div>
    <br /><br />
    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-4">
        <h2>
          Sustainable
          <img
            src="@/assets/images/planet-earth.png"
            alt="Icon1"
            width="35"
            height="35"
            class="d-inline-block align-text-top"
          />
        </h2>
        <p class="d-flex justify-content-center">
          <list>
            <li>
              Make the best of a freight volume. Share the space, Save the
              world.
            </li>
            <li>A new way of estimate freight cost.</li>
            <li>
              Recycling materials. Announce the unused materials here. Send to
              someone who can utilize it.
            </li>
          </list>
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-4">
        <h2>
          Transparent
          <img
            src="@/assets/images/transparency.png"
            alt="Icon2"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
        </h2>
        <p class="d-flex justify-content-center">
          <list>
            <li>One-stop inqury. All the data you want is here.</li>
            <li>A place to compare products in different companies.</li>
            <li>Everyting updated in real-time.</li>
            <br />
          </list>
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-4">
        <h2>
          Efficient
          <img
            src="@/assets/images/clock.png"
            alt="Icon3"
            width="35"
            height="35"
            class="d-inline-block align-text-top"
          />
        </h2>
        <p class="d-flex justify-content-center">
          <list>
            <li>
              Make computer do the fussy, error-prone, form filling job. Free
              your brain from the hassle.
            </li>
            <li>
              Take forever to get email from your suppiler/client? Let Instant
              Chat boost your work efficiency.
            </li>
          </list>
        </p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row --><br /><br />
    <div class="table-wrapper-scroll-y my-custom-scrollbar col-12">
      <HomeSum :query_result="query_result_info" />
    </div>
  </main>
</template>
