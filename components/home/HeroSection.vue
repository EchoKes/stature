<template>
  <section class="relative h-screen text-white overflow-hidden">
    <Navbar />

    <!-- Background Image -->
    <img
      src="/images/hero-bg.jpg"
      alt="Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- Overlay Content -->
    <div class="absolute inset-0 bg-black/50 z-10 flex items-center">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl" data-aos="fade-up">
          <h1 class="text-3xl md:text-5xl font-bold mb-6">
            Providing Reliable Real Estate <br />
            Management Services Since 2008.
          </h1>
          <div class="flex flex-wrap gap-6" data-aos="fade-up" data-aos-delay="100">
            <button
              class="bg-transparent text-white text-lg font-semibold border-b-2 border-transparent hover:border-white transition duration-300"
            >
              <NuxtLink to="/properties">Projects →</NuxtLink>
            </button>
            <button
              class="bg-transparent text-white text-lg font-semibold border-b-2 border-transparent hover:border-white transition duration-300"
            >
              <NuxtLink to="/contact-us">Contact Us →</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "~/components/shared/Navbar.vue";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>
