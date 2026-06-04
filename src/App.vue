<template>
  <div class="app-shell">
    <Navbar />
    <main id="main-content" class="app-main">
      <HomeView />
    </main>

    <footer class="site-footer">
      <div>
        <p>{{ profile.company }}</p>
        <h2>{{ profile.name }}</h2>
      </div>

      <div class="footer-links" aria-label="Footer links">
        <a
          v-for="social in footerLinks"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ social.name }}
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
import Navbar from './components/Navbar.vue'
import { profile, socials } from './data/portfolio'

const footerLinks = socials.filter((social) => ['Email', 'GitHub', 'Facebook', 'Instagram'].includes(social.name))
</script>

<style scoped>
.app-shell {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  color: var(--ink);
  background:
    linear-gradient(135deg, rgba(98, 255, 156, 0.08), transparent 28%),
    linear-gradient(225deg, rgba(94, 217, 255, 0.08), transparent 34%),
    linear-gradient(180deg, rgba(255, 107, 122, 0.035), transparent 42%),
    var(--paper);
}

.app-shell::before,
.app-shell::after {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  content: "";
}

.app-shell::before {
  background:
    linear-gradient(rgba(98, 255, 156, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94, 217, 255, 0.065) 1px, transparent 1px);
  background-position: 0 0;
  background-size: 44px 44px;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.18));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.18));
  animation: gridShift 24s linear infinite;
}

.app-shell::after {
  background:
    linear-gradient(90deg, transparent, rgba(98, 255, 156, 0.12), transparent),
    repeating-linear-gradient(90deg, transparent 0 112px, rgba(244, 190, 79, 0.14) 112px 113px, transparent 113px 224px),
    repeating-linear-gradient(180deg, transparent 0 172px, rgba(94, 217, 255, 0.12) 172px 173px, transparent 173px 344px);
  background-size:
    42% 100%,
    auto,
    auto;
  background-position:
    -60% 0,
    0 0,
    0 0;
  opacity: 0.52;
  animation: signalSweep 13s linear infinite;
}

.app-main {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.site-footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  width: calc(100% - 48px);
  max-width: 1180px;
  margin: 0 auto;
  border-top: 1px solid var(--line-strong);
  padding: 30px 0 38px;
}

.site-footer p,
.site-footer h2 {
  margin: 0;
}

.site-footer p {
  color: var(--green);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.site-footer h2 {
  margin-top: 6px;
  font-family: var(--display-font);
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

.footer-links a {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(12, 18, 15, 0.72);
  padding: 8px 11px;
  font-weight: 850;
}

.footer-links a:hover {
  border-color: var(--green);
  color: var(--green);
  box-shadow: 0 0 24px rgba(98, 255, 156, 0.16);
}

@keyframes gridShift {
  to {
    background-position: 44px 44px;
  }
}

@keyframes signalSweep {
  to {
    background-position:
      160% 0,
      224px 0,
      0 344px;
  }
}

@media (max-width: 700px) {
  .site-footer {
    align-items: flex-start;
    flex-direction: column;
    width: calc(100% - 28px);
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
