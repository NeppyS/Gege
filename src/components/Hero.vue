<template>
  <div class="w-full text-center p-4 sm:p-8">
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in"
    >
      Hi, I'm <span class="text-indigo-500">Nephten Fajardo Ilon</span>
    </h1>

    <p
      class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-gray-400 animate-slide-up"
    >
      A passionate Backend & Frontend Developer building modern, responsive,
      and user-friendly web applications.
    </p>

    <a
  href="#about"
  class="inline-block px-8 py-3 text-lg font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-700 transition duration-300 animate-fade-in focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 no-underline"
  aria-label="Learn more about Nephten"
>
  Learn More
</a>

  </div>
</template>

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
