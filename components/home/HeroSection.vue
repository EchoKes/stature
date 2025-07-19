<template>
  <!-- Hero Section -->
  <section class="relative h-screen text-white">
    <img
      src="../../public/images/hero-bg.jpg"
      alt="Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 z-10">
      <div class="ml-0 sm:ml-[1rem] md:ml-[5rem] lg:ml-[7rem] xl:ml-[9rem]">
        <h1 class="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-up">
          Providing Reliable Real Estate <br />
          Management Services Since 2008.
        </h1>
        <div class="flex space-x-3 sm:space-x-3 md:space-x-5 lg:space-x-7 xl:space-x-10">
          <button
            class="bg-transparent text-base sm:text-lg lg:text-xl text-white border-b-2 border-transparent hover:border-white transition duration-300" data-aos="fade-up"
          >
            Projects →
          </button>
          <button
            class="bg-transparent text-base sm:text-lg lg:text-xl text-white border-b-2 border-transparent hover:border-white transition duration-300" data-aos="fade-up"
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
        <a href="#projects" class="hover:underline">Projects</a>
        <a href="#servicesOffered" class="hover:underline">Services</a>
        <a href="#aboutUs" class="hover:underline">About Us</a>
        <a href="#" class="hover:underline">Contact Us</a>
      </div>
    </nav>
  </section>
</template>

<script>
  import AOS from 'aos'
  import 'aos/dist/aos.css'

  onMounted(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    })
  })
</script>