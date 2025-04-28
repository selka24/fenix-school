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
                        path: 'curriculum',
                        component: () => import('./pages/programmes/Curriculum.vue'),
                        meta: {
                            titleKey: 'programmes.title',
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
                path: 'programmes',
                children: [
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
                        path: 'classes',
                        component: () => import('./pages/programmes/Classes.vue'),
                        meta: {
                            titleKey: 'programmes.levels',
                            breadcrumb: [
                                homeBreadcrumb,
                                {title: 'programmes.title', link: '/programmes'},
                            ]
                        }
                    }
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
                        path: '',
                        component: () => import('./pages/partnerships/Partners.vue'),
                        meta: {
                            titleKey: 'partnerships.title',
                            breadcrumb: [
                                homeBreadcrumb
                            ]
                        }
                    }
                ]
            },
            {
                path: 'contact',
                children: [
                    {
                        path: '/contact',
                        component: () => import('./pages/Contact.vue'),
                        meta: {
                            titleKey: 'contact.title',
                            breadcrumb: [
                              homeBreadcrumb
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