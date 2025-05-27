<script setup lang="ts">
import DescriptionMessage from "../DescriptionMessage.vue";
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mb-10">
      {{ $t('about.welcome.welcomeSubtitle') }}
    </DescriptionMessage>
    <div class="descr-section">
      <p>{{ $t('about.welcome.introParagraph1') }}</p>
      <p>{{ $t('about.welcome.introParagraph2') }}</p>
      <p>{{ $t('about.welcome.introParagraph3') }}</p>
    </div>
  </div>
</template>


<style scoped>

</style>