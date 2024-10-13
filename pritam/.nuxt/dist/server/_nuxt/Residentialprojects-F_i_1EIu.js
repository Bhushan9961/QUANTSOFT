import AOS from "aos";
import VueEasyLightbox from "vue-easy-lightbox";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
const aspiria = "" + __buildAssetsURL("aspiria.CbhkzHK2.jpg");
const centrum = "" + __buildAssetsURL("centrum-park.COVb5YNc.jpg");
const dlf = "" + __buildAssetsURL("dlf.CGTwV1mr.jpg");
const eden = "" + __buildAssetsURL("eden-park-2.BoAQNyjn.jpg");
const enigma = "" + __buildAssetsURL("enigma.D1e47WRw.jpg");
const godrej1 = "" + __buildAssetsURL("godrej-platinium.TW_1UGiv.jpg");
const indiabulls = "" + __buildAssetsURL("indiabulls-greens.Dl4ImjJW.jpg");
const indiabulls2 = "" + __buildAssetsURL("indiabulls-greens-panvel.ze5hF2Kq.jpg");
const m3m = "" + __buildAssetsURL("m3m.l59UxQpR.jpg");
const minerva = "" + __buildAssetsURL("minerva.DxSr__AB.jpg");
const sks = "" + __buildAssetsURL("planet-sks.DATjDh7r.jpg");
const regent = "" + __buildAssetsURL("regent-tower.DuvIRbnI.jpg");
const selene = "" + __buildAssetsURL("selene-park.BCWcRsHu.jpg");
const sie = "" + __buildAssetsURL("sierra.DFUNj6Uw.jpg");
const water = "" + __buildAssetsURL("water-ridge.CHS78wiT.jpg");
const wave = "" + __buildAssetsURL("wave-city.DwnlYt4R.jpg");
const wind = "" + __buildAssetsURL("whistling-winds.Bj6wptHe.jpg");
const _sfc_main = {
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
          Area: "1,25,000 SFT"
        },
        {
          img: centrum,
          title: "Centrum Park",
          subtitle: "Gurgaon",
          client: "Indiabulls Real Estate Pvt. Ltd.",
          Storeys: " G+ 21",
          Area: "5,00,000 SFT"
        },
        {
          img: dlf,
          title: "DLF Tower",
          subtitle: "Gurgaon",
          client: "DLF Group",
          Storeys: "G+ 21",
          Area: "1,50,000 SFT"
        },
        {
          img: eden,
          title: "Eden Park-2",
          subtitle: "Chennai",
          client: "Larsen & Toubro",
          Storeys: "G+ 18",
          Area: "56,33,000 SFT"
        },
        {
          img: enigma,
          title: "Enigma Tower",
          subtitle: "Gurgaon",
          client: "Indiabulls Real Estate Pvt. Ltd",
          Storeys: "2B +G+ 17",
          Area: "2,40,000 SFT"
        },
        {
          img: godrej1,
          title: "Godrej Platinum",
          subtitle: "Bangalore",
          client: "Larsen & Toubro",
          Storeys: "G+29",
          Area: "7,80,000 SFT"
        },
        {
          img: indiabulls,
          title: "Indiabulls Greens",
          subtitle: "Chennai",
          client: "Indiabulls Real Estate Pvt. Ltd",
          Storeys: "G+21",
          Area: "10,00,000 SFT"
        },
        {
          img: indiabulls2,
          title: "Indiabulls Greens",
          subtitle: "Panvel",
          client: " Indiabulls Real Estate Pvt. Ltd",
          Storeys: "G+37",
          Area: "11,00,000 SFT"
        },
        {
          img: m3m,
          title: "M3M",
          subtitle: "Golf Estate, Gurgaon",
          client: " Larsen & Toubro",
          Storeys: "G+37",
          Area: "22,36,000 SFT"
        },
        {
          img: minerva,
          title: "Minerva",
          subtitle: "Mumbai",
          client: " Larsen & Toubro",
          Storeys: "G+31",
          Area: "10,00,000 SFT"
        },
        {
          img: sks,
          title: "Planet SKS",
          subtitle: "Mangalore",
          client: "Larsen & Toubro",
          Storeys: "G+35",
          Area: "10,00,000 SFT"
        },
        {
          img: regent,
          title: "Regent Tower",
          subtitle: "Baner, Pune",
          client: "Gera",
          Storeys: "G+5",
          Area: "45,000 SFT"
        },
        {
          img: selene,
          title: "Selene Park",
          subtitle: "Hadapsar, Pune",
          client: "Siddhivinayak Group",
          Storeys: "G+11",
          Area: "2,20,000 SFT"
        },
        {
          img: sie,
          title: "Sierra",
          subtitle: "VIZAG",
          client: "Indiabulls Real Estate Pvt. Ltd.",
          Storeys: "G+16",
          Area: "2,20,000 SFT"
        },
        {
          img: water,
          title: "Water Ridge",
          subtitle: "Undri, Pune",
          client: " Trimurthi Group",
          Storeys: "G+11",
          Area: " 2,25,000 SFT"
        },
        {
          img: wave,
          title: "Wave City",
          subtitle: "Noida",
          client: "Larsen & Tourbo",
          Storeys: "G+ 40",
          Area: "16,00,000 SFT"
        },
        {
          img: wind,
          title: "Whistling Winds",
          subtitle: "Pisoli, Pune",
          client: "A. V. Construction",
          Storeys: "G+7",
          Area: "1,00,000 SFT"
        }
      ],
      lightboxVisible: false,
      currentImageIndex: 0
    };
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxVisible = true;
    }
  },
  mounted() {
    AOS.refresh();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_easy_lightbox = resolveComponent("vue-easy-lightbox");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper angled upper-end" }, _attrs))} data-v-dfc64347><div class="container" data-v-dfc64347><div class="row gx-lg-8 gy-8 align-items-center" data-v-dfc64347><div class="col-lg-12 py-10" data-v-dfc64347><h2 class="fs-16 text-uppercase text-muted text-center" data-aos="fade-left" data-v-dfc64347> And here are some of our </h2><h3 class="display-5 mb-10 text-center" data-aos="fade-left" data-v-dfc64347> prestigious<span class="underline-3 style-2 yellow" data-v-dfc64347> Residential Projects</span></h3><div class="row" data-aos="fade-up" data-v-dfc64347><!--[-->`);
  ssrRenderList($data.imagedetails, (imagedetail, index) => {
    _push(`<div class="col-md-4 mb-4" data-v-dfc64347><div class="card custom-card" data-v-dfc64347><img${ssrRenderAttr("src", imagedetail.img)} class="card-img-top p-2 rounded image" alt="Project Image" data-v-dfc64347><div class="titlediv pb-2" data-v-dfc64347><h4 class="card-title m-0 ms-2" data-v-dfc64347>${ssrInterpolate(imagedetail.title)}</h4><p class="text-disable m-0 ms-2 fs-16" data-v-dfc64347>${ssrInterpolate(imagedetail.subtitle)}</p></div><div class="mt-2" data-v-dfc64347><p class="ms-2 m-0 fs-16" data-v-dfc64347><strong data-v-dfc64347>Client:</strong> ${ssrInterpolate(imagedetail.client)}</p><p class="ms-2 m-0 fs-16" data-v-dfc64347><strong data-v-dfc64347>Storeys:</strong> ${ssrInterpolate(imagedetail.Storeys)}</p><p class="ms-2 m-0 fs-16" data-v-dfc64347><strong data-v-dfc64347>Area:</strong> ${ssrInterpolate(imagedetail.Area)}</p></div></div></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_vue_easy_lightbox, {
    visible: $data.lightboxVisible,
    imgs: $data.imagedetails.map((detail) => detail.img),
    index: $data.currentImageIndex,
    onHide: ($event) => $data.lightboxVisible = false
  }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Residentialprojects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Residentialprojects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfc64347"]]);
export {
  Residentialprojects as default
};
//# sourceMappingURL=Residentialprojects-F_i_1EIu.js.map
