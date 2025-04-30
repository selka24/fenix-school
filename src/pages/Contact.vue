<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-20">
    <div>
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        Lini një mesazh
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            {{ t('contact.name') }}
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            :placeholder="t('contact.namePlaceholder')"
            class="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            {{ t('contact.email') }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="email@example.com"
            class="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">
            {{ t('contact.message') }}
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            required
            :placeholder="t('contact.messagePlaceholder')"
            class="mt-1 w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>

        <!-- Alerts -->
        <p v-if="error"   class="text-sm text-red-600">{{ error }}</p>
        <p v-if="success" class="text-sm text-primary">{{ success }}</p>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="submitting"
          class="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {{ submitting ? t('contact.sending') : t('contact.send') }}
        </button>
      </form>
    </div>
    <ContactNow/>
  </div>

</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n }      from 'vue-i18n'
import ContactNow from "../components/ContactNow.vue";

interface ContactFormState {
    name: string
    email: string
    message: string
}

const { t } = useI18n()                    // <── translation helper

const form = reactive<ContactFormState>({
    name: '',
    email: '',
    message: '',
})

const submitting = ref(false)
const success    = ref('')
const error      = ref('')

function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function handleSubmit() {
    error.value   = ''
    success.value = ''

    if (!form.name || !form.email || !form.message) {
        error.value = t('contact.fillAll')
        return
    }
    if (!validateEmail(form.email)) {
        error.value = t('contact.invalidEmail')
        return
    }

    submitting.value = true
    try {
        /* TODO: Replace this with your own e-mail/API integration */
        await new Promise(resolve => setTimeout(resolve, 1200))

        success.value = t('contact.success')
        form.name = form.email = form.message = ''
    } catch {
        error.value = t('contact.error')
    } finally {
        submitting.value = false
    }
}
</script>

<style scoped>
/* Your styles / overrides here (optional) */
</style>
