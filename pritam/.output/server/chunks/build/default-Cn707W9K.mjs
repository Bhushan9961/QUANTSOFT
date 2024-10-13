import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-qeVmDzyr.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import AOS from 'aos';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {
  name: "Header",
  data() {
    return {
      isHidden: true,
      width: ""
    };
  },
  methods: {
    toggleNav() {
      this.isHidden = !this.isHidden;
    }
  },
  computed: {
    css() {
      this.width = (void 0).innerWidth;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: "shadow-lg sticky-xl-top z-index-9",
    style: { "background-image": "linear-gradient(-225deg, #bbdcef 0%, #ced5d9 100%)" }
  }, _attrs))}><nav class="navbar navbar-expand-lg center-nav transparent navbar-light py-lg-0"><div class="container flex-lg-row flex-nowrap align-items-center"><div class="navbar-brand py-0">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "200px" })}" alt="Quantsoft"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            style: { "width": "200px" },
            alt: "Quantsoft"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="${ssrRenderClass([{ hide: $data.isHidden, show: !$data.isHidden }, "navbar-collapse collapse offcanvas offcanvas-nav offcanvas-start z-index-9"])}"><div class="offcanvas-header d-lg-none" style="${ssrRenderStyle({ "padding-top": "0" })}">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "100px" })}" alt="quantsoft"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            style: { "width": "100px" },
            alt: "quantsoft"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i class="uil uil-multiply fs-24"></i></div><div class="offcanvas-body ms-lg-auto d-flex flex-column z-index-9 position-relative"><div class="offcanvas-footer d-lg-none"><div><ul class="navbar-nav pb-5 mb-5"><li class="nav-item dropdown dropdown-mega d-md-none d-block">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link fs-14",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home`);
      } else {
        return [
          createTextVNode(" Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item dropdown dropdown-mega d-md-none d-block">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav-link fs-14",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About Us`);
      } else {
        return [
          createTextVNode(" About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item dropdown d-md-none d-block"><a href="#" data-bs-toggle="dropdown" class="${ssrRenderClass([
    _ctx.$route.name == "Residentialprojects" || _ctx.$route.name == "learn-healing" ? "active" : "",
    "nav-link dropdown-toggle fs-14"
  ])}">Projects</a><div class="dropdown-menu dropdown-lg" style="${ssrRenderStyle({ "min-width": "auto" })}"><div class="dropdown-lg-content"><div><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/Residentialprojects",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Residential Projects`);
      } else {
        return [
          createTextVNode(" Residential Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr class="mt-1 mb-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/commercialprojects",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Coomercial projects`);
      } else {
        return [
          createTextVNode(" Coomercial projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr class="mt-1 mb-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/internationalprojects",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` International projects`);
      } else {
        return [
          createTextVNode(" International projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></li><li class="nav-item dropdown d-md-none d-block"><a href="#" data-bs-toggle="dropdown" class="${ssrRenderClass([_ctx.$route.name == "services" ? "active" : "", "nav-link dropdown-toggle fs-14"])}">Services</a><div class="dropdown-menu dropdown-lg" style="${ssrRenderStyle({ "min-width": "auto" })}"><div class="dropdown-lg-content"><div><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Quantity Surveying`);
      } else {
        return [
          createTextVNode(" Quantity Surveying")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr class="mt-1 mb-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projectmanagement",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project Management Consultancy`);
      } else {
        return [
          createTextVNode("Project Management Consultancy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></li><li class="nav-item dropdown dropdown-mega d-md-none d-block">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/careers",
    class: "nav-link fs-14",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` careers`);
      } else {
        return [
          createTextVNode(" careers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item dropdown dropdown-mega d-md-none d-block">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contactus",
    class: "nav-link fs-14",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact Us`);
      } else {
        return [
          createTextVNode(" Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><a href="mailto:info@quantsoftindia.com" class="link-inverse fs-14">info@quantsoftindia.com</a><br></div></div></div></div><div class="navbar-other w-100 d-flex ms-auto"><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: ["nav-link fs-14", _ctx.$route.name == "index" ? "active" : ""]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home`);
      } else {
        return [
          createTextVNode(" Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: ["nav-link fs-14", _ctx.$route.name == "about" ? "active" : ""],
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About Us`);
      } else {
        return [
          createTextVNode(" About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item dropdown d-md-block d-none p-3"><a href="#" data-bs-toggle="dropdown" class="${ssrRenderClass([
    _ctx.$route.name == "projects" || _ctx.$route.name == "learn-healing" ? "active" : "",
    "nav-link dropdown-toggle fs-14"
  ])}">Projects</a><div class="dropdown-menu dropdown-lg p-3" style="${ssrRenderStyle({ "min-width": "auto" })}"><div class="dropdown-lg-content"><div><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/Residentialprojects",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Residential Projects`);
      } else {
        return [
          createTextVNode(" Residential Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr class="mt-1 mb-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/commercialprojects",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Commercial projects`);
      } else {
        return [
          createTextVNode("Commercial projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr class="mt-1 mb-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/internationalprojects",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`International projects`);
      } else {
        return [
          createTextVNode("International projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></li><li class="nav-item dropdown d-md-block d-none p-3"><a href="#" data-bs-toggle="dropdown" class="${ssrRenderClass([_ctx.$route.name == "services" ? "active" : "", "nav-link dropdown-toggle fs-14"])}">Services</a><div class="dropdown-menu dropdown-lg p-3" style="${ssrRenderStyle({ "min-width": "auto" })}"><div class="dropdown-lg-content"><div><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Quantity Surveying`);
      } else {
        return [
          createTextVNode(" Quantity Surveying")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr class="mt-1 mb-0"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projectmanagement",
    class: "nav-link fs-14 dropdown-item",
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project Management Consultancy`);
      } else {
        return [
          createTextVNode("Project Management Consultancy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></li><li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/careers",
    class: ["nav-link fs-14", _ctx.$route.name == "Careers" ? "active" : ""],
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Careers`);
      } else {
        return [
          createTextVNode(" Careers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item dropdown dropdown-mega d-md-block d-none p-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contactus",
    class: ["nav-link fs-14", _ctx.$route.name == "contactus" ? "active" : ""],
    onClick: $options.toggleNav
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item d-md-none p-3"><button class="hamburger offcanvas-nav-btn"><span></span></button></li></ul></div></div></nav></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  data() {
    return {
      currentYear: null
    };
  },
  created() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  },
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "pt-3 border-top" }, _attrs))} data-v-042a43ed><div class="container text-center" data-v-042a43ed><div class="row mt-lg-0" data-v-042a43ed><div class="col-xl-10 mx-auto" data-v-042a43ed><div class="row mb-3 align-items-center" data-v-042a43ed><div class="col-12 col-md-4 ps-0" data-v-042a43ed><div class="fs-14" data-v-042a43ed></div></div><div class="col-12 col-md-4 px-0" data-v-042a43ed><div class="fs-14" data-v-042a43ed></div><a href="mailto:info@quantsoftindia.com" class="link-body fs-14" data-v-042a43ed><i class="uil uil-envelope align-middle fs-16" data-v-042a43ed></i> info@quantsoftindia.com</a></div><div class="col-12 col-md-4" data-v-042a43ed><nav class="nav social justify-content-center" data-v-042a43ed><a href="#" class="" data-v-042a43ed><i class="uil uil-facebook-f" data-v-042a43ed></i></a><a href="#" target="_blank" class="" data-v-042a43ed><i class="uil uil-instagram" data-v-042a43ed></i></a></nav></div><div class="col-12" data-v-042a43ed><div class="fs-12" data-v-042a43ed> \xA9 ${ssrInterpolate($data.currentYear)} Quantsoft </div></div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-042a43ed"]]);
const __default__ = {
  name: "Layout",
  data() {
    return {};
  },
  mounted() {
    AOS.init({
      once: false,
      easing: "ease-in-sine"
    });
  },
  methods: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          type: "application/ld+json",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Cn707W9K.mjs.map
