<template>
  <section
    id="about"
    class="relative w-full min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 lg:py-24 from-black via-gray-900 to-black text-gray-100 overflow-hidden"
    role="region"
    aria-labelledby="about-title"
  >
    <!-- Particle Background -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <div
      class="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center text-center lg:text-left z-10 animate-fade-in"
    >
      <!-- Left: Text Content -->
      <div class="space-y-10 text-base sm:text-lg leading-relaxed text-gray-300 animate-slide-up max-w-2xl">
        <div>
          <h2
            id="about-title"
            class="text-4xl sm:text-5xl font-extrabold mb-6 tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient"
          >
            About Me
          </h2>
          <p>
            I'm <span class="text-indigo-300 font-semibold">Nephten Fajardo Ilon</span>, a
            <span class="text-indigo-400 font-semibold">Full-Stack Developer</span> and UI enthusiast currently completing my Bachelor of Science in Information Technology at
            <span class="text-indigo-300 font-semibold">La Consolacion College Bacolod</span>. I recently finished my OJT at
            <span class="text-indigo-300 font-semibold">GREENROUTE</span> where I contributed to configure and install GPS & fuel dashboards.
          </p>
        </div>

        <!-- Tech Stack -->
        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">🚀 Tech Stack</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-start">
            <span
              v-for="(tech, i) in techStack"
              :key="tech"
              class="tech-tag animate-stagger"
              :style="{ animationDelay: `${i * 0.15}s` }"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Experience -->
        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">📌 Experience</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li
              v-for="(exp, i) in experiences"
              :key="i"
              class="animate-stagger"
              :style="{ animationDelay: `${i * 0.2}s` }"
            >
              <span v-html="exp"></span>
            </li>
          </ul>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 class="text-xl font-bold text-indigo-300 mb-3">💡 Core Values</h3>
            <ul class="space-y-1">
              <li
                v-for="(val, i) in coreValues"
                :key="i"
                class="animate-stagger"
                :style="{ animationDelay: `${i * 0.15}s` }"
              >
                {{ val }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold text-indigo-300 mb-3">🌍 Outside Tech</h3>
            <p class="animate-stagger" style="animation-delay: 0.6s;">
              I enjoy dev content, open-source tools, gaming, and tech meetups. I love helping others in their coding journey.
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">📈 What's Next?</h3>
          <p class="animate-stagger" style="animation-delay: 0.7s;">
            I'm working on personal projects to grow my portfolio and aiming to freelance or join a dynamic dev team after graduation.
          </p>
        </div>
      </div>

      <!-- Right: Profile Card -->
      <div class="w-full flex justify-center items-center animate-slide-up relative">
        <!-- Orbiting Tech Icons -->
        <div
          v-for="(icon, i) in orbitingIcons"
          :key="i"
          class="absolute w-12 h-12 rounded-full bg-white/10 border border-indigo-400/30 flex justify-center items-center text-indigo-300 text-xl animate-orbit hidden sm:flex"
          :style="{'animation-delay': (i * 1.5) + 's'}"
        >
          <i :class="icon"></i>
        </div>

        <!-- Profile Image -->
        <div
          class="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-[0_0_50px_rgba(99,102,241,0.5)] hover:scale-105 transition duration-500 animate-glow"
        >
          <img
            src="@/assets/profile.jpg"
            alt="Nephten Fajardo Ilon"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const techStack = [
  'Vue.js / Nuxt',
  'React / Next.js',
  'Tailwind CSS / SCSS',
  'Node.js / Express',
  'MySQL / MongoDB',
  'Docker / Git / REST APIs'
]

const experiences = [
  'OJT Developer at <span class="text-indigo-400">GreenRoute GPS</span> – built dashboards & internal UIs.',
  'Developed full-stack apps with authentication & role-based access.',
  'Designed modern SaaS-inspired interfaces with responsive UX.'
]

const coreValues = ['Clean Code', 'UX First', 'Performance', 'Lifelong Learning']

const orbitingIcons = ['fab fa-vuejs', 'fab fa-react', 'fab fa-node', 'fas fa-database']

onMounted(() => {
  const canvas = document.getElementById('particles-bg')
  const ctx = canvas.getContext('2d')
  let particles = []

  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function createParticles() {
    particles = []
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
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
      ctx.fillStyle = 'rgba(99,102,241,0.2)'
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
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
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
@keyframes orbit {
  0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
}
@keyframes staggerFadeScale {
  0% { opacity: 0; transform: scale(0.8) translateY(20px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

.animate-fade-in { animation: fade-in 0.8s ease-out both; }
.animate-slide-up { animation: slide-up 1s ease-out both; }
.animate-gradient { background-size: 200% 200%; animation: gradientMove 5s ease infinite; }
.animate-glow { animation: glow 3s infinite ease-in-out; }
.animate-orbit { animation: orbit 12s linear infinite; transform-origin: center; }
.animate-stagger { animation: staggerFadeScale 0.6s ease forwards; opacity: 0; }

.tech-tag {
  @apply text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-default tracking-wide;
}
</style>