<template>
  <main class="bg-white text-black scroll-smooth">
    <HeroSection />
    <AboutUs />
    <Projects />
    <ServicesOffered />
  </main>
</template>

<script setup>
useHead({
  title: "Home | Stature Real Estate",
  meta: [
    {
      name: "description",
      content:
        "Stature Real Estate offers professional property management, tenancy services, and integrated contracts tailored to your needs.",
    },
    { name: "author", content: "Stature Real Estate" },
    { property: "og:title", content: "Home | Stature Real Estate" },
    {
      property: "og:description",
      content:
        "Professional property management, tenancy services, and integrated contracts tailored to your needs.",
    },
    { property: "og:image", content: "/images/stature-logo.png" },
    { property: "og:url", content: "https://stature.com.sg" },
    { property: "og:type", content: "website" },
  ],
});
import HeroSection from "~/components/home/HeroSection.vue";
import AboutUs from "~/components/home/AboutUs.vue";
import Projects from "~/components/home/Projects.vue";
import ServicesOffered from "~/components/home/ServicesOffered.vue";
</script>
