<template>
  <section class="py-16 bg-[url('https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center text-white">
    <div class="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center mb-16 text-white">By The Numbers</h2>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Stat 1 -->
        <div>
          <div class="text-6xl font-bold mb-4">60</div>
          <div class="text-lg font-medium">Student nationalities</div>
        </div>
        
        <!-- Stat 2 -->
        <div>
          <div class="text-6xl font-bold mb-4">950</div>
          <div class="text-lg font-medium">Students enrolled</div>
        </div>
        
        <!-- Stat 3 -->
        <div>
          <div class="text-6xl font-bold mb-4">45</div>
          <div class="text-lg font-medium">Languages spoken across ISP</div>
        </div>
      </div>
      
      <!-- Navigation Dots -->
      <div class="flex justify-center mt-16 space-x-2">
        <button class="w-3 h-3 rounded-full bg-white"></button>
        <button class="w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
section {
  position: relative;
}

/* Ensure proper z-index stacking */
section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
</style> 