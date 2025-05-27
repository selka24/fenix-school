<script setup lang="ts">
import DescriptionMessage from "../DescriptionMessage.vue";
</script>

<template>
  <div class="max-w-xl">
    <h2 class="text-3xl font-bold text-primary">
      {{ $t('about.features.title') }}
    </h2>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.features.integratedProgramTitle') }}
    </DescriptionMessage>
    <p>{{ $t('about.features.integratedProgramDesc') }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.features.qualityTeachingTitle') }}
    </DescriptionMessage>
    <p>{{ $t('about.features.qualityTeachingDesc') }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.features.supportCareTitle') }}
    </DescriptionMessage>
    <p>{{ $t('about.features.supportCareDesc') }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.features.disciplineTitle') }}
    </DescriptionMessage>
    <p>{{ $t('about.features.disciplineDesc') }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t('about.features.highResultsTitle') }}
    </DescriptionMessage>
    <p>{{ $t('about.features.highResultsDesc') }}</p>
  </div>
</template>


<style scoped>

</style>