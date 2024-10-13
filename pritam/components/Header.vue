<template>
  <header
    class="shadow-lg sticky-xl-top z-index-9"
    style="background-image: linear-gradient(-225deg, #bbdcef 0%, #ced5d9 100%)"
  >
    <nav
      ref="navbar"
      class="navbar navbar-expand-lg center-nav transparent navbar-light py-lg-0"
    >
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand py-0">
          <NuxtLink to="/">
            <img src="../assets/new-img/logo.png" style="width: 200px" alt="Quantsoft" />
          </NuxtLink>
        </div>
        <div
          class="navbar-collapse collapse offcanvas offcanvas-nav offcanvas-start z-index-9"
          :class="{ hide: isHidden, show: !isHidden }"
        >
          <div class="offcanvas-header d-lg-none" style="padding-top: 0">
            <NuxtLink to="/">
              <img
                src="../assets/new-img/logo.png"
                style="width: 100px"
                alt="quantsoft"
              />
            </NuxtLink>
            <i class="uil uil-multiply fs-24" @click="toggleNav"></i>
          </div>
          <div
            class="offcanvas-body ms-lg-auto d-flex flex-column z-index-9 position-relative"
          >
            <div class="offcanvas-footer d-lg-none">
              <div>
                <ul class="navbar-nav pb-5 mb-5">
                  <li class="nav-item dropdown dropdown-mega d-md-none d-block">
                    <NuxtLink to="/" class="nav-link fs-14" @click="toggleNav">
                      Home</NuxtLink
                    >
                  </li>
                  <li class="nav-item dropdown dropdown-mega d-md-none d-block">
                    <NuxtLink to="/about" class="nav-link fs-14" @click="toggleNav">
                      About Us</NuxtLink
                    >
                  </li>
                  <li class="nav-item dropdown d-md-none d-block">
                    <a
                      class="nav-link dropdown-toggle fs-14"
                      href="#"
                      data-bs-toggle="dropdown"
                      :class="
                        $route.name == 'Residentialprojects' || $route.name == 'learn-healing'
                          ? 'active'
                          : ''
                      "
                      >Projects</a
                    >
                    <div class="dropdown-menu dropdown-lg" style="min-width: auto">
                      <div class="dropdown-lg-content">
                        <div>
                          <ul class="list-unstyled">
                            <li>
                              <NuxtLink
                                to="/Residentialprojects"
                                class="nav-link fs-14 dropdown-item"
                                @click="toggleNav"
                              >
                               Residential Projects</NuxtLink
                              >
                            </li>
                            <hr class="mt-1 mb-0" />
                            <li>
                              <NuxtLink
                                to="/commercialprojects"
                                class="nav-link fs-14 dropdown-item"
                                @click="toggleNav"
                              >
                                Coomercial projects</NuxtLink
                              >
                            </li>
                            <hr class="mt-1 mb-0" />
                            <li>
                              <NuxtLink
                                to="/internationalprojects"
                                class="nav-link fs-14 dropdown-item"
                                @click="toggleNav"
                              >
                                International projects</NuxtLink
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown d-md-none d-block">
                    <a
                      class="nav-link dropdown-toggle fs-14"
                      href="#"
                      data-bs-toggle="dropdown"
                      :class="$route.name == 'services' ? 'active' : ''"
                      >Services</a
                    >
                    <div class="dropdown-menu dropdown-lg" style="min-width: auto">
                      <div class="dropdown-lg-content">
                        <div>
                          <ul class="list-unstyled">
                            <li>
                              <NuxtLink
                                to="/services"
                                class="nav-link fs-14 dropdown-item"
                                @click="toggleNav"
                              >
                              Quantity Surveying</NuxtLink
                              >
                            </li>
                            <hr class="mt-1 mb-0" />
                            <li>
                              <NuxtLink
                                to="/projectmanagement"
                                class="nav-link fs-14 dropdown-item"
                                @click="toggleNav"
                                >Project Management Consultancy</NuxtLink
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-mega d-md-none d-block">
                    <NuxtLink to="/careers" class="nav-link fs-14" @click="toggleNav">
                      careers</NuxtLink
                    >
                  </li>
 
                  <li class="nav-item dropdown dropdown-mega d-md-none d-block">
                    <NuxtLink to="/contactus" class="nav-link fs-14" @click="toggleNav">
                      Contact Us</NuxtLink
                    >
                  </li>
                </ul>
                <a href="mailto:info@quantsoftindia.com" class="link-inverse fs-14"
                  >info@quantsoftindia.com</a
                >
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-other w-100 d-flex ms-auto">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">
              <NuxtLink
                to="/"
                class="nav-link fs-14"
                :class="$route.name == 'index' ? 'active' : ''"
              >
                Home</NuxtLink
              >
            </li>
            <li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">
              <NuxtLink
                to="/about"
                class="nav-link fs-14"
                :class="$route.name == 'about' ? 'active' : ''"
                @click="toggleNav"
              >
                About Us</NuxtLink
              >
            </li>
            <li class="nav-item dropdown d-md-block d-none p-3">
              <a
                class="nav-link dropdown-toggle fs-14"
                href="#"
                data-bs-toggle="dropdown"
                :class="
                  $route.name == 'projects' || $route.name == 'learn-healing'
                    ? 'active'
                    : ''
                "
                >Projects</a
              >
              <div class="dropdown-menu dropdown-lg p-3" style="min-width: auto">
                <div class="dropdown-lg-content">
                  <div>
                    <ul class="list-unstyled">
                      <li>
                        <NuxtLink
                          to="/Residentialprojects"
                          class="nav-link fs-14 dropdown-item"
                          @click="toggleNav"
                        >
                         Residential Projects</NuxtLink
                        >
                      </li>
                      <hr class="mt-1 mb-0" />
                      <li>
                        <NuxtLink
                          to="/commercialprojects"
                          class="nav-link fs-14 dropdown-item"
                          @click="toggleNav"
                          >Commercial projects</NuxtLink
                        >
                      </li>
                       <hr class="mt-1 mb-0" />
                      <li>
                        <NuxtLink
                          to="/internationalprojects"
                          class="nav-link fs-14 dropdown-item"
                          @click="toggleNav"
                          >International projects</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <!-- <li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">
                        <NuxtLink to="/projects"  class="nav-link fs-14" :class="$route.name == 'projects' ? 'active' : ''"> Our projects</NuxtLink>
                     </li> -->

            <li class="nav-item dropdown d-md-block d-none p-3">
              <a
                class="nav-link dropdown-toggle fs-14"
                href="#"
                data-bs-toggle="dropdown"
                :class="$route.name == 'services' ? 'active' : ''"
                >Services</a
              >
              <div class="dropdown-menu dropdown-lg p-3" style="min-width: auto">
                <div class="dropdown-lg-content">
                  <div>
                    <ul class="list-unstyled">
                      <li>
                        <NuxtLink
                          to="/services"
                          class="nav-link fs-14 dropdown-item"
                          @click="toggleNav"
                        >
                        Quantity Surveying</NuxtLink
                        >
                      </li>
                      <hr class="mt-1 mb-0" />
                      <li>
                        <NuxtLink
                          to="/projectmanagement"
                          class="nav-link fs-14 dropdown-item"
                          @click="toggleNav"
                          >Project Management Consultancy</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">
              <NuxtLink
                to="/careers"
                class="nav-link fs-14"
                :class="$route.name == 'Careers' ? 'active' : ''"
                @click="toggleNav"
              >
                Careers</NuxtLink
              >
            </li>
            <li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">
              <NuxtLink
                to="/contactus"
                class="nav-link fs-14"
                :class="$route.name == 'contactus' ? 'active' : ''"
                @click="toggleNav"
                >Contact Us</NuxtLink
              >
            </li>
            <li class="nav-item d-md-none p-3">
              <button class="hamburger offcanvas-nav-btn" @click="toggleNav">
                <span></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isHidden: true,
      width: "",
    };
  },

  methods: {
    toggleNav() {
      this.isHidden = !this.isHidden;
    },
  },

  computed: {
    css() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style>
header {
  position: relative;
  z-index: 1000;
  transition: top 0.3s ease;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sticky {
  animation: slideDown 0.5s ease forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.z-index-9 {
  z-index: 999;
}

.router-link-active,
.router-link-exact-active {
  color: #605dba;
}

.hide,
.show {
  transition: all 0.2s ease-in-out;
  display: block !important;
}
</style>
