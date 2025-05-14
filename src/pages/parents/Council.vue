<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";

const parentCouncilRoles = [
  "Ofron sugjerime dhe ide për përmirësimin e jetës shkollore.",
  "Mbështet organizimin e aktiviteteve dhe eventeve të ndryshme.",
  "Ndihmon në forcimin e bashkëpunimit mes prindërve dhe stafit akademik.",
  "Shërben si një kanal komunikimi për shqetësimet dhe propozimet e prindërve."
];

</script>

<template>
<div>
  <DescriptionMessage type="warning" class="mt-10 mb-8">
    Ne vlerësojmë dhe inkurajojmë përfshirjen aktive të prindërve në jetën shkollore përmes Këshillit të Prindërve. Ky këshill funksionon si një urë lidhëse mes shkollës dhe familjeve, duke ndihmuar në përmirësimin e përvojës së nxënësve dhe në zhvillimin e iniciativave që mbështesin arsimin dhe mirëqenien e tyre.
  </DescriptionMessage>
  <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
    Roli i Këshillit të Prindërve
  </h2>
  <ul class="list-disc pl-5">
    <li v-for="(role, idx) in parentCouncilRoles" class="mb-4" :key="idx">
      {{role}}
    </li>
  </ul>
  <p class="mt-14 text-primary font-bold">
    Të gjithë prindërit ftohen të jenë pjesë e këtij komuniteti aktiv, duke kontribuar me ide dhe mbështetje për të ndërtuar një mjedis shkollor sa më të pasur dhe të suksesshëm për fëmijët e tyre.

  </p>
</div>
</template>

<style scoped>

</style>