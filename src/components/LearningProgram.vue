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
        <div v-for="{title, image, description} in programmes" :key="title" class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            :src="`/images/learning-program/${image}`"
            alt="Early Childhood Foundations" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-[#990066]/80 group-hover:to-[#990066]/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">{{title}}</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">
                {{description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const programmes = [
  {
    title: t('homePage.classes.preparation'),
    description: t('homePage.classes.prepDescription'),
    image: 'kids-playing-with-colorful-game.jpg'
  },
  {
    title: t('homePage.classes.elementary'),
    description: t('homePage.classes.elementaryDescription'),
    image: 'full-shot-friends-sitting-blanket.jpg'
  },
  {
    title: t('homePage.classes.middle'),
    description: t('homePage.classes.middleDescription'),
    image: 'male-student-reading-near-tables.jpg'
  },
]
</script>

<style scoped>
.group:hover p {
  transform: translateY(0);
  opacity: 1;
}
</style> 