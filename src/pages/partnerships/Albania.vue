<script setup lang="ts">

import PartnersCarousel from "../../components/PartnersCarousel.vue";
import DescriptionMessage from "../../components/DescriptionMessage.vue";
</script>

<template>
  <div>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{$t("partnerships.albania")}}
    </h2>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      Shkolla "Fenix" bashkëpunon me institucione dhe organizata të ndryshme si pjesë e angazhimit të saj për ndihmën humanitare dhe projekte kurrikulare. Në Shqipëri, shkolla ka partneritet me Kryqin e Kuq, shkollën për fëmijët me nevoja të veçanta “Luigj Gurakuqi” dhe Qendrën e Fëmijëve me Sindromën Down “Jonathan”.
    </DescriptionMessage>
    <PartnersCarousel type="partnersAlb" class="my-20"/>
  </div>
</template>

<style scoped>

</style>