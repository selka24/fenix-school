<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import { pageBanners } from "../core/pageBanners";

const route = useRoute();

const meta = computed(() => {
  return route.meta;
})

const bgImageSrc = computed(() => {
  return meta.value?.bgImageSrc || '/images/happy-kids-playing-city-s-street-sunny-summer-s-day-front-modern-building.jpg';
})

const breadCrumb = computed(() => {
  return meta.value?.breadcrumb || [];
})

</script>

<template>
  <div>
    <div class="bg-wrapper">
      <img
          :srcset="pageBanners[meta.bannerKey] || pageBanners.default" 
          class="bg-img"
          sizes="(max-width: 480px) 400px,
           (max-width: 768px) 800px,
           (max-width: 1024px) 1200px,
           1920px"
        />
    </div>
    <div class="mx-auto container px-4 lg:px-14 py-9 text-c-gray">
      <div class="flex gap-1 text-xs uppercase" >
        <div v-for="crumb in breadCrumb" :key="crumb.title">
          <router-link v-if="crumb.link" :to="crumb.link" class="hover:text-primary hover:underline">
            {{ $t(crumb.title) }}
          </router-link>
          <span class="ml-1" v-if="crumb.link">
            >
          </span>
        </div>
        <div>
          {{$t(meta?.titleKey || $t(breadCrumb[breadCrumb.length - 1]?.title || ''))}}
        </div>
      </div>
      <h1 v-if="meta?.titleKey" class="mt-10 mb-18 text-5xl text-primary font-bold">
        {{$t(meta.titleKey)}}
      </h1>
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
}
.bg-wrapper {
  height: 50vh;
  width: 100%;
  display: flex;
}
</style>