<template>
  <section class="py-6 sm:py-10 md:py-20 bg-gray-50 text-center min-h-screen">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-12 text-black">
      Organization Structure
    </h2>
    <div
      class="flex flex-col lg:flex-row items-center justify-center gap-x-12 gap-y-4 px-6 max-w-6xl mx-auto"
    >
      <!-- Left: Image -->
      <div class="w-full max-w-xl aspect-[4/5] overflow-hidden">
        <img
          draggable="false"
          src="/images/org_struct.svg"
          alt="Organization Structure"
          class="w-full h-full"
        />
      </div>

      <!-- Right: Text Content -->
      <div class="text-left mx-2 sm:mx-auto max-w-2xl lg:max-w-lg">
        <p class="text-gray-700 leading-relaxed">
          <strong>Stature Real Estate Enterprises Pte Ltd.</strong> believes that being small is an
          advantage as it enables the company to be cost-effective and nimble, responding to the
          rapid changing demands of the customers. <br /><br />
          Stature is built on the experiences of key people, people who are suitably qualified to
          provide expertise in their distinctive areas to serve the diverse needs of clients as
          shown in the organization chart.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Organization Structure | Stature Real Estate",
  meta: [
    {
      name: "description",
      content:
        "Discover Stature Real Estate's organization structure and meet the key people who drive our property management expertise.",
    },
    { name: "author", content: "Stature Real Estate" },

    { property: "og:title", content: "Organization Structure | Stature Real Estate" },
    {
      property: "og:description",
      content:
        "Learn about the team structure and leadership behind Stature Real Estate's property management services.",
    },
    { property: "og:image", content: "/images/og-image.png" },
    { property: "og:url", content: "https://stature.com.sg/organization-structure" },
    { property: "og:type", content: "website" },
  ],
});
</script>
