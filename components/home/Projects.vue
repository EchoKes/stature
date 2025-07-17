<template>
  <!-- Property Image Grid -->
  <section class="py-20 bg-white text-center">
    <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-12">Projects completed</h2>
    <div class="overflow-hidden space-y-8 max-w-screen-xl mx-auto">
      <!-- Top Row: scroll right -->
      <div class="relative overflow-hidden">
        <!-- Faders -->
        <div
          class="hidden xl:block pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"
        ></div>
        <div
          class="hidden xl:block pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"
        ></div>

        <!-- Scrollable content -->
        <div class="overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div
            class="flex w-max snap-start animate-scroll-right space-x-6 hover:pause-on-hover touch-pan-x"
          >
            <CarouselCard
              v-for="(project, index) in [...topRow, ...topRow]"
              :key="`top-${index}-${project.id}`"
              v-bind="project"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Row: scroll left -->
      <div class="relative overflow-hidden mt-6">
        <!-- Faders -->
        <div
          class="hidden xl:block pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"
        ></div>
        <div
          class="hidden xl:block pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"
        ></div>

        <!-- Scrollable content -->
        <div class="overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div
            class="flex w-max snap-start animate-scroll-left space-x-6 hover:pause-on-hover touch-pan-x"
          >
            <CarouselCard
              v-for="(project, index) in [...bottomRow, ...bottomRow]"
              :key="`bottom-${index}-${project.id}`"
              v-bind="project"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="mt-6 bg-teal-600 text-white px-4 py-2 rounded-md">View All →</button>
  </section>
</template>

<script setup>
import projectData from "~/public/json/properties.json";
import CarouselCard from "../shared/CarouselCard.vue";

const topRow = projectData.slice(0, Math.ceil(projectData.length / 2));
const bottomRow = projectData.slice(Math.ceil(projectData.length / 2));
</script>
