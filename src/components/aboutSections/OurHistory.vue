<script setup lang="ts">
import DescriptionMessage from "../DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const evolutionPoints = computed<string[]>(() => {
  return tm("history.evolutionPoints") as string[];
});
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("history.title") }}
    </DescriptionMessage>

    <p>{{ $t("history.description") }}</p>

    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ $t("history.evolutionTitle") }}
    </h2>

    <div class="flex flex-col gap-5">
      <div
        v-for="(point, idx) in evolutionPoints"
        :key="idx"
        class="flex items-center gap-2"
      >
        <span class="text-xl">📌</span>
        <p>{{ point }}</p>
      </div>
    </div>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("history.futureTitle") }}
    </DescriptionMessage>

    <p>{{ $t("history.futureDescription") }}</p>
  </div>
</template>
