<script setup lang="ts">
// ES modules
import Holidays from 'date-holidays';
import {computed, onMounted} from "vue";
import { useI18n } from 'vue-i18n'
import YearCalendar from "../components/YearCalendar.vue";

const { locale } = useI18n()

const currentYear = new Date().getFullYear();

const monthNames = {
  en:  [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ],
  sq: [
    'Janar','Shkurt','Mars','Prill','Maj','Qershor',
    'Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'
  ],
}

function formatDate(input: string, lang: 'sq' | 'en') {
  const date = new Date(input);
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();

  return `${dd} ${monthNames[lang][mm]} ${yyyy}`;
}

// Create an instance for Albania
const hd = new Holidays('AL');

const filterHolidays = computed(() => {
  return hd.getHolidays().filter(h => {
    console.log('dite pushimi:: ' ,h.date);

    // remove 1st April
    const [ymd] = h.date.split(' ');
    const [, month, day] = ymd.split('-');
    return !(month === '04' && day === '01');
  })
})

const holidays = computed(() => {
  hd.setLanguages([locale.value]);

  return filterHolidays.value.map(h => ({
      ...h,
      date: formatDate(h.date, locale.value as 'sq' | 'en')
    }))
})


</script>

<template>
  <div class="flex flex-col gap-3">
    <YearCalendar :holidays="filterHolidays" class="mb-14"/>

    <h3 class="text-2xl font-bold">
      {{$t('calendar.subTitle')}} {{currentYear }}</h3>
    <div v-for="h in holidays" :key="h.date" class="border-b-1 py-3 flex justify-between items-center first:border-t-1 gap-10">
      <div>
        {{h.name}}
      </div>
      <div class="min-w-max">
        {{h.date}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>