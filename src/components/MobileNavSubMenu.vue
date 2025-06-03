<!-- MobileNavSubmenu.vue -->
<template>
    <div class="w-full border-b border-c-gray/20">
      <Accordion :title="title" :id="title.split(' ').join('-')">
        <template v-if="link" #title>
          <router-link
            @click="$emit('routeChanged')"
            :to="link"
          >
            <h2>{{title}}</h2>
          </router-link>
        </template>
        <ul
          class="pl-4 py-4 overflow-hidden space-y-1 font-semibold"
        >
          <li v-for="sub in submenu" :key="sub.title">
            <component v-if="sub?.component" :is="sub.component" class="py-1"/>
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
      </Accordion>
    </div>
</template>

<script setup lang="ts">
import { type MenuItem } from "../composables/useNavigation";
import Accordion from "./Accordion.vue";

defineProps<{
    title: string;
    link: string;
    submenu?: MenuItem[];
}>();

defineEmits(['routeChanged'])
</script>

<style scoped>
/* no extra CSS needed—Transition classes handle max-height */
</style>
