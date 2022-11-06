<script setup>
import MiniMap from "./MiniMap.vue";
import get_environment from "../environment.js";
defineProps({
  query_result: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div>
    <div v-for="group in query_result" :key="group.departure_city_name">
      <h5>{{ group.departure_city_name }}</h5>
      <table class="table table-hover table-sm text-center text-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Departure City</th>
            <th scope="col">Arrival City</th>
            <th scope="col">Weight</th>
            <th scope="col">Volume</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in group.items" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.date }}</td>
            <!--<td>{{ row.city.name }}</td>-->
            <td>
              <p>{{ row.departure_city.full_info }}</p>
              <ul>
                <li>{{ row.departure_city.name }}</li>
                <li>
                  [{{ row.departure_city.latitude }},
                  {{ row.departure_city.longitude }}]
                </li>
                <li>{{ row.departure_city.post_code }}</li>
              </ul>
            </td>
            <td>
              <p>{{ row.arrival_city.full_info }}</p>
              <ul>
                <li>{{ row.arrival_city.name }}</li>
                <li>
                  [{{ row.arrival_city.latitude }},
                  {{ row.arrival_city.longitude }}]
                </li>
                <li>{{ row.arrival_city.post_code }}</li>
              </ul>
            </td>
            <td>{{ row.pre_calc_weight }} kg</td>
            <td>{{ row.pre_calc_volume }} m<sup>3</sup></td>
            <td>{{ row.pre_calc_price }} €</td>
            <!-- <td class="last-tr">
                  <MiniMap :map_data="row" />
                </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- <style scoped>
.last-tr {
  width: 200px;
}
</style> -->
