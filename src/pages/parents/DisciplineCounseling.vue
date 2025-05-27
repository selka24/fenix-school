<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const disciplineParagraphs = computed<string[]>(() => tm("parents.disciplinePage.disciplineParagraphs"));
const counselingParagraphs = computed<string[]>(() => tm("parents.disciplinePage.counselingParagraphs"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("parents.disciplinePage.intro") }}
    </DescriptionMessage>

    <div class="max-w-3xl">
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.disciplinePage.disciplineTitle") }}
      </h2>
      <div class="descr-section space-y-4">
        <p v-for="(p, i) in disciplineParagraphs" :key="i">{{ p }}</p>
      </div>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.disciplinePage.counselingTitle") }}
      </h2>
      <div class="descr-section space-y-4">
        <p v-for="(p, i) in counselingParagraphs" :key="i">{{ p }}</p>
      </div>
    </div>
  </div>
</template>
