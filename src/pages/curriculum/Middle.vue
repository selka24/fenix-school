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
        {{ $t('curriculum.middle.title') }}
      </h2>
      <p v-html="$t('curriculum.middle.description1')"></p>
      <p class="mt-4">{{ $t('curriculum.middle.description2') }}</p>

      <div class="descr-section mt-6 text-primary font-bold">
        <p v-for="item in classesAndAges(9, 5)" :key="item.klasa">
          {{ $t('curriculum.middle.gradeAge', { klasa: item.klasa, age: item.age }) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>