<template>
    <section class="px-6 py-10 bg-[#f6f2eb]">
      <h2 class="text-4xl font-bold text-center mb-8">Properties Managed</h2>
  
      <!-- Filter Tabs -->
      <div class="flex justify-center gap-2 flex-wrap mb-10">
        <button
          v-for="region in regions"
          :key="region"
          @click="selectedRegion = region"
          :class="[selectedRegion === region ? 'bg-teal-600 text-white' : 'bg-white text-black', 'px-4 py-2 rounded-full font-medium shadow']"
        >
          {{ region }}
        </button>
      </div>
  
      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          <img :src="property.image" alt="property.name" class="h-48 object-cover w-full" />
          <div class="bg-[#dde6ee] p-4 flex flex-col flex-1">
            <h3 class="font-semibold text-lg text-gray-900">
              {{ property.name }}
              <span class="ml-2 text-xs bg-blue-300 px-2 py-1 rounded-full">{{ property.region }}</span>
              <span class="ml-1 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">{{ property.units }} Units</span>
            </h3>
            <p class="text-sm text-gray-700 mt-2" v-html="property.description"></p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import propertiesData from '/assets/json/properties.json';
  
  export default {
    data() {
      return {
        selectedRegion: 'All',
        properties: propertiesData
      };
    },
    computed: {
      regions() {
        const unique = [...new Set(this.properties.map(p => p.region))];
        return ['All', ...unique];
      },
      filteredProperties() {
        return this.selectedRegion === 'All'
          ? this.properties
          : this.properties.filter(p => p.region === this.selectedRegion);
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    transition: all 0.3s ease;
  }
  button:hover {
    transform: scale(1.05);
  }
  </style>