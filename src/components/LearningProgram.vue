<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-primary mb-8">
          Njihuni me programin tonë mësimor
      </h2>
      
      <!-- Mission Statement -->
      <div class="max-w-4xl mx-auto text-center mb-12">
        <p class="text-lg text-gray-700">
            Në Shkollën "Fenix", nxënësit ndahen në grupe sipas moshës dhe niveleve të zhvillimit të tyre akademik, për t'iu ofruar një mësim të përshtatur që përmbush nevojat e tyre.
        </p>
      </div>
      
      <!-- School Levels Grid - First Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Early Childhood -->
        <router-link  v-for="{title, image, description, link} in programmes" :to="`/curriculum/${link}`" :key="title" class="relative h-64 group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img 
            :src="`/images/learning-program/${image}`"
            alt="Early Childhood Foundations" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6 transition-all duration-300 group-hover:from-primary/80 group-hover:to-primary/40">
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">{{title}}</h3>
              <p class="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">
                {{description}}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const programmes = [
  {
    title: t('homePage.classes.elementary'),
    link: 'elementary',
    description: t('homePage.classes.elementaryDescription'),
    image: 'full-shot-friends-sitting-blanket.jpg'
  },
  {
    title: t('homePage.classes.middle'),
    link: 'middle',
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