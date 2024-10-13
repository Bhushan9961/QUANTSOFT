
<template>
    <section class="wrapper angled upper-end">
      <div class="container">
        <div class="row gx-lg-8 gy-8 align-items-center">
          <div class="col-lg-12 py-10">

            <h2 class="fs-16 text-uppercase text-muted text-center" data-aos="fade-left">
                here are some of our
             </h2>
             <h3 class="display-5 mb-10 text-center" data-aos="fade-left">
                  <span class="underline-3 style-2 yellow">
                  International  Projects</span
               >
             </h3>
             <div class="row " data-aos="fade-up">
                <div
                  class="col-md-4 mb-4"
                  v-for="(imagedetail, index) in imagedetails2"
                  :key="index"
                >
                  <div class="card custom-card">
                    <div class="image-container">
                      <img
                        :src="imagedetail.img"
                        class="card-img-top img-fluid p-2"
                        alt="Project Image"
                        @click="openLightbox(index)"
                      />
                    </div>
                    <div class="titlediv pb-2">
                      <h3 class="card-title m-0 ms-2">{{ imagedetail.title }}</h3>
                      <p class=" text-disable m-0 ms-2">{{ imagedetail.subtitle }}</p>
                    </div>
                   <div class="mt-2"> 
                    <p class="ms-2 m-0 fs-16"><strong>Client:</strong> {{ imagedetail.client }}</p> 
                    <p class="ms-2 m-0 fs-16"><strong>Storeys:</strong> {{ imagedetail.Storeys }}</p> 
                    <p class="ms-2 m-0 fs-16"><strong>Area:</strong> {{ imagedetail.Area }}</p>
  
                   </div>
                    
                  </div>
                </div>
              </div>
            <vue-easy-lightbox
              :visible="lightboxVisible"
              :imgs="imagedetails2.map(detail => detail.img)"
              :index="currentImageIndex"
              @hide="lightboxVisible = false"
  
            />
  
  
          </div>
        </div>
      </div>
      <!-- /.container -->
    </section>
  </template>
  
  <script>
  import AOS from "aos";
  import VueEasyLightbox from "vue-easy-lightbox";
  import doha from '../assets/new-img/doha.gif'
  import szr from '../assets/new-img/szr.jpg'
  import ibn from '../assets/new-img/IBNmall.jpg'
  import max from '../assets/new-img/maxburgers.jpg'

  export default {
    name: "healing",
    components: {
      VueEasyLightbox
    },
    
    data() {
      return {
        imagedetails2:[
           
          {
            img: doha,
            title: "Mixed-Use Development",
            subtitle: "Msheireb Downtown Doha (Ph-1B), QATAR",
            client: "ETA Star Engg. & Contracting Co. LLC.",
            Storeys: "N/A",
            Area: "4,000,000 SFT",
          },    
          
          {
            img: szr,
            title: "Nando's – SZR",
            subtitle: "Abudhabi, Doha, Bharain, Dubai",
            client: "Keane Brands",
            Storeys: "N/A",
            Area: "3500 SFT",
          },
          {
            img: ibn,
            title: "IBN BUTUTA MALL",
            subtitle: "Abudhabi, Doha, Bharain, Dubai",
            client: " Keane Brands",
            Storeys: "N/A",
            Area: "3000 SFT",
          },
          {
            img: max,
            title: "Max’s Burgers",
            subtitle: "Abudhabi, Doha, Bharain, Dubai",
            client: " Keane Brands",
            Storeys: "N/A",
            Area: "N/A",
          },
          
        ],
        lightboxVisible: false,
        currentImageIndex: 0,
      };
    },
    methods: {
      openLightbox(index) {
        this.currentImageIndex = index;
        this.lightboxVisible = true;
      },
    },
    mounted() {
      AOS.refresh();
    },
  };
  </script>
  <style scoped>
  .titlediv{
    border-bottom: 1px solid #ccc;   
  }
  .image {
    cursor: pointer;    
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 75%;
  }
  
  .card-img-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  
</style>
  