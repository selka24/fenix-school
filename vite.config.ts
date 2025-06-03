import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { imagetools } from 'vite-imagetools'
import sitemap from 'vite-plugin-sitemap'
import type { Plugin } from 'vite'

// Custom plugin to ensure robots.txt exists
const ensureRobotsTxt: Plugin = {
  name: 'ensure-robots-txt',
  apply: 'build',
  enforce: 'pre',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *
Allow: /
Sitemap: https://fenix-school.vercel.app/sitemap.xml`
    })
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    imagetools(),
    ensureRobotsTxt,
    sitemap({
      hostname: 'https://fenix-school.vercel.app',
      dynamicRoutes: [
        '/',
        '/about',
        '/about/why-fenix',
        '/about/mission',
        '/about/history',
        '/about/team',
        '/about/teachers',
        '/curriculum',
        '/curriculum/assessment-progress',
        '/curriculum/elementary',
        '/curriculum/middle',
        '/activities',
        '/activities/clubs',
        '/activities/magazine',
        '/parents',
        '/parents/council',
        '/parents/discipline',
        '/parents/uniform',
        '/parents/attendance',
        '/admissions',
        '/partnerships/albania',
        '/partnerships/abroad',
        '/contact',
        '/calendar',
        '/jobs',
        '/jobs/criteria',
        '/jobs/what-we-offer'
      ],
      lastmod: {
        '*': new Date()
      },
      changefreq: {
        '*': 'weekly',
        '/': 'daily'
      },
      priority: {
        '*': 0.8,
        '/': 1.0
      },
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/404']
        }
      ],
      outDir: 'dist'
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public'
})
