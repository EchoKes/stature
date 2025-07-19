<template>
  <div
    class="group relative w-[295px] h-[273px] md:w-[400px] md:h-[370px] cursor-pointer"
    @click="$emit('click')"
  >
    <!-- Floating corner icon (outside the clipped area) -->
    <div
      class="absolute top-0 right-0 z-10 w-[2.2rem] h-[2.2rem] md:w-[3rem] md:h-[3rem] bg-white rounded-full flex items-center justify-center group-hover:bg-teal-600"
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
      class="card-services-tiny md:card-services-default relative bg-white flex flex-col justify-between text-left hover:text-white  w-full h-full overflow-hidden z-10 before:absolute before:content-[''] before:top-[-67%] before:right-[35%] before:w-full before:h-full before:bg-teal-600 before:-rotate-45 before:origin-top-right before:scale-x-0 before:scale-y-[200%] before:transition-transform before:duration-[600ms] group-hover:before:scale-x-[200%]" 
    >
      <div class="text-3xl font-semibold leading-tight m-6 mb-0 z-10">
        {{ title }}
      </div>

      <div class="w-full overflow-hidden flex items-center pt-2">
        <img
          draggable="false"
          :src="img"
          alt="Service Image"
          class="object-contain w-full h-auto transition-transform duration-300 translate-y-3 group-hover:-translate-y-0"
        />
      </div>
    </div>
  </div>

  <!-- Service full details -->
</template>

<script setup>
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
defineEmits(["click"]);
</script>
