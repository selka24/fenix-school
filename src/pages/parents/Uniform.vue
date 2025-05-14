<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";

const uniformPolicy = {
  title: "Uniforma e Shkollës",
  colors: "Ngjyrat e Uniformës: Uniforma jonë ka ngjyrat e bardha dhe të zeza, dhe duhet të jetë e pastër, e rregullt dhe e kompletuar në përputhje me rregullat e shkollës.",
  rules: {
    title: "Rregullat e Uniformës",
    list: [
      "Nxënësit duhet të veshin uniformën çdo ditë mësimi dhe gjatë aktiviteteve të organizuara nga shkolla.",
      "Uniforma duhet të jetë e pastër dhe e rregullt. Aksesorët dhe veshjet nuk duhet të bien në kundërshtim me rregulloren dhe etikën e shkollës.",
      "Nuk lejohet mbajtja e kapelave, syzeve të diellit, kapuçit, dorezave ose shallit në mjediset shkollore."
    ]
  },
  components: {
    title: "Përbërja e Uniformës",
    list: [
      "Bluzë/Këmisha: E bardhë me jakë rrethore dhe mëngë të shkurtra ose të gjata.",
      "Pantallonat/Fundi: Pantallona të zeza, të gjata ose deri tek gjuri. Fustani/fundi i zi deri tek gjuri.",
      "Pulovra/Triko: E bardhë ose e zezë me mëngë të gjata dhe gjatësi poshtë shtratit të pantallonave.",
      "Atlete/Këpucë: Të bardha ose të zeza, të sheshta dhe të përshtatshme për shkollë.",
      "Xhupat/Xhaketat: Mundësisht njëngjyrëshe, me ngjyrë të errët ose të bardhë."
    ]
  },
  peUniform: {
    title: "Uniforma për Edukimin Fizik",
    list: [
      "Bluzë: E bardhë, me jakë rrethore dhe mëngë të shkurtra ose të gjata.",
      "Tuta: Tuta të zeza, të gjata ose të shkurtra deri në gjunjë.",
      "Atlete: Të bardha ose të zeza, të përshtatshme për palestër."
    ]
  },
  closingNote: "Uniforma është një pjesë e rëndësishme e jetës shkollore, duke ndihmuar në krijimin e një mjedisi të disiplinuar dhe të fokusuar në arritjet akademike. Ne e inkurajojmë çdo nxënës që të respektojë politikën e uniformës dhe të kontribuojë në një ambient shkollor të organizuar dhe të barabartë."
}

</script>

<template>
<div>
  <DescriptionMessage type="warning" class="mt-10 mb-8">
    Uniforma është një pjesë e rëndësishme e identitetit dhe kulturës sonë shkollore. Ajo kontribuon në krijimin e një ambienti të disiplinuar, profesional dhe të barabartë për të gjithë nxënësit, duke i ndihmuar ata të fokusohen në mësim dhe zhvillimin personal.
  </DescriptionMessage>

  <div class="max-w-3xl">
    <p>
      Uniforma jonë ka ngjyrat e bardha dhe të zeza, dhe duhet të jetë e pastër, e rregullt dhe e kompletuar në përputhje me rregullat e shkollës.
    </p>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ uniformPolicy.rules.title }}
    </h2>
    <div class="descr-section">
      <p v-for="(li, idx) in uniformPolicy.rules.list" :key="'rule-' + idx">
        {{li}}
      </p>
    </div>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ uniformPolicy.components.title }}
    </h2>
    <div class="descr-section">
      <p v-for="([title, descr], idx) in uniformPolicy.components.list.map(l => l.split(':'))" :key="'rule-' + idx">
        <b>{{title}}:</b> {{descr}}
      </p>
    </div>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      {{ uniformPolicy.peUniform.title }}
    </h2>
    <div class="descr-section">
      <p v-for="([title, descr], idx) in uniformPolicy.peUniform.list.map(l => l.split(':'))" :key="'rule-' + idx">
        <b>{{title}}:</b> {{descr}}
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>