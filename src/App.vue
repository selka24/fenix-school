<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';
import {useLayout} from "./composables/useLayout.ts";

const {layout} = useLayout();
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Social Media and Top Nav -->
    <TopBar />
    
    <!-- Main Navigation -->
    <Navbar />

    <component :is="layout">
      <router-view></router-view>
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
</style>
