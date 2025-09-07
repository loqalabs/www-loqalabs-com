<template>
  <nav class="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center space-x-3">
            <img
              src="/src/assets/logos/loqalabs_symbol-transparent.png"
              alt="Loqa Labs"
              class="h-12 w-auto"
            />
            <span class="text-2xl font-bold text-white">Loqa Labs</span>
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            to="/"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            active-class="text-loqa-blue"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/loqa"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            active-class="text-loqa-blue"
          >
            Loqa
          </RouterLink>
          <RouterLink
            to="/use-cases"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            active-class="text-loqa-blue"
          >
            Use Cases
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            active-class="text-loqa-blue"
          >
            About
          </RouterLink>
          <a
            href="https://loqalabs.github.io/loqa/"
            target="_blank"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
          >
            Docs
          </a>
          <RouterLink
            to="/contact"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            active-class="text-loqa-blue"
          >
            Contact
          </RouterLink>
        </div>

        <div class="flex items-center space-x-4">
          <RouterLink
            to="/loqa"
            class="bg-loqa-gold hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Get Started
          </RouterLink>

          <button
            @click="toggleMobileMenu"
            class="md:hidden text-neutral-300 hover:text-white transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-800">
        <div class="flex flex-col space-y-4">
          <RouterLink
            to="/"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/loqa"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Loqa
          </RouterLink>
          <RouterLink
            to="/use-cases"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Use Cases
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            @click="closeMobileMenu"
          >
            About
          </RouterLink>
          <a
            href="https://loqalabs.github.io/loqa/"
            target="_blank"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
          >
            Docs
          </a>
          <RouterLink
            to="/contact"
            class="text-gray-300 hover:text-loqa-blue transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
