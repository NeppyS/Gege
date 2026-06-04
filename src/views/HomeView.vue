<template>
  <div class="portfolio-page">
    <section id="home" class="hero-section" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">{{ profile.company }}</p>
        <h1 id="home-title">{{ profile.headline }}</h1>
        <p class="hero-role">{{ profile.name }} / {{ profile.role }}</p>
        <p class="hero-lead">{{ profile.intro }}</p>

        <div class="hero-actions">
          <a class="button-dark" href="#work">
            View work
            <ArrowRight :size="18" stroke-width="2.5" />
          </a>
          <a class="button-light" href="#contact">Contact</a>
        </div>
      </div>

      <aside class="hero-card" aria-label="Profile summary">
        <div class="portrait-wrap">
          <img src="@/assets/profile.jpg" :alt="profile.name" />
        </div>
        <div class="profile-panel">
          <span>Currently</span>
          <strong>ERP / POS / IT Support</strong>
          <small>{{ profile.availability }}</small>
        </div>
      </aside>
    </section>

    <section class="stats-strip" aria-label="Core work highlights">
      <article v-for="stat in stats" :key="stat.value">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </article>
    </section>

    <section id="about" class="content-section about-section" aria-labelledby="about-title">
      <div class="about-copy">
        <p class="eyebrow">About me</p>
        <h2 id="about-title">I build systems from the support desk to the database.</h2>

        <div class="about-text">
          <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
        </div>

        <div class="about-highlights">
          <article v-for="highlight in aboutHighlights" :key="highlight.title">
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.text }}</p>
          </article>
        </div>
      </div>

      <div class="about-terminal" aria-label="Developer profile">
        <span>profile.run</span>
        <p>Frontend, backend, database, deployment, and technician work connected into one practical system.</p>
      </div>
    </section>

    <section class="content-section image-story-section" aria-labelledby="visual-title">
      <div class="section-header">
        <p class="eyebrow">Visual log</p>
        <h2 id="visual-title">Three frames, three working modes.</h2>
      </div>

      <div class="image-story-list">
        <article v-for="image in aboutImages" :key="image.src" :class="['image-story-card', image.className]">
          <figure class="image-frame">
            <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" />
            <figcaption>{{ image.caption }}</figcaption>
          </figure>

          <div class="image-story-copy">
            <span>{{ image.meta }}</span>
            <h3>{{ image.title }}</h3>
            <p>{{ image.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="work" class="content-section two-column" aria-labelledby="work-title">
      <div class="section-intro">
        <p class="eyebrow">Work</p>
        <h2 id="work-title">Clean systems for daily operations.</h2>
      </div>

      <div class="work-stack">
        <div class="work-list">
          <article v-for="(area, index) in focusAreas" :key="area.title">
            <span>0{{ index + 1 }}</span>
            <div>
              <h3>{{ area.title }}</h3>
              <p>{{ area.text }}</p>
            </div>
          </article>
        </div>

        <div class="workflow-grid">
          <article v-for="(step, index) in workflowSteps" :key="step.title">
            <span>SYS.0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="skills" class="content-section" aria-labelledby="skills-title">
      <div class="section-header">
        <p class="eyebrow">Skills</p>
        <h2 id="skills-title">The stack behind the systems.</h2>
      </div>

      <div class="skills-grid">
        <article v-for="group in skillGroups" :key="group.title">
          <h3>{{ group.title }}</h3>
          <div>
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="systems" class="content-section" aria-labelledby="systems-title">
      <div class="section-header">
        <p class="eyebrow">Systems</p>
        <h2 id="systems-title">What I work on.</h2>
      </div>

      <div class="systems-grid">
        <article v-for="system in systems" :key="system.title">
          <p>{{ system.meta }}</p>
          <h3>{{ system.title }}</h3>
          <span>{{ system.text }}</span>
          <div>
            <small v-for="tech in system.stack" :key="tech">{{ tech }}</small>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="content-section contact-section" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Let’s talk systems.</h2>
        <p>For ERP, POS, full-stack, database, support, or troubleshooting work.</p>

        <div class="social-row" aria-label="Social links">
          <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank" rel="noopener noreferrer">
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
          <Send :size="18" stroke-width="2.4" />
        </button>
        <p v-if="statusMessage" class="status-message">{{ statusMessage }}</p>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight, Send } from 'lucide-vue-next'
import poolImage from '../assets/image.png'
import cityImage from '../assets/111111111.jpg'
import skyImage from '../assets/222222.jpg'
import {
  aboutHighlights,
  aboutParagraphs,
  contactReasons,
  focusAreas,
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

const name = ref('')
const email = ref('')
const message = ref('')
const selectedReason = ref(contactReasons[0])
const statusMessage = ref('')

const aboutImages = [
  {
    src: poolImage,
    alt: 'Nephten standing in silhouette near a pool',
    caption: 'quiet focus',
    meta: 'mode 01',
    title: 'Quiet focus before the build.',
    text: 'The calm side of the work: reading the flow, understanding what users need, and thinking through the system before touching the code.',
    className: 'pool-card',
  },
  {
    src: cityImage,
    alt: 'Nephten standing in front of a tall city building',
    caption: 'systems scale',
    meta: 'mode 02',
    title: 'Big-system perspective.',
    text: 'ERP and POS work needs structure. I like seeing every layer: screen, API, data, support, and the business process behind it.',
    className: 'city-card',
  },
  {
    src: skyImage,
    alt: 'Nephten in silhouette under a cloudy sky',
    caption: 'after-hours thinking',
    meta: 'mode 03',
    title: 'Troubleshooting mindset.',
    text: 'When something breaks, I trace it carefully: reproduce the issue, inspect the data, fix the cause, and make the next support case easier.',
    className: 'sky-card',
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

<style>
.portfolio-page {
  position: relative;
  width: 100%;
}

.hero-section,
.stats-strip,
.content-section {
  width: calc(100% - 48px);
  max-width: 1180px;
  margin: 0 auto;
}

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 390px;
  gap: 64px;
  align-items: center;
  min-height: calc(100svh - 76px);
  padding: 72px 0 58px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.eyebrow::before {
  width: 36px;
  height: 1px;
  background: var(--green);
  box-shadow: 0 0 18px rgba(98, 255, 156, 0.45);
  content: "";
}

.hero-copy h1 {
  max-width: 760px;
  margin: 0;
  background: linear-gradient(90deg, var(--ink), var(--green) 56%, var(--blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: var(--display-font);
  font-size: 4.15rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 0.95;
  overflow-wrap: anywhere;
  text-shadow: 0 0 34px rgba(98, 255, 156, 0.1);
  animation: fadeUp 580ms ease both;
}

.hero-role {
  margin: 18px 0 0;
  color: var(--blue);
  font-family: var(--mono-font);
  font-size: 1rem;
  font-weight: 900;
}

.hero-lead {
  max-width: 620px;
  margin: 16px 0 0;
  color: var(--ink-soft);
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.button-dark,
.button-light,
.submit-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 0 18px;
  font-weight: 950;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

.button-dark,
.submit-button {
  gap: 10px;
  background: var(--green);
  color: #030504;
}

.button-light {
  background: rgba(13, 20, 16, 0.74);
  color: var(--ink);
}

.button-dark:hover,
.button-light:hover,
.submit-button:hover {
  border-color: var(--blue);
  background: var(--blue);
  color: #030504;
  box-shadow: 0 0 28px rgba(94, 217, 255, 0.2);
  transform: translateY(-2px);
}

.hero-card {
  position: relative;
  max-width: 390px;
  animation: riseIn 650ms ease both;
}

.portrait-wrap {
  overflow: hidden;
  border: 1px solid var(--line-strong);
  border-radius: 26px;
  background: var(--panel-solid);
  box-shadow: var(--shadow);
}

.portrait-wrap img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  filter: grayscale(1) contrast(1.18) brightness(0.88);
}

.profile-panel {
  position: absolute;
  right: 18px;
  bottom: -26px;
  display: grid;
  gap: 5px;
  width: min(260px, calc(100% - 36px));
  border: 1px solid var(--line-strong);
  border-radius: 18px;
  background: rgba(10, 15, 12, 0.94);
  padding: 16px;
  box-shadow: var(--shadow);
}

.profile-panel span {
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.profile-panel strong {
  color: var(--ink);
  font-family: var(--display-font);
  font-size: 1.18rem;
  line-height: 1.05;
}

.profile-panel small {
  color: var(--muted);
  font-weight: 760;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  border-block: 1px solid var(--line-strong);
  padding: 18px 0;
}

.stats-strip article {
  position: relative;
  min-height: 118px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--panel);
  padding: 18px;
  animation: fadeUp 560ms ease both;
}

.stats-strip article::after {
  position: absolute;
  inset: auto 18px 14px;
  height: 2px;
  background: linear-gradient(90deg, var(--green), transparent);
  content: "";
}

.stats-strip strong {
  display: block;
  color: var(--ink);
  font-family: var(--mono-font);
  font-size: 1.9rem;
  font-weight: 950;
  line-height: 1;
}

.stats-strip span {
  display: block;
  margin-top: 12px;
  color: var(--muted);
  font-weight: 760;
}

.content-section {
  padding: 78px 0;
  border-bottom: 1px solid var(--line-strong);
}

.about-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 430px;
  gap: 54px;
  align-items: center;
}

.about-copy h2 {
  max-width: 720px;
  margin: 0;
  color: var(--ink);
  font-family: var(--display-font);
  font-size: 3rem;
  font-weight: 950;
  line-height: 1;
}

.about-text {
  display: grid;
  gap: 14px;
  margin-top: 22px;
}

.about-text p {
  margin: 0;
  color: var(--ink-soft);
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 26px;
}

.about-highlights article,
.workflow-grid article {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--panel);
  padding: 18px;
}

.about-highlights h3,
.workflow-grid h3 {
  margin: 0;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 950;
}

.about-highlights p,
.workflow-grid p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.about-terminal {
  align-self: stretch;
  display: grid;
  align-content: end;
  min-height: 360px;
  border: 1px solid var(--line-strong);
  border-radius: 24px;
  background:
    linear-gradient(rgba(98, 255, 156, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94, 217, 255, 0.06) 1px, transparent 1px),
    rgba(10, 15, 12, 0.82);
  background-size:
    26px 26px,
    26px 26px,
    auto;
  box-shadow: var(--shadow);
  padding: 24px;
}

.about-terminal span,
.image-story-copy span {
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.78rem;
  font-weight: 950;
  text-transform: uppercase;
}

.about-terminal p {
  max-width: 340px;
  margin: 14px 0 0;
  color: var(--ink-soft);
  font-size: 1.12rem;
  font-weight: 850;
}

.image-story-section {
  display: grid;
  gap: 28px;
}

.image-story-list {
  display: grid;
  gap: 18px;
}

.image-story-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(280px, 0.72fr);
  gap: 22px;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(10, 15, 12, 0.84);
  box-shadow: var(--shadow);
  padding: 14px;
}

.image-story-card::before {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(98, 255, 156, 0.1), transparent 38%),
    repeating-linear-gradient(135deg, transparent 0 18px, rgba(94, 217, 255, 0.045) 18px 19px);
  opacity: 0.8;
  pointer-events: none;
  content: "";
}

.image-story-card:nth-child(even) {
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 0.92fr);
}

.image-story-card:nth-child(even) .image-frame {
  grid-column: 2;
}

.image-story-card:nth-child(even) .image-story-copy {
  grid-column: 1;
  grid-row: 1;
}

.image-frame,
.image-story-copy {
  position: relative;
  z-index: 1;
}

.image-frame {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line-strong);
  border-radius: 22px;
  background: var(--panel-solid);
}

.image-frame img {
  width: 100%;
  height: 100%;
  max-width: none;
  min-height: 340px;
  object-fit: cover;
  filter: saturate(0.78) contrast(1.12) brightness(0.78);
  transform: scale(1.01);
  transition:
    filter 220ms ease,
    transform 220ms ease;
}

.image-story-card:hover .image-frame img {
  filter: saturate(1) contrast(1.08) brightness(0.92);
  transform: scale(1.045);
}

.image-frame figcaption {
  position: absolute;
  left: 14px;
  bottom: 14px;
  border: 1px solid rgba(98, 255, 156, 0.38);
  border-radius: 999px;
  background: rgba(3, 5, 4, 0.78);
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 900;
  padding: 7px 10px;
}

.image-story-copy {
  display: grid;
  align-content: center;
  min-height: 340px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(6, 8, 7, 0.62);
  padding: 28px;
}

.image-story-copy h3 {
  max-width: 420px;
  margin: 12px 0 0;
  color: var(--ink);
  font-family: var(--display-font);
  font-size: 2.15rem;
  font-weight: 950;
  line-height: 1;
}

.image-story-copy p {
  max-width: 440px;
  margin: 16px 0 0;
  color: var(--muted);
}

.pool-card .image-frame img {
  object-position: center;
}

.city-card .image-frame img {
  object-position: center 62%;
}

.sky-card .image-frame img {
  object-position: center;
}

.two-column,
.contact-section {
  display: grid;
  grid-template-columns: 0.72fr 1fr;
  gap: 54px;
  align-items: start;
}

.section-intro h2,
.section-header h2,
.contact-copy h2 {
  max-width: 720px;
  margin: 0;
  color: var(--ink);
  font-family: var(--display-font);
  font-size: 3rem;
  font-weight: 950;
  line-height: 1;
}

.work-list {
  display: grid;
}

.work-stack {
  display: grid;
  gap: 22px;
}

.work-list article {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 18px;
  border-bottom: 1px solid var(--line);
  padding: 0 0 20px;
}

.work-list article + article {
  padding-top: 20px;
}

.work-list > article > span {
  color: var(--rust);
  font-family: var(--mono-font);
  font-weight: 950;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.workflow-grid article {
  position: relative;
  overflow: hidden;
}

.workflow-grid article::after {
  position: absolute;
  inset: auto 18px 14px;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), transparent);
  content: "";
}

.workflow-grid article > span {
  display: block;
  margin-bottom: 10px;
  color: var(--blue);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 900;
}

.work-list h3,
.skills-grid h3,
.systems-grid h3 {
  margin: 0;
  color: var(--ink);
  font-size: 1.18rem;
  font-weight: 950;
}

.work-list p,
.systems-grid article > span,
.contact-copy p {
  margin: 8px 0 0;
  color: var(--muted);
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 28px;
}

.skills-grid,
.systems-grid {
  display: grid;
  gap: 14px;
}

.skills-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.systems-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.skills-grid article,
.systems-grid article {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--panel);
  padding: 20px;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

.skills-grid article::before,
.systems-grid article::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(98, 255, 156, 0.08), transparent);
  transform: translateX(-110%);
  transition: transform 520ms ease;
  content: "";
}

.skills-grid article:hover,
.systems-grid article:hover {
  border-color: var(--green);
  background: rgba(14, 24, 18, 0.96);
  box-shadow: 0 0 34px rgba(98, 255, 156, 0.13);
  transform: translateY(-6px);
}

.skills-grid article:hover::before,
.systems-grid article:hover::before {
  transform: translateX(110%);
}

.skills-grid div,
.systems-grid div {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.skills-grid span,
.systems-grid small {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(6, 8, 7, 0.54);
  padding: 6px 9px;
  color: var(--ink-soft);
  font-family: var(--mono-font);
  font-size: 0.78rem;
  font-weight: 820;
}

.skills-grid article:hover span,
.systems-grid article:hover small {
  border-color: rgba(94, 217, 255, 0.4);
  color: var(--blue);
}

.systems-grid article > p {
  margin: 0 0 12px;
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.contact-section {
  border-bottom: 0;
}

.social-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.social-row a {
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: rgba(13, 20, 16, 0.72);
  padding: 9px 12px;
  font-weight: 850;
}

.social-row a:hover {
  border-color: var(--blue);
  color: var(--blue);
  box-shadow: 0 0 24px rgba(94, 217, 255, 0.14);
}

.contact-form {
  display: grid;
  gap: 15px;
  border: 1px solid var(--line-strong);
  border-radius: 24px;
  background: rgba(10, 15, 12, 0.9);
  padding: 22px;
  box-shadow: var(--shadow);
}

.reason-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.reason-grid button {
  min-height: 44px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(6, 8, 7, 0.42);
  color: var(--ink-soft);
  padding: 8px 10px;
  font-size: 0.82rem;
  font-weight: 850;
}

.reason-grid button:hover,
.reason-grid button.active {
  border-color: var(--green);
  background: rgba(98, 255, 156, 0.14);
  color: var(--green);
}

.contact-form label span {
  display: block;
  margin-bottom: 7px;
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(6, 8, 7, 0.72);
  color: var(--ink);
  padding: 12px 13px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--blue);
  outline: none;
  box-shadow: 0 0 0 4px rgba(94, 217, 255, 0.1);
}

.contact-form textarea {
  resize: vertical;
}

.status-message {
  margin: 0;
  color: var(--muted);
  font-weight: 760;
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1080px) {
  .hero-section,
  .about-section,
  .two-column,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .hero-section {
    min-height: auto;
  }

  .hero-card {
    max-width: 420px;
  }

  .about-terminal {
    min-height: 260px;
  }

  .image-story-card,
  .image-story-card:nth-child(even) {
    grid-template-columns: 1fr;
  }

  .image-story-card:nth-child(even) .image-frame,
  .image-story-card:nth-child(even) .image-story-copy {
    grid-column: auto;
    grid-row: auto;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .hero-section,
  .stats-strip,
  .content-section {
    width: calc(100% - 28px);
  }

  .hero-section {
    padding-top: 52px;
  }

  .hero-copy h1 {
    font-size: 2.75rem;
  }

  .section-intro h2,
  .about-copy h2,
  .section-header h2,
  .contact-copy h2 {
    font-size: 2.15rem;
  }

  .stats-strip,
  .about-highlights,
  .workflow-grid,
  .skills-grid,
  .systems-grid,
  .reason-grid {
    grid-template-columns: 1fr;
  }

  .image-story-card {
    border-radius: 22px;
    padding: 10px;
  }

  .image-frame img {
    min-height: 260px;
  }

  .image-story-copy {
    min-height: auto;
    padding: 22px;
  }

  .image-story-copy h3 {
    font-size: 1.75rem;
  }

  .section-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .work-list article {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .hero-actions,
  .button-dark,
  .button-light {
    width: 100%;
  }
}
</style>
