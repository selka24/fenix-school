<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

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
    <img class="bg-img" :src="bgImageSrc" alt="imageBg" />
    <div class="mx-auto container px-4 lg:px-14 py-9 text-c-gray">
      <div class="flex gap-1 text-xs uppercase" >
        <div v-for="crumb in breadCrumb" :key="crumb.title">
          <router-link :to="crumb.link" class="hover:text-primary hover:underline">
            {{ $t(crumb.title) }}
          </router-link>
          <span class="ml-1">></span>
        </div>
        <div>
          {{$t(meta?.titleKey || '')}}
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
</style>