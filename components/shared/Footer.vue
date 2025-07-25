<template>
  <footer class="bg-black text-white px-6 md:px-20 pt-12 pb-8 text-sm">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-20">
      <!-- Left logo and contact -->
      <div class="flex-1 space-y-4">
        <div>
          <h2 class="text-2xl font-bold tracking-widest">STATURE</h2>
          <p class="text-gray-400">Your trusted property partner</p>
        </div>
        <div>
          <a href="tel:+6567792711" class="text-white">+65 6779-2711</a>
          <p class="text-white">
            <a href="https://www.stature.com.sg">https://www.stature.com.sg</a>
          </p>
        </div>
      </div>

      <!-- Info columns -->
      <div class="flex-1 grid grid-cols-2 md:grid-cols-2 gap-8">
        <div>
          <h3 class="mb-3 font-semibold text-white">Address</h3>
          <p class="text-gray-400">
            <a href="https://maps.app.goo.gl/Kmb9ni7yaC7gCpTR6"
              >Block 504 Jurong West Street 51<br />
              #03-209 <br />
              Singapore 640504</a
            >
          </p>
        </div>

        <div>
          <h3 class="mb-3 font-semibold text-white">Contact Us</h3>
          <p class="text-gray-400"><a href="/contact-us">Form</a></p>
          <br />
          <p class="text-gray-400">
            <a href="https://wa.me/+?text=Hi%20there%20I%came%from%your%website!">Whatsapp</a>
          </p>
          <br />
          <p class="text-gray-400">
            <a href="mailto:wingkit.leong@stature.com.sg">wingkit.leong@stature.com.sg</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 my-8"></div>

    <!-- Bottom -->
    <div class="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
      <p>Copyright © Stature</p>
      <!-- <p>By E&K Group</p> -->
      <div class="flex space-x-6 mt-4 md:mt-0">
        <p><a href="/data-protection">Privacy</a></p>
      </div>
    </div>
  </footer>
</template>
