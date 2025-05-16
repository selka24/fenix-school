import {computed} from 'vue'
import {useI18n} from 'vue-i18n'
import {useRoute} from "vue-router";
import { defineAsyncComponent, type Component } from 'vue'

export interface MenuItem {
  title: string
  link: string
  component?: Component
}

export interface NavigationMenu {
  title: string
  link: string
  submenu?: MenuItem[]
}

export const useNavigation = () => {
  const { t } = useI18n()
  const route = useRoute();

  const navigationItems = computed<NavigationMenu[]>(() => [
    {
      title: t('about.title'),
      link: '/about',
      submenu: [
        { title: t('about.message'), link: '/about' },
        { title: t('whyFenix'), link: '/about/why-fenix' },
        { title: t('about.mission'), link: '/about/mission' },
        { title: t('about.history'), link: '/about/history' },
        { title: t('about.team.title'), link: '/about/team' },
        { title: '', link: '', component: defineAsyncComponent(() =>  import('../components/FenixAnthem.vue'))},
      ]
    },
    {
      title: t('programmes.prog'),
      link: '/curriculum',
      submenu: [
        { title: t('programmes.curriculum'), link: '/curriculum' },
        { title: t('homePage.classes.elementary'), link: '/curriculum/elementary' },
        { title: t('homePage.classes.middle'), link: '/curriculum/middle' },
        { title: t('programmes.assessment'), link: '/curriculum/assessment-progress' },
      ]
    },
    {
      title: t('studentLife.title'),
      link: '/activities',
      submenu: [
        { title: t('studentLife.activities'), link: '/activities' },
        { title: t('studentLife.magazine.title'), link: '/activities/magazine' },
        { title: t('studentLife.clubs'), link: '/activities/clubs' },
        { title: t('calendar.title'), link: '/calendar' },
      ]
    },
    {
      title: t('parents.title'),
      link: '/parents/council',
      submenu: [
        { title: t('parents.communication'), link: '/parents' },
        { title: t('parents.council'), link: '/parents/council' },
        { title: t('parents.discipline'), link: '/parents/discipline' },
        { title: t('parents.attendance'), link: '/parents/attendance' },
        { title: t('parents.uniform'), link: '/parents/uniform' }
      ]
    },
    {
      title: t('admissions.title'),
      link: '/admissions',
      submenu: [
        { title: t('admissions.overview'), link: '/admissions' },
      ]
    },
    {
      title: t('partnerships.title'),
      link: '/partnerships/albania',
      submenu: [
        { title: t('partnerships.albania'), link: '/partnerships/albania' },
        { title: t('partnerships.abroad'), link: '/partnerships/abroad' }
      ]
    },
    {
      title: t('contact.contacts'),
      link: '/contact',
      submenu: [
        { title: t('contact.contacts'), link: '/contact' },
      ]
    }
  ])

  const activeMenu = computed(() => {
    const path = route.path
    return navigationItems.value.find(item => item.link === path);
  })

  const extraMobileMenus = computed<NavigationMenu[]>(() => ([
    {
      title: t('jobs.apply'),
      link: '/jobs',
      submenu: [
        { title: t('jobs.criteria.title'), link: '/jobs/criteria' },
        { title: t('jobs.offer.title'), link: '/jobs/what-we-offer' },
      ]
    }
  ]))

  return {
    activeMenu,
    extraMobileMenus,
    navigationItems
  }
}
