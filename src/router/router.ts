// src/router.ts
import type { RouteRecordRaw } from 'vue-router'
import { metaMap } from './metaMap'   // your path→meta map

// helper: PascalCase → kebab-case
function pascalToKebab(s: string) {
    return s
      // e.g. 'WhyFenix' → 'Why-Fenix'
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      // catch ALL-CAP acronyms: 'URLFoo' → 'URL-Foo'
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
}

const modules = import.meta.glob('../pages/**/*.vue', { eager: true }) as Record<string, any>

const routes: RouteRecordRaw[] = Object.entries(modules).map(([filePath, module]) => {
    // 1) strip folder + extension + trailing '/index'
    const clean = filePath
      .replace('../pages', '')    // → '/about/WhyUs.vue'
      .replace(/\.vue$/, '')       // → '/about/WhyUs'
      .replace(/\/index$/, '')     // '/about/index' → '/about'
      .replace(/\/Index$/, '')     // '/about/index' → '/about'

    // 2) split into segments and kebab-ify each
    const segments = clean.split('/').filter(Boolean)  // ['about','WhyUs']
    const slugged  = segments.map(seg => pascalToKebab(seg))

    // 3) rebuild path
    const path = '/' + slugged.join('/')              // '/about/why-fenix'

    return {
        path,
        component: module.default,
        meta: metaMap[path] || {}
    }
})

// 4) append your catch-all NotFound route
import NotFound from '../pages/NotFound.vue'
routes.push({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: metaMap['/404'] || {}
})

export default routes
