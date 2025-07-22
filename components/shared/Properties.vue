<template>
  <Navbar/>
  <div class="p-4 pt-12 bg-white">
    <h1 class="text-5xl text-black font-bold text-center my-12" data-aos="fade-up">Properties Managed</h1>

    <!-- Region Filter -->  
    <div class="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up" data-aos-delay="100">
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
    <div class="xl:mx-14 sm:mx-2 md:mx-6 lg:mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        v-for="property in filteredProperties"
        :key="property.id"
        @click="openModal(property)"
        class="card text-black shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:outline outline-2 rounded-xl cursor-pointer" data-aos="fade-up"
      >
        <figure>
          <img
            :src="property.image"
            :alt="property.name"
            class="h-72 w-full object-cover"
          />
        </figure>
        <div class="card-body px-4 py-3 bg-gradient-to-r from-indigo-500/10 to-teal-400/10 rounded-b-xl">
          <h2 class="card-title font-bold text-lg text-black">
            {{ property.name }}
          </h2>
          <p class="text-gray-800 text-sm">
            {{ truncateText(stripHtml(property.description)) }}
          </p>
          <div class="mt-2 flex justify items-center">
            <div class="badge badge-info text-white font-medium">
              {{ property.region }}
            </div>
            <div>&nbsp;</div>
            <div class="badge badge-primary text-white font-medium">
              {{ property.units }} Units
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <dialog ref="modalRef" class="modal" @click.self="closeModal">
      <div class="modal-box max-w-4xl bg-white text-black p-0">
        
        <!-- Image -->
        <img
          v-if="modalProperty?.image"
          :src="modalProperty.image"
          :alt="modalProperty.name"
          class="w-full h-72 object-cover rounded-t-lg"
        />

        <!-- Content -->
        <div class="p-6">
          <h3 class="font-bold text-xl mb-2">{{ modalProperty?.name }}</h3>
          <p class="text-sm text-gray-800 whitespace-pre-line" v-html="modalProperty?.description"></p>
          <div class="flex mt-4">
            <span class="badge badge-info text-white font-medium">
              {{ modalProperty?.region }}
            </span>
            <span>&nbsp;</span>
            <span class="badge badge-primary text-white font-medium">
              {{ modalProperty?.units }} Units
            </span>
          </div>
          <div class="modal-action mt-6">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>
  
<script setup>
  import { ref, computed, onMounted } from 'vue'

  const properties = ref([])
  const selectedRegion = ref('All')

  const modalRef = ref(null)
  const modalProperty = ref(null)

  const openModal = (property) => {
    modalProperty.value = property
    modalRef.value?.showModal()
  }

  const closeModal = () => {
    modalRef.value?.close()
  }
  const stripHtml = (html) => {
  if (!html) return ''
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}
  onMounted(async () => {
    const res = await fetch('/json/properties.json') // adjust path if needed
    properties.value = await res.json()
  })

  const regions = computed(() => {
    const regionSet = new Set(properties.value.map(p => p.region?.trim()))
    return ['All', ...Array.from(regionSet).filter(Boolean)]
  })

  const filteredProperties = computed(() => {
    if (selectedRegion.value === 'All') return properties.value
    return properties.value.filter(p =>
      p.region?.trim().toLowerCase() === selectedRegion.value.toLowerCase()
    )
  })

  const truncateText = (text, maxLength = 200) => {
    if (!text) return ''
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }
  import AOS from 'aos'
  import 'aos/dist/aos.css'
import Navbar from './Navbar.vue'

  onMounted(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    })
  })
</script>
  <style scoped>
  .card-title {
    font-weight: 600;
  }
  </style>