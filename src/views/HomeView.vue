<template>
  <section
    class="relative w-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 text-white pt-10 lg:pt-16 pb-16 lg:pb-20 overflow-hidden space-y-10 lg:space-y-0 lg:space-x-10"
  >
    <!-- Particle Background -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Left Text / Hero -->
    <div
      class="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 space-y-6 animate-fade-in"
    >
      <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
        Hello, I'm
        <br />
        <span
          class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-move"
        >
          Nephten Fajardo Ilon
        </span>
      </h1>

      <p
        class="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-lg leading-relaxed animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-indigo-400 pr-2"
      >
        Full Stack Developer & UI Enthusiast
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
        <!-- View Projects -->
        <router-link
          to="/projects"
          class="px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold rounded-xl
                 bg-gradient-to-r from-indigo-600 to-purple-600
                 hover:from-indigo-500 hover:to-purple-500
                 shadow-[0_0_20px_rgba(99,102,241,0.4)]
                 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
                 transform hover:scale-105 active:scale-95
                 transition-all duration-300
                 text-white no-underline"
        >
          🚀 View Projects
        </router-link>

        <!-- Contact Me -->
        <router-link
          to="/contact"
          class="px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold rounded-xl
                 border border-indigo-400/60 bg-white/5 backdrop-blur-sm
                 hover:bg-indigo-500/20 hover:border-indigo-400
                 shadow-[0_0_15px_rgba(99,102,241,0.2)]
                 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]
                 transform hover:scale-105 active:scale-95
                 transition-all duration-300
                 text-white no-underline"
        >
          📩 Contact Me
        </router-link>
      </div>

      <!-- Social Links -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
        <!-- Facebook -->
        <a href="https://www.facebook.com/nephtenllon" target="_blank" class="social-btn" style="background-color:#1877f2">
          <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path
              d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.007 3.66 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.34 21.128 22 17.007 22 12z"
            />
          </svg>
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/nephtenllon"
          target="_blank"
          class="social-btn"
          style="background: radial-gradient(circle at 30% 30%, #feda75,#d62976,#962fbf,#4f5bd5)"
        >
          <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.976.976 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.062 1.366-.344 2.633-1.32 3.608-.976.976-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.84.07s-3.574-.012-4.84-.07c-1.366-.062-2.633-.344-3.608-1.32-.976-.976-1.258-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.062-1.366.344-2.633 1.32-3.608.976-.976 2.242-1.258 3.608-1.32C8.426 2.175 8.806 2.163 12 2.163z"
            />
          </svg>
        </a>

        <!-- Gmail -->
        <a href="mailto:nephtenilon@gmail.com" class="social-btn" style="background-color:#ea4335">
          <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M1.5 4.5h21v15h-21v-15zm10.5 7.837l-9-5.837v12.5h18v-12.5l-9 5.837z" />
          </svg>
        </a>

        <!-- X / Twitter -->
        <a href="https://x.com/Nephten2" target="_blank" class="social-btn" style="background-color:#000000">
          <svg class="w-5 h-5" fill="white" viewBox="0 0 1200 1227">
            <path d="M1024 0H840L600 400 360 0H176l308 489L0 1227h232l368-592 368 592h232L692 497 1024 0Z" />
          </svg>
        </a>
      </div>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
        <span class="px-3 py-1 bg-indigo-500/20 border border-indigo-400/50 rounded-lg text-sm backdrop-blur-md">Vue.js</span>
        <span class="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-lg text-sm backdrop-blur-md">TailwindCSS</span>
        <span class="px-3 py-1 bg-pink-500/20 border border-pink-400/50 rounded-lg text-sm backdrop-blur-md">Node.js</span>
        <span class="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-lg text-sm backdrop-blur-md">React</span>
      </div>
    </div>

    <!-- Right Video (Floating Blob) -->
    <div class="flex-1 flex justify-center items-center w-full lg:w-auto relative z-10 animate-slide-up">
      <div
        class="relative w-70 h-70 sm:w-100 sm:h-100 md:w-125 md:h-125
               shadow-[0_0_50px_rgba(99,102,241,0.45)]
               border-4 border-indigo-500/30
               transform hover:scale-105 rotate-2 hover:rotate-0
               transition duration-700 ease-in-out overflow-hidden animate-float"
        style="clip-path: polygon(70% 0%, 100% 30%, 90% 70%, 60% 100%, 20% 90%, 0% 50%, 10% 10%)"
      >
        <video autoplay muted loop playsinline class="w-full h-full object-cover filter grayscale contrast-150">
          <source src="@/assets/video1.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('particles-bg')
  const ctx = canvas.getContext('2d')
  let particles = []

  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function createParticles() {
    particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }))
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
@keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slide-up { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
@keyframes typewriter { from { width: 0 } to { width: 100% } }
@keyframes gradientMove { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes float { 0%, 100% { transform: translateY(0) rotate(2deg);} 50% { transform: translateY(-10px) rotate(0deg);} }

.animate-fade-in { animation: fade-in 1s ease forwards; }
.animate-slide-up { animation: slide-up 1.2s ease forwards; }
.animate-typewriter { display: inline-block; width: 0; animation: typewriter 3s steps(40, end) 1s forwards; }
.animate-gradient-move { background-size: 200% auto; animation: gradientMove 6s linear infinite; }
.animate-float { animation: float 6s ease-in-out infinite; }

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

canvas#particles-bg { position: absolute; inset: 0; width: 100%; height: 100%; }
</style>
