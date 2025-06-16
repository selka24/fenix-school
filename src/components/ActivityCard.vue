<script setup lang="ts">
defineProps<{
  activity: {
    image: string;
    title: string;
    description: string;
  };
}>();
</script>

<template>
  <div class="flex flex-col">
    <a class="block mb-4 overflow-hidden">
      <img
        :src="activity.image"
        alt="The Fusion of Grade 8 Engineering"
        class="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
      />
    </a>
    <h3 class="text-lg font-bold text-gray-800 mb-2">
      {{activity.title}}
    </h3>
    <div class="text-gray-700 mb-4 description-ellipsis">
      {{activity.description}}
    </div>
  </div>
</template>

<style scoped>
.description-ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;


  @supports (-webkit-line-clamp: 5) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
}
</style>