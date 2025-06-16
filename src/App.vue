<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';
import {useLayout} from "./composables/useLayout.ts";
import {useEgg} from "./composables/useEgg.ts";

const {layout} = useLayout();

useEgg();
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Social Media and Top Nav -->
    <TopBar />
    
    <!-- Main Navigation -->
    <Navbar />

    <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
