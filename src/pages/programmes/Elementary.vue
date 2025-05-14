<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";

const classesAndAges = (maxAge: number, minAge: number = 1) => {
  let x = minAge;
  const items = [];
  while(x <= maxAge) {
    items.push({
      klasa: x,
      age: x + 5
    });
    x++;
  }

  return items;
}
</script>

<template>
  <div>
    <div class="max-w-3xl">
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        Cikli Fillor (Klasa 1 - 4)
      </h2>
      <p>
        Ky cikël përfshin nxënësit e moshës 6 deri në 9 vjeç dhe fokusohet në zhvillimin e aftësive themelore akademike, sociale dhe emocionale. Mësimi është i përqendruar në lëndët bazë si <b>gjuhë, matematikë dhe shkencë</b>, si dhe në <b>zhvillimin e aftësive krijuese dhe shprehëse përmes artit, muzikës dhe edukimit fizik.</b>
      </p>
      <div class="descr-section mt-6 text-primary font-bold">
        <p v-for="({klasa, age}) in classesAndAges(4)" :key="klasa">
          Klasa {{ klasa }} - Mosha {{ age }} vjeç
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>