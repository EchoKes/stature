<template>
  <section id="servicesOffered">
    <div class="py-12 px-4 md:px-16 bg-[#F7F2EA]">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-14" data-aos="fade-up">
        Management services that <br />
        <span class="text-black">we offer</span>
      </h2>

      <div class="flex flex-wrap justify-center gap-8">
        <ServiceCard
          img="/images/property.svg"
          title="Property Asset"
          summary="Stature specializes in managing commercial, industrial, and residential properties, aiming to maximize value, reduce costs, and increase returns."
          :highlights="[
            'Tailored investment strategies',
            'Improved fiscal controls',
            'Enhanced letting profiles',
            'Maximized rental income',
            'Portfolio handled by experienced Director',
            'Independent, client-aligned service agreements',
          ]" data-aos="fade-left" data-aos-delay="100"
        />
        <ServiceCard
          img="/images/tenancy.svg"
          title="Tenancy"
          summary="We provide comprehensive tenancy management services, ensuring smooth operations and tenant satisfaction."
          :highlights="[
            'Tenant screening and onboarding',
            'Lease management and renewals',
            'Maintenance coordination',
            'Rent collection and financial reporting',
            '24/7 tenant support',
          ]" data-aos="fade-left" data-aos-delay="300"
        />
        <ServiceCard
          img="/images/contract.svg"
          title="Integrated Contracts"
          summary="Our integrated contracts service streamlines property management processes, ensuring compliance and efficiency."
          :highlights="[
            'Automated contract management',
            'Compliance tracking and reporting',
            'Centralized document storage',
            'Integration with property management systems',
            'Customizable contract templates',
          ]" data-aos="fade-left" data-aos-delay="500"
        />
      </div>

      <!-- Full-width additional details below -->
    </div>
  </section>
</template>

<script setup>
  import ServiceCard from "../shared/ServiceCard.vue";
  import AOS from 'aos'
  import 'aos/dist/aos.css'

  onMounted(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    })
  })
</script>

<style scoped>
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.4s ease;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
