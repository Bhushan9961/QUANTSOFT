<template>
    <section class="wrapper angled upper-end">
      <div class="container">
        <div class="row gx-lg-8 gy-8 align-items-center">
          <div class="col-lg-12 py-10">
            <h2 class="fs-16 text-uppercase text-muted text-center" data-aos="fade-left">
               here are some of our
            </h2>
            <h3 class="display-5 mb-10 text-center" data-aos="fade-left">
                Commercial <span class="underline-3 style-2 yellow">
                  Projects</span
              >
            </h3>
  
           
  
            <div class="row " data-aos="fade-up">
              <div
                class="col-md-4 mb-4"
                v-for="(imagedetail, index) in imagedetails"
                :key="index"
              >
                <div class="card custom-card">
                  <div class="image-container">
                    <img
                    :src="imagedetail.img"
                    class="card-img-top p-2 rounded image"
                    alt="Project Image"
                    @click="openLightbox(index)"
                  />
                  </div>
                 
                  <div class="titlediv pn">
                    <h4 class="card-title m-0 ms-2">{{ imagedetail.title }}</h4>
                    <p class=" text-disable m-0 ms-2">{{ imagedetail.subtitle }}</p>
                  </div>
                  <div class="mt-2">
                    <p class="ms-2 fs-16 m-0"><strong>Client:</strong> {{ imagedetail.client }}</p>
                    <p class="ms-2 fs-16 m-0"><strong>Storeys:</strong> {{ imagedetail.Storeys }}</p>
                    <p class="ms-2 fs-16 m-0"><strong>Area:</strong> {{ imagedetail.Area }}</p>
                  </div>
                   
    
                 
                </div>
              </div>
            </div>

            
            <vue-easy-lightbox
              :visible="lightboxVisible"
              :imgs="imagedetails.map(detail => detail.img)"
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
  import Ahuja from '../assets/new-img/Ahuja.jpg'
  import Mantri from '../assets/new-img/mantri.jpg'
  import IDBU from '../assets/new-img/indiabullsfinancecenter.jpg'
  import megamalljdpr from '../assets/new-img/megamalljodpur.jpeg'
  import megamallkta from '../assets/new-img/megamallkota.jpg'
  import ongc from '../assets/new-img/ongcglobalkolkatta.jpeg'
  import supreme from '../assets/new-img/supremeparkmumbai.png'
  import ambernath from '../assets/new-img/img8.jpg'
  import bihar from '../assets/new-img/img9.jpg'
  import daund from '../assets/new-img/Daundsugar.jpg'


  export default {
    name: "healing",
    components: {
      VueEasyLightbox
    },
    
    data() {
      return {
  
        imagedetails: [
          {
            img: Ahuja,
            title: "Ahuja",
            subtitle: "Worli, Mumbai",
            client: "Larsen & Tourbo",
            Storeys: "G+53",
            Area: "7,50,000 SFT",
          },
          {
            img: Mantri,
            title: "Buisness@Mantri",
            subtitle: "Pune",
            client: "Mantri",
            Storeys: "B+ 5",
            Area: " 5,50,000 SFT",
          },
  
          {
            img: IDBU,
            title: "Indiabulls Finance Center",
            subtitle: "Lower Parel, Mumbai",
            client: "Indiabulls Real Estate Pvt. Ltd.",
            Storeys: "2B+G+ 31",
            Area: "20,00,000 SFT",
          },
  
          {
            img:megamalljdpr ,
            title: "Mega Mall",
            subtitle: "Jodhpur",
            client: "Indiabulls Real Estate Pvt. Ltd.",
            Storeys: "G+ 7",
            Area: " 9,00,000 SFT",
          },
          {
            img: megamallkta,
            title: "Mega Mall",
            subtitle: "KOTA",
            client: "Indiabulls Real Estate Pvt. Ltd",
            Storeys: "G+7",
            Area: " 3,66,000 SFT",
          },
          {
            img: ongc,
            title: "ONGC Global",
            subtitle: "Kolkata, India.",
            client: "Shapoorji Pallonji Co. Ltd.",
            Storeys: " B + GF + 20 Floors",
            Area: "670,000 SFT",
          },
          {
            img: supreme,
            title: "Supreme Business Park",
            subtitle: "Mumbai, India.",
            client: "Across Beyond Development conslt",
            Storeys: "4 Stilt + 1 podium + 12",
            Area: "1,200,000 SFT",
          },
          {
            img: ambernath,
            title: "Emerson Network Pvt. Ltd.",
            subtitle: "Ambernath, Mumbai",
            client: " Larsen & Tourbo",
            Storeys: "G+1",
            Area: "5,00,000 SFT",
          },
          {
            img: bihar,
            title: "Bihar Museum",
            subtitle: "Patna, India.",
            client: "Shapoorji Pallonji Co. Ltd.",
            Storeys: "N/A",
            Area: "350,000 SFT",
          },
          {
            img:daund ,
            title: "Daund Sugar Ltd",
            subtitle: "Daund, India.",
            client: "Daund Sugar Ltd.",
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
  