import { a as buildAssetsURL } from '../routes/renderer.mjs';
import AOS from 'aos';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-qeVmDzyr.mjs';
import { useSSRContext } from 'vue';
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

const _imports_0 = "" + buildAssetsURL("videoplayback.DiIJeGW6.mp4");
const _sfc_main = {
  name: "Home",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        tel: "",
        location: "",
        message: ""
      }
    };
  },
  mounted() {
    AOS.refresh();
    this.openModal();
  },
  methods: {
    openModal() {
      const token = (void 0).cookie.split("; ").find((row) => row.startsWith("quantsoftEnquiry="));
      if (!token) {
        this.$refs.modalTrigger.click();
        (void 0).cookie = `quantsoftEnquiry=true; max-age=${60 * 60}; path=/`;
      }
    },
    async submitForm() {
      try {
        const response = await fetch("https://quantsoftindia.com/home-enquiry.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(this.formData).toString()
        });
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("There was an error sending your message. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f64859f0><section class="wrapper" data-v-f64859f0><div class="container pt-15 pb-10" data-v-f64859f0><div class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center" data-v-f64859f0><div class="col-lg-12 mt-0" data-v-f64859f0><div class="row" data-v-f64859f0><div class="col-12 px-0" data-v-f64859f0><figure class="rounded mx-5" data-aos="fade-up" data-v-f64859f0><video class="player position-relative rounded mt-5" loop autoplay muted style="${ssrRenderStyle({ "z-index": "1" })}" data-v-f64859f0><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-f64859f0></video></figure></div></div></div><div class="col-lg-12" data-v-f64859f0><h2 class="fs-16 text-uppercase text-muted" data-aos="fade-up" data-v-f64859f0><span class="display-5 underline-3 style-2 yellow" data-v-f64859f0>About us!</span></h2><h3 class="display-5 mb-10" data-aos="fade-up" data-v-f64859f0> Where precision meets excellence in quantity estimation. Let us help you turn your project visions into accurate realities! </h3><div class="row gy-8" data-v-f64859f0><div class="col-md-12" data-aos="fade-left" data-v-f64859f0><div class="d-flex flex-row" data-v-f64859f0><div data-v-f64859f0><p class="mb-0 fs-16" data-v-f64859f0> Welcome to Quantsoft India Private Limited Established in 2006 and based in Pune, Quantsoft India Private Limited is a leading Quantity Surveying and Project Management Consultancy company dedicated to delivering exceptional professional services in the development of world-class infrastructure. With a strong commitment to excellence, we provide comprehensive solutions that span the entire project lifecycle\u2014from initial project identification to seamless implementation. Our expertise lies in ensuring that every aspect of quantity surveying is handled with precision and professionalism. </p></div></div></div></div></div></div></div></section><section class="wrapper container py-md-10 position-relative" data-v-f64859f0><div class="row" data-v-f64859f0><div class="col-lg-12 mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" data-v-f64859f0><h3 class="display-5 mb-md-10 text-center" data-aos="fade-up" data-v-f64859f0> Our <span class="underline-3 style-2 yellow" data-v-f64859f0> Landmarks</span></h3><div class="row justify-content-center py-5" data-v-f64859f0><div class="col-lg-6 col-md-6 col-12 mb-8 d-flex" data-aos="fade-right" data-aos-duration="700" data-v-f64859f0><div class="card w-100" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "height": "100%", "background": "linear-gradient(-225deg, #0084cf45 0%, #2f2c2b30 100%)" })}" data-v-f64859f0><div class="card-body d-flex flex-column" data-v-f64859f0><p data-v-f64859f0>It is our pleasure to state that we have been associated with M/S. Quantsoft India Private Limited, Pune, for providing services in quantity surveying and estimation for our projects</p><p data-v-f64859f0>The experience working with QIPL team was significantly appreciated, and the deliverables submitted by them were fully utilized.</p><h3 class="mt-auto" data-v-f64859f0><span class="underline-3 style-2 yellow" data-v-f64859f0>--ARIISTO</span></h3></div></div></div><div class="col-lg-6 col-md-6 col-12 mb-8 d-flex" data-aos="fade-left" data-aos-duration="700" data-v-f64859f0><div class="card w-100" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "height": "100%", "background": "linear-gradient(-225deg, #0084cf45 0%, #2f2c2b30 100%)" })}" data-v-f64859f0><div class="card-body d-flex flex-column" data-v-f64859f0><p data-v-f64859f0>It is our pleasure to state that we have been associated with &#39;Quantsoft India Pvt. Ltd.&#39; Pune (a reputed QS/Estimation &amp; Cost Consultants) on many of our development projects.</p><p data-v-f64859f0>The experience working with QIPL team was wonderful.</p><h3 class="mt-auto" data-v-f64859f0><span class="underline-3 style-2 yellow" data-v-f64859f0>Horizon Shelters Pvt. Ltd.</span></h3></div></div></div><div class="col-lg-6 col-md-6 col-12 mb-8 d-flex" data-aos="fade-right" data-aos-duration="700" data-v-f64859f0><div class="card w-100" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "height": "100%", "background": "linear-gradient(-225deg, #0084cf45 0%, #2f2c2b30 100%)" })}" data-v-f64859f0><div class="card-body d-flex flex-column" data-v-f64859f0><p data-v-f64859f0>It is our pleasure to state that we have been associated with \u2018Quantsoft India Pvt. Ltd.\u2019 Pune (a well-known Quantity Surveying &amp; Estimation Service providing Company), on many projects.</p><p data-v-f64859f0>The experience working with QIPL team was significantly appreciated &amp; the deliverables submitted by them were fully utilized.</p><h3 class="mt-auto" data-v-f64859f0><span class="underline-3 style-2 yellow" data-v-f64859f0>NEILSOFT</span></h3></div></div></div><div class="col-lg-6 col-md-6 col-12 mb-8 d-flex" data-aos="fade-left" data-aos-duration="700" data-v-f64859f0><div class="card w-100" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "height": "100%", "background": "linear-gradient(-225deg, #0084cf45 0%, #2f2c2b30 100%)" })}" data-v-f64859f0><div class="card-body d-flex flex-column" data-v-f64859f0><p data-v-f64859f0>It is our pleasure to state that we have been associated with &#39;Quantsoft India Pvt. Ltd.&#39; Pune (a well-known Quantity Surveying &amp; Estimation Service Providing Company), on many of our development projects.</p><p data-v-f64859f0>The experience working with QIPL team was significantly appreciated &amp; the deliverables submitted by them were fully utilized.</p><h3 class="mt-auto" data-v-f64859f0><span class="underline-3 style-2 yellow" data-v-f64859f0>SUMA REALTY</span></h3></div></div></div></div></div></div></section><a href="#" class="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0 d-none" data-bs-toggle="modal" data-bs-target="#modal-01" data-v-f64859f0>Cookie</a><div class="modal fade modal-center" id="modal-01" tabindex="-1" data-v-f64859f0><div class="modal-dialog modal-dialog-centered custom-width" data-v-f64859f0><div class="modal-content custom-form-width text-center" data-v-f64859f0><div class="modal-body" data-v-f64859f0><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-f64859f0></button><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "width": "150px" })}" class="mb-2" alt="Quantsoft" data-v-f64859f0><h4 class="mb-3 text-start" data-v-f64859f0>Welcome!</h4><p class="lead mb-6 text-start" data-v-f64859f0></p><form class="contact-form needs-validation" data-v-f64859f0><div class="row gx-4" data-v-f64859f0><div class="col-md-6" data-v-f64859f0><div class="form-floating mb-4" data-v-f64859f0><input id="form_name" type="text" name="name" class="form-control"${ssrRenderAttr("value", $data.formData.name)} placeholder="Jane doe" data-v-f64859f0><label for="form_name" data-v-f64859f0> Name *</label><div class="valid-feedback" data-v-f64859f0>Looks good!</div><div class="invalid-feedback" data-v-f64859f0>Please enter your name.</div></div></div><div class="col-md-6" data-v-f64859f0><div class="form-floating mb-4" data-v-f64859f0><input id="form_lastname" type="number" name="surname" class="form-control"${ssrRenderAttr("value", $data.formData.tel)} placeholder="+9112345678" required data-v-f64859f0><label for="form_lastname" data-v-f64859f0>contact no</label><div class="valid-feedback" data-v-f64859f0>Looks good!</div><div class="invalid-feedback" data-v-f64859f0> Please enter your contact. </div></div></div><div class="col-md-6" data-v-f64859f0><div class="form-floating mb-4" data-v-f64859f0><input id="form_email" type="email" name="email" class="form-control"${ssrRenderAttr("value", $data.formData.email)} placeholder="jane.doe@example.com" data-v-f64859f0><label for="form_email" data-v-f64859f0>Email *</label><div class="valid-feedback" data-v-f64859f0>Looks good!</div><div class="invalid-feedback" data-v-f64859f0> Please provide a valid email address. </div></div></div><div class="col-md-6" data-v-f64859f0><div class="form-floating mb-4" data-v-f64859f0><input id="form_email" type="text" name="email" class="form-control"${ssrRenderAttr("value", $data.formData.location)} placeholder="+917743***" data-v-f64859f0><label for="form_email" data-v-f64859f0>location *</label><div class="valid-feedback" data-v-f64859f0>Looks good!</div><div class="invalid-feedback" data-v-f64859f0> Please provide a valid contact no. </div></div></div><div class="col-12" data-v-f64859f0><div class="form-floating mb-4" data-v-f64859f0><textarea id="form_message" name="message" class="form-control" placeholder="Your message" style="${ssrRenderStyle({ "height": "150px" })}" required data-v-f64859f0>${ssrInterpolate($data.formData.message)}</textarea><div class="valid-feedback" data-v-f64859f0>Looks good!</div><div class="invalid-feedback" data-v-f64859f0> Please enter your message. </div></div></div><div class="col-12 text-center" data-v-f64859f0><input type="submit" class="btn btn-primary rounded-pill btn-send mb-3 p-1" value="Send message" data-v-f64859f0><p class="text-muted fs-14" data-v-f64859f0><strong data-v-f64859f0>*</strong> These fields are required. </p></div></div></form></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f64859f0"]]);

export { index as default };
//# sourceMappingURL=index-zvmA07p6.mjs.map
