import {ref} from 'vue';

const audio = ref<HTMLAudioElement|null>(null)
const isPlaying = ref(false)

export const useFenixAnthem = () => {

  async function playLazy() {
    if (!audio.value) {
      // this import only happens once, when the button is clicked
      const soundUrl = (await import('../assets/sound/fenix.mp3')).default
      audio.value = new Audio(soundUrl)

      audio.value.addEventListener("ended", function(){
        if(audio.value) {
          audio.value.currentTime = 0;
        }
        isPlaying.value = false;
      });
    }

    if (!audio.value.paused) {
      audio.value.pause()
      isPlaying.value = false
    } else {
      await audio.value.play()
      isPlaying.value = true
    }
  }

  return {
    playLazy,
    isPlaying,
    audio
  }
}