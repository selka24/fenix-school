<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import {computed} from "vue";

const teamPositions = computed(() => [
    {
        titleKey: 'about.team.executiveDirectorTitle',
        descKey:  'about.team.executiveDirectorDescription'
    },
    {
        titleKey: 'about.team.programDirectorTitle',
        descKey:  'about.team.programDirectorDescription'
    },
    {
        titleKey: 'about.team.servicesDirectorTitle',
        descKey:  'about.team.servicesDirectorDescription'
    },
    {
        titleKey: 'about.team.primaryCoordinatorTitle',
        descKey:  'about.team.primaryCoordinatorDescription'
    },
    {
        titleKey: 'about.team.lowerSecondaryCoordinatorTitle',
        descKey:  'about.team.lowerSecondaryCoordinatorDescription'
    },
    {
        titleKey: 'about.team.administrativeCoordinatorTitle',
        descKey:  'about.team.administrativeCoordinatorDescription'
    }
])
</script>

<template>
<div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      {{$t('about.team.beliefParagraph')}}
    </DescriptionMessage>
    <div class="max-w-3xl">
        <p>
            {{$t('about.team.teamEmbodiesParagraph')}}
        </p>
        <template
            v-for="position in teamPositions"
            :key="position.titleKey"
        >
            <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
                {{ $t(position.titleKey) }}
            </h2>
            <p>{{ $t(position.descKey) }}</p>
        </template>
    </div>
</div>
</template>

<style scoped>

</style>