<script setup lang="ts">
const contactInfo = [
  {
    title: "Drejtori i shkollës",
    value: "+355 69 306 5760",
    link: "tel:+355693065760"
  },
  {
    title: "Drejtori ekzekutiv",
    value: "+355 69 202 4495",
    link: "tel:+355692024495"
  },
  {
    title: "Sekretaria",
    value: "+355 68 423 3800",
    link: "tel:+355684233800"
  },
  {
    title: "Email",
    value: "shkollafenix@gmail.com",
    link: "mailto:shkollafenix@gmail.com"
  },
  {
    title: "Adresa",
    value: "Rruga Bilal Golemi",
    link: "https://maps.app.goo.gl/ng9Ld2dqVMxp4Yu37",
    target: "_blank"
  },
  {
    title: 'E Hëne - E Premte',
    value: "08:00 - 15:00",
  }
]
</script>

<template>
<div>
  <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
    Kontakto tani!
  </h2>
  <div class="descr-section mb-6">
    <p>
      Ne jemi  të  gatshëm për t’ju ardhur në ndihmë për çdo pyetje që mund të keni.
    </p>
    <p>
      Mund të na kontaktoni dhe vizitoni në adresat e mëposhtme.
    </p>
  </div>
  <div class="flex gap-2 mb-4" v-for="({title, value, link: href, target}, idx) in contactInfo" :key="idx + '-link'">
    <div>
      {{title}}:
    </div>
    <a class="text-primary" :class="{'underline cursor-pointer': !!href}" v-bind="{target, href}">
      {{value}}
    </a>
  </div>
</div>
</template>

<style scoped>

</style>