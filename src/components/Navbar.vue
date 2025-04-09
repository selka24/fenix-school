<template>
  <nav class="bg-white pb-4 shadow-sm">
    <!-- Main Navigation -->
    <div class="flex justify-center items-center py-1 bg-gray-100">
        <div class="hidden lg:flex justify-center space-x-14 px-4 container">
            <div
                v-for="(item, idx) in navigationItems"
                :key="item.title"
                class="relative nav-item"
                :class="{'submenu-right': idx > 3}"
                @mouseenter="handleMenuHover(item.title)"
                @mouseleave="handleMenuLeave()"
            >
                <router-link
                    :to="item.link"
                    class="text-gray-800 font-bold py-2 block nav-link"
                    :class="{ 'active-nav': activeSubmenu === item.title || activeMenu?.link === item.link }"
                >
                    {{ item.title }}
                    <span
                        class="nav-indicator"
                        :class="{ 'nav-indicator-active': activeSubmenu === item.title || activeMenu?.link === item.link }"
                    ></span>
                </router-link>
                <NavSubmenu
                    :is-visible="activeSubmenu === item.title"
                    :items="item.submenu"
                    @mouseenter="keepSubmenuOpen(item.title)"
                    @mouseleave="closeSubmenu()"
                />
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-14 pt-4">
      <!-- Logo and School Name -->
      <router-link class="flex items-center cursor-pointer" to="/">
        <!-- School Logo -->
        <div class="mr-3">
          <img src="/ico.jpg" alt="logo" class="rounded-lg w-22">
        </div>
        <!-- School Name -->
        <a href="/" class="flex flex-col">
          <span class="text-xl font-bold leading-tight text-gray-800">{{ $t('fenix') }}</span>
          <span class="text-xs text-gray-500">{{ $t('sq-en') }}</span>
        </a>
      </router-link>


      <!-- Secondary Navigation -->
      <div class="hidden lg:flex items-center">
        <div class="flex items-center text-md space-x-8 mr-4">
          <a href="#" class="text-gray-600 hover:text-[#41ad49] transition-colors duration-200">Visit & Inquire</a>
          <a href="#" class="text-gray-600 hover:text-[#41ad49] transition-colors duration-200">Calendar</a>
          <a href="#" class="text-gray-600 hover:text-[#41ad49] transition-colors duration-200">Parent/Student Portal</a>
          <a href="#" class="text-gray-600 hover:text-[#41ad49] transition-colors duration-200">E-mail</a>
        </div>
        <div class="flex items-center space-x-2">
          <button class="bg-[#41ad49] text-white px-3 py-2 text-md font-bold rounded hover:bg-[#378f3d] transition-colors duration-200 hover:shadow-md">APPLY NOW</button>
<!--          <button class="bg-transparent border border-gray-300 text-gray-700 p-1 rounded hover:bg-gray-100 transition-colors duration-200">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />-->
<!--            </svg>-->
<!--          </button>-->
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button class="text-gray-500 hover:text-gray-800 focus:outline-none transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavSubmenu from './NavSubmenu.vue';
import { useNavigation } from '../composables/useNavigation';

// Get navigation items from our composable
const { navigationItems, activeMenu } = useNavigation();

// Track which submenu is currently active
const activeSubmenu = ref<string | null>(null);
let submenuCloseTimeout: number | null = null;

// Menu interaction handlers with debounce for smoother transitions
const handleMenuHover = (menuTitle: string) => {
  if (submenuCloseTimeout) {
    clearTimeout(submenuCloseTimeout);
    submenuCloseTimeout = null;
  }
  activeSubmenu.value = menuTitle;
};

const handleMenuLeave = () => {
  submenuCloseTimeout = window.setTimeout(() => {
    activeSubmenu.value = null;
  }, 150) as unknown as number;
};

const keepSubmenuOpen = (menuTitle: string) => {
  if (submenuCloseTimeout) {
    clearTimeout(submenuCloseTimeout);
    submenuCloseTimeout = null;
  }
  activeSubmenu.value = menuTitle;
};

const closeSubmenu = () => {
  submenuCloseTimeout = window.setTimeout(() => {
    activeSubmenu.value = null;
  }, 150) as unknown as number;
};
</script>

<style>
.active-nav {
  color: #990066 !important;
  transition: color 0.2s ease;
}

.nav-item {
  padding-bottom: 4px;
}

.nav-link {
  position: relative;
  transition: color 0.2s ease;
  padding-bottom: 2px;
}

.nav-indicator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background-color: #990066;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-indicator-active {
  transform: scaleX(1);
}

.nav-link:hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

.active-nav {
  transform: translateY(-1px);
}

.submenu-right > .submenu {
  right: 0 !important;
  left: unset;
}
</style> 