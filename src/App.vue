<script setup lang="ts">
// Import components as needed
import Navbar from './components/Navbar.vue';
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Social Media and Top Nav -->
    <TopBar />
    
    <!-- Main Navigation -->
    <Navbar />
    
    <router-view></router-view>
    
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
