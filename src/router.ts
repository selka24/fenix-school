// import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {path: '/', component: () => import('./pages/Home.vue'), meta: {title: 'Home'}},
]

// const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
// })

export default routes;