import axios from "axios";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
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
const _sfc_main = {
  name: "meditation",
  data() {
    return {
      formError: "",
      successMessage: "",
      isSubmitting: false,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        gender: "",
        zipcode: "",
        position: "",
        resume: null,
        message: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    handleFileUpload(event) {
      this.formData.resume = event.target.files[0];
    },
    async submitForm() {
      try {
        this.isSubmitting = true;
        this.formError = "";
        const formData = new FormData();
        for (let key in this.formData) {
          formData.append(key, this.formData[key]);
        }
        const response = await axios.post(
          "https://quantsoftindia.com/careers.php",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );
        this.successMessage = "Your application has been submitted successfully!";
        this.resetForm();
      } catch (error) {
        this.formError = "There was an error submitting the form. Please try again.";
        setTimeout(() => {
          this.formError = "";
        }, 2e3);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-928d6942><div class="container pb-3 pt-md-10" data-v-928d6942><h2 class="text-center mb-4" data-v-928d6942>Application Form</h2><div class="form-floating mb-4" data-v-928d6942><div class="row justify-content-center" data-v-928d6942><div class="col-md-10" data-v-928d6942>`);
  if ($data.formError) {
    _push(`<div class="alert alert-danger py-1" data-v-928d6942>${ssrInterpolate($data.formError)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.successMessage) {
    _push(`<div class="alert alert-success py-1" data-v-928d6942>${ssrInterpolate($data.successMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form data-v-928d6942><div class="row mb-3" data-v-928d6942><div class="col-md-6 animated fadeInLeft" data-v-928d6942><label for="firstName" data-v-928d6942>First Name</label><input id="firstName"${ssrRenderAttr("value", $data.formData.firstName)} type="text" class="form-control animated-input" placeholder="john" required data-v-928d6942></div><div class="col-md-6 animated fadeInRight" data-v-928d6942><label for="lastName" data-v-928d6942>Last Name</label><input id="lastName"${ssrRenderAttr("value", $data.formData.lastName)} type="text" class="form-control animated-input" placeholder="doe" required data-v-928d6942></div></div><div class="row mb-3" data-v-928d6942><div class="col-md-6 animated fadeInLeft" data-v-928d6942><label for="email" data-v-928d6942>Email Address</label><input id="email"${ssrRenderAttr("value", $data.formData.email)} type="email" class="form-control animated-input" placeholder="john@email" required data-v-928d6942></div><div class="col-md-6 animated fadeInRight" data-v-928d6942><label for="phone" data-v-928d6942>Phone Number</label><input id="phone"${ssrRenderAttr("value", $data.formData.phone)} type="tel" class="form-control animated-input" placeholder="" required data-v-928d6942></div></div><div class="row mb-3" data-v-928d6942><div class="col-md-6 animated fadeInLeft" data-v-928d6942><label for="address1" data-v-928d6942>Address Line 1</label><input id="address1"${ssrRenderAttr("value", $data.formData.address1)} type="text" class="form-control animated-input" placeholder="Enter your address" required data-v-928d6942></div><div class="col-md-6 animated fadeInRight" data-v-928d6942><label for="address2" data-v-928d6942>Address Line 2</label><input id="address2"${ssrRenderAttr("value", $data.formData.address2)} type="text" class="form-control animated-input" placeholder="Enter your address (optional)" data-v-928d6942></div></div><div class="row mb-3" data-v-928d6942><div class="col-md-6 animated fadeInLeft" data-v-928d6942><label for="city" data-v-928d6942>City</label><input id="city"${ssrRenderAttr("value", $data.formData.city)} type="text" class="form-control animated-input" placeholder="Enter your city" required data-v-928d6942></div><div class="col-md-6 animated fadeInRight" data-v-928d6942><label for="gender" data-v-928d6942>Gender</label><select id="gender" class="form-select animated-input" required data-v-928d6942><option value="" disabled data-v-928d6942${ssrIncludeBooleanAttr(Array.isArray($data.formData.gender) ? ssrLooseContain($data.formData.gender, "") : ssrLooseEqual($data.formData.gender, "")) ? " selected" : ""}>Select your gender</option><option value="male" data-v-928d6942${ssrIncludeBooleanAttr(Array.isArray($data.formData.gender) ? ssrLooseContain($data.formData.gender, "male") : ssrLooseEqual($data.formData.gender, "male")) ? " selected" : ""}>Male</option><option value="female" data-v-928d6942${ssrIncludeBooleanAttr(Array.isArray($data.formData.gender) ? ssrLooseContain($data.formData.gender, "female") : ssrLooseEqual($data.formData.gender, "female")) ? " selected" : ""}>Female</option><option value="other" data-v-928d6942${ssrIncludeBooleanAttr(Array.isArray($data.formData.gender) ? ssrLooseContain($data.formData.gender, "other") : ssrLooseEqual($data.formData.gender, "other")) ? " selected" : ""}>Other</option></select></div></div><div class="row mb-3" data-v-928d6942><div class="col-md-6 animated fadeInLeft" data-v-928d6942><label for="zipcode" data-v-928d6942>Zip Code</label><input id="zipcode"${ssrRenderAttr("value", $data.formData.zipcode)} type="text" class="form-control animated-input" placeholder="Enter your zip code" required data-v-928d6942></div><div class="col-md-6 animated fadeInRight" data-v-928d6942><label for="position" data-v-928d6942>Position Desired</label><input id="position"${ssrRenderAttr("value", $data.formData.position)} type="text" class="form-control animated-input" placeholder="Enter the desired position" required data-v-928d6942></div></div><div class="row mb-3" data-v-928d6942><div class="col-md-6 animated fadeInLeft" data-v-928d6942><label for="resume" data-v-928d6942>Attach Resume</label><input id="resume" type="file" class="form-control animated-input" required data-v-928d6942></div><div class="col-md-6 animated fadeInRight" data-v-928d6942><label for="message" data-v-928d6942>Write a Message</label><textarea id="message" class="form-control animated-input" rows="3" placeholder="Write your message here..." required data-v-928d6942>${ssrInterpolate($data.formData.message)}</textarea></div></div><div class="row mb-3" data-v-928d6942><div class="col-md-12 text-center" data-v-928d6942><button type="submit" class="btn btn-primary animated hover-bounce"${ssrIncludeBooleanAttr($data.isSubmitting) ? " disabled" : ""} data-v-928d6942> Submit </button></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const careers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-928d6942"]]);
export {
  careers as default
};
//# sourceMappingURL=careers-DXmDLi7x.js.map
