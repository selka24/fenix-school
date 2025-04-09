<script setup lang="ts">

import DescriptionMessage from "../../components/DescriptionMessage.vue";

const activities = [
  {
    title: "Ekskursione dhe Vizita Mësimore",
    description: "Nxënësit marrin pjesë në ekskursione dhe vizita që i ndihmojnë ata të mësojnë në një mjedis jashtë klasës, duke u njohur me kultura të ndryshme dhe duke aplikuar njohuritë e fituara."
  },
  {
    title: "Panaire dhe Projekte Shkencore",
    description: "Nxënësit zhvillojnë dhe prezantojnë projekte shkencore, duke i dhënë mundësi për të eksperimentuar dhe për të nxitur kuriozitetin dhe kërkimin shkencor."
  },
  {
    title: "Lojëra dhe Aktivitetet Sportive",
    description: "Aktivitetet fizike dhe sportive janë pjesë e rëndësishme e programit tonë, duke i mësuar nxënësit për rëndësinë e punës në ekip dhe zhvillimit të shëndetit fizik."
  },
  {
    title: "Festa e Fundvitit",
    description: "Një ngjarje speciale që feston arritjet e nxënësve gjatë vitit shkollor dhe nderon ata për përpjekjet e tyre."
  },
  {
    title: "Festat e Traditave dhe Festivaleve",
    description: "Shkolla organizon ngjarje që përkujtojnë dhe nderojnë traditat dhe kulturat e ndryshme, duke i mësuar nxënësit të respektojnë dhe të vlerësojnë shumëllojshmërinë."
  },
  {
    title: "Ditët e Hapura dhe Prezantimet për Prindërit",
    description: "Aktivitetet ku nxënësit mund të tregojnë përparimin e tyre dhe arritjet e vitit, duke krijuar mundësi për prindërit të jenë pjesë aktive të procesit mësimor."
  }
];

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