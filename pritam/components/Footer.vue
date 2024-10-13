<template>
    
   <footer class="pt-3 border-top">
 
   <div class="container text-center">
      <div class="row mt-lg-0">
         <div class="col-xl-10 mx-auto">
            <div class="row mb-3 align-items-center">
            
               <div class=" col-12 col-md-4 ps-0">
                  <!-- <div class=""> -->
                     <!-- <h6 class="widget-title mb-0">Phone</h6> -->
                     <div class="fs-14"> </div>
                  <!-- </div> -->
               </div>
               
               <div class="col-12 col-md-4 px-0">
                  <!-- <div class=""> -->
                     <!-- <h6 class="widget-title mb-0">E-mail</h6> -->
                     <div class="fs-14">   </div>
                     <a href="mailto:info@quantsoftindia.com" class="link-body fs-14"><i class="uil uil-envelope align-middle fs-16"></i> info@quantsoftindia.com</a>
                     
                     <!-- </div> -->
                  </div>
                  <div class="col-12 col-md-4">
                     <nav class="nav social justify-content-center">
                        <a href="#" class=""><i class="uil uil-facebook-f"></i></a>
                        <a href="#" target="_blank" class=""><i class="uil uil-instagram"></i></a>
                     </nav>
                  </div>
               <div class="col-12">
                  <div class="fs-12">
                     © {{ currentYear }} Quantsoft
                  </div>
               </div>
          
    
               
            </div>
         </div>
      </div>
   </div>
 
</footer>
</template>

<script>
export default {
   data() {
      return {
         currentYear: null,
      };
   },
   created() {
      this.currentYear = new Date().getFullYear();
   },
   mounted(){
   },
   methods:{
        
   }
};
</script>

<style scoped>

   .scroll-to-top {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 50px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1000;
      animation: floatingAnimation 1s infinite alternate;
   }

   @keyframes floatingAnimation {
      0% {
         transform: translateY(0);
      }
      100% {
         transform: translateY(-10px); /* Adjust this value to change the floating distance */
      }
   }
</style>