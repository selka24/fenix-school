<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-[#c11574] mb-12">Our Mission in Action</h2>
      
      <!-- News & Stories Header -->
      <div class="text-center mb-10">
        <span class="inline-block px-4 py-2 bg-[#c11574] text-white font-semibold">News & Stories</span>
      </div>
      
      <!-- News Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <!-- Article 1 -->
        <div class="flex flex-col">
          <a href="#" class="block mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
              alt="The Fusion of Grade 8 Engineering" 
              class="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
            />
          </a>
          <h3 class="text-lg font-bold text-gray-800 mb-2">The Fusion of Grade 8 Engineering</h3>
          <div class="text-sm text-gray-500 mb-3">February 28, 2023</div>
          <p class="text-gray-700 mb-4">
            This school year, Grade 8 students delved into the world of cooperative engineering through the hands-on project, inspired by teachers from across...
          </p>
          <a href="#" class="text-[#c11574] font-semibold hover:underline mt-auto">Read More</a>
        </div>
        
        <!-- Article 2 -->
        <div class="flex flex-col">
          <a href="#" class="block mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Preschool: Fostering Learning through Imagination" 
              class="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
            />
          </a>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Preschool: Fostering Learning through Imagination, Experimentation, and Play</h3>
          <div class="text-sm text-gray-500 mb-3">February 20, 2023</div>
          <p class="text-gray-700 mb-4">
            A simple question "How does bread work?" sparked a wonderful culinary exploration in our Preschool 3-year-old group and led to exciting hands-on learning opportunities.
          </p>
          <a href="#" class="text-[#c11574] font-semibold hover:underline mt-auto">Read More</a>
        </div>
        
        <!-- Article 3 -->
        <div class="flex flex-col">
          <a href="#" class="block mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Being a Scientist in Grade1" 
              class="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
            />
          </a>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Being a Scientist in Grade1</h3>
          <div class="text-sm text-gray-500 mb-3">February 13, 2023</div>
          <p class="text-gray-700 mb-4">
            Grade1 has been a season of discovery for our young scientists. Through careful observation, questioning, and guided experimentation, students can truly shine.
          </p>
          <a href="#" class="text-[#c11574] font-semibold hover:underline mt-auto">Read More</a>
        </div>
      </div>
      
      <!-- View All Button -->
      <div class="text-center">
        <a href="#" class="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">VIEW ALL NEWS</a>
      </div>
      
      <!-- Navigation Dots -->
      <div class="flex justify-center mt-8 space-x-2">
        <button class="w-2 h-2 rounded-full bg-gray-300"></button>
        <button class="w-2 h-2 rounded-full bg-[#c11574]"></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
/* Any component-specific styles can go here */
</style> 