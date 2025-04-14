<script setup lang="ts">
import DescriptionMessage from "../DescriptionMessage.vue";
import {computed} from "vue";

const evolutionPoints = computed(() => {
  return [
    "Fillimi me një strukturë mësimore, me fokus cilesine akademike dhe disiplinën organizative.",
    "Përfshirja e metodave bashkëkohore të mësimdhënies, për të krijuar një qasje më interaktive dhe të personalizuar ndaj mësimit.",
    "Integrimi i kurrikulës Angleze me atë shqiptare, duke e bërë shkollën tonë një ndër institucionet e pakta që ofron këtë model unik.",
    "Rritja e vazhdueshme e cilësisë së arsimit dhe suksesi i nxënësve tanë si në shkollat e mesme kombëtare, ashtu edhe në ato ndërkombëtare."
  ]
})
</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      Historia e shkollës "Fenix"
    </DescriptionMessage>
    <p>
      Shkolla "Fenix" është themeluar në vitin 1996 me një vizion të qartë për të krijuar një qendër arsimore cilësore,
      që mishëron më të mirën e arsimit shqiptar dhe atij anglez. Për më shumë se 30 vite, kemi qenë pjesë e jetës së
      mijëra nxënësve dhe kemi ndihmuar në formimin e tyre akademik dhe shoqëror.
    </p>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      Si kemi evoluar gjatë viteve:
    </h2>
    <div class="flex flex-col gap-5">
      <div v-for="(point, idx) in evolutionPoints" :key="idx" class="flex items-center gap-2">
        <span class="text-xl">📌</span>
        <p>
          {{ point }}
        </p>
      </div>
    </div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      E ardhmja e shkollës "Fenix"
    </DescriptionMessage>
    <p>
      Ne vazhdojmë të përmirësohemi dhe të zhvillohemi për t’u siguruar që çdo brez i ri të marrë edukimin më të mirë të
      mundshëm, duke i përgatitur ata për sfidat e kohës dhe kërkesat e një bote në ndryshim.
    </p>
  </div>
</template>

<style scoped>

</style>