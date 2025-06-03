// src/metaMap.ts
import type { RouteMeta } from 'vue-router'

interface Breadcrumb { title: string; link: string }

export const metaMap: Record<string, RouteMeta & { breadcrumb?: Breadcrumb[], bannerKey?: string }> = {
  '/': {
    titleKey: 'home.title',
    layout: 'empty'
  },

  '/sitemap': {
    titleKey: 'sitemap',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  },

  '/about': {
    titleKey: 'about.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
  },
  '/about/why-fenix': {
    titleKey: 'about.why.title',
    breadcrumb: [
      { title: 'home.title',       link: '/' },
      { title: 'about.why.title',  link: '/about' }
    ]
  },
  '/about/mission': {
    titleKey: 'about.mission',
    breadcrumb: [
      { title: 'home.title',     link: '/' },
      { title: 'about.title',    link: '/about' }
    ]
  },
  '/about/history': {
    titleKey: 'about.history',
    breadcrumb: [
      { title: 'home.title',     link: '/' },
      { title: 'about.title',    link: '/about' }
    ]
  },
  '/about/team': {
    titleKey: 'about.team.title',
    breadcrumb: [
      { title: 'home.title',         link: '/' },
      { title: 'about.team.title',   link: '/team' }
    ]
  },
  '/about/teachers': {
    titleKey: 'about.teachers.title',
    breadcrumb: [
      { title: 'home.title',  link: '/' },
      { title: 'about.title', link: '/about' }
    ]
  },

  '/curriculum': {
    titleKey: 'programmes.curriculum',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    bannerKey: 'curriculum'
  },
  '/curriculum/assessment-progress': {
    titleKey: 'programmes.assessment',
    breadcrumb: [
      { title: 'home.title',        link: '/' },
      { title: 'programmes.title',  link: '/curriculum' }
    ],
    bannerKey: 'progress'
  },
  '/curriculum/elementary': {
    titleKey: '',
    breadcrumb: [
      { title: 'home.title',                    link: '/' },
      { title: 'programmes.title',  link: '/curriculum' },
      { title: 'homePage.classes.elementary',  link: '' }
    ],
    bannerKey: 'primary'
  },
  '/curriculum/middle': {
    titleKey: '',
    breadcrumb: [
      { title: 'home.title',                 link: '/' },
      { title: 'homePage.classes.middle',   link: '/curriculum/middle' }
    ],
    bannerKey: 'secondary'
  },

  '/activities': {
    titleKey: 'studentLife.activities',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    bannerKey: 'activities'
  },
  '/activities/clubs': {
    titleKey: 'studentLife.clubs',
    breadcrumb: [
      { title: 'home.title',                link: '/' },
      { title: 'studentLife.activities',    link: '/activities' }
    ],
    bannerKey: 'clubs'
  },
  '/activities/magazine': {
    titleKey: 'studentLife.magazine.title',
    breadcrumb: [
      { title: 'home.title',                link: '/' },
      { title: 'studentLife.activities',    link: '/activities' }
    ]
  },

  '/parents': {
    titleKey: 'parents.communication',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    bannerKey: 'parents'
  },
  '/parents/council': {
    titleKey: 'parents.council',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
    bannerKey: 'parents'
  },
  '/parents/discipline': {
    titleKey: 'parents.discipline',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
    bannerKey: 'parents'
  },
  '/parents/uniform': {
    titleKey: 'parents.uniform',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
    bannerKey: 'parents'
  },
  '/parents/attendance': {
    titleKey: 'parents.attendance',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ]
  },

  '/admissions': {
    titleKey: 'admissions.overview',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  },

  '/partnerships/albania': {
    titleKey: 'partnerships.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    bannerKey: 'al'
  },
  '/partnerships/abroad': {
    titleKey: 'partnerships.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    bannerKey: 'abroad'
  },

  '/contact': {
    titleKey: 'contact.contacts',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  },

  '/calendar': {
    titleKey: 'calendar.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  },

  '/jobs': {
    titleKey: 'jobs.criteria.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  },
  '/jobs/criteria': {
    titleKey: 'jobs.criteria.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  },
  '/jobs/what-we-offer': {
    titleKey: 'jobs.offer.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ]
  }
}
