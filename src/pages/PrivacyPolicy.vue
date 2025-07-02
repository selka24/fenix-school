<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {schoolInfo} from "../core/globalData.ts";
import {computed} from "vue";

const { tm, t } = useI18n();
const sections = computed(() => tm('privacy.sections'));
const effectiveDate = 'July 1, 2025';
const {email} = schoolInfo;
</script>

<template>
  <section>
    <p class="mb-3">{{ $t('privacy.effectiveDate', { date: effectiveDate }) }}</p>
    <p>{{ t('privacy.intro') }}</p>

    <div v-for="(sec, idx) in sections" :key="idx" class="mt-6">
      <h2 class="text-lg font-bold">{{ idx + 1 }}. {{ sec.title }}</h2>
      <p v-html="sec.content"/>
    </div>
    <br>
    📧 <a :href="`mailto:${email}`">{{email}}</a>
  </section>
</template>
