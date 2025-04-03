<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-[#c11574] mb-8">Explore our Learning Programme</h2>
      
      <!-- Mission Statement -->
      <div class="max-w-4xl mx-auto text-center mb-12">
        <p class="text-lg text-gray-700">
          At the Fenix School, our mission is to Inspire, Engage, and Empower all
          learners to be Curious, Competent, Compassionate Changemakers.
        </p>
      </div>
      
      <!-- School Levels Grid - First Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <!-- Early Childhood -->
        <div class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/learning-program/kids-playing-with-colorful-game.jpg" 
            alt="Early Childhood Foundations" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">Early Childhood Foundations</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">For our youngest learners aged 3-5</p>
            </div>
          </div>
        </div>
        
        <!-- Elementary School -->
        <div class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/learning-program/full-shot-friends-sitting-blanket.jpg" 
            alt="Elementary School" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">Elementary School</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">Grades 1-5, building strong foundations</p>
            </div>
          </div>
        </div>
        
        <!-- Middle School -->
        <div class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/learning-program/male-student-reading-near-tables.jpg" 
            alt="Middle School" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">Middle School</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">Grades 6-8, embracing challenges</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- School Levels Grid - Second Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Upper School -->
        <div class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/learning-program/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg" 
            alt="Upper School" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">Upper School</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">Grades 9-12, preparing for the future</p>
            </div>
          </div>
        </div>
        
        <!-- Student Life -->
        <div class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/learning-program/talk-friends.jpg" 
            alt="Student Life" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">Student Life</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">Extracurricular activities and community</p>
            </div>
          </div>
        </div>
        
        <!-- Learning & ISP -->
        <div class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/learning-program/male-student-reading-near-tables.jpg" 
            alt="Learning & ISP" 
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">Learning & ISP</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">Our unique educational approach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
.group:hover p {
  transform: translateY(0);
  opacity: 1;
}
</style> 