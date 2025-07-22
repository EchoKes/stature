<template>
  <div class="card bg-base-100 w-52 h-40 sm:w-80 sm:h-48 image-full shadow-sm">
    <img
      :src="image"
      alt="Property Image"
      class="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
    />

    <div
      class="card-body relative z-10 font-semibold bg-black/50 bg-gradient-to-b from-black/60 to-transparent text-white rounded-lg"
    >
      <h2 class="card-title text-sm sm:text-lg">{{ name }}</h2>
      <div class="card-actions absolute bottom-4 justify-end">
        <div class="badge badge-primary text-xs sm:text-sm">{{ region }}</div>
        <div class="badge badge-secondary text-xs sm:text-sm">{{ units }} Units</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    default: "TBA",
  },
  units: {
    type: [Number,String],
    default: "TBA",
  },
});
</script>
