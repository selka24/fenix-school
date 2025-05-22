<template>
  <section class="relative h-[300px] sm:h-[calc(100vh-218px)] overflow-hidden">
    <div class="absolute h-[50%] bottom-0 bg-gradient-to-t from-black/60 to-transparent z-[20]"></div>
    <!-- Hero Carousel -->
    <div class="absolute inset-0">
      <!-- First Slide -->
      <div 
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out "
        :class="{ 'opacity-100 z-10': activeSlideIndex === 0, 'opacity-0': activeSlideIndex !== 0 }"
      >
        <img 
          src="/images/happy-kids-playing-city-s-street-sunny-summer-s-day-front-modern-building.jpg" 
          alt="Happy kids playing" 
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-black" style="opacity: 0.15;"></div>
      </div>
      
      <!-- Second Slide -->
      <div 
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100 z-10': activeSlideIndex === 1, 'opacity-0': activeSlideIndex !== 1 }"
      >
        <img 
          src="/images/medium-shot-girls-wearing-goggles.jpg" 
          alt="Girls wearing goggles" 
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-black" style="opacity: 0.15;"></div>
      </div>
      
      <!-- Third Slide -->
      <div 
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100 z-10': activeSlideIndex === 2, 'opacity-0': activeSlideIndex !== 2 }"
      >
        <img 
          src="/images/happy-kids-playing-city-s-street-sunny-summer-s-day-front-modern-building-group-happy-childrens-teenagers-having-fun-together-concept-friendship-childhood-summer-holidays.jpg" 
          alt="Kids having fun together" 
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-black" style="opacity: 0.15;"></div>
      </div>
    </div>

    <!-- Content Overlay -->
    <div class="relative h-full flex flex-col justify-end items-center z-20">
      <div class="mb-24">
        <h1 class="text-white text-5xl font-bold tracking-wide mb-3">ENGAGE</h1>
        <p class="text-white text-xs text-center">Harness apply their learning in diverse real-life/changing contexts.</p>
      </div>
      
      <!-- Navigation Dots -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <button 
          v-for="index in 3" 
          :key="index"
          class="w-2.5 h-2.5 rounded-full bg-white transition-opacity duration-300"
          :class="{ 'opacity-70': activeSlideIndex !== index - 1 }"
          @click="setActiveSlide(index - 1)"
        ></button>
      </div>
      
      <!-- Side Navigation Buttons -->
      <div class="absolute hidden right-0 uppercase w-52 top-1/3 md:flex flex-col space-y-2">
        <router-link to="/about/why-fenix" class="btn-white">{{ $t('whyFenix') }}</router-link>
        <router-link to="/curriculum" class="btn-white">{{ $t('programmes.curriculum') }}</router-link>
        <router-link to="/activities" class="btn-white">{{ $t('activities') }}</router-link>
      </div>

      <!-- Left/Right Navigation Arrows -->
      <button 
        class="absolute left-4 border border-white rounded-full px-2 bottom-4 hover:bg-white hover:text-primary transform -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
        @click="prevSlide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        class="absolute left-18 border border-white rounded-full hover:bg-white hover:text-primary px-2 bottom-4 transform -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
        @click="nextSlide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeSlideIndex = ref(0);
let carouselInterval: number | null = null;

// Function to set active slide
const setActiveSlide = (index: number) => {
  activeSlideIndex.value = index;
  resetCarouselTimer();
};

// Navigate to next slide
const nextSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % 3;
  resetCarouselTimer();
};

// Navigate to previous slide
const prevSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value - 1 + 3) % 3;
  resetCarouselTimer();
};

// Reset the timer when user interacts with carousel
const resetCarouselTimer = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    startCarousel();
  }
};

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  // Set a fallback image if the original fails to load
  img.src = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  img.alt = 'Fallback image';
};

// Auto-rotate carousel
const startCarousel = () => {
  carouselInterval = window.setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

// Setup on component mount
onMounted(() => {
  startCarousel();
  
  // Add touch swipe support
  const heroSection = document.querySelector('section');
  if (heroSection) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped right
        prevSlide();
      } else if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped left
        nextSlide();
      }
    };
  }
});

// Clean up before component unmounts
onBeforeUnmount(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
});
</script>

<style scoped>
/* Match the exact font style as in the screenshot */
h1 {
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.05em;
  position: relative;
  text-align: center;
}

/* Add a bottom border under the ENGAGE heading */
h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background-color: white;
  margin: 10px auto 0;
}
</style>