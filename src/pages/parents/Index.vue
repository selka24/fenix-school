<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

// Raw arrays from i18n
const methods = computed<Array<{ title: string; description: string }>>(() =>
  tm("parents.communicationPage.methods")
);
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("parents.communicationPage.intro") }}
    </DescriptionMessage>

    <div class="max-w-3xl">
      <template v-for="(m, idx) in methods" :key="idx">
        <h2 class="text-3xl mt-14 mb-4 font-bold text-primary">
          {{ m.title }}
        </h2>
        <p v-html="m.description"></p>
      </template>

      <DescriptionMessage type="warning" class="mt-10 mb-8">
        {{ $t("parents.communicationPage.closing") }}
      </DescriptionMessage>
    </div>
  </div>
</template>
