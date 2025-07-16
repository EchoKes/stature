<template>
  <div class="card bg-base-100 w-52 h-40 sm:w-80 sm:h-48 image-full shadow-sm">
    <figure>
      <img :src="img" alt="Property Image" />
    </figure>
    <div class="card-body font-semibold">
      <h2 class="card-title text-sm sm:text-lg">{{ name }}</h2>
      <div class="card-actions justify-end">
        <div class="badge badge-primary text-xs sm:text-sm">{{ region }}</div>
        <div class="badge badge-secondary text-xs sm:text-sm">{{ units }} Units</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
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
    type: Number,
    default: "TBA",
  },
});
</script>
