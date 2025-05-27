<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const rules = computed<string[]>(() => tm("parents.uniformPage.rules"));
const components = computed<string[]>(() => tm("parents.uniformPage.components"));
const peUniform = computed<string[]>(() => tm("parents.uniformPage.peUniform"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("parents.uniformPage.intro") }}
    </DescriptionMessage>

    <div class="max-w-3xl space-y-6">
      <p>{{ $t("parents.uniformPage.colors") }}</p>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.uniformPage.rulesTitle") }}
      </h2>
      <div class="descr-section space-y-2">
        <p v-for="(r, i) in rules" :key="i">{{ r }}</p>
      </div>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.uniformPage.componentsTitle") }}
      </h2>
      <div class="descr-section space-y-2">
        <p v-for="(c, i) in components" :key="i">{{ c }}</p>
      </div>

      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ $t("parents.uniformPage.peTitle") }}
      </h2>
      <div class="descr-section space-y-2">
        <p v-for="(p, i) in peUniform" :key="i">{{ p }}</p>
      </div>

      <p class="mt-10">{{ $t("parents.uniformPage.closingNote") }}</p>
    </div>
  </div>
</template>
