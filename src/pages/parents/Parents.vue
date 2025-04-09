<script setup lang="ts">

import DescriptionMessage from "../../components/DescriptionMessage.vue";

const communicationMethods = [
  {
    title: "Email zyrtar",
    description: "Çdo njoftim zyrtar dhe komunikim i rëndësishëm dërgohet përmes email-it."
  },
  {
    title: "Platforma e shkollës",
    description: "Prindërit dhe nxënësit mund të ndjekin progresin akademik, orarin dhe njoftimet përmes platformës sonë digjitale <a class='text-primary underline' href='https://smip.al/login' target='_blank'>SMIP</a>."
  },
  {
    title: "Takime me prindër",
    description: "Organizojmë takime të rregullta për të diskutuar mbi ecurinë dhe nevojat e nxënësve."
  },
  {
    title: "Sekretaria dhe drejtoria",
    description: "Për çdo pyetje apo shqetësim, prindërit mund të kontaktojnë sekretarinë ose drejtorinë sipas çështjes përkatëse."
  },
  {
    title: "Takime të hapura dhe evente shkollore",
    description: "Prindërit inkurajohen të marrin pjesë në aktivitete dhe evente për të qenë më afër zhvillimit të fëmijëve të tyre."
  }
];

</script>

<template>
<div>
  <DescriptionMessage type="warning" class="mt-10 mb-8">
    Në Shkollën "Fenix", sigurojmë një komunikim të qartë dhe efikas mes shkollës, prindërve dhe nxënësve përmes kanaleve të strukturuara
  </DescriptionMessage>
  <div class="max-w-3xl">
    <template v-for="{title, description} in  communicationMethods" :key="title">
      <h2 class="text-3xl mt-14 mb-4 font-bold text-primary">
        {{ title }}
      </h2>
      <p v-html="description"/>
    </template>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      Ne besojmë se një komunikim i hapur dhe i rregullt ndihmon në krijimin e një mjedisi mbështetës për nxënësit tanë!
    </DescriptionMessage>
  </div>
</div>
</template>

<style scoped>

</style>