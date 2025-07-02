// src/metaMap.ts
import type { RouteMeta } from 'vue-router'

interface Breadcrumb { title: string; link: string }

export interface Banner {
  key: string
  position?: string
}

export const metaMap: Record<string, RouteMeta & { breadcrumb?: Breadcrumb[], banner?: string | Banner}> = {
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
    ],
    banner: {
      key: 'history',
      position: 'center 20%'
    },
  },
  '/about/main-board': {
    titleKey: 'about.mainBoard.title',
    breadcrumb: [
      { title: 'home.title',         link: '/' },
      { title: 'about.title',        link: '/about' }
    ],
    banner: 'default'
  },
  '/about/directors-board': {
    titleKey: 'about.directorsBoard.title',
    breadcrumb: [
      { title: 'home.title',         link: '/' },
      { title: 'about.title',        link: '/about' }
    ],
    banner: { key: 'directors', position: 'center 24%' }
  },
  '/about/team': {
    titleKey: 'about.team.title',
    breadcrumb: [
      { title: 'home.title',         link: '/' },
      { title: 'about.title',   link: '/about' }
    ],
    banner: {
      key:'team',
      position: 'center 20%'
    }
  },
  '/about/teachers': {
    titleKey: 'about.teachers.title',
    breadcrumb: [
      { title: 'home.title',  link: '/' },
      { title: 'about.title', link: '/about' }
    ],
    banner: { key: 'staff', position: 'center 30%'}
  },

  '/curriculum': {
    titleKey: 'programmes.curriculum',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    banner: 'curriculum'
  },
  '/curriculum/assessment-progress': {
    titleKey: 'programmes.assessment',
    breadcrumb: [
      { title: 'home.title',        link: '/' },
      { title: 'programmes.title',  link: '/curriculum' }
    ],
    banner: 'progress'
  },
  '/curriculum/elementary': {
    titleKey: '',
    breadcrumb: [
      { title: 'home.title',                    link: '/' },
      { title: 'programmes.title',  link: '/curriculum' },
      { title: 'homePage.classes.elementary',  link: '' }
    ],
    banner: 'primary'
  },
  '/curriculum/middle': {
    titleKey: '',
    breadcrumb: [
      { title: 'home.title',                 link: '/' },
      { title: 'homePage.classes.middle',   link: '/curriculum/middle' }
    ],
    banner: 'secondary'
  },

  '/activities': {
    titleKey: 'studentLife.activities',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    banner: { key: 'activities', position: 'center 35%' }
  },
  '/activities/clubs': {
    titleKey: 'studentLife.clubs',
    breadcrumb: [
      { title: 'home.title',                link: '/' },
      { title: 'studentLife.activities',    link: '/activities' }
    ],
    banner: {
      key: 'clubs',
      position: 'center 20%'
    }
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
    banner: 'parents'
  },
  '/parents/council': {
    titleKey: 'parents.council',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
  },
  '/parents/discipline-counseling': {
    titleKey: 'parents.discipline',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
  },
  '/parents/uniform': {
    titleKey: 'parents.uniform',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
  },
  '/parents/attendance': {
    titleKey: 'parents.attendance',
    breadcrumb: [
      { title: 'home.title',               link: '/' },
      { title: 'parents.communication',    link: '/parents' }
    ],
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
    banner: 'al'
  },
  '/partnerships/abroad': {
    titleKey: 'partnerships.title',
    breadcrumb: [
      { title: 'home.title', link: '/' }
    ],
    banner: 'abroad'
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
  },
  '/privacy-policy': {
    titleKey: 'privacy.title',
    breadcrumb: [
        { title: 'home.title', link: '/' }
    ]
  }
}
