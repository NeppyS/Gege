import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'   // Your custom CSS
import 'uno.css'             // UnoCSS
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router' // 👈 Import Vue Router

const app = createApp(App)

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
})

app.use(router) // 👈 Use the router
app.mount('#app')
