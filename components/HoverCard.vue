<template>
  <div class="group relative w-[400px] h-[370px]">
    <!-- Floating corner icon (outside the clipped area) -->
    <div
      class="absolute top-0 right-0 z-10 w-[3rem] h-[3rem] bg-white rounded-full flex items-center justify-center group-hover:bg-[#dbeb50]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 3h7m0 0v7m0-7L10 14"
        />
      </svg>
    </div>

    <!-- card background -->
    <div
      class="card-services relative bg-white flex flex-col justify-between text-left w-full h-full overflow-hidden z-10 before:absolute before:content-[''] before:top-[-67%] before:right-[35%] before:w-full before:h-full before:bg-[#dbeb50] before:-rotate-45 before:origin-top-right before:scale-x-0 before:scale-y-[200%] before:transition-transform before:duration-[600ms] group-hover:before:scale-x-[200%]"
    >
      <div class="text-3xl font-semibold leading-tight m-6 z-10">
        {{ title }}
      </div>

      <div class="w-full overflow-hidden flex items-center">
        <img
          :src="img"
          alt="Service Image"
          class="object-contain w-full h-auto transition-transform duration-300 translate-y-1 group-hover:-translate-y-1"
        />
      </div>
    </div>
  </div>

  <!-- Service full details -->
</template>

<script setup>
import { ref } from "vue";
const isExpanded = ref(false);
defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    default: "summary",
  },
  highlights: {
    type: Array,
    default: () => [],
  },
});
</script>
