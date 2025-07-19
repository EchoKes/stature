<template>
  <main class="bg-white text-black scroll-smooth">
    <HeroSection />
    <AboutUs />
    <Projects />
    <ServicesOffered />
  </main>
</template>

<script setup>
import HeroSection from "~/components/home/HeroSection.vue";
import AboutUs from "~/components/home/AboutUs.vue";
import Projects from "~/components/home/Projects.vue";
import ServicesOffered from "~/components/home/ServicesOffered.vue";
</script>
