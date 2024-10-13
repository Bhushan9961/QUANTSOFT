<template>
    <section class="wrapper">
      <div class="container pb-3 pt-md-10">
        <h2 class="text-center mb-4">Application Form</h2>
        <div class="form-floating mb-4">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="alert alert-danger py-1" v-if="formError">
                {{formError}}
              </div>
              <div class="alert alert-success py-1" v-if="successMessage">
                {{ successMessage }}
              </div>
              <form @submit.prevent="submitForm">
                <div class="row mb-3">
                  <div class="col-md-6 animated fadeInLeft">
                    <label for="firstName">First Name</label>
                    <input
                      id="firstName"
                      v-model="formData.firstName"
                      type="text"
                      class="form-control animated-input"
                      placeholder="john"
                      required
                    />
                  </div>
                  <div class="col-md-6 animated fadeInRight">
                    <label for="lastName">Last Name</label>
                    <input
                      id="lastName"
                      v-model="formData.lastName"
                      type="text"
                      class="form-control animated-input"
                      placeholder="doe"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6 animated fadeInLeft">
                    <label for="email">Email Address</label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      class="form-control animated-input"
                      placeholder="john@email"
                      required
                    />
                  </div>
                  <div class="col-md-6 animated fadeInRight">
                    <label for="phone">Phone Number</label>
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      class="form-control animated-input"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6 animated fadeInLeft">
                    <label for="address1">Address Line 1</label>
                    <input
                      id="address1"
                      v-model="formData.address1"
                      type="text"
                      class="form-control animated-input"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div class="col-md-6 animated fadeInRight">
                    <label for="address2">Address Line 2</label>
                    <input
                      id="address2"
                      v-model="formData.address2"
                      type="text"
                      class="form-control animated-input"
                      placeholder="Enter your address (optional)"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6 animated fadeInLeft">
                    <label for="city">City</label>
                    <input
                      id="city"
                      v-model="formData.city"
                      type="text"
                      class="form-control animated-input"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  <div class="col-md-6 animated fadeInRight">
                    <label for="gender">Gender</label>
                    <select
                      id="gender"
                      v-model="formData.gender"
                      class="form-select animated-input"
                      required
                    >
                      <option value="" disabled>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6 animated fadeInLeft">
                    <label for="zipcode">Zip Code</label>
                    <input
                      id="zipcode"
                      v-model="formData.zipcode"
                      type="text"
                      class="form-control animated-input"
                      placeholder="Enter your zip code"
                      required
                    />
                  </div>
                  <div class="col-md-6 animated fadeInRight">
                    <label for="position">Position Desired</label>
                    <input
                      id="position"
                      v-model="formData.position"
                      type="text"
                      class="form-control animated-input"
                      placeholder="Enter the desired position"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6 animated fadeInLeft">
                    <label for="resume">Attach Resume</label>
                    <input
                      id="resume"
                      ref="resume"
                      type="file"
                      class="form-control animated-input"
                      @change="handleFileUpload"
                      required
                    />
                  </div>
                  <div class="col-md-6 animated fadeInRight">
                    <label for="message">Write a Message</label>
                    <textarea
                      id="message"
                      v-model="formData.message"
                      class="form-control animated-input"
                      rows="3"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-primary animated hover-bounce"
                      :disabled="isSubmitting"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.container {
  max-width: 900px;
}

.card {
  border-radius: 10px;
  background-color: #f8f9fa;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
select,
textarea {
  margin-bottom: 1rem;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

.fadeInRight {
  animation-name: fadeInRight;
}

.hover-bounce:hover {
  animation: bounce 0.3s ease;
}

.animated-input:focus {
  animation: inputFocus 0.3s forwards;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
}

@keyframes inputFocus {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

@keyframes inputFilled {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.98);
    background-color: #e6ffed;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  transition: transform 0.2s ease;
}
</style>

<script>
// import AOS from "aos";
import axios from "axios";

export default {
  name: "meditation",
  data() {
    
    return {
      formError:'',
      successMessage : '',
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
        message: "",
      },
    };
  },
  mounted() {
    // AOS.refresh();
  },
  methods: {
    handleFileUpload(event) {
      this.formData.resume = event.target.files[0];
    },
    async submitForm() {
      try {
        this.isSubmitting = true; 
        this.formError = '';
        const formData = new FormData();
        for (let key in this.formData) {
          formData.append(key, this.formData[key]);
        }

        const response = await axios.post(
          "https://quantsoftindia.com/careers.php",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.successMessage = 'Your application has been submitted successfully!'; 
        this.resetForm();
      } catch (error) {
        this.formError = 'There was an error submitting the form. Please try again.';
        setTimeout(() => {
            this.formError = ''; 
          }, 2000);
      }finally{
        this.isSubmitting = false;
      }
    },
  },
};
</script>


