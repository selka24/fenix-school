<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-primary mb-12">
        {{$t('home.missionAction')}}
      </h2>
      
      <!-- News & Stories Header -->
      <div class="text-center mb-10">
        <span class="inline-block px-4 py-2 bg-primary text-white font-semibold">
          {{$t('studentLife.activities')}}
        </span>
      </div>
      
      <!-- News Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <!-- Article 1 -->
        <div v-for="(actv, idx) in splicedAcitvities" :key="`actv-${idx}`" class="flex flex-col">
          <a href="#" class="block mb-4 overflow-hidden">
            <img 
              :src="actv.image"
              alt="The Fusion of Grade 8 Engineering" 
              class="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
            />
          </a>
          <h3 class="text-lg font-bold text-gray-800 mb-2">
            {{actv.title}}
          </h3>
          <p class="text-gray-700 mb-4">
            {{actv.description}}
          </p>
        </div>
      </div>
      
      <!-- View All Button -->
      <div class="text-center">
        <router-link to="/activities" class="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition uppercase">{{$t('home.viewAll')}}</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
import {activities} from "../core/globalData.ts";

const splicedAcitvities = activities.slice(0, 3)
</script>

<style scoped>
/* Any component-specific styles can go here */
</style> 