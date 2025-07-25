<template>
  <NuxtPage />
  <Footer />
</template>

<script setup>
import Footer from "./components/shared/Footer.vue";

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Stature Real Estate",
        url: "https://stature.com.sg",
        logo: "https://stature.com.sg/images/stature-logo.svg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+65 6779 2711",
          contactType: "Customer Service",
        },
      }),
    },
  ],
});
</script>
