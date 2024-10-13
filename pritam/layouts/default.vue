<template>
    <div>
        <Header/>
            <main>
                <slot /> 
            </main>
        <Footer/>
       
    </div>
</template>

<script setup>
  import { useHead } from '@unhead/vue';

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Quantsoft",
          "url": "http://quantsoftindia.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "http://quantsoftindia.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }
    ]
  });
</script>

<script>
    import '~/assets/css/plugins.css'
    import '~/assets/css/aqua.css'
    import '~/assets/css/style.css';
    import '~/assets/css/colors/grape.css';
    import  "~/assets/css/fonts/urbanist.css";
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name: "Layout",
        data(){
            return{

            }
        }, 
        mounted(){
            AOS.init({
                once: false,
                easing: 'ease-in-sine',
            })
        },
        methods: {
            
        }
    }
    
</script>

<style>
    html, body{
       /*background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);*/
       background-image: linear-gradient(-225deg, #0084cf45 0%, #2f2c2b30 100%);
    }

    .animation-btn {
        position: relative;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 4px;
        overflow: hidden;
    }

    .animation-btn span:nth-child(1) {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #171618, #3bff3b);
        animation: animate1 2s linear infinite;
    }

    @keyframes animate1 {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    .animation-btn span:nth-child(2) {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 3px;
        background: linear-gradient(to bottom, #171618, #3bff3b);
        animation: animate2 2s linear infinite;
        animation-delay: 1s;
    }
    @keyframes animate2 {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(100%);
        }
    }

    .animation-btn span:nth-child(3) {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to left, #171618, #3bff3b);
        animation: animate3 2s linear infinite;
    }

    @keyframes animate3 {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .animation-btn span:nth-child(4) {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background: linear-gradient(to top, #171618, #3bff3b);
        animation: animate4 2s linear infinite;
        animation-delay: 1s;
    }

    @keyframes animate4 {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(-100%);
        }
    }
    .custom-cancel:hover{
        transform: rotate(180deg);
    }
    .bg-soft-primary {
        background-color: #eff7fa !important;
    }
   
    .custom-text-info{
        color: #00a9ff !important;
    }
    .bg-soft-primary{
        background-color: #eff7fa !important;
    }
    
    .custom-btn-info{
        background-color: #00a9ff !important;
        --bs-btn-color: #00a9ff !important;
        color: #fff !important;
    }
    
    .custom-btn-outline-info{
        --bs-btn-border-color: #00a9ff !important;
        --bs-btn-color: #00a9ff !important;
    }
    .custom-btn-outline-info:hover{
        background-color: #00a9ff !important;
        border-color: #00a9ff !important;
        color: #fff !important;
    }
</style>
