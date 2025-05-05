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
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      Nivelet e Arsimit dhe Ndarja sipas Moshës në Shkollën "Fenix"
    </h2>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      Në Shkollën "Fenix", nxënësit ndahen në grupe sipas moshës dhe niveleve të zhvillimit të tyre akademik, për t'iu ofruar një mësim të përshtatur që përmbush nevojat e tyre. Kjo ndarje është në përputhje me nivelet e arsimit të ofruara në shkollën tonë
    </DescriptionMessage>
    <div class="max-w-3xl">
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        Cikli Fillor (Klasa 1 - 4)
      </h2>
      <p>
        Ky cikël përfshin moshat nga 6 deri në 9 vjeç dhe është i fokusuar në zhvillimin e aftësive themelore akademike dhe sociale. Nxënësit përqendrohen në lëndët kryesore, matematikë,gjuhë, shkencë si dhe lëndët e performancës e arte.
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