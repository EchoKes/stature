<template>
    <div class="p-4">
      <h1 class="text-4xl font-bold text-center m-20 mb-10">Properties Managed</h1>
  
      <!-- Region Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="region in regions"
          :key="region"
          @click="selectedRegion = region"
          class="btn btn-sm"
          :class="{ 'btn-primary': selectedRegion === region }"
        >
          {{ region }}
        </button>
      </div>
  
      <!-- Grid of Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
            v-for="property in filteredProperties"
            :key="property.id"
            class="card bg-[#E2E7EC] text-black shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:outline outline-2"
        >
            <figure class="px-4 pt-4">
            <img
                :src="property.image"
                :alt="property.name"
                class="rounded-xl h-36 w-full object-cover"
            />
            </figure>
            <div class="card-body px-4 py-3">
            <h2 class="card-title font-bold text-lg text-black">
                {{ property.name }}
            </h2>
            <p class="text-gray-700 text-sm" v-html="property.description"></p>
            <div class="mt-2 flex justify-between items-center">
                <div class="badge badge-info text-white font-medium">
                {{ property.region }}
                </div>
                <div class="badge badge-primary text-white font-medium">
                {{ property.units }} Units
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import properties from '/assets/json/properties.json'
  
  const selectedRegion = ref('All')
  const regions = ['All', ...new Set(properties.map(p => p.region).filter(Boolean))]
  
  const filteredProperties = computed(() => {
    return selectedRegion.value === 'All'
      ? properties
      : properties.filter(p => p.region === selectedRegion.value)
  })
  </script>
  
  <style scoped>
  .card-title {
    font-weight: 600;
  }
  </style>