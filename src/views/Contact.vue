<template>
  <section
    id="contact"
    class="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 py-20
          from-gray-950 via-gray-900 to-gray-950 overflow-hidden text-white"
  >
    <!-- Floating Particles Background -->
    <canvas id="particles-bg" class="absolute inset-0 pointer-events-none z-0"></canvas>

    <!-- Heading -->
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight opacity-0 animate-fade-down relative z-10"
    >
      Get in
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
        Touch
      </span>
    </h1>

    <p
      class="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-400 opacity-0 animate-fade-up relative z-10"
    >
      Want to collaborate or just say hello? Fill out the form below or connect with me on social media!
    </p>

    <!-- Contact Card -->
<div
  class="w-full max-w-2xl backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-8 py-10 shadow-lg shadow-indigo-500/10
         relative z-10 opacity-0 animate-scale-up flex justify-center"
>
  <form @submit.prevent="submitForm" class="w-full max-w-md space-y-6">
    <!-- Name -->
    <div class="relative">
      <i class="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
      <input
        v-model="name"
        type="text"
        required
        placeholder=" "
        class="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white
               focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 peer"
      />
      <label
        class="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500
               peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400"
      >
        Your Name
      </label>
    </div>

    <!-- Email -->
    <div class="relative">
      <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
      <input
        v-model="email"
        type="email"
        required
        placeholder=" "
        class="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white
               focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 peer"
      />
      <label
        class="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500
               peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400"
      >
        Your Email
      </label>
    </div>

    <!-- Message -->
    <div class="relative">
      <i class="fas fa-comment-dots absolute left-4 top-5 text-gray-400"></i>
      <textarea
        v-model="message"
        rows="4"
        required
        placeholder=" "
        class="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white
               focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 resize-none peer"
      ></textarea>
      <label
        class="absolute left-12 top-4 text-gray-400 pointer-events-none transition-all duration-300
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500
               peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400"
      >
        Your Message
      </label>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center">
      <button
        type="submit"
        class="px-6 py-3 w-40 text-base font-semibold rounded-xl
               bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
               text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50
               transition duration-300 transform hover:scale-105"
      >
        🚀 Send
      </button>
    </div>
  </form>
</div>

    <!-- Direct Email & Socials -->
    <div class="mt-12 text-gray-400 text-sm relative z-10 space-y-3 opacity-0 animate-fade-up">
      <p>
        Or email me directly at
        <a href="mailto:nephtenilon@gmail.com" class="text-indigo-400 hover:text-indigo-300 underline">
          nephtenilon@gmail.com
        </a>
      </p>
      <div class="flex justify-center gap-6 mt-4 text-xl">
        <a href="#" class="hover:text-indigo-400 transition transform hover:scale-110">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="hover:text-indigo-400 transition transform hover:scale-110">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="hover:text-indigo-400 transition transform hover:scale-110">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert(`✅ Thank you, ${name.value}! Your message has been sent.`)
  name.value = ''
  email.value = ''
  message.value = ''
}

// Floating particles
onMounted(() => {
  const canvas = document.getElementById('particles-bg')
  const ctx = canvas.getContext('2d')
  let particles = []

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const createParticles = () => {
    particles = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.8,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
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
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scale-up {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-down { animation: fade-down 1s ease-out forwards; }
.animate-fade-up { animation: fade-up 1s ease-out forwards; animation-delay: 0.2s; }
.animate-scale-up { animation: scale-up 1s ease-out forwards; animation-delay: 0.3s; }
</style>
