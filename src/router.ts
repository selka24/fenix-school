const homeBreadcrumb = {title: 'home.title', link: '/'}

const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                component: () => import('./pages/Home.vue'),
                meta: {
                    titleKey: 'home.title',
                    layout: 'empty'
                }
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        component: () => import('./pages/about/About.vue'),
                        meta: {
                            titleKey: 'about.title',
                            test: 'test',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                      path: 'why-fenix',
                      component: () => import('./pages/about/WhyUs.vue'),
                      meta: {
                          titleKey: 'about.why.title',
                          breadcrumb: [
                              homeBreadcrumb,
                              {title: 'about.why.title', link: '/about'},
                          ]
                      }
                    },
                    {
                        path: 'mission',
                        component: () => import('./pages/about/Mission.vue'),
                        meta: {
                            titleKey: 'about.mission',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'about.title', link: '/about'},
                            ]
                        }
                    },
                    {
                        path: 'history',
                        component: () => import('./pages/about/History.vue'),
                        meta: {
                            titleKey: 'about.history',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'about.title', link: '/about'},
                            ]
                        }
                    },
                    {
                        path: 'team',
                        component: () => import('./pages/about/Team.vue'),
                        meta: {
                            titleKey: 'about.team.title',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'about.team.title', link: '/team'},
                            ]
                        }
                    }
                ],
            },
            {
                path: 'curriculum',
                children: [
                    {
                        path: '',
                        component: () => import('./pages/programmes/Curriculum.vue'),
                        meta: {
                            titleKey: 'programmes.curriculum',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                        path: 'assessment-progress',
                        component: () => import('./pages/programmes/AssessmentProgress.vue'),
                        meta: {
                            titleKey: 'programmes.assessment',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'programmes.title', link: '/programmes'},
                            ]
                        }
                    },
                    {
                        path: 'elementary',
                        component: () => import('./pages/programmes/Elementary.vue'),
                        meta: {
                            titleKey: '',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'homePage.classes.elementary', link: '/curriculum/elementary'},
                            ]
                        }
                    },
                    {
                        path: 'middle',
                        component: () => import('./pages/programmes/Middle.vue'),
                        meta: {
                            titleKey: '',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'homePage.classes.middle', link: '/curriculum/middle'},
                            ]
                        }
                    },
                ]
            },
            {
                path: 'activities',
                children: [
                    {
                        path: '',
                        component: () => import('./pages/activities/Activities.vue'),
                        meta: {
                            titleKey: 'studentLife.activities',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                        path: 'clubs',
                        component: () => import('./pages/activities/Clubs.vue'),
                        meta: {
                            titleKey: 'studentLife.clubs',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'studentLife.activities', link: '/activities'},
                            ]
                        }
                    },
                    {
                        path: 'magazine',
                        component: () => import('./pages/activities/Magazine.vue'),
                        meta: {
                            titleKey: 'studentLife.magazine.title',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'studentLife.activities', link: '/activities'},
                            ]
                        }
                    }
                ]
            },
            {
                path: 'parents',
                children: [
                    {
                        path: '',
                        component: () => import('./pages/parents/Parents.vue'),
                        meta: {
                            titleKey: 'parents.communication',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                        path: 'council',
                        component: () => import('./pages/parents/Council.vue'),
                        meta: {
                            titleKey: 'parents.council',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'parents.communication', link: '/parents'},
                            ]
                        }
                    },
                    {
                        path: 'discipline',
                        component: () => import('./pages/parents/DisciplineCounseling.vue'),
                        meta: {
                            titleKey: 'parents.discipline',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'parents.communication', link: '/parents'},
                            ]
                        }
                    },
                    {
                        path: 'uniform',
                        component: () => import('./pages/parents/Uniform.vue'),
                        meta: {
                            titleKey: 'parents.uniform',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'parents.communication', link: '/parents'},
                            ]
                        }
                    },
                    {
                        path: 'attendance',
                        component: () => import('./pages/parents/Attendance.vue'),
                        meta: {
                            titleKey: 'parents.attendance',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'parents.communication', link: '/parents'},
                            ]
                        }
                    }
                ]
            },
            {
                path: 'admissions',
                children: [
                    {
                        path: '',
                        component: () => import('./pages/admissions/Overview.vue'),
                        meta: {
                            titleKey: 'admissions.overview',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    }
                ]
            },
            {
                path: 'partnerships',
                children: [
                    {
                        path: 'albania',
                        component: () => import('./pages/partnerships/PartnersAlb.vue'),
                        meta: {
                            titleKey: 'partnerships.title',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                        path: 'abroad',
                        component: () => import('./pages/partnerships/PartnersAbroad.vue'),
                        meta: {
                            titleKey: 'partnerships.title',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                ]
            },
            {
                path: 'contact',
                children: [
                    {
                        path: '/contact',
                        component: () => import('./pages/Contact.vue'),
                        meta: {
                            titleKey: 'contact.contacts',
                            breadcrumb: [
                              homeBreadcrumb
                            ]
                        }
                    }
                ]
            },
            {
                path: 'calendar',
                component: () => import('./pages/Calendar.vue'),
                meta: {
                    titleKey: 'calendar.title',
                    breadcrumb: [
                        homeBreadcrumb
                    ]
                }
            },
            {
                path: 'jobs',
                children: [
                    {
                        path: '',
                        component: () => import('./pages/jobs/Criteria.vue'),
                        meta: {
                            titleKey: 'jobs.criteria.title',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                        path: 'criteria',
                        component: () => import('./pages/jobs/Criteria.vue'),
                        meta: {
                            titleKey: 'jobs.criteria.title',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    },
                    {
                        path: 'what-we-offer',
                        component: () => import('./pages/jobs/WhatWeOffer.vue'),
                        meta: {
                            titleKey: 'jobs.offer.title',
                            breadcrumb: [
                                homeBreadcrumb,
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./pages/NotFound.vue'),
    },
]

export default routes;