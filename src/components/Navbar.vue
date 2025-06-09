<template>
  <nav class="bg-white pb-4 shadow-sm">
    <!-- Main Navigation -->
    <div class="flex justify-end lg:justify-center items-center py-1 bg-gray-100">
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
                    class="text-gray-800 font-bold py-2 block nav-link min-w-max"
                    :class="{ 'active-nav text-primary': activeSubmenu === item.title || activeMenu?.link === item.link }"
                >
                    {{ item.title }}
                    <span
                        class="nav-indicator bg-primary"
                        :class="{ 'nav-indicator-active': activeSubmenu === item.title || activeMenu?.link === item.link }"
                    ></span>
                </router-link>
                <NavSubmenu
                    v-if="item.submenu"
                    :is-visible="activeSubmenu === item.title"
                    :items="item.submenu"
                    @mouseenter="keepSubmenuOpen(item.title)"
                    @mouseleave="closeSubmenu()"
                />
            </div>
        </div>
        <!-- Mobile Menu Button -->
        <div class="lg:hidden pr-4">
            <button @click="openSidebar = true" class="text-gray-500 hover:text-gray-800 focus:outline-none transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>
    <div class="max-w-[80rem] mx-auto flex justify-between items-center px-4 lg:px-14 pt-4">
      <!-- Logo and School Name -->
      <router-link class="flex items-center cursor-pointer" to="/">
        <!-- School Logo -->
        <div class="mr-3">
          <img src="/ico.jpg" alt="logo" class="rounded-lg w-28">
        </div>
        <!-- School Name -->
        <a href="/" class="flex flex-col">
          <span class="text-3xl font-semibold leading-tight text-gray-800">{{ $t('fenix') }}</span>
          <span class="text-gray-500 italic">{{ $t('sq-en') }}</span>
        </a>
      </router-link>


      <!-- Secondary Navigation -->
      <div class="hidden lg:flex items-center gap-5">
        <VueDropdown>
          {{$t('jobs.apply')}}
          <template #items>
            <router-link to="/jobs/criteria">
              {{$t('jobs.criteria.title')}}
            </router-link>
            <router-link to="/jobs/what-we-offer">
              {{$t('jobs.offer.title')}}
            </router-link>
          </template>
        </VueDropdown>
          <div @click="handleScrollToApplication" class="cursor-pointer bg-primary text-white px-3 py-2 text-md font-bold rounded hover:bg-primary/70 transition-colors duration-200 hover:shadow-md">E-mail</div>
      </div>


    </div>
  </nav>
    <SideBar v-model="openSidebar">
        <div class="flex flex-col lg:hidden justify-center">
            <div
                v-for="(item, idx) in [...navigationItems, ...extraMobileMenus]"
                :key="item.title"
                class="relative nav-item w-full"
                :class="{'submenu-right': idx > 3}"
                @mouseenter="handleMenuHover(item.title)"
                @mouseleave="handleMenuLeave()"
            >
                <MobileNavSubMenu
                   v-if="item.submenu"
                   v-bind="item"
                   @route-changed="() => openSidebar = false"
                />
                <div v-else>
                    <router-link
                        :to="item.link"
                        @click="() => openSidebar = false"
                        class="text-gray-800 font-bold py-2 block nav-link"
                    >
                        {{ item.title }}
                    </router-link>
                </div>
            </div>
          <a :href="`mailto:${schoolInfo.email}`" class="my-5 btn-white border-primary">E-mail</a>
        </div>
    </SideBar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavSubmenu from './NavSubmenu.vue';
import { useNavigation } from '../composables/useNavigation';
import SideBar from "./SideBar.vue";
import MobileNavSubMenu from "./MobileNavSubMenu.vue";
import VueDropdown from "./VueDropdown.vue";
import {schoolInfo} from "../core/globalData.ts";
import { useRouter } from 'vue-router';

const router = useRouter();

// Get navigation items from our composable
const { navigationItems, activeMenu, extraMobileMenus } = useNavigation();

const openSidebar = ref(false);

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

const handleScrollToApplication = () => {
  const applicationSection = document.querySelector('#job');
  if (applicationSection) {
    applicationSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push('/contact#job');
  }
};
</script>

<style>
.active-nav {
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