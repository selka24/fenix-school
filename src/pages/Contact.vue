<template>
  <div class="flex flex-col max-w-lg gap-10">
    <ContactNow/>
    <div>
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ t('contact.leaveMsg') }}
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
    <!-- Job Application Form -->
    <div id="job" >
      <h2 class="text-3xl mt-14 mb-6 font-bold text-primary">
        {{ t('contact.jobApplication') }}
      </h2>
      <form @submit.prevent="handleJobSubmit" class="space-y-6">
        <!-- Name -->
        <div>
          <label for="job-name" class="block text-sm font-medium text-gray-700">
            {{ t('contact.name') }}
          </label>
          <input
            id="job-name"
            v-model="jobForm.name"
            type="text"
            required
            :placeholder="t('contact.namePlaceholder')"
            class="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>
        <!-- Email -->
        <div>
          <label for="job-email" class="block text-sm font-medium text-gray-700">
            {{ t('contact.email') }}
          </label>
          <input
            id="job-email"
            v-model="jobForm.email"
            type="email"
            required
            placeholder="email@example.com"
            class="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>
        <!-- Message -->
        <div>
          <label for="job-message" class="block text-sm font-medium text-gray-700">
            {{ t('contact.message') }}
          </label>
          <textarea
            id="job-message"
            v-model="jobForm.message"
            rows="6"
            required
            :placeholder="t('contact.messagePlaceholder')"
            class="mt-1 w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>
        <!-- CV Upload -->
        <div>
          <label for="job-cv" class="block text-sm font-medium text-gray-700">
            {{ t('contact.cvUpload') }}
          </label>
          <input
            id="job-cv"
            type="file"
            accept=".pdf,.doc,.docx"
            @change="onFileChange"
            class="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-primary"
          />
        </div>
        <!-- Alerts -->
        <p v-if="jobError"   class="text-sm text-red-600">{{ jobError }}</p>
        <p v-if="jobSuccess" class="text-sm text-primary">{{ jobSuccess }}</p>
        <!-- Submit -->
        <button
          type="submit"
          :disabled="jobSubmitting"
          class="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {{ jobSubmitting ? t('contact.sending') : t('contact.sendJob') }}
        </button>
      </form>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useI18n }      from 'vue-i18n'
import ContactNow from "../components/ContactNow.vue";
import { useMailjet } from '../composables/useMailjet';

interface ContactFormState {
    name: string
    email: string
    message: string
}

interface JobFormState {
  name: string
  email: string
  message: string
  file: File | null
}

const { t } = useI18n()
const { sendContactEmail, sendJobApplication } = useMailjet();

const form = reactive<ContactFormState>({
    name: '',
    email: '',
    message: '',
})

const jobForm = reactive<JobFormState>({
  name: '',
  email: '',
  message: '',
  file: null
})

const submitting = ref(false)
const success    = ref('')
const error      = ref('')

const jobSubmitting = ref(false)
const jobSuccess    = ref('')
const jobError      = ref('')

function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  jobForm.file = target.files && target.files[0] ? target.files[0] : null
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
        await sendContactEmail(form.name, form.email, form.message);
        success.value = t('contact.success')
        form.name = form.email = form.message = ''
    } catch (e) {
        error.value = t('contact.error')
    } finally {
        submitting.value = false
    }
}

async function handleJobSubmit() {
  jobError.value   = ''
  jobSuccess.value = ''

  if (!jobForm.name || !jobForm.email || !jobForm.message) {
    jobError.value = t('contact.fillAll')
    return
  }
  if (!validateEmail(jobForm.email)) {
    jobError.value = t('contact.invalidEmail')
    return
  }
  if (!jobForm.file) {
    jobError.value = t('contact.uploadCV')
    return
  }
  jobSubmitting.value = true
  
  try {
    await sendJobApplication(jobForm.name, jobForm.email, jobForm.message, jobForm.file);
    jobSuccess.value = t('contact.success')
    jobForm.name = ''
    jobForm.email = ''
    jobForm.message = ''
    jobForm.file = null
  } catch (e) {
    jobError.value = t('contact.error')
  } finally {
    jobSubmitting.value = false
  }
}

onMounted(() => {
  // Smooth scroll to #job if hash is present
  if (window.location.hash === '#job') {
    setTimeout(() => {
      const el = document.getElementById('job');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  }
})
</script>

<style scoped>
/* Your styles / overrides here (optional) */
</style>
