<template>
  <header class="site-nav" :class="{ compact: isCompact }">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <nav class="nav-inner" aria-label="Portfolio sections">
      <a class="brand" href="#home" @click="closeMenu">
        <span class="brand-mark">NF</span>
        <span class="brand-copy">
          <strong>{{ profile.shortName }}</strong>
          <small>{{ profile.brandRole }}</small>
        </span>
      </a>

      <div class="nav-links" :class="{ open: isOpen }">
        <template v-for="(link, index) in navLinks" :key="link.href">
          <a :href="link.href" @click="closeMenu">{{ link.name }}</a>
          <span v-if="index < navLinks.length - 1" class="nav-separator" aria-hidden="true">/</span>
        </template>
      </div>

      <div class="nav-actions">
        <a class="icon-link" :href="github.href" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub">
          <Github :size="18" stroke-width="2.3" />
        </a>
        <a class="hire-link" href="#contact" @click="closeMenu">
          Contact
          <ArrowUpRight :size="17" stroke-width="2.4" />
        </a>
        <button class="menu-button" type="button" :aria-expanded="isOpen" aria-label="Toggle menu" @click="isOpen = !isOpen">
          <Menu v-if="!isOpen" :size="23" stroke-width="2.4" />
          <X v-else :size="23" stroke-width="2.4" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ArrowUpRight, Github, Menu, X } from 'lucide-vue-next'
import { navLinks, profile, socials } from '../data/portfolio'

defineOptions({
  name: 'SiteNavbar',
})

const isOpen = ref(false)
const isCompact = ref(false)
const github = computed(() => socials.find((social) => social.name === 'GitHub'))

const closeMenu = () => {
  isOpen.value = false
}

const onScroll = () => {
  isCompact.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--line);
  background: rgba(6, 8, 7, 0.78);
  backdrop-filter: blur(18px);
  transition:
    background 180ms ease,
    box-shadow 180ms ease;
}

.site-nav.compact {
  background: rgba(6, 8, 7, 0.94);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -48px;
  border-radius: 999px;
  background: var(--green);
  color: #030504;
  padding: 8px 14px;
  font-weight: 900;
}

.skip-link:focus {
  top: 12px;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: calc(100% - 48px);
  max-width: 1180px;
  min-height: 76px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 210px;
}

.brand-mark {
  display: inline-flex;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--green);
  border-radius: 50%;
  background: #07110c;
  color: var(--green);
  box-shadow:
    inset 0 0 18px rgba(98, 255, 156, 0.1),
    0 0 26px rgba(98, 255, 156, 0.12);
  font-family: var(--mono-font);
  font-size: 0.78rem;
  font-weight: 950;
}

.brand-copy strong,
.brand-copy small {
  display: block;
  line-height: 1.1;
}

.brand-copy strong {
  font-family: var(--display-font);
  font-size: 1.02rem;
  font-weight: 950;
}

.brand-copy small {
  margin-top: 4px;
  color: var(--muted);
  font-family: var(--mono-font);
  font-size: 0.74rem;
  font-weight: 800;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: rgba(13, 20, 16, 0.76);
  box-shadow: inset 0 0 20px rgba(98, 255, 156, 0.04);
  padding: 6px 10px;
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--ink-soft);
  padding: 8px 10px;
  font-family: var(--mono-font);
  font-size: 0.8rem;
  font-weight: 900;
}

.nav-links a:hover {
  background: rgba(98, 255, 156, 0.12);
  color: var(--green);
}

.nav-separator {
  color: rgba(94, 217, 255, 0.34);
  font-weight: 800;
}

.nav-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 210px;
}

.icon-link,
.hire-link,
.menu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line-strong);
}

.icon-link,
.menu-button {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(13, 20, 16, 0.8);
}

.hire-link {
  gap: 8px;
  min-height: 42px;
  border-radius: 999px;
  background: var(--green);
  color: #030504;
  padding: 0 16px;
  font-weight: 950;
}

.icon-link:hover,
.menu-button:hover,
.hire-link:hover {
  border-color: var(--blue);
  background: var(--blue);
  color: #030504;
  box-shadow: 0 0 26px rgba(94, 217, 255, 0.22);
}

.menu-button {
  display: none;
}

@media (max-width: 980px) {
  .nav-inner {
    width: calc(100% - 32px);
  }

  .brand,
  .nav-actions {
    min-width: auto;
  }

  .icon-link,
  .nav-links {
    display: none;
  }

  .menu-button {
    display: inline-flex;
  }

  .nav-links.open {
    position: absolute;
    inset: 78px 16px auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;
    border-radius: 16px;
    background: rgba(13, 20, 16, 0.96);
    box-shadow: var(--shadow);
    padding: 12px;
  }

  .nav-links.open .nav-separator {
    display: none;
  }

  .nav-links.open a {
    justify-content: flex-start;
    border-radius: 10px;
    padding: 13px 14px;
  }
}

@media (max-width: 560px) {
  .brand-copy small,
  .hire-link {
    display: none;
  }
}
</style>
