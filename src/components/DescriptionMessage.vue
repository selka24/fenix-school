<script setup lang="ts">
const props = defineProps<{
  type?: 'info' | 'success' | 'warning' | 'error'
}>()
const borderClass = {
  info: 'border-blue-500',
  success: 'border-green-500',
  warning: 'border-yellow-500',
  error: 'border-red-500'
}[props.type || 'info']
</script>

<template>
  <div class="border-l-5 flex items-center rounded-xs pl-7"
       :class="borderClass">
    <slot name="body">
      <h3 class="text-2xl font-bold">
        <slot>
        </slot>
      </h3>
    </slot>
  </div>
</template>

<style scoped>

</style>