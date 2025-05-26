<script setup lang="ts">
import Calendar, { CalendarDataSourceElement } from "js-year-calendar"
import "js-year-calendar/dist/js-year-calendar.min.css"

import tippy from "tippy.js"
import "tippy.js/dist/tippy.css"

import { onMounted, watch, ref } from "vue"
import { HolidaysTypes } from "date-holidays"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
const yearCalendar = ref<Calendar<CalendarDataSourceElement> | null>(null)

export type CalendarLocale = {
  days: string[]
  daysShort: string[]
  daysMin: string[]
  months: string[]
  monthsShort: string[]
  weekShort: string
  weekStart: number
}

const props = defineProps<{
  holidays: HolidaysTypes.Holiday[]
}>()

function isSameYMD(a: string|Date, b: string|Date) {
  const d1 = new Date(a)
  const d2 = new Date(b)
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth()    === d2.getMonth() &&
    d1.getDate()     === d2.getDate()
  )
}

const sqCalendarLocale: CalendarLocale = {
  days: ["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtunë"],
  daysShort: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
  daysMin: ["Di","Hë","Ma","Më","En","Pr","Sh"],
  months: ["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],
  monthsShort: ["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],
  weekShort: 'J',
  weekStart: 0
}


onMounted(() => {
// register Albanian locale
// @ts-ignore
  Calendar.locales['sq'] = sqCalendarLocale

// @ts-ignore
  yearCalendar.value = new Calendar('#calendar', {
    displayHeader: false,
    weekStart: 1,
    language: locale.value,
    startYear: new Date().getFullYear(),
    customDayRenderer: (element, currentDate) => {
      for (const hd of props.holidays) {
        if (isSameYMD(hd.date, currentDate)) {
          element.classList.add('holiday')
          // attach a Tippy tooltip
          tippy(element, {
            content: hd.name,
            appendTo: () => document.body,
            placement: 'top',
            arrow: true,
            theme: 'light-border',
            delay: [100, 50]
          })
          break
        }
      }
      return element
    }
  })
})

watch(locale, () => {
  yearCalendar.value?.setLanguage(locale.value)
})
</script>

<template>
  <div id="calendar"></div>
</template>

<style>
.holiday {
  color: #00c951 !important;
  font-weight: bold;
  border: 1px solid #00c951;
}
.holiday:hover {
  background-color: #00c951 !important;
  color: white !important;
}

.day {
  padding-left: 2px !important;
  padding-top: 4px !important;
  padding-right: 2px !important;
}

.month-container {
  margin-bottom: 10px;
}

.calendar {
  /* allow overflow so Tippy can position freely */
  overflow: visible !important;
}
</style>
