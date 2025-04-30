<script setup lang="ts">

import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {activities} from "../../core/globalData.ts";


</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      Në Shkollën "Fenix", ne ofrojmë një gamë të gjerë aktivitetesh dhe ngjarjesh që ndihmojnë në zhvillimin e aftësive
      sociale, emocionale dhe akademike të nxënësve. Aktivitetet tona janë të dizajnuara për të nxitur kreativitetin,
      bashkëpunimin dhe arritjen e potencialit të plotë të secilit nxënës.
    </DescriptionMessage>
    <div class="max-w-3xl">
      <template v-for="{title, description} in activities" :key="title">
        <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
          {{ title }}
        </h2>
        <p>
          {{ description }}
        </p>

      </template>
    </div>
      <DescriptionMessage type="warning" class="mt-10 mb-8">
        Këto aktivitete dhe ngjarje janë krijuar për të siguruar një mjedis mësimor të pasur dhe të larmishëm që i
        ndihmon nxënësit të rriten si individë të plotë, duke zhvilluar aftësitë e tyre akademike, sociale dhe
        emocionale.
      </DescriptionMessage>
  </div>
</template>

<style scoped>

</style>