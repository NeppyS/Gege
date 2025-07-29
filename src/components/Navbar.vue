<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent"
    role="navigation"
    aria-label="Primary"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link
        to="/"
        class="text-3xl font-extrabold tracking-wide text-indigo-400 hover:text-indigo-300 transition duration-300 select-none cursor-pointer no-underline hover:glow"
        aria-label="Homepage"
      >
        Nephten Ilon
      </router-link>

      <!-- Desktop Links -->
      <ul class="list-none hidden md:flex gap-10 text-base font-semibold text-white uppercase tracking-wide">
        <li>
          <router-link
            to="/about"
            class="relative px-2 py-1 no-underline text-white hover:text-indigo-400 hover:glow transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link
            to="/projects"
            class="relative px-2 py-1 no-underline text-white hover:text-indigo-400 hover:glow transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          >
            Projects
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="relative px-2 py-1 no-underline text-white hover:text-indigo-400 hover:glow transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          >
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isOpen.toString()"
        class="md:hidden text-white hover:text-indigo-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
      >
        <svg
          v-if="!isOpen"
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Links -->
    <transition name="fade-slide">
      <div
        v-if="isOpen"
        class="md:hidden px-6 pb-6 pt-2 backdrop-blur-md bg-gray-900/70 rounded-b-xl shadow-lg"
      >
        <ul class="list-none space-y-4 text-base text-white font-semibold uppercase tracking-wide">
          <li>
            <router-link
              to="/about"
              @click="toggleMenu"
              class="block px-4 py-2 rounded-lg no-underline text-white hover:bg-indigo-600 hover:glow transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              @click="toggleMenu"
              class="block px-4 py-2 rounded-lg no-underline text-white hover:bg-indigo-600 hover:glow transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Projects
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              @click="toggleMenu"
              class="block px-4 py-2 rounded-lg no-underline text-white hover:bg-indigo-600 hover:glow transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.no-underline {
  text-decoration: none;
}

.hover\:glow:hover {
  text-shadow: 0 0 6px rgba(129, 140, 248, 0.7); /* Indigo glow */
}
</style>
