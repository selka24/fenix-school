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
      {{ $t("partnerships.albaniaDesc") }}
    </DescriptionMessage>
    <PartnersCarousel type="partnersAlb" class="my-20"/>
  </div>
</template>

<style scoped>

</style>