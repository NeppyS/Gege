<template>
  <section
    class="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 text-white bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative"
  >
    <!-- Particles BG -->
    <canvas id="particles-bg" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Text Content -->
    <div
      class="flex-1 flex flex-col justify-center animate-fade-in text-center md:text-left relative z-10"
      style="min-height: 80vh;"
    >
      <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
        Hello, I'm <br />
        <span class="text-indigo-500">Nephten Fajardo Ilon</span>
      </h1>

      <p
        class="text-xl sm:text-2xl lg:text-3xl max-w-xl mx-auto md:mx-0 mb-10 text-gray-400 leading-relaxed"
      >
        A passionate Full Stack Developer crafting clean, efficient, and beautiful web apps.
      </p>

      <button
        class="mx-auto md:mx-0 px-6 py-2 w-40 text-base font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
      >
        Learn More
      </button>
    </div>

    <!-- Styled Image -->
    <div
      class="flex-1 flex justify-center items-center animate-slide-up relative z-10"
      style="min-height: 80vh;"
    >
      <img
        :src="picture"
        alt="Nephten Ilon"
        class="w-80 h-80 sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] object-cover rounded-[50%_30%_50%_30%/40%_50%_40%_50%] border-4 border-indigo-500/30 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-700 ease-in-out"
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

/* Canvas styling */
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
