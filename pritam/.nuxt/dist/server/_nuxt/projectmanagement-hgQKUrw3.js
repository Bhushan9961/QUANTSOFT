import AOS from "aos";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const _imports_0 = "" + __buildAssetsURL("consultancy.CpMK9l1X.jpg");
const _sfc_main = {
  name: "meditation",
  data() {
    return {};
  },
  mounted() {
    AOS.refresh();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-63e91f03><section class="wrapper" data-v-63e91f03><div class="container pb-3" data-v-63e91f03><div class="row text-center" data-v-63e91f03><div class="col-lg-12 mx-auto" data-v-63e91f03><div class="position-relative mt-9" data-aos="fade-up" data-v-63e91f03><img class="rounded image-full" style="${ssrRenderStyle({ "z-index": "0.5", "width": "100%", "height": "80vh", "object-fit": "cover" })}"${ssrRenderAttr("src", _imports_0)} data-v-63e91f03></div></div></div></div></section><section class="wrapper" data-v-63e91f03><div class="container pb-9 pt-3 mt-8" data-v-63e91f03><div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center" data-v-63e91f03><div class="col-lg-12" data-v-63e91f03><h3 class="display-5 mb-5 text-center" data-aos="fade-up" data-v-63e91f03>Project <span class="underline-3 style-2 yellow" data-v-63e91f03>Management Consultancy.</span></h3><p class="fs-20 mb-0" data-aos="fade-left" data-v-63e91f03>We provide quantity estimation for all types of Real estate, Infrastructure, Industrial and commercial projects for our esteemed clients in India as well as abroad.</p><p class="fs-20 mb-0" data-aos="fade-right" data-v-63e91f03>We provide estimation for different stages of constructions like conceptual pre-launch, detailed pre-contract / tender estimate, post-contract/GFC estimate based on the client</p><p class="fs-20 mb-0" data-aos="fade-left" data-v-63e91f03>Our Reports include quantities from Earth Work up to Lock and Key, it includes quantification for all the civil, structural, architectural, mechanical and electrical services.</p></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projectmanagement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectmanagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-63e91f03"]]);
export {
  projectmanagement as default
};
//# sourceMappingURL=projectmanagement-hgQKUrw3.js.map
