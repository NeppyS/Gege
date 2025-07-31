<template>
  <section
  id="projects"
  class="relative w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 py-24 overflow-hidden text-white  from-black via-gray-900 to-black"
>
  <!-- Particle Background -->
  <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

  <!-- Optional Stars Layer -->
  <div class="absolute inset-0 bg-stars bg-repeat opacity-10 z-0"></div>

  <!-- Section Title -->
  <h2
    class="text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-widest relative z-10 animate-fade-down bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
  >
    My Projects
  </h2>

  <!-- Project Cards -->
  <div class="w-full max-w-6xl relative z-10">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20 lg:mb-32 group"
      :class="{ 'lg:flex-row-reverse': index % 2 }"
    >
      <!-- Timeline and Dot -->
      <div class="absolute left-1/2 top-0 hidden lg:block w-1 bg-gradient-to-b from-indigo-500/30 to-purple-500/30 -translate-x-1/2"></div>
      <div
        class="absolute left-1/2 lg:left-auto lg:static top-0 transform -translate-x-1/2 lg:translate-x-0 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_20px_#6366f1] animate-pulse"
      ></div>

      <!-- Project Card -->
      <div
        class="flex-1 w-full max-w-md sm:max-w-lg backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 shadow-xl
                transition-all duration-300 ease-in-out transform group-hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]
                hover:-translate-y-2 hover:border-indigo-400 perspective"
      >
        <h3 class="text-2xl sm:text-3xl font-bold text-indigo-300 mb-3 tracking-tight">
          {{ project.title }}
        </h3>
        <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          {{ project.description }}
        </p>

        <!-- Features -->
        <ul class="text-gray-400 text-xs sm:text-sm list-disc list-inside mb-4 space-y-1">
          <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
        </ul>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="(tag, i) in project.tech"
            :key="i"
            class="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/20
                   hover:bg-indigo-600/20 hover:border-indigo-400 transition-all duration-300
                   backdrop-blur-md text-indigo-100 shadow-sm"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Button -->
        <a
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="inline-block mt-2 px-6 py-2.5 rounded-lg text-sm font-semibold
                 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
                 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30 animate-glow
                 text-white no-underline backdrop-blur-sm"
        >
          Visit Project
        </a>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>
import { onMounted } from 'vue'

const projects = [
  {
    title: 'MartialPro – Gym Management System',
    description: 'A powerful gym management platform with offline capabilities and analytics dashboards.',
    features: [
      'Member registration & payments',
      'Dashboard analytics & reports',
      'Offline-ready system with backups',
    ],
    tech: ['React', 'Tailwind', 'MySQL', 'Node.js'],
    url: '#',
  },
  {
    title: 'GreenRoute Dashboard',
    description: 'Real-time vehicle and fuel tracking dashboard to finish my OJT.',
    features: [
      'GPS map with live updates',
      'Fuel consumption analytics',
      'Custom alert and notification system',
    ],
    tech: ['Vue 3', 'Leaflet', 'REST API', 'Chart.js'],
    url: '#',
  },
  {
    title: 'Futuristic Portfolio',
    description: 'A fully responsive, animated dark-themed portfolio website with modern UX.',
    features: [
      'GSAP animations & smooth scrolling',
      'Optimized for speed and SEO',
      'Dark-only design with particles',
    ],
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'GSAP'],
    url: '#',
  },
  {
    title: 'TaskMaster App',
    description: 'A productivity app that combines task management and a Pomodoro timer.',
    features: [
      'Offline & PWA ready',
      'Local storage sync',
      'Interactive and responsive UI',
    ],
    tech: ['PWA', 'IndexedDB', 'Tailwind', 'JavaScript'],
    url: '#',
  },
]

onMounted(() => {
  const canvas = document.getElementById('particles-bg')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let particles = []

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const createParticles = () => {
    particles = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.8,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      })
    }
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p) => {
      p.x += p.dx
      p.y += p.dy
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(139,92,246,0.15)'
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
@keyframes fade-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes gradientMove {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes glow {
  0%,100% { box-shadow: 0 0 30px rgba(99,102,241,0.3); }
  50% { box-shadow: 0 0 60px rgba(139,92,246,0.6); }
}
.animate-fade-down { animation: fade-down 0.8s ease-out both; }
.animate-slide-up { animation: slide-up 0.8s ease-out both; }
.animate-gradient { background-size: 200% 200%; animation: gradientMove 5s ease infinite; }
.animate-glow { animation: glow 3s infinite ease-in-out; }
</style>