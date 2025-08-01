<template>
  <section class="py-20 px-4 md:px-16 bg-[#F7F2EA]" id="servicesOffered">
    <h2 class="section-title" data-aos="fade-up">
      Management services that <br />
      <span class="text-black">we offer</span>
    </h2>

    <div class="flex flex-wrap justify-center gap-8" data-aos="fade-up">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        v-bind="service"
        @click="openModal(service)"
      />
    </div>

    <!-- Service Modal -->
    <input type="checkbox" id="service_modal" class="modal-toggle" v-model="isModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box w-[90vw] md:w-[60vw] max-w-none bg-white">
        <label for="service_modal" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </label>

        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{{ activeService?.title }}</h3>
        <p class="text-sm sm:text-md md:text-lg mb-4">{{ activeService?.summary }}</p>
        <ul class="list-disc pl-5 text-sm sm:text-md md:text-lg space-y-1">
          <li v-for="(item, i) in activeService?.highlights" :key="i">
            <p class="font-normal">{{ item }}</p>
          </li>
        </ul>
      </div>
      <label class="modal-backdrop" for="service_modal">Close</label>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from "../shared/ServiceCard.vue";
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true, // whether animation should happen only once
  });
});

const isModalOpen = ref(false);
const activeService = ref(null);

function openModal(service) {
  activeService.value = service;
  isModalOpen.value = true;
}

const services = [
  {
    img: "/images/property.svg",
    title: "Property Asset",
    summary:
      "Stature specializes in managing commercial, industrial, and residential properties, aiming to maximize value, reduce costs, and increase returns.",
    highlights: [
      "Tailored investment strategies",
      "Improved fiscal controls",
      "Enhanced letting profiles",
      "Maximized rental income",
      "Portfolio handled by experienced Director",
      "Independent, client-aligned service agreements",
    ],
  },
  {
    img: "/images/tenancy.svg",
    title: "Tenancy",
    summary:
      "We provide comprehensive tenancy management services, ensuring smooth operations and tenant satisfaction.",
    highlights: [
      "Tenant screening and onboarding",
      "Lease management and renewals",
      "Maintenance coordination",
      "Rent collection and financial reporting",
      "24/7 tenant support",
    ],
  },
  {
    img: "/images/contract.svg",
    title: "Integrated Contracts",
    summary:
      "Our integrated contracts service streamlines property management processes, ensuring compliance and efficiency.",
    highlights: [
      "Automated contract management",
      "Compliance tracking and reporting",
      "Centralized document storage",
      "Integration with property management systems",
      "Customizable contract templates",
    ],
  },
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
