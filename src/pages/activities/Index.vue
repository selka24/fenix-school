<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

// Get the array of activity items from i18n
const activities = computed<Array<{ title: string; description: string }>>(
  () => tm("activitiesPage.items")
);
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("activitiesPage.intro") }}
    </DescriptionMessage>

    <div class="max-w-3xl">
      <template v-for="(act, idx) in activities" :key="idx">
        <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
          {{ act.title }}
        </h2>
        <p>{{ act.description }}</p>
      </template>
    </div>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("activitiesPage.closing") }}
    </DescriptionMessage>
  </div>
</template>
