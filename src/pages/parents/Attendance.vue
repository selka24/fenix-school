<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const rules = computed<string[]>(() => tm("parents.attendancePage.rulesParagraphs"));
const absences = computed<string[]>(() => tm("parents.attendancePage.absencesParagraphs"));
const late = computed<string[]>(() => tm("parents.attendancePage.lateParagraphs"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("parents.attendancePage.intro") }}
    </DescriptionMessage>

    <div class="max-w-3xl">
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.attendancePage.rulesTitle") }}
      </h2>
      <div class="descr-section space-y-4">
        <p v-for="(p, i) in rules" :key="i">{{ p }}</p>
      </div>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.attendancePage.absencesTitle") }}
      </h2>
      <div class="descr-section space-y-4">
        <p v-for="(p, i) in absences" :key="i">{{ p }}</p>
      </div>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.attendancePage.lateTitle") }}
      </h2>
      <div class="descr-section space-y-4">
        <p v-for="(p, i) in late" :key="i">{{ p }}</p>
      </div>
    </div>
  </div>
</template>
