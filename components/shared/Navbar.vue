<template>
    <div>
      <!-- NAVBAR -->
      <header class="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between text-white backdrop-blur-md bg-black/40">
        <!-- Left: Logo -->
        <div class="text-yellow-400 font-bold text-sm uppercase tracking-widest">Stature</div>
  
        <!-- Center: Breadcrumbs (hidden on mobile) -->
        <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 text-sm space-x-1 items-center">
          <NuxtLink to="/" class="hover:underline flex items-center space-x-1">
            <Icon name="material-symbols:home" />
            <span>Home</span>
          </NuxtLink>
          <span>&gt;</span>
          <NuxtLink
            v-if="$route.name !== 'index'"
            :to="$route.fullPath"
            class="hover:underline"
          >
            {{ formatRouteName($route.name) }}
          </NuxtLink>
        </div>
  
        <!-- Right: Desktop nav -->
        <nav class="hidden md:flex space-x-6 text-sm font-medium">
            <a href="/">Home</a>
            <a href="/properties">Properties</a>
            <a href="/#aboutUs">About Us</a>
            <a href="/about">About</a>
            <a href="/contact-us">Contact</a>
        </nav>
  
        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </header>
  
      <!-- MOBILE MENU OVERLAY -->
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex flex-col items-center justify-center space-y-8 text-white text-xl md:hidden"
      >
        <NuxtLink to="/" @click="isOpen = false">Home</NuxtLink>
        <NuxtLink to="/projects" @click="isOpen = false">Projects</NuxtLink>
        <NuxtLink to="/services" @click="isOpen = false">Services</NuxtLink>
        <NuxtLink to="/about" @click="isOpen = false">About</NuxtLink>
        <NuxtLink to="/contact" @click="isOpen = false">Contact</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  
  function formatRouteName(name) {
    if (!name || name === 'index') return ''
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  </script>