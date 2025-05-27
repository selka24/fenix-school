<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const contactInfo = [
  { titleKey: 'about.team.executiveDirectorTitle', value: '+355 69 306 5760',    href: 'tel:+355693065760' },
  { titleKey: 'about.team.executiveDirectorTitle', value: '+355 69 202 4495',    href: 'tel:+355692024495' },
  { titleKey: 'about.team.secretary',            value: '+355 68 423 3800',    href: 'tel:+355684233800' },
  { titleKey: 'contact.email',                   value: 'shkollafenix@gmail.com', href: 'mailto:shkollafenix@gmail.com' },
  { titleKey: 'contact.address',                 value: 'Rruga Bilal Golemi',  href: 'https://maps.app.goo.gl/ng9Ld2dqVMxp4Yu37', target: '_blank' },
  { titleKey: 'contact.hours',                   value: '08:00 – 15:00' }
]

const { tm, t } = useI18n()
const introTexts = computed(() => tm('contact.contactPage.intro'))
</script>

<template>
  <div>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ t('contact.contactPage.title') }}
    </h2>

    <div class="descr-section mb-6 space-y-2">
      <p v-for="(line, i) in introTexts" :key="i">{{ line }}</p>
    </div>

    <div class="flex flex-col gap-2 mb-4">
      <div v-for="(item, idx) in contactInfo" :key="idx" class="flex gap-2">
        <div>{{ t(item.titleKey) }}:</div>
        <a
          v-if="item.href"
          :href="item.href"
          :target="item.target || null"
          class="text-primary underline cursor-pointer"
        >
          {{ item.value }}
        </a>
        <span v-else>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
