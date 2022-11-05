<template>
  <div class="container">
    <h3>Pending orders</h3>

    <br /><br />
    <h3>Past purchases</h3>
    <div class="row">
      <table class="table table-hover table-striped">
        <thead class="thead-light">
          <tr>
            <th scope="col">Invoice No.</th>
            <th scope="col">Content summary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>Lorem Ipsum</td>
            <td>
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
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseProduct1"
                  aria-expanded="false"
                  aria-controls="collapseProduct1"
                >
                  Details
                </a>
                <a class="dropdown-item" href="#">Delete</a>
              </div>
            </td>
          </tr>
          <tr class="collapse" id="collapseProduct1">
            <td>Product list</td>
          </tr>
          <tr>
            <td>654312</td>
            <td>Lorem Ipsum</td>
            <td>
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
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseProduct2"
                  aria-expanded="false"
                  aria-controls="collapseProduct2"
                >
                  Details
                </a>
                <a class="dropdown-item" href="#">Delete</a>
              </div>
            </td>
          </tr>
          <tr class="collapse" id="collapseProduct2">
            <td>Products list</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
