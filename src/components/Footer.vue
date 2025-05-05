<template>
  <footer class="py-10 bg-primary text-white mt-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- School Information -->
        <div>
          <h3 class="text-xl font-bold mb-4">Fenix School</h3>
          <p v-html="$t('address')"></p>
          <p class="mb-4">+420 2-2755-34-22</p>
        </div>

        <!-- Links & Resources -->
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.3685371509368!2d19.8070857723855!3d41.31458309027196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135030f8b76e079f%3A0xb250a407111e6806!2sShkolla%20Anglo-Shqiptare%20Fenix!5e0!3m2!1sen!2s!4v1746467704712!5m2!1sen!2s&zoom=15" width="80%" height="100%" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Links & Resources</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Calendar</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
            <li><a href="#" class="hover:underline">Parents Portal</a></li>
            <li><a href="#" class="hover:underline">Parent Council</a></li>
          </ul>
        </div>

        
        <!-- School Description -->
        <div>
          <!-- Stay Connected -->
          <div class="flex flex-col items-center justify-center text-center">
            <h3 class="text-xl font-bold mb-4">Stay Connected</h3>
            <!-- Social Media Icons -->
            <div class="flex space-x-4 mb-6">
              <a :href="socialMedia.facebook" target="_blank" class="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a :href="socialMedia.instagram" target="_blank" class="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <p class="mb-4 text-justify">
            The Fenix School is a non-profit, private school that offers a full comprehensive IB programme to students aged 3-18 from over 60 nationalities.
          </p>
        </div>
      </div>
      
      <!-- Partners and Accreditations -->
      <div class="mt-12 pt-8 border-t border-white/20">
        <div class="flex flex-wrap justify-center gap-8">
            <a v-for="(partner, idx) in partners" :key="`partner-${idx}`" :href="partner.href" target="_blank">
                <img v-if="partner.alt" :class="{'white-filter': idx === 3}" :src="partner.img" :alt="partner.alt" class="h-15 w-auto" />
                <p v-else class="text-white w-15 h-15 border  font-bold text-[9px] pt-[2px] text-center">
                    {{partner.text}}
                </p>
            </a>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-12 pt-4 text-center text-sm text-white/70">
        <p>Website Privacy Policy | Site Map</p>
        <p class="mt-2">© {{new Date().getFullYear()}} Fenix School. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional logic needed for this component
import {partners, socialMedia} from "../core/globalData.ts";
</script>

<style scoped>
/* Any component-specific styles can go here */
.white-filter{
  filter: brightness(0) invert(1);
}
</style> 