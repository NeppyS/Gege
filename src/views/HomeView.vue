<template>
  <section
    class="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 text-white overflow-y-auto relative pt-10 pb-16"
  >
    <!-- Particles BG -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Left Text -->
    <div
      class="flex-1 flex flex-col justify-center animate-fade-in text-center md:text-left relative z-10"
    >
      <h1 class="text-5xl sm:text-10xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
        Hello, I'm <br />
        <span class="text-indigo-500">Nephten Fajardo Ilon</span>
      </h1>

      <p class="text-lg sm:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 mb-10 text-gray-400 leading-relaxed">
        A passionate Full Stack Developer crafting clean, efficient, and beautiful web apps.
      </p>

      <button
        class="mx-auto md:mx-0 px-6 py-2 w-40 text-base font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
      >
        Learn More
      </button>

      <!-- Social Buttons -->
      <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
        <a
          href="https://www.facebook.com/nephtenllon"
          target="_blank"
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.007 3.66 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.34 21.128 22 17.007 22 12z"/></svg>
          Facebook
        </a>
        <a
          href="https://www.instagram.com/nephtenllon"
          target="_blank"
          class="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.976.976 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.062 1.366-.344 2.633-1.32 3.608-.976.976-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.84.07s-3.574-.012-4.84-.07c-1.366-.062-2.633-.344-3.608-1.32-.976-.976-1.258-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.062-1.366.344-2.633 1.32-3.608.976-.976 2.242-1.258 3.608-1.32C8.426 2.175 8.806 2.163 12 2.163zM12 0C8.741 0 8.332.012 7.052.07 5.773.128 4.605.396 3.678 1.322 2.752 2.248 2.484 3.416 2.426 4.695.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.279.326 2.447 1.252 3.373.926.926 2.094 1.194 3.373 1.252C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.279-.058 2.447-.326 3.373-1.252.926-.926 1.194-2.094 1.252-3.373.058-1.279.07-1.688.07-4.948s-.012-3.668-.07-4.948c-.058-1.279-.326-2.447-1.252-3.373C19.395.396 18.227.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
          Instagram
        </a>
        <a
          href="mailto:nephtenilon@gmail.com"
          class="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 4.5h21v15h-21v-15zm10.5 7.837l-9-5.837v12.5h18v-12.5l-9 5.837z"/></svg>
          Gmail
        </a>
        <a
          href="https://x.com/Nephten2"
          target="_blank"
          class="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <svg class="w-5 h-5" viewBox="0 0 1200 1227" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M1024 0H840L600 400 360 0H176l308 489L0 1227h232l368-592 368 592h232L692 497 1024 0Z"/></svg>
          X
        </a>
      </div>
    </div>

    <!-- Right Image -->
    <div
      class="flex-1 flex justify-center items-center animate-slide-up relative z-10"
    >
      <img
        :src="picture"
        alt="Nephten Ilon"
        class="w-89 h-64 sm:w-80 sm:h-80 md:w-[570px] md:h-[570px] object-cover rounded-[50%_30%_50%_30%/40%_50%_40%_50%] border-4 border-indigo-500/30 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-700 ease-in-out"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import picture from '@/assets/abc.jpg'

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
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
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
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1.1s ease-out forwards;
}

canvas#particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>
