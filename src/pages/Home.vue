<script setup lang="ts">
import LearningProgram from "../components/LearningProgram.vue";
import NumbersSection from "../components/NumbersSection.vue";
import MissionAction from "../components/MissionAction.vue";
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
    <div>
    <!-- Hero Section with Student Image -->
    <HeroSection />

    <div class="flex flex-col gap-8 px-4 py-10 text-white md:hidden bg-primary text-center">
      <h3 class="text-2xl font-bold">
        {{$t('aboutPage.welcome')}}
      </h3>
      <p>
        {{$t('aboutPage.welcomeDescr')}}
      </p>
      <div class="flex flex-col gap-2">
        <router-link to="/about/why-fenix" class="btn-white">{{ $t('whyFenix') }}</router-link>
        <router-link to="/programmes" class="btn-white">{{ $t('programmes.curriculum') }}</router-link>
        <router-link to="/activities" class="btn-white">{{ $t('activities') }}</router-link>
      </div>
    </div>

    <!-- Learning Programme Section -->
    <LearningProgram />

    <!-- Mission in Action Section -->
    <MissionAction />

    <!-- By The Numbers Section -->
    <NumbersSection />
    </div>
</template>

<style scoped>

</style>