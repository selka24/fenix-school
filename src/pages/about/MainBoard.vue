<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const { tm } = useI18n()
const boardDuties = computed(() => tm('about.mainBoard.duties'))
</script>

<template>
  <div>
    <DescriptionMessage v-for="(duty, idx) in boardDuties" class="mb-14">
      {{idx + 1}}. {{ duty }}
    </DescriptionMessage>
  </div>
</template>

<style scoped>

</style>