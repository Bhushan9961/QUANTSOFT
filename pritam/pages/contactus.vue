<template>
  <div>
    <section class="wrapper">
      <div class="container">
        <h1 class="text-center mb-5">Contact Us</h1>
        <div class="row">
          <div class="col-md-6">
            <form @submit.prevent="handleSubmit" data-aos="fade-up" class="me-4">
              <div class="row">
                <div class="alert alert-danger py-1" v-if="formError">
                  {{formError}}
                </div>
                <div class="alert alert-success py-1" v-if="formSuccess">
                  {{ formSuccess }}
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model="formData.name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="formData.email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="contact">Contact</label>
                    <input
                      type="text"
                      class="form-control"
                      id="contact"
                      v-model="formData.phone"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <label for="city">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      v-model="formData.city"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="address">Address</label>
                    <textarea
                      class="form-control"
                      id="address"
                      v-model="formData.address"
                      rows="2"
                      placeholder="Enter your address"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group mb-3">
                    <label for="message">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="formData.message"
                      rows="4"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary w-50" :disabled="isSubmitting">Submit</button>
              </div>
            </form>
           
          </div>

          <div class="col-md-6">
            <div class="iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483238.44143739797!2d73.05434330141321!3d18.87375337558425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7f7b3abc97%3A0xd5476a385ffa1c2c!2sQuantsoft%20India%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1725202561112!5m2!1sen!2sin"
                width="auto"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Contactus",
  data() {
    return {
      formError:'',
      formSuccess: '',
      isSubmitting: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        message: "",
      },
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
        message: this.formData.message,
      };
      this.isSubmitting = true;
      this.formError = '';
      this.formSuccess = '';
      axios
        .post("https://quantsoftindia.com/contact.php", payload)
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          // this.$router.push('/');
          this.formSuccess = "Form submitted successfully!"; 
         
          this.formData = {
            name: "",
            email: "",
            phone: "",
            city: "",
            address: "",
            message: "",
          };
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          this.formError = 'Oops An Error Occurred Please Try Again'; 
          
          setTimeout(() => {
            this.formError = ''; 
          }, 2000);
         
        })
        .finally(() => {
          this.isSubmitting = false; 
        });
        
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 60px 0;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.form-group label {
  font-weight: bold;
  color: #555;
}

.form-control {
  border-radius: 0.25rem;
  padding: 0.75rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004080;
}

.iframe-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
