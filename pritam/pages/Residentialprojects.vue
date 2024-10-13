<template>
  <section class="wrapper angled upper-end">
    <div class="container">
      <div class="row gx-lg-8 gy-8 align-items-center">
        <div class="col-lg-12 py-10">
          <h2 class="fs-16 text-uppercase text-muted text-center" data-aos="fade-left">
            And here are some of our
          </h2>
          <h3 class="display-5 mb-10 text-center" data-aos="fade-left">
            prestigious<span class="underline-3 style-2 yellow">
              Residential Projects</span
            >
          </h3>

         

          <div class="row " data-aos="fade-up">
            <div
              class="col-md-4 mb-4"
              v-for="(imagedetail, index) in imagedetails"
              :key="index"
            >
              <div class="card custom-card">
                <img
                  :src="imagedetail.img"
                  class="card-img-top p-2 rounded image"
                  alt="Project Image"
                  @click="openLightbox(index)"
                  
                />
                
                <div class="titlediv pb-2">
                  <h4 class="card-title m-0 ms-2 ">{{ imagedetail.title }}</h4>
                  <p class=" text-disable m-0 ms-2 fs-16">{{ imagedetail.subtitle }}</p>                
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
import aspiria from '../assets/new-img/aspiria.jpg'
import centrum from '../assets/new-img/centrum-park.jpg'
import dlf from '../assets/new-img/dlf.jpg'
import eden from  '../assets/new-img/eden-park-2.jpg'
import enigma from '../assets/new-img/enigma.jpg'
import godrej1 from '../assets/new-img/godrej-platinium.jpg'
import indiabulls from '../assets/new-img/indiabulls-greens.jpg'
import indiabulls2 from '../assets/new-img/indiabulls-greens-panvel.jpg'
import m3m from '../assets/new-img/m3m.jpg'
import minerva from '../assets/new-img/minerva.jpg'
import sks from '../assets/new-img/planet-sks.jpg'
import regent from '../assets/new-img/regent-tower.jpg'
import selene from '../assets/new-img/selene-park.jpg'
import sie from '../assets/new-img/sierra.jpg'
import water from '../assets/new-img/water-ridge.jpg'
import wave from '../assets/new-img/wave-city.jpg'
import wind from '../assets/new-img/whistling-winds.jpg'

export default {
  name: "healing",
  components: {
    VueEasyLightbox
  },
  
  data() {
    return {

      imagedetails: [
        {
          img: aspiria,
          title: "Aspiria",
          subtitle: "Hinjewadi Pune",
          client: "Siddhivinayak",
          Storeys: "G+12",
          Area: "1,25,000 SFT",
        },
        {
          img: centrum,
          title: "Centrum Park",
          subtitle: "Gurgaon",
          client: "Indiabulls Real Estate Pvt. Ltd.",
          Storeys: " G+ 21",
          Area: "5,00,000 SFT",
        },

        {
          img: dlf,
          title: "DLF Tower",
          subtitle: "Gurgaon",
          client: "DLF Group",
          Storeys: "G+ 21",
          Area: "1,50,000 SFT",
        },

        {
          img: eden,
          title: "Eden Park-2",
          subtitle: "Chennai",
          client: "Larsen & Toubro",
          Storeys: "G+ 18",
          Area: "56,33,000 SFT",
        },
        {
          img: enigma,
          title: "Enigma Tower",
          subtitle: "Gurgaon",
          client: "Indiabulls Real Estate Pvt. Ltd",
          Storeys: "2B +G+ 17",
          Area: "2,40,000 SFT",
        },
        {
          img: godrej1,
          title: "Godrej Platinum",
          subtitle: "Bangalore",
          client: "Larsen & Toubro",
          Storeys: "G+29",
          Area: "7,80,000 SFT",
        },
        {
          img: indiabulls,
          title: "Indiabulls Greens",
          subtitle: "Chennai",
          client: "Indiabulls Real Estate Pvt. Ltd",
          Storeys: "G+21",
          Area: "10,00,000 SFT",
        },
        {
          img: indiabulls2,
          title: "Indiabulls Greens",
          subtitle: "Panvel",
          client: " Indiabulls Real Estate Pvt. Ltd",
          Storeys: "G+37",
          Area: "11,00,000 SFT",
        },
        {
          img: m3m,
          title: "M3M",
          subtitle: "Golf Estate, Gurgaon",
          client: " Larsen & Toubro",
          Storeys: "G+37",
          Area: "22,36,000 SFT",
        },
        {
          img: minerva,
          title: "Minerva",
          subtitle: "Mumbai",
          client: " Larsen & Toubro",
          Storeys: "G+31",
          Area: "10,00,000 SFT",
        },
        {
          img: sks,
          title: "Planet SKS",
          subtitle: "Mangalore",
          client: "Larsen & Toubro",
          Storeys: "G+35",
          Area: "10,00,000 SFT",
        },
        {
          img: regent,
          title: "Regent Tower",
          subtitle: "Baner, Pune",
          client: "Gera",
          Storeys: "G+5",
          Area: "45,000 SFT",
        },
        {
          img:selene ,
          title: "Selene Park",
          subtitle: "Hadapsar, Pune",
          client: "Siddhivinayak Group",
          Storeys: "G+11",
          Area: "2,20,000 SFT",
        },
        {
          img: sie,
          title: "Sierra",
          subtitle: "VIZAG",
          client: "Indiabulls Real Estate Pvt. Ltd.",
          Storeys: "G+16",
          Area: "2,20,000 SFT",
        },
        {
          img: water,
          title: "Water Ridge",
          subtitle: "Undri, Pune",
          client: " Trimurthi Group",
          Storeys: "G+11",
          Area: " 2,25,000 SFT",
        },
        {
          img: wave,
          title: "Wave City",
          subtitle: "Noida",
          client: "Larsen & Tourbo",
          Storeys: "G+ 40",
          Area: "16,00,000 SFT",
        },
        {
          img: wind,
          title: "Whistling Winds",
          subtitle: "Pisoli, Pune",
          client: "A. V. Construction",
          Storeys: "G+7",
          Area: "1,00,000 SFT",
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
  .image{
    cursor:pointer;
  }
</style>
