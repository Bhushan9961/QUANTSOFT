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
const doha = "" + __buildAssetsURL("doha.Cn1l_gKF.gif");
const szr = "" + __buildAssetsURL("szr.Chgwr4IQ.jpg");
const ibn = "" + __buildAssetsURL("IBNmall.DyUnrW7l.jpg");
const max = "" + __buildAssetsURL("maxburgers.Cz8umEIj.jpg");
const _sfc_main = {
  name: "healing",
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imagedetails2: [
        {
          img: doha,
          title: "Mixed-Use Development",
          subtitle: "Msheireb Downtown Doha (Ph-1B), QATAR",
          client: "ETA Star Engg. & Contracting Co. LLC.",
          Storeys: "N/A",
          Area: "4,000,000 SFT"
        },
        {
          img: szr,
          title: "Nando's – SZR",
          subtitle: "Abudhabi, Doha, Bharain, Dubai",
          client: "Keane Brands",
          Storeys: "N/A",
          Area: "3500 SFT"
        },
        {
          img: ibn,
          title: "IBN BUTUTA MALL",
          subtitle: "Abudhabi, Doha, Bharain, Dubai",
          client: " Keane Brands",
          Storeys: "N/A",
          Area: "3000 SFT"
        },
        {
          img: max,
          title: "Max’s Burgers",
          subtitle: "Abudhabi, Doha, Bharain, Dubai",
          client: " Keane Brands",
          Storeys: "N/A",
          Area: "N/A"
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper angled upper-end" }, _attrs))} data-v-6d8f6ead><div class="container" data-v-6d8f6ead><div class="row gx-lg-8 gy-8 align-items-center" data-v-6d8f6ead><div class="col-lg-12 py-10" data-v-6d8f6ead><h2 class="fs-16 text-uppercase text-muted text-center" data-aos="fade-left" data-v-6d8f6ead> here are some of our </h2><h3 class="display-5 mb-10 text-center" data-aos="fade-left" data-v-6d8f6ead><span class="underline-3 style-2 yellow" data-v-6d8f6ead> International Projects</span></h3><div class="row" data-aos="fade-up" data-v-6d8f6ead><!--[-->`);
  ssrRenderList($data.imagedetails2, (imagedetail, index) => {
    _push(`<div class="col-md-4 mb-4" data-v-6d8f6ead><div class="card custom-card" data-v-6d8f6ead><div class="image-container" data-v-6d8f6ead><img${ssrRenderAttr("src", imagedetail.img)} class="card-img-top img-fluid p-2" alt="Project Image" data-v-6d8f6ead></div><div class="titlediv pb-2" data-v-6d8f6ead><h3 class="card-title m-0 ms-2" data-v-6d8f6ead>${ssrInterpolate(imagedetail.title)}</h3><p class="text-disable m-0 ms-2" data-v-6d8f6ead>${ssrInterpolate(imagedetail.subtitle)}</p></div><div class="mt-2" data-v-6d8f6ead><p class="ms-2 m-0 fs-16" data-v-6d8f6ead><strong data-v-6d8f6ead>Client:</strong> ${ssrInterpolate(imagedetail.client)}</p><p class="ms-2 m-0 fs-16" data-v-6d8f6ead><strong data-v-6d8f6ead>Storeys:</strong> ${ssrInterpolate(imagedetail.Storeys)}</p><p class="ms-2 m-0 fs-16" data-v-6d8f6ead><strong data-v-6d8f6ead>Area:</strong> ${ssrInterpolate(imagedetail.Area)}</p></div></div></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_vue_easy_lightbox, {
    visible: $data.lightboxVisible,
    imgs: $data.imagedetails2.map((detail) => detail.img),
    index: $data.currentImageIndex,
    onHide: ($event) => $data.lightboxVisible = false
  }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/internationalprojects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalprojects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6d8f6ead"]]);
export {
  internationalprojects as default
};
//# sourceMappingURL=internationalprojects-DKfj3tv7.js.map
