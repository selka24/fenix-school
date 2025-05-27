<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const integratedDetails = computed<string[]>(() => tm("programmes.integratedProgramDetails"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("programmes.integratedProgramIntro") }}
    </DescriptionMessage>

    <div class="descr-section space-y-4">
      <p v-for="(text, i) in integratedDetails" :key="i">
        {{ text }}
      </p>
    </div>
  </div>
</template>
