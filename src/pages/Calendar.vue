<script setup lang="ts">
// ES modules
import Holidays from 'date-holidays';
import {computed} from "vue";
import { useI18n } from 'vue-i18n'

// CommonJS
// const Holidays = require('date-holidays');
const { locale } = useI18n()

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

const holidays = computed(() => {
  hd.setLanguages([locale.value]);

  return hd.getHolidays(
    2026).filter(h => {
    // remove 1st April
    const [ymd] = h.date.split(' ');
    const [, month, day] = ymd.split('-');
    return !(month === '04' && day === '01');
  })
    .map(h => ({
      ...h,
      date: formatDate(h.date, locale.value as 'sq' | 'en')
    }))
})

</script>

<template>
  <div class="flex flex-col gap-3">
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