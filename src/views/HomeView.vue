<template>
  <section
    class="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 text-white z-0 overflow-x-hidden"
    role="region"
    aria-label="Hero Section"
  >
    <!-- Particle Background -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Left Content -->
    <div
      class="relative z-10 w-full max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 animate-fade-in p-4 sm:p-8 lg:pl-12"
    >
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        Hello, I'm <br />
        <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-move">
          Nephten Fajardo Ilon
        </span>
      </h1>

      <p
        class="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-indigo-400 pr-2 max-w-full"
      >
        Full Stack Developer & UI Enthusiast
      </p>

      <p class="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
        I build interactive websites and applications with clean UI and a focus on performance, responsiveness, and user experience. Vue.js and Tailwind are my go-to tools.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
        <router-link to="/projects" class="btn-primary no-underline">🚀 View Projects</router-link>
        <router-link to="/contact" class="btn-secondary no-underline">📩 Contact Me</router-link>
      </div>

      <!-- Social Icons -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
        <!-- Keep your social buttons here (same as before) -->
        <!-- ... -->
      </div>

      <!-- Tech Stack -->
      <div class="mt-10 w-full">
        <h2 class="text-2xl font-bold mb-6 text-center lg:text-left">Tech Stack</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
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
    <div class="w-full h-[250px] lg:w-1/2 lg:h-full relative z-10 clip-slash">
      <video autoplay muted loop playsinline class="w-full h-full object-cover filter grayscale contrast-150">
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