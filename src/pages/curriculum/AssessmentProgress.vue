<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const objectives = computed<string[]>(() => tm("programmes.assessmentPage.objectives"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning">
      {{ $t("programmes.assessmentPage.intro") }}
    </DescriptionMessage>

    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ $t("programmes.assessmentPage.objectivesTitle") }}
    </h2>
    <ul class="list-disc list-inside">
      <li v-for="(obj, i) in objectives" :key="i">{{ obj }}</li>
    </ul>

    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ $t("programmes.assessmentPage.typesTitle") }}
    </h2>

    <DescriptionMessage type="warning" class="mt-10 mb-4">
      {{ $t("programmes.assessmentPage.formativeTitle") }}
    </DescriptionMessage>
    <p>{{ $t("programmes.assessmentPage.formativeDesc") }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-4">
      {{ $t("programmes.assessmentPage.summativeTitle") }}
    </DescriptionMessage>
    <p>{{ $t("programmes.assessmentPage.summativeDesc") }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-4">
      {{ $t("programmes.assessmentPage.performanceTitle") }}
    </DescriptionMessage>
    <p>{{ $t("programmes.assessmentPage.performanceDesc") }}</p>

    <DescriptionMessage type="warning" class="mt-10 mb-4">
      {{ $t("programmes.assessmentPage.progressTitle") }}
    </DescriptionMessage>
    <p>{{ $t("programmes.assessmentPage.progressDesc") }}</p>

    <p class="mt-10">{{ $t("programmes.assessmentPage.conclusion") }}</p>
  </div>
</template>
