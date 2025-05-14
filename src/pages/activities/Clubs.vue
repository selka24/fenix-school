<script setup lang="ts">

import DescriptionMessage from "../../components/DescriptionMessage.vue";

const clubs = [
  {
    title: "🎓 Klubi i Shkencës",
    description: "Një hapësirë për eksplorim dhe eksperimentim, ku nxënësit angazhohen në projekte shkencore, sfida teknologjike dhe konkurse inovative."
  },
  {
    title: "⚽ Klubi i Sportit",
    description: "Ofron aktivitete të ndryshme sportive si futboll, basketboll, volejboll dhe atletikë, duke inkurajuar shëndetin fizik dhe punën në ekip."
  },
  {
    title: "🎵 Klubi i Muzikës",
    description: "Për të apasionuarit pas muzikës dhe interpretimit, ky klub i ndihmon nxënësit të zhvillojnë aftësitë e tyre muzikore përmes këndimit, instrumenteve dhe performancave të ndryshme."
  },
  {
    title: "🎭 Klubi i Dramës",
    description: "Përfshin të gjithë ata që duan të eksperimentojnë me aktrimin, shfaqjet teatrale dhe improvizimin, duke ndihmuar në zhvillimin e vetëbesimit dhe shprehjes artistike."
  },
  {
    title: "🎨 Klubi i Artit",
    description: "Një hapësirë ku nxënësit mund të eksplorojnë talentin e tyre në pikturë, vizatim, skulpturë dhe krijime të tjera artistike."
  }
];
const benefits = [
  "✔ Ndihmojnë nxënësit të zbulojnë dhe zhvillojnë talentet e tyre",
  "✔ Forcojnë aftësitë sociale dhe bashkëpunimin",
  "✔ Rrisin vetëbesimin dhe ndihmojnë në zhvillimin personal",
  "✔ Krijojnë një përvojë më të pasur shkollore për nxënësit"
];

</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      Ne ofrojmë mundësi të shumta për nxënësit që të angazhohen në aktivitete jashtë mësimit të rregullt, duke i ndihmuar ata të zhvillojnë pasionet dhe aftësitë e tyre në fusha të ndryshme. Klubet tona promovojnë bashkëpunimin, kreativitetin dhe përvojat e reja edukative.
    </DescriptionMessage>
    <div class="max-w-3xl">
      <template v-for="{title, description} in clubs" :key="title">
        <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
          {{ title }}
        </h2>
        <p>
          {{ description }}
        </p>
      </template>
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        Pse janë të rëndësishme klubet shkollore?
      </h2>
      <div class="descr-section">
        <p v-for="benefit in benefits">
          {{benefit}}
        </p>
      </div>
    </div>
    <DescriptionMessage type="warning" class="mt-14 mb-8">
    Nxënësit janë të inkurajuar të bëhen pjesë e klubeve dhe të përfitojnë nga mundësitë e shumta që ofron shkolla jonë për zhvillim personal dhe akademik!
    </DescriptionMessage>
  </div>
</template>

<style scoped>

</style>