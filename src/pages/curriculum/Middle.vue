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
        Cikli nëntëvjeçar (Klasa 5 - 9)
      </h2>
      <p>
        Në këtë cikël (mosha 10–14 vjeç), nxënësit thellojnë njohuritë dhe kompetencat e tyre në lëndët <b>gjuhe, matematikë dhe shkencë</b>, duke zhvilluar gjithashtu <b>aftësitë krijuese dhe shprehëse në art, muzikë dhe edukim fizik</b>. Ky është një moment i rëndësishëm për përgatitjen e nxënësve për <b>provimet kombëtare</b> dhe ato të <b>kurrikulës angleze</b>, që do të zhvillohen në fund të ciklit të 9-të.
      </p>
      <p class="mt-4">
        Në këtë periudhë, nxënësit rrisin përgjegjësinë për mësimin dhe përgatiten për sfidat akademike që lidhen me arsimin e nivelit të mesëm dhe zhvillimin personal.
      </p>
      <div class="descr-section mt-6 text-primary font-bold">
        <p v-for="({klasa, age}) in classesAndAges(9, 5)" :key="klasa">
          Klasa {{ klasa }} - Mosha {{ age }} vjeç
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>