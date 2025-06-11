<script setup>
import {useRoute} from "vue-router";
import {computed, ref, watch} from "vue";
import { pageBanners } from "../core/pageBanners";

const route = useRoute();

const meta = computed(() => {
  return route.meta;
})

const breadCrumb = computed(() => {
  return meta.value?.breadcrumb || [];
})

const currDefaultBannerIdx = ref(0)

const currBanner = computed(() => {
  const defaultBanners = [pageBanners.default, pageBanners.defaultOne, pageBanners.defaultTwo];

  return defaultBanners[currDefaultBannerIdx.value];
})

const currentBannerKey = computed(() => {
  if (typeof meta.value.banner === 'string' || !meta.value.banner) {
    return pageBanners[meta.value.banner] || currBanner.value;
  } else {
    return pageBanners[meta.value.banner.key] || currBanner.value;
  }
});

const switchDefaultBanner = () => {
  currDefaultBannerIdx.value = (currDefaultBannerIdx.value + 1) % 3;
}

watch(meta, () => {
  switchDefaultBanner();
})

</script>

<template>
  <div>
    <div class="bg-wrapper">
      <img
        v-if="typeof meta.banner === 'string' || !meta.banner"
        :key="'banner-string-' + currentBannerKey"
        :srcset="currentBannerKey"
        class="bg-img object-contain sm:object-cover"
        sizes="(max-width: 480px) 400px,
         (max-width: 768px) 800px,
         (max-width: 1024px) 1200px,
         1920px"
      />
      <img
        v-else
        :key="'banner-object-' + currentBannerKey"
        :srcset="currentBannerKey"
        class="bg-img object-contain sm:object-cover"
        :style="`object-position: ${meta.banner.position};`"
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
  height: 100%;
  max-height: 50vh;
}
.bg-wrapper {
  width: 100%;
  display: flex;
}
</style>
