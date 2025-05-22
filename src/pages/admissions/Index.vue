<script setup lang="ts">
import DescriptionMessage from "../../components/DescriptionMessage.vue";
import ContactNow from "../../components/ContactNow.vue";

const registrationInfo = {
  intro: "Ne besojmë se edukimi fillon me një zgjedhje të vetëdijshme dhe të përbashkët ndërmjet familjes dhe institucionit. <br><br> Ne ofrojmë një mjedis të sigurt, të kujdesshëm dhe me standarde të larta akademike, ku çdo nxënës inkurajohet të zhvillojë potencialin e vet të plotë – jo vetëm në dije, por edhe në karakter, komunikim dhe bashkëpunim. <br><br> Ne duam të na zgjidhni për cilësinë.",
  steps: [
    {
      title: "Kontakti Fillestar",
      description: "Prindi ose kujdestari ligjor kontakton shkollën përmes sekretarisë ose drejtuesve për të shprehur interesin. Gjatë këtij takimi të parë, jepet informacion i plotë rreth filozofisë, programit mësimor, rregullave, etikës dhe përkujdesjes në Shkollën “Fenix”."
    },
    {
      title: "Periudha e Hapur për Regjistrime",
      description: "Regjistrimet janë të mundshme në periudha të caktuara të vitit shkollor – zakonisht në përfundim të vitit, gjatë pushimeve verore ose në fund të semestrave kur mundësohen lëvizje ose transferime të nxënësve."
    },
    {
      title: "Koha e Njohjes / Prova",
      description: "Në përputhje me kërkesën dhe disponueshmërinë, caktohet një periudhë njohjeje ose prove që zgjat zakonisht 3 ditë deri në një javë. Kjo periudhë shërben si një kohë vlerësimi dypalësh – për familjen që të njihet me mjedisin dhe programin, dhe për stafin pedagogjik që të vlerësojë organizimin, sjelljen, qasjen dhe potencialin akademik të nxënësit për zhvillim në ambientin e shkollës sonë."
    },
    {
      title: "Vendimi i Përbashkët",
      description: "Nëse koha e njohjes kalon me sukses dhe të dyja palët ndihen të sigurt për vazhdimësinë, atëherë fillojnë procedurat për regjistrimin zyrtar."
    },
    {
      title: "Nënshkrimi i Kontratës & Pagesa e Tarifës së Regjistrimit",
      description: "Pasi prindi nënshkruan kontratën për regjistrim dhe kryhet pagesa e tarifës përkatëse, nxënësi konsiderohet zyrtarisht pjesë e komunitetit tonë shkollor."
    }
  ]
};


</script>

<template>
  <div>
    <DescriptionMessage type="warning" class="mt-10 mb-8">
      <div v-html="registrationInfo.intro"></div>
    </DescriptionMessage>
    <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
      Hapat e regjistrimit
    </h2>
    <ul class="list-decimal max-w-4xl">
      <li v-for="(step, idx) in registrationInfo.steps" class="mb-4 ml-4" :key="idx">
        <h3 class="text-xl font-bold text-primary">
          {{ step.title }}
        </h3>
        <p>
          {{ step.description }}
        </p>
      </li>
    </ul>
    <ContactNow/>
  </div>
</template>

<style scoped>

</style>