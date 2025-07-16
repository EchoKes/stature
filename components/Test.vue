<template>
  <main class="bg-white text-black">
    <!-- Hero Section -->
    <section class="relative h-screen text-white">
      <img
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 z-10">
        <div class="ml-0 sm:ml-[1rem] md:ml-[5rem] lg:ml-[7rem] xl:ml-[9rem]">
          <h1 class="text-3xl md:text-5xl font-bold mb-6">
            Providing Reliable Real Estate <br />
            Management Services Since 2008.
          </h1>
          <div class="flex space-x-3 sm:space-x-3 md:space-x-5 lg:space-x-7 xl:space-x-10">
            <button
              class="bg-transparent text-base sm:text-lg lg:text-xl text-white border-b-2 border-transparent hover:border-white transition duration-300"
            >
              Projects →
            </button>
            <button
              class="bg-transparent text-base sm:text-lg lg:text-xl text-white border-b-2 border-transparent hover:border-white transition duration-300"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </div>
      <nav
        class="absolute top-0 w-full p-4 flex justify-between items-center text-sm font-medium z-20"
      >
        <div><NuxtImg src="/images/stature-logo.svg" alt="Property" /></div>
        <div class="space-x-6 hidden md:flex">
          <a href="#" class="hover:underline">Projects</a>
          <a href="#" class="hover:underline">Services</a>
          <a href="#" class="hover:underline">About Us</a>
          <a href="#" class="hover:underline">Contact Us</a>
        </div>
      </nav>
    </section>

    <!-- Who Are We -->
    <section class="py-6 sm:py-10 md:py-20 bg-gray-100 text-center">
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-12">Who are we?</h2>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-8 px-6 max-w-6xl mx-auto"
      >
        <!-- Left: Image -->
        <div
          class="w-[85%] md:w-full max-w-sm aspect-[5/3] sm:aspect-square md:aspect-[3/5] lg:aspect-[4/5] overflow-hidden rounded-t-full mx-auto"
        >
          <img
            src="/images/aboutus.jpg"
            alt="Building"
            class="w-full h-full object-cover object-center sm:object-bottom"
          />
        </div>

        <!-- Right: Text Content -->
        <div class="text-left max-w-xl mx-2 sm:mx-auto">
          <!-- Stats -->
          <div class="flex flex-row gap-8 mb-6 font-bold">
            <div>
              <AnimatedCounter :end="15" :duration="2" />
              <p>Years of Excellence</p>
            </div>
            <div>
              <AnimatedCounter :end="20" :duration="3" />
              <p>Projects Managed</p>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-700 leading-relaxed">
            We're more than just a real estate company — we're your trusted partner in property.
            <br /><br />
            Founded by Mr. Leong Wing Kit, a seasoned expert with over 20 years of real estate
            experience, our goal is to help our partners benefit from cost-effective, personalized
            solutions. Whether you're buying, selling, leasing, or managing a property, we're
            committed to building lasting relationships — not just closing transactions.
          </p>

          <!-- CTA Button -->
          <button
            class="mt-6 bg-black hover:bg-gray-800 transition text-white px-6 py-2 rounded-lg"
          >
            Learn More →
          </button>
        </div>
      </div>
    </section>

    <!-- Property Image Grid -->
    <section class="py-20 bg-white text-center">
      <h2 class="text-2xl font-bold mb-6">Property Images goes here</h2>
      <div class="grid grid-cols-3 gap-4 px-6 max-w-5xl mx-auto">
        <div v-for="n in 6" :key="n" class="bg-gray-300 h-40" />
      </div>
      <button class="mt-6 bg-teal-600 text-white px-4 py-2 rounded-md">View All →</button>
    </section>
    <template>
      <div class="py-12 px-4 md:px-16 bg-[#F7F2EA]">
        <h2 class="text-3xl md:text-5xl font-bold text-center mb-14">
          Management services that <br />
          <span class="text-black">we offer</span>
        </h2>

        <div class="flex flex-wrap justify-center gap-8">
          <HoverCard
            img="/images/property.svg"
            title="Property Asset"
            summary="Stature specializes in managing commercial, industrial, and residential properties, aiming to maximize value, reduce costs, and increase returns."
            :highlights="[
              'Tailored investment strategies',
              'Improved fiscal controls',
              'Enhanced letting profiles',
              'Maximized rental income',
              'Portfolio handled by experienced Director',
              'Independent, client-aligned service agreements',
            ]"
          />
          <HoverCard
            img="/images/tenancy.svg"
            title="Tenancy"
            summary="We provide comprehensive tenancy management services, ensuring smooth operations and tenant satisfaction."
            :highlights="[
              'Tenant screening and onboarding',
              'Lease management and renewals',
              'Maintenance coordination',
              'Rent collection and financial reporting',
              '24/7 tenant support',
            ]"
          />
          <HoverCard
            img="/images/contract.svg"
            title="Integrated Contracts"
            summary="Our integrated contracts service streamlines property management processes, ensuring compliance and efficiency."
            :highlights="[
              'Automated contract management',
              'Compliance tracking and reporting',
              'Centralized document storage',
              'Integration with property management systems',
              'Customizable contract templates',
            ]"
          />
        </div>

        <!-- Full-width additional details below -->
        <transition name="fade-slide" mode="out-in">
          <div
            v-if="activeCard"
            key="details"
            class="mt-8 w-full bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-500"
          >
            <template v-if="activeCard === 'property'">
              <h3 class="text-lg font-semibold mb-2">🔍 Additional details about Property Asset</h3>
              <ul class="list-disc pl-6 space-y-1 text-gray-800">
                <li>Annual asset reports</li>
                <li>Real estate performance analytics</li>
                <li>Compliance & regulatory summaries</li>
              </ul>
            </template>

            <template v-else-if="activeCard === 'tenancy'">
              <h3 class="text-lg font-semibold mb-2">🗂 Additional details about Tenancy</h3>
              <ul class="list-disc pl-6 space-y-1 text-gray-800">
                <li>Tenant management tools</li>
                <li>Lease contract digitization</li>
                <li>Payment reminders</li>
              </ul>
            </template>

            <template v-else-if="activeCard === 'contracts'">
              <h3 class="text-lg font-semibold mb-2">
                📄 Additional details about Integrated Contracts
              </h3>
              <ul class="list-disc pl-6 space-y-1 text-gray-800">
                <li>Automated billing systems</li>
                <li>Unified legal documentation</li>
                <li>Smart contract integration</li>
              </ul>
            </template>
          </div>
        </transition>
      </div>
    </template>
  </main>
</template>
<script>
import AnimatedCounter from "./AnimatedCounter.vue";
import HoverCard from "./HoverCard.vue";
import HoverCard2 from "./HoverCard2.vue";
import HoverCard3 from "./HoverCard3.vue";
import { ref } from "vue";
const activeCard = ref(null);

function toggleDetails(card) {
  activeCard.value = activeCard.value === card ? null : card;
}
export default {
  components: {
    AnimatedCounter,
    ServiceCard: {
      props: ["title", "image"],
      template: `
                <div class="bg-white p-4 shadow-lg rounded-xl">
                    <div class="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                    <img :src="image" :alt="title" class="w-full h-full object-cover" />
                    </div>
                    <h3 class="font-semibold text-lg">{{ title }}</h3>
                </div>
                `,
    },
  },
};
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
