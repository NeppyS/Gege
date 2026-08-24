export const profile = {
  name: 'Nephten Fajardo Ilon',
  shortName: 'Nephten',
  role: 'Full-Stack Developer & IT Systems Specialist',
  brandRole: 'BR&V IT Developer',
  company: 'BR&V Company',
  location: 'Bacolod City, Philippines',
  email: 'nephtenilon@gmail.com',
  headline: 'I build the software businesses run on.',
  intro:
    'Full-stack developer specializing in ERP, purchasing, inventory, accounting, reporting, and the operational support behind them.',
  availability: 'Open to full-stack, frontend, backend, and IT systems opportunities',
}

export const navLinks = [
  { name: 'Work', page: 'work', href: '/work' },
  { name: 'Graph', page: 'graph', href: '/graph' },
  { name: 'Writing', page: 'writing', href: '/writing' },
  { name: 'About', page: 'about', href: '/about' },
  { name: 'Contact', page: 'contact', href: '/contact' },
]

export const socials = [
  {
    name: 'Email',
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NeppyS',
    handle: '@NeppyS',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/lnxexpl/',
    handle: 'lnxexpl',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/neppyx19/',
    handle: 'neppyx19',
  },
]

export const stats = [
  { value: 'FULL STACK', label: 'From responsive interfaces to APIs and database records' },
  { value: 'ERP', label: 'Purchasing, inventory, accounting, and reporting workflows' },
  { value: 'DATA', label: 'MySQL, Directus, validation, exports, and reconciliation' },
  { value: 'OPS', label: 'Docker, troubleshooting, user support, and production fixes' },
]

export const aboutParagraphs = [
  'I am Nephten Fajardo Ilon, a full-stack developer and IT systems specialist in Bacolod City. I build practical software for teams whose work cannot stop: purchasing, inventory, accounting, project reporting, point-of-sale, and company administration.',
  'At BR&V Company, I work across the complete delivery path—Next.js and React interfaces, TypeScript server actions, Directus extensions and APIs, MySQL data, Docker environments, styled Excel exports, print layouts, and day-to-day user support. That breadth helps me find the real cause of a problem instead of treating only the visible symptom.',
  'I bring a support-aware engineering mindset. I reproduce issues from the user’s point of view, trace data across the stack, protect existing workflows, and validate the result in the way people actually use it. I am most useful on teams that value ownership, clear communication, and dependable systems.',
]

export const aboutHighlights = [
  {
    title: 'Operational builder',
    text: 'I turn daily business problems into clear screens, reliable records, and maintainable system behavior.',
  },
  {
    title: 'Support-aware',
    text: 'I use troubleshooting experience to make better interfaces, clearer flows, and fewer repeated support issues.',
  },
  {
    title: 'Full-stack view',
    text: 'Frontend, backend, database, deployment, and technician tasks are connected parts of one system.',
  },
  {
    title: 'Data-minded',
    text: 'I check records carefully, because good interfaces still depend on correct data underneath.',
  },
]

export const focusAreas = [
  {
    title: 'ERP systems',
    text: 'Internal modules, records, workflows, issue fixing, and maintainable business logic.',
  },
  {
    title: 'POS systems',
    text: 'Transaction screens, data flow, backend behavior, and support for daily store operations.',
  },
  {
    title: 'Database work',
    text: 'MySQL and PHPMyAdmin checking, record review, and practical data cleanup support.',
  },
  {
    title: 'Support desk mindset',
    text: 'Troubleshooting, user support, database checking, and practical technician assistance.',
  },
]

export const workflowSteps = [
  {
    title: 'Trace the real flow',
    text: 'Check the user path, reproduce the issue, inspect records, and compare expected behavior against what the system actually does.',
  },
  {
    title: 'Fix across the stack',
    text: 'Work through the screen, API, Directus/backend behavior, database records, and configuration until the workflow is stable.',
  },
  {
    title: 'Validate with support eyes',
    text: 'Test the fix the way users actually work, watch for repeated errors, and leave practical notes for the next support case.',
  },
  {
    title: 'Improve the system',
    text: 'Use repeated issues as signals for better screens, cleaner data handling, and more dependable workflows over time.',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'Vue 3', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Directus', 'REST APIs', 'Server Actions', 'Authentication', 'Business Logic', 'Data Validation'],
  },
  {
    title: 'Business Systems',
    items: ['ERP', 'POS', 'Purchasing', 'Inventory', 'Accounting', 'Reporting', 'Role-Based Access'],
  },
  {
    title: 'Data & Tools',
    items: ['MySQL', 'phpMyAdmin', 'Docker', 'Git/GitHub', 'Excel Export', 'Print/PDF Layouts', 'Troubleshooting'],
  },
]

export const systems = [
  {
    title: 'BR&V ERP Platform',
    meta: 'Production system · Confidential',
    text: 'Develop and maintain a modular internal ERP spanning purchasing, inventory, accounting, projects, users, companies, warehouses, and operational reporting.',
    outcome: 'Role: full-stack development, data investigation, workflow design, bug fixing, and user support.',
    stack: ['Next.js', 'React', 'TypeScript', 'Directus', 'MySQL', 'Docker'],
  },
  {
    title: 'Project Cost Reporting',
    meta: 'ERP analytics · Confidential',
    text: 'Built project cost summaries that combine purchasing and ledger data, with filtering, styled spreadsheet export, consistent project naming, and report-ready totals.',
    outcome: 'Turns operational records into clearer cost visibility for review and decision-making.',
    stack: ['Next.js', 'TypeScript', 'Directus', 'MySQL', 'Excel'],
  },
  {
    title: 'Purchasing & Inventory Workflows',
    meta: 'ERP operations · Confidential',
    text: 'Improved material requests, supplier selection, purchase orders, item creation, item groups, warehouse data, inventory tables, and printable purchasing documents.',
    outcome: 'Connects user-friendly forms to dependable records across the purchasing lifecycle.',
    stack: ['React', 'TypeScript', 'Directus', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Directus Company Automation',
    meta: 'Backend extensions · Confidential',
    text: 'Worked on Directus hooks and initialization logic that prepare company-specific item types, item groups, units of measure, and accounting behavior.',
    outcome: 'Makes new-company setup more consistent and reduces repetitive administrative work.',
    stack: ['Node.js', 'Directus Extensions', 'JavaScript', 'Docker', 'MySQL'],
  },
  {
    title: 'Gege Portfolio',
    meta: 'Personal product · Public',
    text: 'Designed and built this responsive multi-view portfolio with theme persistence, accessible navigation, animated transitions, and an interactive canvas systems graph.',
    outcome: 'A custom Vue experience built without a portfolio template.',
    stack: ['Vue 3', 'Vite', 'Canvas API', 'CSS', 'Accessibility'],
    href: 'https://github.com/NeppyS/Gege',
  },
  {
    title: 'Frontend Practice Collection',
    meta: 'Web projects · Public',
    text: 'A progression of responsive interfaces including MartialPro, an admin dashboard, TypeScript coursework, and deployed layout challenges.',
    outcome: 'Shows continued practice across JavaScript, TypeScript, component layouts, and responsive CSS.',
    stack: ['TypeScript', 'JavaScript', 'CSS', 'Responsive Design', 'Vercel'],
    href: 'https://github.com/NeppyS?tab=repositories',
  },
]

export const contactReasons = [
  'ERP system work',
  'POS system work',
  'Full-stack build',
  'Database checking',
  'Support / troubleshooting',
]
