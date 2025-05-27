<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const clubs = computed<{ title: string; description: string }[]>(() =>
  tm("clubsPage.items")
);
const benefits = computed<string[]>(() =>
  tm("clubsPage.benefits")
);
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("clubsPage.intro") }}
    </DescriptionMessage>

    <div class="max-w-3xl">
      <template v-for="(club, idx) in clubs" :key="idx">
        <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
          {{ club.title }}
        </h2>
        <p>{{ club.description }}</p>
      </template>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("clubsPage.benefitsTitle") }}
      </h2>
      <div class="descr-section">
        <p v-for="(b, i) in benefits" :key="i">
          {{ b }}
        </p>
      </div>
    </div>

    <DescriptionMessage type="warning" class="mt-14 mb-8">
      {{ $t("clubsPage.closing") }}
    </DescriptionMessage>
  </div>
</template>
