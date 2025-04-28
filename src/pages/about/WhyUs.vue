<script setup lang="ts">
import {computed} from "vue";
import DescriptionMessage from "../../components/DescriptionMessage.vue";

const whyFenixItems = computed(() => [
    {
        titleKey: 'about.why.resultsTitle',
        descKey:  'about.why.resultsDesc'
    },
    {
        titleKey: 'about.why.disciplineTitle',
        descKey:  'about.why.disciplineDesc'
    },
    {
        titleKey: 'about.why.safetyTitle',
        descKey:  'about.why.safetyDesc'
    },
    {
        titleKey: 'about.why.teamTitle',
        descKey:  'about.why.teamDesc'
    }
])
</script>

<template>
<div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
        {{ $t('about.why.intro') }}
    </DescriptionMessage>
    <div class="max-w-3xl">
        <template
            v-for="item in whyFenixItems"
            :key="item.titleKey"
        >
            <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
                {{ $t(item.titleKey) }}
            </h2>
            <p>{{ $t(item.descKey) }}</p>
        </template>
        <DescriptionMessage type="warning" class="mt-10 mb-8">
            {{$t('about.why.closing')}}
        </DescriptionMessage>
    </div>
</div>
</template>

<style scoped>

</style>