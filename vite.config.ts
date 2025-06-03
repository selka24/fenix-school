import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { imagetools } from 'vite-imagetools'
// import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    imagetools(),
    // sitemap({
    //   hostname: 'https://fenixschool.al',
    //   dynamicRoutes: [
    //     '/',
    //     '/about',
    //     '/about/why-fenix',
    //     '/about/mission',
    //     '/about/history',
    //     '/about/team',
    //     '/about/teachers',
    //     '/curriculum',
    //     '/curriculum/assessment-progress',
    //     '/curriculum/elementary',
    //     '/curriculum/middle',
    //     '/activities',
    //     '/activities/clubs',
    //     '/activities/magazine',
    //     '/parents',
    //     '/parents/council',
    //     '/parents/discipline',
    //     '/parents/uniform',
    //     '/parents/attendance',
    //     '/admissions',
    //     '/partnerships/albania',
    //     '/partnerships/abroad',
    //     '/contact',
    //     '/calendar',
    //     '/jobs',
    //     '/jobs/criteria',
    //     '/jobs/what-we-offer'
    //   ],
    //   lastmod: {
    //     '*': new Date()
    //   },
    //   changefreq: {
    //     '*': 'weekly',
    //     '/': 'daily'
    //   },
    //   priority: {
    //     '*': 0.8,
    //     '/': 1.0
    //   },
    //   outDir: 'dist'
    // })
  ],
})
