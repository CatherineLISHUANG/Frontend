<template>
  <div class="container mt-4">
    <!-- Page title -->
    <div class="row">
      <div class="col-9">
        <h1>About</h1>
        <br /><br /><br />
      </div>
    </div>
    <!-- Tabs menu -->
    <div class="row">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <!-- About the team -->
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            The WasabiTigers Team
          </button>
        </li>
        <!-- About the website -->
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            This website
          </button>
        </li>
        <!-- Contact info -->
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact us
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <!-- Content about the team -->
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="container">
            <div class="container">
              <h5><b>Members</b></h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Jagar Enkhzaya - Team Leader, Backend, Da Wizard
                </li>
                <li class="list-group-item">Tonglin Zheng - Backend</li>
                <li class="list-group-item">Li Shuang - Frontend</li>
                <li class="list-group-item">
                  Hieu Vo - Frontend, Cheer Leader
                </li>
              </ul>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
        <!-- Content about the website -->
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="container">
            <div class="row">
              <h5><b>Punchline</b></h5>
              <div class="container">
                <p>
                  Roses are red.<br />
                  Graphs are red.<br />
                  Maps are red.<br />
                  Everything is red.<br />
                </p>
                <p>
                  Want to make it green?<br />
                  Everything should be clean.
                </p>
                <p>
                  We know that too.<br />
                  So we made a dashboard for you.
                </p>
              </div>
            </div>

            <h5><b>Problem</b></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">CO2 emissions --> Climate change.</li>
              <li class="list-group-item">
                One large contributor is the supply chain.
              </li>
            </ul>

            <h5>
              <b>Real-world impact</b>
            </h5>
            <ul class="list-group list-group-flush">
              <p>By using our web service stakeholders will:</p>
              <li class="list-group-item">
                know roughly what actions to take, make better decisions based
                on reality
              </li>
              <li class="list-group-item">
                keep track of their "ENV Score" (if it falls below a certain
                value, they will be notified through various channels)
              </li>
            </ul>

            <h5><b>Technologies</b></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">HTML, CSS, JS</li>
              <li class="list-group-item">Python</li>
            </ul>

            <h5><b>Future plans</b></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Create microservices to make the platform more scalable and
                easier to maintain
              </li>
              <li class="list-group-item">
                Use more powerful technologies for real-time data
              </li>
            </ul>

            <h5><b>Use cases</b></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">customization for stakeholder</li>
              <li class="list-group-item">Search and filter what is needed</li>
              <li class="list-group-item">creation of diagrams</li>
            </ul>

            <h5><b>User Guide</b></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Choose your role (manufacturer/ retailer/ customer/ other)
              </li>
              <li class="list-group-item">
                For manufacturer/retailer/customer: Give the product you want
                and your location -> give the range of price you want-> the
                webpage will sort the result depending on your choices. You can
                choose to sort by price or CO2 emission (from low to high or
                high to low)-> make a choice from the list of results
              </li>
              <li class="list-group-item">
                For other users: go to the page for all diagrams divided by
                different categories to get the information
              </li>
            </ul>
          </div>
        </div>
        <!-- Content about contact info -->
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="container">
            <p><b>Email:</b> wasabitigers@gmail.com</p>
            <p><b>Tel:</b> +36 123456789</p>
            <p><b>Fax:</b> 12345678912</p>
            <br />
            <p><b>Our Location:</b></p>
            <div class="google-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.7447978372334!2d18.204329615202433!3d46.076129579113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b194e3387a69%3A0x699a7e6ecc3ef90c!2zUMOpY3MsIElmasO6c8OhZyDDunRqYSA2LCA3NjI0IEh1bmdhcnk!5e0!3m2!1sen!2sde!4v1637403587565!5m2!1sen!2sde"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
