<script setup lang="ts">
import { ref } from 'vue'

const audio = ref<HTMLAudioElement|null>(null)

async function playLazy() {
    if (!audio.value) {
        // this import only happens once, when the button is clicked
        const soundUrl = (await import('../assets/sound/fenix.mp3')).default
        audio.value = new Audio(soundUrl)
    }
    if (!audio.value.paused) {
      audio.value.pause()
      isPlaying.value = false
    } else {
      await audio.value.play()
      isPlaying.value = true
    }
}

const isPlaying = ref(false)
</script>

<template>
    <h3 class="flex gap-2 items-center text-sm font-medium cursor-pointer" @click="playLazy">
      Himni i Shkollës
      <icon v-if="isPlaying" name="pause-solid" class="w-3"/>
      <icon v-else name="play-solid" class="w-3"/>
    </h3>
</template>

<style scoped>

</style>