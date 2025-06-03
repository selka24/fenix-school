<script setup lang="ts">
import {PageFlip} from 'page-flip';
import {nextTick, onMounted, ref, onBeforeUnmount} from "vue";
import {type Magazine, magazines, buildImageUrl, magazineInfo} from "../../core/magazines.ts";
import DescriptionMessage from "../../components/DescriptionMessage.vue";

const magazineElement = ref<HTMLElement | null>(null);
const pageFlip = ref<PageFlip | null>(null);

const settings = {
    width: 400, // required parameter - base page width
    height: 600,  // required parameter - base page height
    showCover: true
}

const currentMagazine = ref<Magazine | null>(null);

const closeMagazine = () => {
    if(pageFlip.value) {
        pageFlip.value.destroy();
        pageFlip.value = null;
    }
    currentMagazine.value = null;
}

const openMagazine = (idx: number) => {
    currentMagazine.value = magazines[idx];
    nextTick(() => {
        if(!magazineElement.value) {
            console.error('Magazine element is null');
            return
        };

        if(!pageFlip.value) {
            pageFlip.value = new PageFlip(magazineElement.value, settings);
            pageFlip.value.loadFromHTML(document.querySelectorAll('.my-page'));
        } else {
            pageFlip.value.updateFromHtml(document.querySelectorAll('.my-page'));
            pageFlip.value.turnToPage(1);
        }

    })
}

const closeOnEscape = (e: KeyboardEvent) => {
  if(e.key === 'Escape') {
    closeMagazine();
  }
}

onMounted(() => {
  document.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
    <div>
        <DescriptionMessage type="warning" class="mb-14">
            {{$t('studentLife.magazine.description')}}
        </DescriptionMessage>
      <div class="mb-14">
        <ul class="list-disc pl-5 text-lg">
          <li v-for="info in magazineInfo.map((i) => {
            const [title, description] = $t(`studentLife.magazine.${i}`).split(':');
            return {title, description};
          })" class="mb-3">
            <div class="font-semibold">{{info.title}}:</div>
            <div class="mt-1">{{info.description}}</div>
          </li>
        </ul>
      </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div
                v-for="({title}, idx) in magazines"
                @click="openMagazine(idx)"
                class="cursor-pointer hover:scale-[1.1] hover:shadow-lg hover:shadow-primary transition-all duration-400"
                :key="title">
                <img class="w-full h-full" :src="buildImageUrl(title, 1)" alt="magazine image"/>
            </div>
        </div>
        <div class="fixed top-0 left-0 w-full h-full" v-if="currentMagazine">
            <div class="absolute w-full h-full bg-black opacity-50"/>
            <div>
                <button @click="closeMagazine" class="absolute top-5 right-5 cursor-pointer">
                    <icon name="plus-solid" class="w-6 text-white rotate-45"/>
                </button>
            </div>
                    <div ref="magazineElement" class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
                        <div v-for="(idx) in currentMagazine?.images" class="my-page" data-density="hard">
                            <img v-if="currentMagazine" class="w-full h-full" :src="buildImageUrl(currentMagazine.title, idx)" alt="magazine image"/>
                        </div>
                    </div>
        </div>
    </div>
</template>

<style scoped>
.my-page{
    background-color: #ccc;
}
</style>