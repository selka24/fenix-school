<script setup lang="ts">

import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const { tm, rt } = useI18n();

const rawBenefits = tm('jobs.offer.wellbeingBenefits') as string[]

const benefits = computed(() => rawBenefits.map(item => rt(item)))

</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{$t('jobs.offer.teacherOffersIntro')}}
    </DescriptionMessage>
    <div class="max-w-3xl">
      <h3 class="text-2xl font-bold text-primary mt-14 mb-8">
        {{$t('jobs.offer.teacherOffersTitle')}}
      </h3>
      <div class="flex gap-4 flex-col mb-8">
        <div class="text-lg font-semibold">{{$t('jobs.offer.evaluationTitle')}}</div>
        <p>{{$t('jobs.offer.evaluationDesc')}}</p>
      </div>
      <div class="flex gap-4 flex-col mb-8">
        <div class="text-lg font-semibold">{{$t('jobs.offer.climateTitle')}}</div>
        <p>{{$t('jobs.offer.climateDesc')}}</p>
      </div>
      <div class="flex gap-4 flex-col mb-8">
        <div class="text-lg font-semibold">{{$t('jobs.offer.wellbeingTitle')}}</div>
        <p>{{$t('jobs.offer.wellbeingDesc')}}</p>
        <ul class="list-disc pl-5 font-semibold">
          <li v-for="(benefit, idx) in benefits" class="mb-2" :key="idx">
            {{benefit}}
          </li>
        </ul>
      </div>
      <div class="flex gap-4 flex-col mb-8">
        <div class="text-lg font-semibold">{{$t('jobs.offer.teamSpiritTitle')}}</div>
        <p>{{$t('jobs.offer.teamSpiritDesc')}}</p>
      </div>
      <h4 class="text-xl font-bold text-primary mt-14 mb-8">
        {{$t('jobs.offer.contactCta')}}
      </h4>
    </div>
  </div>
</template>

<style scoped>

</style>