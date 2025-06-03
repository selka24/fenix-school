<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface SitemapSection {
  title: string
  links: { path: string; title: string }[]
}

const sections = computed<SitemapSection[]>(() => ([
  {
    title: t('about.title'),
    links: [
      { path: '/about', title: t('about.message') },
      { path: '/about/why-fenix', title: t('whyFenix') },
      { path: '/about/mission', title: t('about.mission') },
      { path: '/about/history', title: t('about.history') },
      { path: '/about/team', title: t('about.team.title') },
      { path: '/about/teachers', title: t('about.teachers.title') }
    ]
  },
  {
    title: t('programmes.prog'),
    links: [
      { path: '/curriculum', title: t('programmes.curriculum') },
      { path: '/curriculum/elementary', title: t('homePage.classes.elementary') },
      { path: '/curriculum/middle', title: t('homePage.classes.middle') },
      { path: '/curriculum/assessment-progress', title: t('programmes.assessment') }
    ]
  },
  {
    title: t('studentLife.title'),
    links: [
      { path: '/activities', title: t('studentLife.activities') },
      { path: '/activities/magazine', title: t('studentLife.magazine.title') },
      { path: '/activities/clubs', title: t('studentLife.clubs') },
      { path: '/calendar', title: t('calendar.title') }
    ]
  },
  {
    title: t('parents.title'),
    links: [
      { path: '/parents', title: t('parents.communication') },
      { path: '/parents/council', title: t('parents.council') },
      { path: '/parents/discipline', title: t('parents.discipline') },
      { path: '/parents/attendance', title: t('parents.attendance') },
      { path: '/parents/uniform', title: t('parents.uniform') }
    ]
  },
  {
    title: t('admissions.title'),
    links: [
      { path: '/admissions', title: t('admissions.overview') }
    ]
  },
  {
    title: t('partnerships.title'),
    links: [
      { path: '/partnerships/albania', title: t('partnerships.albania') },
      { path: '/partnerships/abroad', title: t('partnerships.abroad') }
    ]
  },
  {
    title: t('contact.contacts'),
    links: [
      { path: '/contact', title: t('contact.contacts') }
    ]
  },
  {
    title: t('jobs.apply'),
    links: [
      { path: '/jobs/criteria', title: t('jobs.criteria.title') },
      { path: '/jobs/what-we-offer', title: t('jobs.offer.title') }
    ]
  }
]))
</script>

<template>
  <div>
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="section in sections" :key="section.title" class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-primary mb-4">{{ section.title }}</h2>
        <ul class="space-y-2">
          <li v-for="link in section.links" :key="link.path">
            <router-link 
              :to="link.path" 
              class="text-gray-700 hover:text-primary hover:underline transition-colors"
            >
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling can be added here if needed */
</style> 