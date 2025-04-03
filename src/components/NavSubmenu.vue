<template>
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >
    <div 
      v-if="isVisible" 
      class="absolute left-0 top-full bg-[#990066] text-white py-5 px-7 w-max min-w-[480px] grid grid-cols-2 gap-x-10 z-50 shadow-subtle rounded-b-md"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
    >
      <div v-for="(column, index) in columns" :key="index">
        <div 
          v-for="(item, itemIndex) in column" 
          :key="item.title" 
          class="py-1.5 staggered-item"
          :style="{ animationDelay: `${itemIndex * 40}ms` }"
        >
          <a 
            :href="item.link" 
            class="block hover:text-gray-200 transition-colors duration-200 submenu-item"
          >
            <h3 class="text-sm font-medium mb-0">{{ item.title }}</h3>
          </a>
        </div>
      </div>
      <div class="absolute inset-0 shadow-glow opacity-30 pointer-events-none"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface MenuItem {
  title: string;
  link: string;
}

const props = defineProps<{
  isVisible: boolean;
  items: MenuItem[];
}>();

defineEmits<{
  (e: 'mouseenter'): void;
  (e: 'mouseleave'): void;
}>();

// Organize items into columns
const columns = (() => {
  const leftColumn: MenuItem[] = [];
  const rightColumn: MenuItem[] = [];
  
  props.items.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });
  
  return [leftColumn, rightColumn];
})();
</script>

<style scoped>
.submenu-item {
  position: relative;
  padding-left: 0;
  transition: padding-left 0.2s ease;
}

.submenu-item:hover {
  padding-left: 6px;
}

.submenu-item::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 4px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0);
  transition: all 0.2s ease;
  opacity: 0;
}

.submenu-item:hover::before {
  left: -4px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.8);
  opacity: 1;
}

.staggered-item {
  opacity: 0;
  animation: fadeInUp 0.3s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.shadow-subtle {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.shadow-glow {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  border-radius: 0 0 0.375rem 0.375rem;
}
</style> 