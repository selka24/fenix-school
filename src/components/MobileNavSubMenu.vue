<!-- MobileNavSubmenu.vue -->
<template>
    <div class="w-full border-b border-c-gray/20">
        <div class="flex justify-between submenu-center py-2">
            <!-- title still navigates -->
            <router-link   @click="$emit('routeChanged')" :to="link" class="font-bold text-gray-800 text-lg">
                {{ title }}
            </router-link>

            <!-- plus icon toggles only the accordion -->
            <icon
                name="plus-solid"
                @click="toggle"
                class="w-3.5 text-primary transform transition-transform duration-550 cursor-pointer"
                :class="{ 'rotate-[135deg]': isOpen }"
            />
        </div>

        <Transition
            enter-active-class="transition-all ease-out duration-550"
            enter-from-class="max-h-0"
            enter-to-class="max-h-60"
            leave-active-class="transition-all ease-in duration-500"
            leave-from-class="max-h-60"
            leave-to-class="max-h-0"
        >
            <!-- use v-if so leave transition runs -->
            <ul
                v-if="isOpen"
                class="pl-4 py-4 overflow-hidden space-y-1 font-semibold"
            >
                <li v-for="sub in submenu" :key="sub.title">
                  <component v-if="item?.component" :is="item.component"/>
                    <router-link
                      v-else
                        @click="$emit('routeChanged')"
                        :to="sub.link"
                        class="block text-c-gray py-1 transition-colors"
                    >
                        {{ sub.title }}
                    </router-link>
                </li>
            </ul>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {MenuItem} from "../composables/useNavigation.ts";

defineProps<{
    title: string;
    link: string;
    submenu: MenuItem[];
}>();

defineEmits(['routeChanged'])

const isOpen = ref(false);
function toggle() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* no extra CSS needed—Transition classes handle max-height */
</style>
