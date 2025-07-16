<template>
  <!-- Property Image Grid -->
  <section class="py-20 bg-white text-center">
    <h2 class="text-2xl font-bold mb-6">Property Images goes here</h2>
    <div class="grid grid-cols-3 gap-4 px-6 max-w-5xl mx-auto">
      <div v-for="n in 6" :key="n" class="bg-gray-300 h-40" />
    </div>
    <button class="mt-6 bg-teal-600 text-white px-4 py-2 rounded-md">View All →</button>
  </section>
</template>
