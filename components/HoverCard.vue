<template>
    <div @click="isExpanded = !isExpanded" class="cursor-pointer">
      <div class="card bg-white rounded-2xl shadow-md p-6">
        <p class="font-bold text-2xl mb-2">Property Asset</p>
        <p class="text-gray-600 mb-2">Lorem ipsum dolor sit amet.</p>
        <p class="text-sm text-gray-500">Jan 1, 2024</p>
      </div>
      <div v-if="isExpanded" class="mt-4 w-full bg-gray-100 rounded-xl p-4">
        <h4 class="font-semibold mb-2">🔍 Additional details about Property Asset</h4>
        <ul class="list-disc pl-6 text-sm text-gray-700">
          <li>Annual asset reports</li>
          <li>Real estate performance analytics</li>
          <li>Compliance & regulatory summaries</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const isExpanded = ref(false)
  </script>
  <style scoped>
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 36px;
    border-radius: 24px;
    background: transparent;
    color: #000000;
    z-index: 1;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00897B;
    border-radius: inherit;
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: skew(-24deg);
    clip-path: circle(0% at 50% 50%);
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .content .heading {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;
    z-index: 1;
  }
  
  .content .para {
    z-index: 1;
    opacity: 0.8;
    font-size: 18px;
  }
  
  .content .para-sm {
    font-size: 16px;
  }
  
  .card:hover::before {
    opacity: 1;
    transform: skew(0deg);
    clip-path: circle(140.9% at 0 0);
  }
  
  .card:hover .content {
    color: #FFFFFF;
  }
  
  /* Expanded Section */
  .expanded-content {
    background-color: #f8f8f8;
    border-left: 4px solid #00897B;
    margin-top: 16px;
    padding: 16px 24px;
    border-radius: 12px;
    width: 320px;
  }
  
  /* Animation */
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