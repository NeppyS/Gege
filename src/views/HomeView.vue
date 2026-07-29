<template>
  <div class="portfolio-page">
    <section v-if="activePage === 'home'" class="page-view home-page" aria-labelledby="home-title">
      <div class="hero-index" aria-hidden="true">
        <span>01</span>
        <small>systems portfolio</small>
      </div>

      <div class="home-statement">
        <p class="eyebrow">Developer & IT builder</p>
        <h1 id="home-title">
          <span>Building daily</span>
          <span>systems that</span>
          <span>hold up.</span>
        </h1>
        <p>
          I work across ERP, POS, database, support, and full-stack development, turning operational
          problems into clear interfaces and dependable workflows.
        </p>

        <div class="action-row">
          <a class="text-link" href="/work">View work</a>
          <a class="ghost-link" href="/graph">Open graph</a>
        </div>

        <div class="home-signals" aria-label="Core work areas">
          <article v-for="stat in stats" :key="stat.value">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </div>

      <aside class="home-visual" aria-label="Profile snapshot">
        <figure class="portrait-panel">
          <img :src="profileImage" :alt="profile.name" loading="eager" decoding="async" />
          <figcaption>{{ profile.location }}</figcaption>
        </figure>

        <div class="status-strip">
          <span>Current</span>
          <strong>ERP / POS / IT Support</strong>
          <small>{{ profile.availability }}</small>
        </div>
      </aside>
    </section>

    <section
      v-else-if="activePage === 'work'"
      class="page-view content-page work-page"
      aria-labelledby="work-title"
    >
      <header class="page-header">
        <p class="eyebrow">Work</p>
        <h1 id="work-title">Systems for operations that move every day.</h1>
        <a class="text-link" href="/graph">Open graph</a>
      </header>

      <div class="work-list">
        <article v-for="(system, index) in systems" :key="system.title">
          <span>0{{ index + 1 }}</span>
          <div>
            <p>{{ system.meta }}</p>
            <h2>{{ system.title }}</h2>
          </div>
          <div class="work-copy">
            <strong>{{ system.text }}</strong>
            <em>{{ system.outcome }}</em>
          </div>
          <div class="tag-row">
            <small v-for="tech in system.stack" :key="tech">{{ tech }}</small>
          </div>
        </article>
      </div>
    </section>

    <section v-else-if="activePage === 'graph'" class="graph-page" aria-label="Systems graph">
      <SystemsGraph immersive />
    </section>

    <section
      v-else-if="activePage === 'writing'"
      class="page-view content-page writing-page"
      aria-labelledby="writing-title"
    >
      <header class="page-header">
        <p class="eyebrow">Writing</p>
        <h1 id="writing-title">How I move from issue to stable workflow.</h1>
      </header>

      <div class="writing-list">
        <article v-for="(step, index) in workflowSteps" :key="step.title">
          <span>0{{ index + 1 }}</span>
          <h2>{{ step.title }}</h2>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section
      v-else-if="activePage === 'about'"
      class="page-view content-page about-page"
      aria-labelledby="about-title"
    >
      <header class="page-header">
        <p class="eyebrow">About</p>
        <h1 id="about-title">Support-aware, database-minded, full-stack practical.</h1>
      </header>

      <div class="about-layout">
        <div class="about-copy">
          <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>

          <div class="highlight-list" aria-label="Working strengths">
            <article v-for="highlight in aboutHighlights" :key="highlight.title">
              <h2>{{ highlight.title }}</h2>
              <p>{{ highlight.text }}</p>
            </article>
          </div>
        </div>

        <div class="skill-board">
          <article v-for="group in skillGroups" :key="group.title">
            <h2>{{ group.title }}</h2>
            <div class="tag-row">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      v-else-if="activePage === 'contact'"
      class="page-view content-page contact-page"
      aria-labelledby="contact-title"
    >
      <header class="page-header">
        <p class="eyebrow">Contact</p>
        <h1 id="contact-title">Send the problem. I will trace the system.</h1>
      </header>

      <div class="contact-layout">
        <div class="contact-copy">
          <p>For ERP, POS, full-stack, database, support, or troubleshooting work.</p>

          <div class="contact-quick" aria-label="Contact details">
            <article>
              <span>Email</span>
              <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            </article>
            <article>
              <span>GitHub</span>
              <a :href="githubProfile.href" target="_blank" rel="noopener noreferrer">
                {{ githubProfile.handle }}
              </a>
            </article>
            <article>
              <span>Location</span>
              <strong>{{ profile.location }}</strong>
            </article>
          </div>

          <div class="social-row" aria-label="Social links">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ social.name }}
            </a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="reason-grid">
            <button
              v-for="reason in contactReasons"
              :key="reason"
              type="button"
              :class="{ active: selectedReason === reason }"
              :aria-pressed="selectedReason === reason"
              @click="selectedReason = reason"
            >
              {{ reason }}
            </button>
          </div>

          <label>
            <span>Name</span>
            <input v-model.trim="name" type="text" autocomplete="name" required />
          </label>

          <label>
            <span>Email</span>
            <input v-model.trim="email" type="email" autocomplete="email" required />
          </label>

          <label>
            <span>Message</span>
            <textarea v-model.trim="message" rows="5" required />
          </label>

          <button class="submit-button" type="submit">
            Prepare email
            <Send :size="17" stroke-width="1.8" />
          </button>
          <p v-if="statusMessage" class="status-message" role="status" aria-live="polite">
            {{ statusMessage }}
          </p>
        </form>
      </div>
    </section>

    <section
      v-else
      class="page-view content-page photography-page"
      aria-labelledby="photography-title"
    >
      <header class="page-header">
        <p class="eyebrow">Photography</p>
        <h1 id="photography-title">Quiet frames around the work.</h1>
      </header>

      <div class="photo-grid">
        <figure v-for="image in aboutImages" :key="image.src">
          <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" />
          <figcaption>{{ image.caption }}</figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Send } from 'lucide-vue-next'
import SystemsGraph from '../components/SystemsGraph.vue'
import profileImage from '../assets/3573004f-d764-4371-8e4a-d5d4eca24bba.jpg'
import poolImage from '../assets/image.png'
import cityImage from '../assets/111111111.jpg'
import skyImage from '../assets/222222.jpg'
import {
  aboutHighlights,
  aboutParagraphs,
  contactReasons,
  profile,
  skillGroups,
  socials,
  stats,
  systems,
  workflowSteps,
} from '../data/portfolio'

defineOptions({
  name: 'HomePage',
})

defineProps({
  activePage: {
    type: String,
    default: 'home',
  },
})

const name = ref('')
const email = ref('')
const message = ref('')
const selectedReason = ref(contactReasons[0])
const statusMessage = ref('')
const githubProfile = socials.find((social) => social.name === 'GitHub') || {
  href: 'https://github.com/NeppyS',
  handle: '@NeppyS',
}

const aboutImages = [
  {
    src: poolImage,
    alt: 'Nephten standing in silhouette near a pool',
    caption: 'quiet focus',
  },
  {
    src: cityImage,
    alt: 'Nephten standing in front of a tall city building',
    caption: 'systems scale',
  },
  {
    src: skyImage,
    alt: 'Nephten in silhouette under a cloudy sky',
    caption: 'after-hours thinking',
  },
]

const submitForm = () => {
  const subject = encodeURIComponent(`${selectedReason.value} - ${name.value}`)
  const body = encodeURIComponent(
    `Name: ${name.value}\nEmail: ${email.value}\nReason: ${selectedReason.value}\n\n${message.value}`,
  )

  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  statusMessage.value = 'Your email app should open with the message prepared.'
}
</script>

<style scoped>
.portfolio-page {
  min-height: calc(100vh - var(--nav-height));
}

.page-view {
  width: 100%;
  min-height: calc(100svh - var(--nav-height) - var(--footer-height));
  padding: clamp(24px, 3vh, 40px) clamp(24px, 5vw, 72px);
  animation: pageIn 560ms ease both;
}

.home-page {
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr) minmax(360px, 0.72fr);
  gap: clamp(30px, 4vw, 76px);
  align-items: center;
}

.hero-index {
  align-self: stretch;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  writing-mode: vertical-rl;
}

.hero-index span,
.hero-index small,
.eyebrow,
.text-link,
.ghost-link,
.home-signals strong,
.home-signals span,
.work-list article > span,
.work-list article > div > p,
.work-copy em,
.writing-list article > span,
.highlight-list h2,
.tag-row small,
.tag-row span,
.social-row a,
.contact-quick span,
.contact-quick a,
.contact-quick strong,
.contact-form label span,
.reason-grid button,
.submit-button {
  font-family: var(--mono-font);
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-index span {
  color: var(--ink);
  font-size: 2.8rem;
}

.hero-index small {
  color: var(--muted);
  font-size: 0.72rem;
}

.home-statement {
  max-width: 780px;
}

.eyebrow {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.eyebrow::before {
  width: 34px;
  height: 1px;
  background: var(--line-strong);
  content: '';
}

.home-statement h1,
.page-header h1 {
  margin: 0;
  color: var(--ink);
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: 0;
}

.home-statement h1 {
  max-width: 780px;
  font-size: 5.08rem;
  line-height: 0.9;
}

.home-statement h1 span {
  display: block;
  animation: revealLine 720ms cubic-bezier(0.2, 0.75, 0.2, 1) both;
}

.home-statement h1 span:nth-child(2) {
  animation-delay: 90ms;
}

.home-statement h1 span:nth-child(3) {
  animation-delay: 180ms;
}

.home-statement p {
  max-width: 600px;
  margin: 22px 0 0;
  color: var(--ink);
  font-size: 1.03rem;
  line-height: 1.72;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 26px;
}

.home-signals {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 28px;
  max-width: 720px;
}

.home-signals article {
  border-top: 1px solid var(--line);
  padding-top: 11px;
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}

.home-signals article:hover {
  border-color: var(--ink);
  transform: translateY(-2px);
}

.home-signals strong,
.home-signals span {
  display: block;
}

.home-signals strong {
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 900;
}

.home-signals span {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.66rem;
  line-height: 1.45;
}

.text-link,
.ghost-link {
  position: relative;
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  border-bottom: 1px solid var(--ink);
  color: var(--ink);
  font-size: 0.75rem;
  font-weight: 900;
}

.ghost-link {
  border-bottom-color: var(--line-strong);
  color: var(--muted);
}

.text-link::after,
.ghost-link::after,
.social-row a::after {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 1px;
  background: var(--ink);
  content: '';
  transition: width 220ms ease;
}

.text-link:hover::after,
.text-link:focus-visible::after,
.ghost-link:hover::after,
.ghost-link:focus-visible::after,
.social-row a:hover::after,
.social-row a:focus-visible::after {
  width: 100%;
}

.home-visual {
  justify-self: end;
  display: grid;
  gap: 16px;
  width: min(100%, 460px);
  animation: floatIn 700ms ease 160ms both;
}

.portrait-panel {
  position: relative;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  background: var(--paper-soft);
  box-shadow: var(--shadow);
  transform-origin: center;
  transition:
    border-color 220ms ease,
    transform 220ms ease;
}

.portrait-panel:hover {
  border-color: var(--ink);
  transform: translateY(-4px);
}

.portrait-panel::after {
  position: absolute;
  inset: 16px;
  border: 1px solid var(--photo-frame);
  content: '';
  pointer-events: none;
}

.portrait-panel img {
  width: 100%;
  aspect-ratio: 5 / 6;
  object-fit: cover;
  object-position: center 40%;
  filter: grayscale(0.18) saturate(0.82) contrast(1.05);
  transition:
    filter 260ms ease,
    transform 260ms ease;
}

.portrait-panel:hover img {
  filter: grayscale(0.04) saturate(0.96) contrast(1.04);
  transform: scale(1.035);
}

.portrait-panel figcaption {
  position: absolute;
  left: 18px;
  bottom: 18px;
  background: var(--paper);
  color: var(--ink);
  padding: 8px 10px;
  font-family: var(--mono-font);
  font-size: 0.7rem;
  letter-spacing: 0;
  text-transform: uppercase;
}

.status-strip {
  display: grid;
  grid-template-columns: 0.34fr 1fr;
  gap: 8px 18px;
  border-top: 1px solid var(--ink);
  padding-top: 16px;
}

.status-strip span,
.status-strip small {
  color: var(--muted);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  letter-spacing: 0;
  text-transform: uppercase;
}

.status-strip strong {
  color: var(--ink);
  font-family: var(--display-font);
  font-size: 1.42rem;
  font-weight: 400;
  line-height: 1;
}

.status-strip small {
  grid-column: 2;
  line-height: 1.55;
}

.content-page {
  display: grid;
  align-content: start;
  gap: clamp(22px, 3vh, 36px);
}

.page-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: end;
  max-width: 1180px;
}

.page-header .eyebrow {
  grid-column: 1 / -1;
  margin-bottom: -6px;
}

.page-header h1 {
  max-width: 860px;
  font-size: 3.48rem;
  line-height: 1;
}

.work-list,
.writing-list,
.skill-board {
  display: grid;
  border-top: 1px solid var(--line);
}

.work-list article,
.writing-list article,
.skill-board article {
  animation: rowIn 520ms ease both;
}

.work-list article:nth-child(2),
.writing-list article:nth-child(2),
.skill-board article:nth-child(2) {
  animation-delay: 80ms;
}

.work-list article:nth-child(3),
.writing-list article:nth-child(3),
.skill-board article:nth-child(3) {
  animation-delay: 160ms;
}

.work-list article {
  display: grid;
  grid-template-columns: 64px minmax(210px, 0.65fr) minmax(280px, 1fr) minmax(220px, 0.65fr);
  gap: 28px;
  align-items: start;
  border-bottom: 1px solid var(--line);
  padding: clamp(14px, 2vh, 22px) 0;
  transition:
    border-color 200ms ease,
    transform 200ms ease;
}

.work-list article:hover {
  border-color: var(--ink);
  transform: translateX(8px);
}

.work-list article > span,
.writing-list article > span {
  color: var(--muted);
  font-size: 0.75rem;
}

.work-list h2,
.writing-list h2,
.skill-board h2 {
  margin: 0;
  color: var(--ink);
  font-family: var(--display-font);
  font-size: 2.12rem;
  font-weight: 400;
  line-height: 1;
}

.work-list article > div > p {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.work-list article > strong,
.work-copy strong,
.writing-list p,
.about-copy p,
.contact-copy p {
  margin: 0;
  color: var(--ink);
  font-size: 1.01rem;
  font-weight: 400;
  line-height: 1.72;
}

.work-copy {
  display: grid;
  gap: 8px;
}

.work-copy strong {
  display: block;
}

.work-copy em {
  display: block;
  color: var(--muted);
  font-size: 0.69rem;
  font-style: normal;
  line-height: 1.5;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tag-row small,
.tag-row span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 7px 9px;
  color: var(--muted);
  font-size: 0.7rem;
  transition:
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.tag-row small:hover,
.tag-row span:hover {
  border-color: var(--ink);
  color: var(--ink);
  transform: translateY(-1px);
}

.inline-route {
  justify-self: start;
  margin-top: -22px;
}

.graph-page {
  height: calc(100svh - var(--nav-height));
  overflow: hidden;
  background: #030504;
}

.writing-list article {
  display: grid;
  grid-template-columns: 64px minmax(220px, 0.45fr) minmax(0, 1fr);
  gap: 30px;
  border-bottom: 1px solid var(--line);
  padding: 30px 0;
}

.writing-list article:hover h2 {
  transform: translateX(8px);
}

.writing-list h2 {
  transition: transform 180ms ease;
}

.writing-list p {
  color: var(--muted);
}

.about-layout,
.contact-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.75fr) minmax(320px, 1fr);
  gap: 70px;
  align-items: start;
}

.about-copy {
  display: grid;
  gap: 22px;
}

.highlight-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.highlight-list article {
  border-top: 1px solid var(--line);
  padding-top: 12px;
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}

.highlight-list article:hover {
  border-color: var(--ink);
  transform: translateY(-2px);
}

.highlight-list h2 {
  margin: 0 0 8px;
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 900;
}

.highlight-list p {
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.5;
}

.skill-board article {
  display: grid;
  grid-template-columns: minmax(160px, 0.45fr) 1fr;
  gap: 24px;
  border-bottom: 1px solid var(--line);
  padding: 24px 0;
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}

.skill-board article:hover {
  border-color: var(--ink);
  transform: translateX(8px);
}

.social-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 34px;
}

.contact-quick {
  display: grid;
  gap: 12px;
  margin-top: 30px;
}

.contact-quick article {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 18px;
  align-items: baseline;
  border-top: 1px solid var(--line);
  padding-top: 12px;
}

.contact-quick span {
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 900;
}

.contact-quick a,
.contact-quick strong {
  color: var(--ink);
  font-size: 0.76rem;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.social-row a {
  position: relative;
  border-bottom: 1px solid var(--line-strong);
  padding-bottom: 7px;
  color: var(--ink);
  font-size: 0.74rem;
  font-weight: 800;
}

.contact-form {
  display: grid;
  gap: 13px;
}

.reason-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.reason-grid button,
.submit-button {
  min-height: 44px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  padding: 0 14px;
  font-size: 0.72rem;
  font-weight: 800;
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}

.reason-grid button.active,
.reason-grid button:hover,
.submit-button:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
  transform: translateY(-1px);
}

.contact-form label span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: var(--field);
  color: var(--ink);
  padding: 13px 14px;
  transition:
    border-color 180ms ease,
    background 180ms ease;
}

.contact-form textarea {
  max-height: 130px;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--ink);
  background: var(--paper);
  outline: none;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.status-message {
  margin: 0;
  color: var(--muted);
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.photo-grid figure {
  margin: 0;
  animation: rowIn 520ms ease both;
}

.photo-grid figure:nth-child(2) {
  margin-top: 54px;
  animation-delay: 80ms;
}

.photo-grid figure:nth-child(3) {
  margin-top: 108px;
  animation-delay: 160ms;
}

.photo-grid img {
  width: 100%;
  aspect-ratio: 5 / 6;
  object-fit: cover;
  filter: grayscale(0.22) saturate(0.82) contrast(1.04);
  transition:
    filter 240ms ease,
    transform 240ms ease;
}

.photo-grid figure:hover img {
  filter: grayscale(0.06) saturate(0.96) contrast(1.03);
  transform: translateY(-6px);
}

.photo-grid figcaption {
  margin-top: 10px;
  color: var(--muted);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  letter-spacing: 0;
  text-transform: uppercase;
}

@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes revealLine {
  from {
    opacity: 0;
    transform: translateY(0.28em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(24px) rotate(1deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
}

@keyframes rowIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 821px) {
  .page-view {
    height: calc(100svh - var(--nav-height) - var(--footer-height));
    min-height: 0;
    overflow: hidden;
  }

  .content-page {
    align-content: center;
  }

  .reason-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .reason-grid button {
    padding: 0 8px;
    font-size: 0.65rem;
    line-height: 1.25;
  }

  .work-list article {
    padding: 14px 0;
  }

  .writing-list article,
  .skill-board article {
    padding: 18px 0;
  }

  .about-layout,
  .contact-layout {
    gap: clamp(36px, 5vw, 64px);
  }

  .about-copy {
    gap: 16px;
  }

  .about-copy p,
  .contact-copy p {
    line-height: 1.6;
  }

  .photo-grid {
    align-items: start;
  }

  .photo-grid img {
    height: min(46svh, 500px);
    aspect-ratio: auto;
  }

  .photo-grid figure:nth-child(2) {
    margin-top: min(5svh, 42px);
  }

  .photo-grid figure:nth-child(3) {
    margin-top: min(9svh, 78px);
  }
}

@media (min-width: 821px) and (max-height: 820px) {
  .page-view {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .home-statement h1 {
    font-size: 4.35rem;
  }

  .home-statement p {
    margin-top: 16px;
    line-height: 1.6;
  }

  .action-row {
    margin-top: 18px;
  }

  .home-signals {
    gap: 8px;
    margin-top: 18px;
  }

  .home-signals article {
    padding-top: 8px;
  }

  .home-signals span {
    margin-top: 4px;
    line-height: 1.3;
  }

  .home-visual {
    width: min(100%, 380px);
    gap: 12px;
  }

  .portrait-panel::after {
    inset: 14px;
  }

  .status-strip {
    padding-top: 12px;
  }

  .status-strip strong {
    font-size: 1.18rem;
  }

  .status-strip small {
    line-height: 1.35;
  }

  .content-page {
    gap: 20px;
  }

  .highlight-list {
    gap: 10px;
  }

  .highlight-list article {
    padding-top: 9px;
  }

  .highlight-list p {
    font-size: 0.8rem;
    line-height: 1.35;
  }

  .contact-quick {
    gap: 8px;
    margin-top: 20px;
  }

  .contact-quick article {
    padding-top: 9px;
  }

  .page-header h1 {
    font-size: 3rem;
  }

  .photo-grid img {
    height: min(40svh, 380px);
  }

  .contact-form textarea {
    max-height: 100px;
  }
}

@media (max-width: 1120px) {
  .home-page {
    grid-template-columns: 64px minmax(0, 1fr);
  }

  .home-visual {
    grid-column: 2;
    justify-self: start;
    width: min(100%, 460px);
  }

  .work-list article {
    grid-template-columns: 54px minmax(220px, 0.7fr) minmax(0, 1fr);
  }

  .work-list .tag-row {
    grid-column: 2 / -1;
  }
}

@media (max-width: 820px) {
  .page-view {
    min-height: auto;
    padding: 42px 22px;
  }

  .home-page,
  .about-layout,
  .contact-layout,
  .page-header,
  .work-list article,
  .writing-list article,
  .skill-board article,
  .photo-grid {
    grid-template-columns: 1fr;
  }

  .home-signals,
  .highlight-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-index {
    display: none;
  }

  .home-statement h1 {
    font-size: 3.6rem;
  }

  .page-header h1 {
    font-size: 2.7rem;
  }

  .home-visual {
    grid-column: auto;
    justify-self: stretch;
    width: min(100%, 520px);
  }

  .portrait-panel img {
    aspect-ratio: 4 / 5;
    object-position: center 38%;
  }

  .work-list .tag-row {
    grid-column: auto;
  }

  .photo-grid figure:nth-child(2),
  .photo-grid figure:nth-child(3) {
    margin-top: 0;
  }
}

@media (max-width: 520px) {
  .home-statement h1 {
    font-size: 3rem;
  }

  .page-header h1 {
    font-size: 2.4rem;
  }

  .home-statement p {
    font-size: 1rem;
  }

  .status-strip,
  .reason-grid,
  .home-signals,
  .highlight-list,
  .contact-quick article {
    grid-template-columns: 1fr;
  }

  .status-strip small {
    grid-column: auto;
  }
}
</style>
