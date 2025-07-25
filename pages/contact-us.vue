<template>
  <Navbar />
  <section class="w-full bg-white py-20 px-6">
    <h2 class="section-title text-center mb-4">Have questions?</h2>
    <p class="text-center text-gray-500 mb-8">
      We're here to help! Reach out to us via the form below.
    </p>
    <div class="max-w-6xl mx-auto p-6 border border-gray-400 rounded-lg justify-items-center">
      <!-- Step Indicators -->
      <ul class="steps w-full mb-6 text-gray-900">
        <li class="step" :class="{ 'step-info': step >= 1 }">Role</li>
        <li class="step" :class="{ 'step-info': step >= 2 }">Services</li>
        <li class="step" :class="{ 'step-info': step === 3 }">Submit</li>
      </ul>

      <!-- Step Panels -->
      <transition name="fade" mode="out-in">
        <div :key="step" class="py-2 justify-items-center">
          <!-- Step 1: Choose Role -->
          <div v-if="step === 1" class="space-y-4">
            <p class="text-lg text-center font-medium text-gray-900">I am a...</p>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="option in roleOptions"
                :key="option"
                @click="form.role = option"
                :class="[
                  'px-4 py-2 rounded-full border text-gray-900 transition ',
                  form.role === option
                    ? 'bg-accent text-gray-900 border-blue-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
                ]"
              >
                {{ option }}
              </button>
            </div>
            <div class="flex justify-center mt-4">
              <button class="btn w-24" :disabled="!form.role" @click="step++">Next</button>
            </div>
          </div>

          <!-- Step 2: Choose Service -->
          <div v-else-if="step === 2" class="space-y-4">
            <p class="text-lg text-center font-medium text-gray-900">
              I want to know more about...
            </p>
            <div class="flex flex-wrap gap-3 justify-center">
              <button
                v-for="option in serviceOptions"
                :key="option"
                @click="form.service = option"
                :class="[
                  'px-4 py-2 rounded-full border transition',
                  form.service === option
                    ? 'bg-accent text-gray-900 border-blue-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
                ]"
              >
                {{ option }}
              </button>
            </div>
            <div class="flex justify-center gap-4 mt-4">
              <button class="btn w-24" @click="step--">Back</button>
              <button
                class="w-24"
                :class="
                  form.service
                    ? 'btn'
                    : 'btn-disabled cursor-not-allowed bg-gray-300 rounded-md text-white '
                "
                :disabled="!form.service"
                @click="step++"
              >
                Next
              </button>
            </div>
          </div>

          <!-- Step 3: Summary + Email  -->
          <div v-else-if="step === 3" class="space-y-4 text-gray-900 text-md sm:text-lg">
            <label class="flex flex-col sm:flex-row gap-y-1 sm:items-center">
              <strong class="inline-block min-w-14 pl-1 sm:p-0">Tags:</strong>
              <span class="badge badge-outline mr-2">{{ form.role }}</span>
              <span class="badge badge-outline">{{ form.service }}</span>
            </label>

            <div class="mt-2">
              <label>
                <strong class="block sm:inline-block min-w-14 pl-1 sm:p-0">Email:</strong>
                <input
                  v-model="form.email"
                  type="email"
                  autocomplete="off"
                  placeholder="Enter your email"
                  class="w-[16rem] sm:w-[22rem] md:w-[29rem] lg:w-[42rem] bg-inherit border rounded p-2"
                  required
                />
              </label>
            </div>
            <div class="flex gap-4 mt-4 justify-center">
              <button class="btn w-24" @click="step--">Back</button>
              <button
                class="w-24"
                :class="
                  form.email
                    ? 'btn btn-primary'
                    : 'btn-disabled cursor-not-allowed bg-gray-300 rounded-md text-white'
                "
                :disabled="!form.email"
                @click="submitForm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div id="map" class="w-full h-96 mt-12"></div>
  </section>
</template>

<script setup>
useHead({
  title: "Contact Us | Stature",
  meta: [
    { name: "description", content: "Reach out to Stature Real Estate for more information." },
    { property: "og:title", content: "Contact Us | Stature" },
    { property: "og:description", content: "Get in touch with our team today!" },
  ],
});

import { onMounted } from "vue";
import { ref } from "vue";
import Navbar from "../components/shared/Navbar.vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDMprXTM1zULuOIypYUs__V0ShzdZDalIQ&callback=initMap&libraries=places";
  script.async = true;
  document.head.appendChild(script);

  window.initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 1.3491287231445312, lng: 103.71906280517578 },
      zoom: 16,
      mapId: "f018ed7f22300410f0288098",
      disableDefaultUI: false,
    });

    new google.maps.Marker({
      map,
      position: { lat: 1.3491287231445312, lng: 103.71906280517578 },
      title: "Stature Pte. Ltd.",
    });
  };
});

const step = ref(1);
const roleOptions = ["Tenant", "Agent", "Landlord", "Property Manager", "Developer", "Other"];
const serviceOptions = ["Property Assets", "Tenancy", "Integrated Contracts"];

const form = ref({
  role: "",
  service: "",
});

const submitForm = () => {
  const subject = encodeURIComponent(`Enquiry about ${form.value.service}`);
  const body = encodeURIComponent(
    `Hello Stature, I am a ${form.value.role} role, I would like to enquire more about ${form.value.service} matters. \nPlease get back to me at this email.\n\nThank you.`
  );
  const mailtoLink = `mailto:wingkit.leong@stature.com.sg?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
