<script setup lang="ts">

import DescriptionMessage from "../DescriptionMessage.vue";
</script>

<template>
  <div class="max-w-xl">
    <h2 class="text-3xl font-bold text-primary">
      {{ $t('about.missionVisionPhilosophy.title') }}
    </h2>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.missionVisionPhilosophy.missionLabel') }}
    </DescriptionMessage>
    <p>
      {{ $t('about.missionVisionPhilosophy.missionDesc') }}
    </p>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.missionVisionPhilosophy.visionLabel') }}
    </DescriptionMessage>
    <p>
      {{ $t('about.missionVisionPhilosophy.visionDesc') }}
    </p>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.missionVisionPhilosophy.philosophyLabel') }}
    </DescriptionMessage>
    <p>
      {{ $t('about.missionVisionPhilosophy.philosophyDesc') }}
    </p>
  </div>
</template>


<style scoped>

</style>`