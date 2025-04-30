<script setup lang="ts">
import {useFenixAnthem} from '../composables/useFenixAnthem';

const {playLazy, isPlaying} = useFenixAnthem();
</script>

<template>
  <div @click="playLazy" class="flex font-semibold gap-2 items-center cursor-pointer text-sm">
    <div>
      Himni i Shkollës
    </div>
    <div>
      <icon v-if="isPlaying" name="pause-solid" class="w-2"/>
      <icon v-else name="play-solid" class="w-2"/>
    </div>
  </div>
</template>

<style scoped>

</style>