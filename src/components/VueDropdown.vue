<template>
  <div class="relative inline-block text-left">
    <!-- Trigger Button -->
    <button
      @click="open = !open"
      class="inline-flex gap-2 min-w-max items-center justify-between w-46 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
    >
      <slot>
        Options
      </slot>
      <svg
        class="w-5 h-5 transform transition-transform duration-200"
        :class="{ 'rotate-180': open }"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <!-- Animated Menu -->
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="open"
        class="z-50 origin-top-right absolute right-0 mt-2 w-46 bg-white border border-gray-300 rounded-md shadow-lg focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdownButton"
      >
        <div class="py-1 dropdownItems" @click="handleItemsClick">
          <slot name="items">

          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, nextTick} from 'vue';

const open = ref(false);

// close dropdown when clicking outside
const handleClickOutside = (e) => {
  if (!e.target.closest('.relative.inline-block.text-left')) {
    open.value = false;
  }
};

const handleItemsClick = () => {
  nextTick(() => {
    open.value = false;
  })
}

onMounted(() => document.addEventListener('click', handleClickOutside));
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside));
</script>
