<script>
export default {
  mounted() {
    console.log("fofofofofofofoo");
  },
  methods: {
    myFunction() {
      console.log("fidsjfosijfiosjfoisdjiof");
    },
  },
};
</script>

<template>
  <table class="table table-hover table-striped">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Order No.</th>
        <th scope="col">Weight (tonna)</th>
        <th scope="col">Volume (...)</th>
        <th scope="col">Freight Info</th>
        <th scope="col">Confirmation</th>
      </tr>
    </thead>
    <tbody>
      <tr
      data-toggle="collapse"
      href="#collapse1"
      role="button"
      aria-expanded="false"
      aria-controls="collapse1"
      >
        <th
          scope="row"
          data-toggle="collapse"
          href="#collapse1"
          role="button"
          aria-expanded="false"
          aria-controls="collapse1"
        >
          1
        </th>
        <td>123456</td>
        <td>xx</td>
        <td>xxxxx</td>
        <td>=======---- / some%</td>
        <td>
          <button
            type="button"
            @click="myFunction"
            class="btn btn-outline-primary"
          >
            Accept
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Edit
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </td>
      </tr>
      <tr class="collapse" id="collapse1">
        <td colspan="2">Flight No.: ...</td>
        <td colspan="2">Departure: ...</td>
        <td colspan="1">Arrival: ...</td>
        <td colspan="1">Date: ...</td>
      </tr>

      <tr>
        <th scope="row">2</th>
        <td>456123</td>
        <td>xx</td>
        <td>xxxxx</td>
        <td>======----- %</td>
        <td>
          <button type="button" class="btn btn-outline-primary">Yes</button>
          <button type="button" class="btn btn-outline-danger">No</button>
        </td>
      </tr>
      <tr class="collapse" id="collapse2">
        <td colspan="2">Flight No.: ...</td>
        <td colspan="2">Departure: ...</td>
        <td colspan="1">Arrival: ...</td>
        <td colspan="1">Date: ...</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>312789</td>
        <td>xx</td>
        <td>xxxxxx</td>
        <td>======- almost full warning</td>

        <td>
          <button type="button" class="btn btn-outline-primary">Yes</button>
          <button type="button" class="btn btn-outline-danger">No</button>
        </td>
      </tr>
      <tr class="collapse" id="collapseExample">
        <td colspan="2">Flight No.: ...</td>
        <td colspan="2">Departure: ...</td>
        <td colspan="1">Arrival: ...</td>
        <td colspan="1">Date: ...</td>
      </tr>
    </tbody>
  </table>
</template>
