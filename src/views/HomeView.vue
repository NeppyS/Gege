<template>
  <section
    class="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 pt-10 pb-16 text-white z-0 overflow-x-hidden"
    role="region"
    aria-label="Hero Section"
  >
    <!-- Particle Background -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Content Area -->
    <div class="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 px-4 sm:px-8 lg:pl-12">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
        Hello, I'm <br />
        <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-move">
          Nephten Fajardo Ilon
        </span>
      </h1>

      <p class="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-indigo-400 pr-2 max-w-full">
        Full Stack Developer & UI Enthusiast
      </p>

      <p class="text-sm sm:text-base text-white/80 max-w-prose leading-relaxed">
        I build interactive websites and applications with clean UI and a focus on performance, responsiveness, and user experience. Vue.js and Tailwind are my go-to tools.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4 w-full sm:w-auto">
        <router-link
          to="/projects"
          class="btn-primary text-center px-6 py-2 min-w-[180px] sm:min-w-[auto]"
        >
          🚀 View Projects
        </router-link>
        <router-link
          to="/contact"
          class="btn-secondary text-center px-6 py-2 min-w-[180px] sm:min-w-[auto]"
        >
          📩 Contact Me
        </router-link>
      </div>

      <!-- Social Icons -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
        <!-- Facebook -->
        <a href="https://www.facebook.com/nephtenllon" target="_blank" class="social-btn bg-[#1877f2]" aria-label="Facebook">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.483V14.709h-3.13v-3.62h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.62h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/nephtenllon" target="_blank" class="social-btn" aria-label="Instagram"
          style="background: radial-gradient(circle at 30% 30%, #feda75,#d62976,#962fbf,#4f5bd5)">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.206.056 2.003.24 2.466.404a4.921 4.921 0 0 1 1.79 1.165 4.923 4.923 0 0 1 1.165 1.79c.164.463.348 1.26.404 2.466.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.404 2.466a4.923 4.923 0 0 1-1.165 1.79 4.921 4.921 0 0 1-1.79 1.165c-.463.164-1.26.348-2.466.404-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.466-.404a4.921 4.921 0 0 1-1.79-1.165 4.921 4.921 0 0 1-1.165-1.79c-.164-.463-.348-1.26-.404-2.466C2.212 15.784 2.2 15.4 2.2 12.2s.012-3.584.07-4.85c.056-1.206.24-2.003.404-2.466A4.923 4.923 0 0 1 3.84 3.094a4.923 4.923 0 0 1 1.79-1.165c.463-.164 1.26-.348 2.466-.404C8.616 2.212 9 2.2 12 2.2zm0 3.8a6 6 0 1 0 0 12.001A6 6 0 0 0 12 6zm0 9.8a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
          </svg>
        </a>

        <!-- Gmail -->
        <a href="mailto:nephtenilon@gmail.com" class="social-btn bg-[#ea4335]" aria-label="Email">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 13.5l-12-9v18h24v-18zm0-3l12-9h-24z"/>
          </svg>
        </a>

        <!-- Twitter / X -->
        <a href="https://x.com/Nephten2" target="_blank" class="social-btn bg-black" aria-label="X / Twitter">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 0H1.54C.69 0 0 .69 0 1.54v20.92C0 23.31.69 24 1.54 24h20.92c.85 0 1.54-.69 1.54-1.54V1.54C24 .69 23.31 0 22.46 0zM17.29 7.44l-4.08 4.81 4.85 6.31h-3.03l-3.41-4.57-3.91 4.57H6.07l4.34-5.09-4.68-5.85h3.06l3.24 4.37 3.73-4.37h2.53z"/>
          </svg>
        </a>
      </div>

      <!-- Tech Stack -->
      <div class="mt-10 w-full">
        <h2 class="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Tech Stack</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-items-center">
          <span class="tech-tag">💚 Vue.js</span>
          <span class="tech-tag">🎨 TailwindCSS</span>
          <span class="tech-tag">🖥 Node.js</span>
          <span class="tech-tag">⚛ React</span>
          <span class="tech-tag">🐘 PHP</span>
          <span class="tech-tag">🐬 MySQL</span>
          <span class="tech-tag">🗄 phpMyAdmin</span>
          <span class="tech-tag">⚙ Express.js</span>
        </div>
      </div>
    </div>

    <!-- Right Video Panel -->
    <div class="w-full max-w-2xl h-48 sm:h-64 md:h-80 lg:w-1/2 lg:h-full relative z-10 clip-slash mb-6 lg:mb-0">
      <video autoplay muted loop playsinline class="w-full h-full object-cover filter grayscale contrast-150 rounded-xl lg:rounded-none">
        <source src="@/assets/video1.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  </section>
</template>




<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('particles-bg')
  const ctx = canvas.getContext('2d')
  let particles = []

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const createParticles = () => {
    particles = Array.from({ length: 400 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.3,
      pulse: 0,
    }))
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => {
      p.x += p.dx
      p.y += p.dy
      p.pulse += 0.02
      const pulseRadius = p.radius + Math.sin(p.pulse) * 0.5

      // Bounce on edges
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(140, 160, 255, ${p.opacity})`
      ctx.shadowColor = 'rgba(140, 160, 255, 0.5)'
      ctx.shadowBlur = 15
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
@keyframes typewriter {
  from { width: 0 }
  to { width: 100% }
}
@keyframes gradientMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-typewriter {
  display: inline-block;
  width: 0;
  animation: typewriter 3s steps(40, end) 1s forwards;
}
.animate-gradient-move {
  background-size: 200% auto;
  animation: gradientMove 6s ease-in-out infinite;
}
.clip-slash {
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
}
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 9999px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  text-decoration: none;
}
.social-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}
.tech-tag {
  @apply text-white text-sm font-medium px-4 py-2 rounded-full 
         border border-white/20 backdrop-blur-md bg-white/5 
         hover:bg-white/10 transition-all duration-300 
         shadow-md hover:shadow-lg hover:scale-105 
         cursor-default tracking-wide;
}

.btn-primary, .btn-secondary {
  text-decoration: none;
}
.btn-primary {
  @apply px-6 py-3 font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all text-white shadow-lg;
}
.btn-secondary {
  @apply px-6 py-3 font-semibold rounded-xl border border-indigo-400/60 bg-white/5 backdrop-blur-sm hover:bg-indigo-500/20 hover:border-indigo-400 transition-all text-white;
}
</style>