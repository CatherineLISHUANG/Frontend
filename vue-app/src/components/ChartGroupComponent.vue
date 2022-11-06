
<script setup>
defineProps({
    chartData: {
    type: Array,
    required: true,
  },
});

</script>
<script>
import ChartComponent from './ChartComponent.vue';


export default {
  name: 'App',
  components: { ChartComponent },
}
</script>

<template>
    <div>
        <h1 class="title">Charts</h1>
        <div class="row mb-4">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12" v-for="d in chartData" :key="d.name">
                <div class="chart m-2">
                    <ChartComponent :chartData="d" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
}
.chart {
    border: 1px solid #d4d4d4;
    padding: 10px 15px;
}
</style>
