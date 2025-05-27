<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import ContactNow from "../../components/ContactNow.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const steps = computed(() => tm("admissions.registrationPage.steps"));
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      <div v-html="$t('admissions.registrationPage.intro')"></div>
    </DescriptionMessage>

    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ $t("admissions.registrationPage.stepsTitle") }}
    </h2>

    <ul class="list-decimal max-w-4xl ml-6">
      <li v-for="(step, idx) in steps" :key="idx" class="mb-4">
        <h3 class="text-xl font-bold text-primary">{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </li>
    </ul>

    <ContactNow />
  </div>
</template>
