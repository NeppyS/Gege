<template>
  <div class="app-shell" :data-theme="theme">
    <div class="ambient-lines" aria-hidden="true"></div>
    <Navbar :active-page="activePage" :theme="theme" @toggle-theme="toggleTheme" />

    <main id="main-content" class="app-main">
      <HomeView :active-page="activePage" :key="activePage" />
    </main>

    <footer v-if="activePage !== 'graph'" class="site-footer">
      <span>(c) {{ year }} {{ profile.shortName.toUpperCase() }} ILON</span>

      <nav aria-label="Footer navigation">
        <a v-for="link in footerLinks" :key="link.page" :href="link.href">
          {{ link.name }}
        </a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import HomeView from './views/HomeView.vue'
import Navbar from './components/Navbar.vue'
import { navLinks, profile } from './data/portfolio'

const pageSlugs = ['home', ...navLinks.map((link) => link.page), 'photography']
const activePage = ref('home')
const year = new Date().getFullYear()
const footerLinks = [
  ...navLinks,
  { name: 'Photography', page: 'photography', href: '/photography' },
]
const internalPaths = new Set(['/', ...footerLinks.map((link) => link.href)])
const themeStorageKey = 'portfolio-theme'

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return window.localStorage.getItem(themeStorageKey)
  } catch {
    return null
  }
}

const getInitialTheme = () => {
  const storedTheme = getStoredTheme()

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(getInitialTheme())

const applyTheme = (nextTheme) => {
  theme.value = nextTheme

  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
}

const loadTheme = () => {
  applyTheme(theme.value)
}

const toggleTheme = () => {
  const nextTheme = theme.value === 'dark' ? 'light' : 'dark'

  try {
    window.localStorage.setItem(themeStorageKey, nextTheme)
  } catch {
    // The theme still changes even when private storage is unavailable.
  }

  applyTheme(nextTheme)
}

applyTheme(theme.value)

const syncPageFromPath = () => {
  const hashPage = window.location.hash.replace(/^#\/?/, '')
  const pathPage = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home'
  const nextPage = hashPage || pathPage

  activePage.value = pageSlugs.includes(nextPage) ? nextPage : 'home'
  window.scrollTo({ top: 0 })
}

const handleInternalNavigation = (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  const target = event.target instanceof Element ? event.target : event.target?.parentElement
  const anchor = target?.closest('a')

  if (!anchor || anchor.target) {
    return
  }

  if (anchor.getAttribute('href')?.startsWith('#')) {
    return
  }

  const url = new URL(anchor.href)

  if (url.origin !== window.location.origin || !internalPaths.has(url.pathname)) {
    return
  }

  event.preventDefault()
  window.history.pushState({}, '', url.pathname)
  syncPageFromPath()
}

onMounted(() => {
  loadTheme()
  syncPageFromPath()
  window.addEventListener('popstate', syncPageFromPath)
  window.addEventListener('hashchange', syncPageFromPath)
  document.addEventListener('click', handleInternalNavigation)
})

onUnmounted(() => {
  window.removeEventListener('popstate', syncPageFromPath)
  window.removeEventListener('hashchange', syncPageFromPath)
  document.removeEventListener('click', handleInternalNavigation)
})
</script>

<style scoped>
.app-shell {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--ink);
  background:
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
    linear-gradient(180deg, var(--grid-line-soft) 1px, transparent 1px), var(--paper);
  background-size:
    96px 96px,
    96px 96px,
    auto;
}

.ambient-lines {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.ambient-lines::before,
.ambient-lines::after {
  position: absolute;
  content: '';
}

.ambient-lines::before {
  top: var(--nav-height);
  bottom: 0;
  left: clamp(22px, 4vw, 56px);
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--line-strong), transparent);
  transform-origin: top;
  animation: lineDrop 1200ms ease both;
}

.ambient-lines::after {
  right: -15vw;
  bottom: 16vh;
  width: 42vw;
  height: 1px;
  background: var(--line);
  transform: rotate(-18deg);
  animation: lineSweep 1400ms ease 180ms both;
}

.app-main {
  position: relative;
  z-index: 1;
  flex: 1;
  padding-top: var(--nav-height);
}

.site-footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  border-top: 1px solid var(--line);
  min-height: var(--footer-height);
  padding: 18px clamp(24px, 5vw, 64px);
  color: var(--muted);
  font-family: var(--mono-font);
  font-size: 0.7rem;
  letter-spacing: 0;
  text-transform: uppercase;
}

.site-footer nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 24px;
}

.site-footer a {
  color: var(--muted);
  transition: color 160ms ease;
}

.site-footer a:hover,
.site-footer a:focus-visible {
  color: var(--ink);
}

@keyframes lineDrop {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

@keyframes lineSweep {
  from {
    opacity: 0;
    transform: translateX(80px) rotate(-18deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(-18deg);
  }
}

@media (max-width: 720px) {
  .ambient-lines::before {
    left: 14px;
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
    min-height: auto;
  }

  .site-footer nav {
    justify-content: flex-start;
    gap: 14px 20px;
  }
}
</style>
