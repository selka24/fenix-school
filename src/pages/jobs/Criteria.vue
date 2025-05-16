<script setup lang="ts">
import { useI18n } from "vue-i18n";
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {schoolInfo} from "../../core/globalData.ts";

const { tm, rt } = useI18n();
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{$t('jobs.criteria.message')}}
      <br>
      <br>
      {{$t('jobs.criteria.priority')}}
    </DescriptionMessage>
    <div class="descr-section">
      <p>{{$t('jobs.criteria.need')}}</p>
      <p v-html="$t('jobs.criteria.mission')"></p>
    </div>
    <h3 class="text-2xl font-bold text-primary mt-14">
      {{$t('jobs.criteria.reqTitle')}}
    </h3>
    <div class="flex flex-col gap-5 mt-7 font-semibold pl-1">
      <div v-for="req in tm('jobs.criteria.reqList')">
        <div class="flex gap-2 items-center">
          <icon name="check-solid" class="w-4 text-primary"/>
          <div>
            {{rt(req)}}
          </div>
        </div>
      </div>
    </div>
    <h3 class="text-2xl font-bold text-primary mt-14 mb-8">
      {{$t('jobs.criteria.docTitle')}}
    </h3>
    <div class="descr-section">
      <p>
        {{$t('jobs.criteria.docInstr')}}
      </p>
      <p class="font-semibold">
        {{$t('jobs.criteria.docList')}}
      </p>
      <a :href="`mailto:${schoolInfo.email}?subject=Aplikim pune`" class="font-semibold underline">
        {{$t('jobs.criteria.email')}} shkollafenix@gmail.com
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>