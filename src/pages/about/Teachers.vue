<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";

const descriptionParagraphs = [
  "intro",
  "experience",
  "approach",
  "values",
  "teamwork",
  "training",
  "student_focus",
  "appreciation",
  "stability"
]

</script>

<template>
<div>
  <DescriptionMessage type="warning" class="mt-10 mb-8">
    {{ $t('about.teachers.intro') }}
  </DescriptionMessage>
  <div class="max-w-3xl">
    <div class="descr-section">
      <p v-for="p in descriptionParagraphs" :key="p" v-html="$t(`about.teachers.${p}`)">
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>