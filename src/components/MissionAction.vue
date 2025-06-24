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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-10">
        <!-- Article 1 -->
        <ActivityCard v-for="(actv, idx) in activities.main" :activity="actv" :key="`actv-${idx}`" />
        <template v-if="showOtherActivities">
          <h2 class="text-4xl font-bold text-center text-primary mt-12 col-span-full">
            {{$t('home.otherActv')}}
          </h2>
          <ActivityCard v-for="(actv, idx) in activities.other" :activity="actv" :key="`other-actv-${idx}`" />
        </template>
      </div>
      
      <!-- View All Button -->
      <div class="text-center" v-if="!showOtherActivities">
        <button @click="() => showOtherActivities = true" class="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition uppercase">{{$t('home.viewAll')}}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
//@ts-nocheck
import VisitsImg from '../assets/images/activities/Visits.webp?w=400&format=webp&quality=80'
import FairImg from '../assets/images/activities/Fair.webp?w=400&format=webp&quality=80'
import ActivitiesImg from '../assets/images/activities/Lojëra dhe Aktivitetet Sportive.webp?format=webp&quality=80'
import EnvCapsImg from '../assets/images/activities/caps.jpg?w=400&format=webp&quality=80'
import HouseLeavesImg from '../assets/images/activities/shtepia-gjethe.jpg?w=400&format=webp&quality=80'
import SilvinjoImg from '../assets/images/activities/silvinjo.jpg?w=400&format=webp&quality=80'
import ScienceImg from '../assets/images/activities/panairi-shkencor.jpg?w=400&format=webp&quality=80'
import DanceImg from '../assets/images/activities/valle-tropojane.jpg?w=400&format=webp&quality=80'
import {useI18n} from 'vue-i18n'
import {computed, ref} from 'vue'
import ActivityCard from "./ActivityCard.vue";

const {tm} = useI18n()

const imageMapping = [
  VisitsImg,
  FairImg,
  ActivitiesImg,
  EnvCapsImg,
  HouseLeavesImg,
  SilvinjoImg,
  ScienceImg,
  DanceImg
]

const showOtherActivities = ref(false);

const activities = computed<{
  image: string;
  title: string;
  description: string;
}[]>(() => {
  const allActv = tm('activitiesPage.items');
  return {
    main: allActv.slice(0, 3).map((item, i) => {
      return {
        image: imageMapping[i],
        title: item.title,
        description: item.description
      }
    }),
    other: allActv.slice(6, 11).map((item, i) => {
      return {
        image: imageMapping[i + 3],
        title: item.title,
        description: item.description
      }
    })
  }
})
</script>

<style scoped>
/* Any component-specific styles can go here */
</style> 