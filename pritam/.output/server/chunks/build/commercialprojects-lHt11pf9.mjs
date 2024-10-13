import { a as buildAssetsURL } from '../routes/renderer.mjs';
import AOS from 'aos';
import VueEasyLightbox from 'vue-easy-lightbox';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const Ahuja = "" + buildAssetsURL("Ahuja.CwHy6Jr4.jpg");
const Mantri = "" + buildAssetsURL("mantri.C19hlQqi.jpg");
const IDBU = "" + buildAssetsURL("indiabullsfinancecenter.qVFZLnUR.jpg");
const megamalljdpr = "" + buildAssetsURL("megamalljodpur.Mcjz_ROn.jpeg");
const megamallkta = "" + buildAssetsURL("megamallkota.B-T6kF4G.jpg");
const ongc = "" + buildAssetsURL("ongcglobalkolkatta.blHLIkjs.jpeg");
const supreme = "" + buildAssetsURL("supremeparkmumbai.CuLxAJCq.png");
const ambernath = "" + buildAssetsURL("img8.CZ_KBYjG.jpg");
const bihar = "" + buildAssetsURL("img9.3oc3RPSR.jpg");
const daund = "" + buildAssetsURL("Daundsugar.DWXePuI_.jpg");
const _sfc_main = {
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
          Area: "7,50,000 SFT"
        },
        {
          img: Mantri,
          title: "Buisness@Mantri",
          subtitle: "Pune",
          client: "Mantri",
          Storeys: "B+ 5",
          Area: " 5,50,000 SFT"
        },
        {
          img: IDBU,
          title: "Indiabulls Finance Center",
          subtitle: "Lower Parel, Mumbai",
          client: "Indiabulls Real Estate Pvt. Ltd.",
          Storeys: "2B+G+ 31",
          Area: "20,00,000 SFT"
        },
        {
          img: megamalljdpr,
          title: "Mega Mall",
          subtitle: "Jodhpur",
          client: "Indiabulls Real Estate Pvt. Ltd.",
          Storeys: "G+ 7",
          Area: " 9,00,000 SFT"
        },
        {
          img: megamallkta,
          title: "Mega Mall",
          subtitle: "KOTA",
          client: "Indiabulls Real Estate Pvt. Ltd",
          Storeys: "G+7",
          Area: " 3,66,000 SFT"
        },
        {
          img: ongc,
          title: "ONGC Global",
          subtitle: "Kolkata, India.",
          client: "Shapoorji Pallonji Co. Ltd.",
          Storeys: " B + GF + 20 Floors",
          Area: "670,000 SFT"
        },
        {
          img: supreme,
          title: "Supreme Business Park",
          subtitle: "Mumbai, India.",
          client: "Across Beyond Development conslt",
          Storeys: "4 Stilt + 1 podium + 12",
          Area: "1,200,000 SFT"
        },
        {
          img: ambernath,
          title: "Emerson Network Pvt. Ltd.",
          subtitle: "Ambernath, Mumbai",
          client: " Larsen & Tourbo",
          Storeys: "G+1",
          Area: "5,00,000 SFT"
        },
        {
          img: bihar,
          title: "Bihar Museum",
          subtitle: "Patna, India.",
          client: "Shapoorji Pallonji Co. Ltd.",
          Storeys: "N/A",
          Area: "350,000 SFT"
        },
        {
          img: daund,
          title: "Daund Sugar Ltd",
          subtitle: "Daund, India.",
          client: "Daund Sugar Ltd.",
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper angled upper-end" }, _attrs))} data-v-75ebf197><div class="container" data-v-75ebf197><div class="row gx-lg-8 gy-8 align-items-center" data-v-75ebf197><div class="col-lg-12 py-10" data-v-75ebf197><h2 class="fs-16 text-uppercase text-muted text-center" data-aos="fade-left" data-v-75ebf197> here are some of our </h2><h3 class="display-5 mb-10 text-center" data-aos="fade-left" data-v-75ebf197> Commercial <span class="underline-3 style-2 yellow" data-v-75ebf197> Projects</span></h3><div class="row" data-aos="fade-up" data-v-75ebf197><!--[-->`);
  ssrRenderList($data.imagedetails, (imagedetail, index) => {
    _push(`<div class="col-md-4 mb-4" data-v-75ebf197><div class="card custom-card" data-v-75ebf197><div class="image-container" data-v-75ebf197><img${ssrRenderAttr("src", imagedetail.img)} class="card-img-top p-2 rounded image" alt="Project Image" data-v-75ebf197></div><div class="titlediv pn" data-v-75ebf197><h4 class="card-title m-0 ms-2" data-v-75ebf197>${ssrInterpolate(imagedetail.title)}</h4><p class="text-disable m-0 ms-2" data-v-75ebf197>${ssrInterpolate(imagedetail.subtitle)}</p></div><div class="mt-2" data-v-75ebf197><p class="ms-2 fs-16 m-0" data-v-75ebf197><strong data-v-75ebf197>Client:</strong> ${ssrInterpolate(imagedetail.client)}</p><p class="ms-2 fs-16 m-0" data-v-75ebf197><strong data-v-75ebf197>Storeys:</strong> ${ssrInterpolate(imagedetail.Storeys)}</p><p class="ms-2 fs-16 m-0" data-v-75ebf197><strong data-v-75ebf197>Area:</strong> ${ssrInterpolate(imagedetail.Area)}</p></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/commercialprojects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commercialprojects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-75ebf197"]]);

export { commercialprojects as default };
//# sourceMappingURL=commercialprojects-lHt11pf9.mjs.map
