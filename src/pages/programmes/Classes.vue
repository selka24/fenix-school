<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {computed} from "vue";

const classesAndAges = computed(() => {
  let x = 1;
  const items = [];
  while(x <= 9) {
    items.push({
      klasa: x,
      age: x + 5
    });
    x++;
  }

  return items;
})
</script>

<template>
<div>
  <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
    Nivelet e Klasave dhe Moshat përkatëse
  </h2>
  <DescriptionMessage type="warning" class="mt-10 mb-8">
    Në Shkollën "Fenix", nxënësit ndahen në grupe sipas moshave dhe niveleve të zhvillimit të tyre akademik, për t'iu përshtatur nevojave të tyre dhe për t'iu mundësuar një mësim të suksesshëm.
  </DescriptionMessage>
  <div class="descr-section">
    <p v-for="({klasa, age}) in classesAndAges" :key="klasa">
      Klasa {{ klasa }} - Mosha {{ age }} vjeç
    </p>
  </div>
</div>
</template>

<style scoped>

</style>