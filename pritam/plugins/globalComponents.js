// import { ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watch, computed } from "vue";

import bootstrapJs from "bootstrap/dist/js/bootstrap.js"; 
import AOS from "aos";
 
// export default defineNuxtPlugin((nuxtApp) => {
//     ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watch, computed, bootstrapJs, AOS.init();
// })
export default defineNuxtPlugin((nuxtApp) => { bootstrapJs, AOS.init(); })


