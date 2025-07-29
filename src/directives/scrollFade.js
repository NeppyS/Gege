export default {
  mounted(el) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.remove('opacity-0', 'translate-y-5')
        el.classList.add('opacity-100', 'translate-y-0')
      }
    }, { threshold: 0.1 })

    observer.observe(el)
  }
}
