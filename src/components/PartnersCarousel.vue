<script setup lang="ts">
import {partners, partnersAlb, partnersAbroad} from "../core/globalData.ts";
import {computed} from "vue";

const props = defineProps<{
  type: 'partnersAlb' | 'partnersAbroad' | 'partners'
}>();

const partnerTypes = {
  partners,
  partnersAlb,
  partnersAbroad,
}

const partnersItems = computed(() => partnerTypes[props.type])

const openLinkInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.opener = null;
    }
}
</script>

<template>
  <div class="flex flex-wrap gap-10 justify-center mx-auto items-center max-w-3xl partnerImg">
      <template v-for="partner in partnersItems" :key="partner.href">
          <img @click="openLinkInNewTab(partner.href)" v-if="partner.alt" :src="partner.img" :alt="partner.alt">
          <p v-else @click="openLinkInNewTab(partner.href)" class="text-white bg-primary font-bold md:text-2xl py-2 text-center">
              {{ partner.text }}
          </p>
      </template>
  </div>
</template>

<style scoped>
.partnerImg > * {
    cursor: pointer;
}
</style>