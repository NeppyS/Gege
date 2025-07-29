<template>
  <section
    id="about"
    class="relative min-h-screen w-full flex items-start justify-center pt-24 px-4 text-gray-100"
    role="region"
    aria-labelledby="about-title"
  >
    <div
      class="relative w-full max-w-6xl shadow-2xl rounded-3xl p-6 sm:p-10 lg:p-12 animate-fade-in bg-gradient-to-br from-black/30 to-gray-900/30 backdrop-blur-xl border border-white/10"
    >
      <h2
        id="about-title"
        class="text-4xl sm:text-5xl font-extrabold text-center text-indigo-400 border-b-4 border-indigo-500 pb-4 mb-12 tracking-wider"
      >
        About Me
      </h2>

      <div class="space-y-10 text-base sm:text-lg px-1 md:px-2 text-gray-300 animate-slide-up">
        <p>
          I'm <span class="text-indigo-300 font-semibold">Nephten Fajardo Ilon</span>, a passionate
          <span class="text-indigo-400 font-semibold">Full-Stack Developer</span> currently pursuing a BS in IT at
          <span class="text-indigo-300 font-semibold">LCCB Bacolod</span>. I recently completed my OJT at
          <span class="text-indigo-300 font-semibold">GREENROUTE</span> where I contributed to GPS and fuel dashboards.
        </p>

        <p>
          I build responsive web apps using
          <span class="text-indigo-400 font-semibold">Vue.js, React, Tailwind CSS, Node.js</span>, and more — focusing on seamless UI/UX and clean, maintainable code.
        </p>

        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">🚀 Tech Stack</h3>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300 text-sm sm:text-base">
            <li>✓ Vue.js / Nuxt</li>
            <li>✓ React / Next.js</li>
            <li>✓ Tailwind CSS / SCSS</li>
            <li>✓ Node.js / Express</li>
            <li>✓ MySQL / MongoDB</li>
            <li>✓ Docker / Git / REST APIs</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">📌 Experience</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
            <li>OJT Developer at <span class="text-indigo-400">GreenRoute GPS</span> – Built internal UI & dashboards.</li>
            <li>Developed full CRUD apps with authentication & role-based access.</li>
            <li>Designed modern UIs inspired by ChatGPT and SaaS platforms.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">💡 Core Values</h3>
          <ul class="grid grid-cols-2 gap-2 text-gray-300">
            <li>• Clean Code</li>
            <li>• UX First</li>
            <li>• Performance</li>
            <li>• Lifelong Learning</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">🌍 Outside Tech</h3>
          <p class="text-gray-300">
            I enjoy dev content, open-source tools, gaming, and tech meetups. I love helping others in their coding journey.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-indigo-300 mb-3">📈 What's Next?</h3>
          <p class="text-gray-300">
            I’m working on personal projects to expand my portfolio and aim to freelance or join a dev team post-graduation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out both;
}
.animate-slide-up {
  animation: slide-up 1.2s ease-out both;
}
</style>
