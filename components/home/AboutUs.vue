<template>
  <!-- Who Are We -->
  <section class="py-6 sm:py-10 md:py-20 bg-gray-50 text-center" id="aboutUs">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-12" data-aos="fade-up">
      Who are we?
    </h2>

    <div
      class="flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-8 px-6 max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <!-- Left: Image -->
      <div
        class="w-[85%] md:w-full max-w-sm aspect-[5/3] sm:aspect-square md:aspect-[3/5] lg:aspect-[4/5] overflow-hidden rounded-t-full mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src="/images/aboutus.jpg"
          alt="Building"
          class="w-full h-full object-cover object-center sm:object-bottom"
        />
      </div>

      <!-- Right: Text Content -->
      <div class="text-left max-w-xl mx-2 sm:mx-auto" data-aos="fade-left" data-aos-delay="400">
        <!-- Stats -->
        <div class="flex flex-row gap-8 mb-6 font-bold">
          <div>
            <AnimatedCounter :end="15" :duration="3" />
            <p>Years of Excellence</p>
          </div>
          <div>
            <AnimatedCounter :end="20" :duration="4" />
            <p>Projects Managed</p>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-700 leading-relaxed">
          We're more than just a real estate company — we're your trusted partner in property.
          <br /><br />
          Founded by Mr. Leong Wing Kit, a seasoned expert with over 20 years of real estate
          experience, our goal is to help our partners benefit from cost-effective, personalized
          solutions. Whether you're buying, selling, leasing, or managing a property, we're
          committed to building lasting relationships — not just closing transactions.
        </p>

        <!-- CTA Button -->
        <button class="mt-6 bg-black hover:bg-gray-800 transition text-white px-6 py-2 rounded-lg">
          Learn More →
        </button>
      </div>
    </div>
  </section>

  <!-- Image overlay-->
  <div class="relative h-[0px]">
    <div
      class="absolute -right-8 sm:right-0 -translate-x-1/2 top-0 -translate-y-1/3 w-1/4 aspect-square rounded-full overflow-hidden shadow-lg border-4 border-[#7791BF] z-20"
    >
      <img src="/images/director.jpg" alt="Director" class="w-full h-full object-cover" />
    </div>
  </div>

  <!-- Director's profile -->
  <section class="py-12 sm:py-16 md:py-20 bg-[#EFF1F9]">
    <!-- First half with smaller right margin -->
    <div class="max-w-6xl mx-auto px-6 lg:pr-[30%]">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-12 text-[#7791BF]">
        Meet Our Director
      </h2>
      <p class="text-gray-700">
        Mr. Leong is the Director of Stature Real Estate Enterprises Pte Ltd and oversees the
        company's operations and business strategy.
      </p>
      <br />
      <p class="text-gray-700">
        With over 20 years of experience in the real estate industry, Mr. Leong has managed a wide
        range of residential, commercial, and industrial properties in Singapore and Indonesia. His
        expertise spans property management, tenancy and contracts management, and project
        oversight.
      </p>
      <br />
    </div>

    <!-- Second half with full margin -->
    <div class="max-w-6xl mx-auto px-6">
      <p class="text-gray-700">
        Before founding Stature, he led the Asset Management Department at Colliers International.
        Prior to that, he co-founded Optimuz Real Estate Consultants, which later merged with
        Colliers. As Director of Property Management at Optimuz, he played a key role in expanding
        the firm's portfolio to over 25 projects and was actively involved in the company's
        operations.
      </p>
      <br />
      <p class="text-gray-700">
        Earlier in his career, Mr. Leong worked with Jones Lang Wootton (later Jones Lang LaSalle)
        in both Singapore and Indonesia. He headed the Residential Property Management Department in
        Jakarta and Surabaya, helping to grow it into a leading player in the Indonesian market. His
        clients included major developers like PT Lippo Group and PT Sinar Mas Group.
      </p>
      <br />
      <p class="text-gray-700">
        Mr. Leong holds a BSc in Estate Management from the UK and is a certified Fire Safety
        Manager.
      </p>
    </div>
  </section>
</template>

<script setup>
import AnimatedCounter from "../shared/AnimatedCounter.vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true, // whether animation should happen only once
  });
});
</script>
