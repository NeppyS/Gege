<template>
  <section
    id="projects"
    class="w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-20 pb-28 text-white relative overflow-hidden"
  >
    <!-- Particles BG -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <h2
      class="text-4xl sm:text-5xl font-extrabold text-center text-indigo-400 mb-10 futuristic-font tracking-widest relative z-10"
    >
      My Projects
    </h2>

    <div class="relative w-full max-w-6xl mx-auto flex items-center justify-center z-10">
      <!-- Arrow Left -->
      <button
        @click="prevSlide"
        class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-indigo-700/10 hover:bg-indigo-500/20 backdrop-blur-md p-3 sm:p-4 rounded-full border border-indigo-400/40 shadow-xl transition"
        aria-label="Previous project"
      >
        <ChevronLeft class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-200" />
      </button>

      <!-- Slides Container -->
      <div class="overflow-hidden w-full px-2 sm:px-8">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="w-full flex-shrink-0 flex justify-center px-2"
          >
            <div
              class="w-full max-w-md sm:max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0f0f23]/70 to-[#1a1a40]/50 border border-indigo-400/30 shadow-xl backdrop-blur-xl relative transform transition-transform duration-700 hover:scale-105 neon-border"
            >
              <div class="absolute inset-0 z-[-1] pointer-events-none animated-glow-border rounded-2xl"></div>

              <h3 class="text-2xl sm:text-3xl font-bold text-indigo-300 mb-3 futuristic-font">
                {{ project.title }}
              </h3>

              <p class="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide mb-5">
                {{ project.description }}
              </p>

              <a
                :href="project.url"
                target="_blank"
                rel="noopener"
                class="inline-block text-sm sm:text-base font-semibold text-black bg-indigo-400 hover:bg-indigo-500 transition px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow shadow-indigo-500"
              >
                🚀 Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow Right -->
      <button
        @click="nextSlide"
        class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-indigo-700/10 hover:bg-indigo-500/20 backdrop-blur-md p-3 sm:p-4 rounded-full border border-indigo-400/40 shadow-xl transition"
        aria-label="Next project"
      >
        <ChevronRight class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-200" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const projects = [
  {
    title: 'MartialPro – Gym Management System',
    description:
      'A powerful gym platform built with Vue.js + Tailwind. Member tracking, payments, dashboards — all offline-ready.',
    url: '#',
  },
  {
    title: 'GreenRoute Dashboard',
    description:
      'Real-time vehicle & fuel tracking dashboard during OJT at GreenRoute. Includes GPS sync, charts & alert system.',
    url: '#',
  },
  {
    title: 'Futuristic Portfolio',
    description:
      'This portfolio! Built in Vue 3 + Tailwind + Vite. It’s fast, modern, animated, dark-only and responsive.',
    url: '#',
  },
  {
    title: 'TaskMaster App',
    description:
      'Productivity app that blends to-do lists + Pomodoro timer with smooth local data & animations.',
    url: '#',
  },
]

const currentIndex = ref(0)

function prevSlide() {
  currentIndex.value =
    currentIndex.value === 0 ? projects.length - 1 : currentIndex.value - 1
}

function nextSlide() {
  currentIndex.value =
    currentIndex.value === projects.length - 1 ? 0 : currentIndex.value + 1
}

// Particle BG Setup
onMounted(() => {
  const canvas = document.getElementById('particles-bg')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let particles = []

  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function createParticles() {
    particles = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
      })
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p) => {
      p.x += p.dx
      p.y += p.dy
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(99,102,241,0.15)'
      ctx.fill()
    })
    requestAnimationFrame(animate)
  }

  resizeCanvas()
  createParticles()
  animate()

  window.addEventListener('resize', () => {
    resizeCanvas()
    createParticles()
  })
})
</script>

<style scoped>
.futuristic-font {
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 8px rgba(99, 102, 241, 0.6);
  letter-spacing: 2px;
}

@keyframes glow-border {
  0% {
    box-shadow: 0 0 12px rgba(99, 102, 241, 0.15), 0 0 25px rgba(99, 102, 241, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.25), 0 0 50px rgba(99, 102, 241, 0.3);
  }
  100% {
    box-shadow: 0 0 12px rgba(99, 102, 241, 0.15), 0 0 25px rgba(99, 102, 241, 0.2);
  }
}
.animated-glow-border {
  animation: glow-border 6s ease-in-out infinite;
}

canvas#particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}
</style>
