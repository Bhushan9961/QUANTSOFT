import axios from 'axios';
import AOS from 'aos';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  name: "Contactus",
  data() {
    return {
      formError: "",
      formSuccess: "",
      isSubmitting: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        message: ""
      }
    };
  },
  mounted() {
    AOS.init();
  },
  methods: {
    handleSubmit() {
      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        city: this.formData.city,
        address: this.formData.address,
        message: this.formData.message
      };
      this.isSubmitting = true;
      this.formError = "";
      this.formSuccess = "";
      axios.post("https://quantsoftindia.com/contact.php", payload).then((response) => {
        console.log("Form submitted successfully:", response.data);
        this.formSuccess = "Form submitted successfully!";
        this.formData = {
          name: "",
          email: "",
          phone: "",
          city: "",
          address: "",
          message: ""
        };
      }).catch((error) => {
        console.error("Error submitting form:", error);
        this.formError = "Oops An Error Occurred Please Try Again";
        setTimeout(() => {
          this.formError = "";
        }, 2e3);
      }).finally(() => {
        this.isSubmitting = false;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f61fc6ea><section class="wrapper" data-v-f61fc6ea><div class="container" data-v-f61fc6ea><h1 class="text-center mb-5" data-v-f61fc6ea>Contact Us</h1><div class="row" data-v-f61fc6ea><div class="col-md-6" data-v-f61fc6ea><form data-aos="fade-up" class="me-4" data-v-f61fc6ea><div class="row" data-v-f61fc6ea>`);
  if ($data.formError) {
    _push(`<div class="alert alert-danger py-1" data-v-f61fc6ea>${ssrInterpolate($data.formError)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.formSuccess) {
    _push(`<div class="alert alert-success py-1" data-v-f61fc6ea>${ssrInterpolate($data.formSuccess)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="col-md-6" data-v-f61fc6ea><div class="form-group mb-3" data-v-f61fc6ea><label for="name" data-v-f61fc6ea>Name</label><input type="text" class="form-control" id="name"${ssrRenderAttr("value", $data.formData.name)} placeholder="Enter your name" required data-v-f61fc6ea></div><div class="form-group mb-3" data-v-f61fc6ea><label for="email" data-v-f61fc6ea>Email</label><input type="email" class="form-control" id="email"${ssrRenderAttr("value", $data.formData.email)} placeholder="Enter your email" required data-v-f61fc6ea></div><div class="form-group mb-3" data-v-f61fc6ea><label for="contact" data-v-f61fc6ea>Contact</label><input type="text" class="form-control" id="contact"${ssrRenderAttr("value", $data.formData.phone)} placeholder="Enter your contact number" required data-v-f61fc6ea></div></div><div class="col-md-6" data-v-f61fc6ea><div class="form-group mb-3" data-v-f61fc6ea><label for="city" data-v-f61fc6ea>City</label><input type="text" class="form-control" id="city"${ssrRenderAttr("value", $data.formData.city)} placeholder="Enter your city" required data-v-f61fc6ea></div><div class="form-group mb-3" data-v-f61fc6ea><label for="address" data-v-f61fc6ea>Address</label><textarea class="form-control" id="address" rows="2" placeholder="Enter your address" required data-v-f61fc6ea>${ssrInterpolate($data.formData.address)}</textarea></div><div class="form-group mb-3" data-v-f61fc6ea><label for="message" data-v-f61fc6ea>Message</label><textarea class="form-control" id="message" rows="4" placeholder="Write your message" required data-v-f61fc6ea>${ssrInterpolate($data.formData.message)}</textarea></div></div></div><div class="d-flex justify-content-center" data-v-f61fc6ea><button type="submit" class="btn btn-primary w-50"${ssrIncludeBooleanAttr($data.isSubmitting) ? " disabled" : ""} data-v-f61fc6ea>Submit</button></div></form></div><div class="col-md-6" data-v-f61fc6ea><div class="iframe-container" data-v-f61fc6ea><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483238.44143739797!2d73.05434330141321!3d18.87375337558425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7f7b3abc97%3A0xd5476a385ffa1c2c!2sQuantsoft%20India%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1725202561112!5m2!1sen!2sin" width="auto" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-f61fc6ea></iframe></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contactus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f61fc6ea"]]);

export { contactus as default };
//# sourceMappingURL=contactus-2hT62gIt.mjs.map
