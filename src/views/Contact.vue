<template>
  <div
    id="contact"
    class="w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden p-4 sm:p-8  from-gray-950 via-gray-900 to-gray-950 text-white"
  >
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in"
    >
      Get in <span class="text-indigo-500">Touch</span>
    </h1>

    <p
      class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-gray-400 animate-slide-up"
    >
      Want to collaborate or just say hello? Drop me a message — I’d love to connect!
    </p>

    <form
      @submit.prevent="submitForm"
      class="w-full max-w-xl space-y-6 animate-fade-in"
    >
      <input
        v-model="name"
        type="text"
        required
        placeholder="Your Name"
        class="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
      />

      <input
        v-model="email"
        type="email"
        required
        placeholder="Your Email"
        class="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
      />

      <textarea
        v-model="message"
        rows="5"
        required
        placeholder="Your Message"
        class="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition resize-none"
      ></textarea>

      <button
        type="submit"
        class="w-full px-6 py-4 text-lg font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
      >
        Send Message
      </button>
    </form>

    <p class="text-sm text-gray-500 mt-10">
      Or email me directly at
      <a
        href="mailto:nephtenilon@gmail.com"
        class="text-indigo-400 hover:text-indigo-300 underline"
        >nephtenilon@gmail.com</a
      >
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert(`Thank you, ${name.value}! Your message has been sent.`)
  name.value = ''
  email.value = ''
  message.value = ''
}
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
  animation: fade-in 0.9s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1.1s ease-out forwards;
}
</style>
