<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const {tm, t} = useI18n()

const roles = computed(() => {
  return tm('about.directorsBoard.directors')
})
</script>

<template>
<div>
  <DescriptionMessage type="warning" class="mt-10 mb-8">
    {{t('about.directorsBoard.description')}}
  </DescriptionMessage>
  <div class="max-w-2xl">
    <ul class="list-disc pl-5 text-xl font-bold mb-12">
      <li v-for="(role, idx) in roles" :key="idx" class="mb-4">
        {{ role }}
      </li>
    </ul>
    <p class="font-semibold">
      {{t('about.directorsBoard.mission')}}
    </p>
  </div>
</div>
</template>

<style scoped>

</style>