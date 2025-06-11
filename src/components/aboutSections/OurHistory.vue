<script setup lang="ts">
import DescriptionMessage from "../DescriptionMessage.vue";
import WomanImage from "/src/assets/images/history/woman.png?w=800&format=webp&quality=80"
import WomanTalkImage from "/src/assets/images/history/woman-talk.png?w=800&format=webp&quality=80"
import WomanDDImage from "/src/assets/images/history/woman-d.jpeg?w=800&format=webp&quality=80"
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const evolutionPoints = computed<string[]>(() => {
  return tm("history.evolutionPoints") as string[];
});
</script>

<template>
  <div>
    <div class="grid grid-cols-5 gap-14 mt-10">
      <div class="col-span-full md:col-span-3">
        <DescriptionMessage type="warning" class="mb-8">
          {{ $t("history.title") }}
        </DescriptionMessage>

        <p>{{ $t("history.description") }}</p>

      </div>
      <div class="col-span-full md:col-span-2">
        <img :src="WomanImage">
      </div>
    </div>
    <div class="mt-14 grid grid-cols-5 gap-14">
      <div class="col-span-full md:col-span-3">
        <h2 class="text-3xl mb-10 font-bold text-primary">
          {{ $t("history.evolutionTitle") }}
        </h2>
        <div class="flex flex-col gap-10">
          <div
            v-for="(point, idx) in evolutionPoints"
            :key="idx"
            class="flex items-center gap-2"
          >
            <span class="text-xl">📌</span>
            <p>{{ point }}</p>
          </div>
        </div>
      </div>
      <div class="col-span-full md:col-span-2 flex flex-col gap-5 justify-center">
        <img :src="WomanTalkImage" class="h-[220px] w-full object-cover object-top">
        <img :src="WomanDDImage" class="h-[220px] w-full object-cover object-[center_25%]">
      </div>
    </div>

    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{ $t("history.futureTitle") }}
    </DescriptionMessage>

    <p>{{ $t("history.futureDescription") }}</p>
  </div>
</template>
