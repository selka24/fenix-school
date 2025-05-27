<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const roles = computed<string[]>(() => tm("parents.councilPage.roles"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("parents.councilPage.intro") }}
    </DescriptionMessage>

    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ $t("parents.councilPage.rolesTitle") }}
    </h2>

    <ul class="list-disc pl-5">
      <li v-for="(role, idx) in roles" :key="idx" class="mb-4">
        {{ role }}
      </li>
    </ul>

    <p class="mt-14 text-primary font-bold">
      {{ $t("parents.councilPage.closing") }}
    </p>
  </div>
</template>
