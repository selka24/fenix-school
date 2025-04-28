<template>
    <!-- Drawer -->
    <Transition
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        enter-active-class="duration-300 ease-out"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
        leave-active-class="duration-300 ease-in"
    >
        <aside
            v-if="modelValue"
            class="fixed inset-y-0 right-0 inset-x-0 z-50 bg-white overflow-y-auto shadow-xl p-7"
        >
            <button @click="emit('update:modelValue', false)" class="flex ml-auto">
                <icon name="plus-solid" class="w-6 text-primary rotate-45"/>
            </button>
            <hr class="my-4 border-c-gray/20">
            <slot />
        </aside>
    </Transition>
</template>

<script setup lang="ts">
/**
 * Simple full‑width Drawer that slides in from the right.
 * Usage:
 * <Drawer v-model="isOpen">
 *   <!-- page‑wide content goes here -->
 * </Drawer>
 */

import {watch, onUnmounted} from "vue";

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

watch(
    () => props.modelValue,
    (open) => {
        if(!import.meta.env.SSR)
          document.body.style.overflow = open ? 'hidden' : '';
    },
    { immediate: true }
);

// make sure we clean up if this component is ever unmounted
onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>