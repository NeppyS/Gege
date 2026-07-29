<template>
  <header class="site-nav">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <nav class="nav-inner" aria-label="Primary navigation">
      <a
        class="brand"
        href="/"
        :aria-current="activePage === 'home' ? 'page' : undefined"
        @click="closeMenu"
      >
        <span>NI</span>
        <strong>{{ profile.shortName }} Ilon</strong>
      </a>

      <p class="nav-context">Full-stack systems / Bacolod City</p>

      <div class="nav-links" :class="{ open: isOpen }">
        <a
          v-for="(link, index) in navLinks"
          :key="link.page"
          :href="link.href"
          :aria-current="activePage === link.page ? 'page' : undefined"
          @click="closeMenu"
        >
          <span>0{{ index + 1 }}</span>
          {{ link.name }}
        </a>
      </div>

      <div class="nav-actions">
        <a
          class="github-link"
          :href="github.href"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub"
        >
          <Github :size="16" stroke-width="1.8" />
          <span>GitHub</span>
        </a>
        <button
          class="theme-button"
          type="button"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          @click="$emit('toggle-theme')"
        >
          <Sun v-if="theme === 'dark'" :size="17" stroke-width="1.8" />
          <Moon v-else :size="17" stroke-width="1.8" />
        </button>
        <button
          class="menu-button"
          type="button"
          :aria-expanded="isOpen"
          aria-label="Toggle menu"
          @click="isOpen = !isOpen"
        >
          <Menu v-if="!isOpen" :size="22" stroke-width="1.8" />
          <X v-else :size="22" stroke-width="1.8" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Github, Menu, Moon, Sun, X } from 'lucide-vue-next'
import { navLinks, profile, socials } from '../data/portfolio'

defineOptions({
  name: 'SiteNavbar',
})

defineProps({
  activePage: {
    type: String,
    default: 'home',
  },
  theme: {
    type: String,
    default: 'light',
  },
})

defineEmits(['toggle-theme'])

const isOpen = ref(false)
const github = computed(() => socials.find((social) => social.name === 'GitHub'))

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(18px);
}

.skip-link {
  position: absolute;
  left: 20px;
  top: -48px;
  border: 1px solid var(--line-strong);
  background: var(--paper);
  color: var(--ink);
  padding: 8px 12px;
  font-family: var(--mono-font);
  font-size: 0.72rem;
  letter-spacing: 0;
  text-transform: uppercase;
}

.skip-link:focus {
  top: 14px;
}

.nav-inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(190px, 0.75fr) minmax(180px, 0.65fr) minmax(0, 1.4fr) auto;
  gap: 24px;
  align-items: center;
  min-height: var(--nav-height);
  padding: 0 clamp(24px, 5vw, 64px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
}

.brand span {
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ink);
  border-radius: 50%;
  font-family: var(--display-font);
  font-size: 1rem;
  line-height: 1;
  transition:
    background 220ms ease,
    color 220ms ease,
    transform 220ms ease;
}

.brand strong,
.nav-context,
.nav-links a {
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.brand:hover span,
.brand:focus-visible span,
.brand[aria-current='page'] span {
  background: var(--ink);
  color: var(--paper);
  transform: rotate(-12deg);
}

.nav-context {
  margin: 0;
  color: var(--muted);
}

.nav-links {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  position: relative;
  display: inline-flex;
  gap: 7px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 999px;
  color: var(--muted);
  padding: 9px 12px;
  transition:
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.nav-links a span {
  color: color-mix(in srgb, var(--muted) 70%, transparent);
}

.nav-links a:hover,
.nav-links a:focus-visible,
.nav-links a[aria-current='page'] {
  border-color: var(--line-strong);
  color: var(--ink);
  transform: translateY(-1px);
}

.nav-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.github-link,
.theme-button,
.menu-button {
  display: inline-flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.github-link {
  gap: 8px;
  padding: 0 12px;
  font-family: var(--mono-font);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.theme-button,
.menu-button {
  width: 36px;
  padding: 0;
}

.github-link:hover,
.github-link:focus-visible,
.theme-button:hover,
.theme-button:focus-visible,
.menu-button:hover,
.menu-button:focus-visible {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

.theme-button:hover,
.theme-button:focus-visible,
.menu-button:hover,
.menu-button:focus-visible {
  transform: rotate(18deg);
}

.menu-button {
  display: none;
}

@media (max-width: 1050px) {
  .nav-inner {
    grid-template-columns: 1fr auto;
  }

  .nav-context {
    display: none;
  }

  .nav-links {
    position: absolute;
    top: calc(var(--nav-height) - 1px);
    left: clamp(16px, 4vw, 42px);
    right: clamp(16px, 4vw, 42px);
    display: none;
    border: 1px solid var(--line);
    background: var(--paper);
    padding: 12px;
  }

  .nav-links.open {
    display: grid;
    gap: 8px;
    animation: menuDrop 220ms ease both;
  }

  .nav-links a {
    justify-content: space-between;
    border-radius: 0;
  }

  .menu-button {
    display: inline-flex;
  }
}

@media (max-width: 560px) {
  .brand strong {
    display: none;
  }

  .github-link span {
    display: none;
  }

  .github-link {
    width: 36px;
    padding: 0;
  }
}

@keyframes menuDrop {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
