import {computed} from 'vue'
import {useI18n} from 'vue-i18n'
import {useRoute} from "vue-router";

export interface MenuItem {
  title: string
  link: string
}

export interface NavigationMenu {
  title: string
  link: string
  submenu: MenuItem[]
}

export function useNavigation() {
  const { t } = useI18n()
  const route = useRoute();

  const activeMenu = computed(() => {
    const path = route.path
    return navigationItems.value.find(item => item.link === path);
  })

  const navigationItems = computed<NavigationMenu[]>(() => [
    {
      title: t('about.title'),
      link: '/about',
      submenu: [
        { title: t('about.message'), link: '/about' },
        { title: t('about.mission'), link: '/about/mission' },
        { title: t('about.history'), link: '/about/history' }
      ]
    },
    {
      title: t('programmes.title'),
      link: '/programmes',
      submenu: [
        { title: t('programmes.curriculum'), link: '/programmes' },
        { title: t('programmes.assessment'), link: '/programmes/assessment-progress' },
        { title: t('programmes.levels'), link: '/programmes/classes' }
      ]
    },
    {
      title: t('studentLife.title'),
      link: '/activities',
      submenu: [
        { title: t('studentLife.activities'), link: '/activities' },
        { title: t('studentLife.gallery'), link: '/activities/gallery' },
        { title: t('studentLife.clubs'), link: '/activities/clubs' }
      ]
    },
    {
      title: t('parents.title'),
      link: '/parents',
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
        { title: t('admissions.fees'), link: '/admissions/fees' },
        { title: t('admissions.scholarships'), link: '/admissions/scholarships' }
      ]
    },
    {
      title: t('partnerships.title'),
      link: '/partnerships',
      submenu: [
        { title: t('partnerships.albania'), link: '/partnerships#albania' },
        { title: t('partnerships.abroad'), link: '/partnerships#abroad' }
      ]
    },
    {
      title: t('contact.title'),
      link: '/contact',
      submenu: [
        { title: t('contact.form'), link: '/contact/form' },
        { title: t('contact.location'), link: '/contact/location' },
        { title: t('contact.info'), link: '/contact/info' }
      ]
    }
  ])

  return {
    activeMenu,
    navigationItems
  }
}
