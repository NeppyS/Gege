export const profile = {
  name: 'Nephten Fajardo Ilon',
  shortName: 'Nephten',
  role: 'Full-Stack Developer & IT Systems Specialist',
  brandRole: 'BR&V IT Developer',
  company: 'BR&V Company',
  location: 'Bacolod City, Philippines',
  email: 'nephtenilon@gmail.com',
  headline: 'I build and support the systems businesses rely on.',
  intro:
    'Full-stack developer specializing in ERP delivery, document-management fixes, POS support, reporting, and the operational work behind dependable software.',
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
  { value: 'ERP', label: 'Purchasing, inventory, accounting, and project-cost reporting' },
  { value: 'DMS', label: 'Controlled documents, access, metadata, history, and retention' },
  { value: 'POS', label: 'Transaction and synchronization investigation for daily operations' },
  { value: 'FULL STACK', label: 'Interfaces, APIs, Directus, MySQL, exports, and production fixes' },
]

export const aboutParagraphs = [
  'I am Nephten Fajardo Ilon, a full-stack developer and IT systems specialist based in Bacolod City, Philippines. I build and support practical business software for work that cannot stop: ERP, purchasing, inventory, accounting, project reporting, document management, point-of-sale, company administration, and role-based access.',
  'At BR&V Company, I develop and maintain ERP workflows across Next.js and React interfaces, TypeScript server actions, Directus extensions and APIs, MySQL records, and Docker environments. Recent delivery includes improving purchasing and inventory flows, building project-cost reports, producing styled Excel exports and print layouts, and supporting the people who use those systems every day.',
  'My current work also includes maintaining and debugging a company document management system with controlled documents, folders, permissions, metadata, history, retention, and administration. For KonekTaV POS, I provide technical support: reproducing reported issues, investigating synchronization and transaction behavior, checking system data, testing fixes, and helping keep store operations running.',
  'I approach development with a support-aware mindset. I start from the user’s actual workflow, follow the data through the interface, API, backend, database, and configuration, then validate the result in realistic use. I value ownership, clear communication, careful data handling, accessible interfaces, and fixes that prevent the same problem from returning.',
]

export const aboutHighlights = [
  {
    title: 'Business-systems builder',
    text: 'I turn real purchasing, inventory, accounting, reporting, document, and administration needs into maintainable software.',
  },
  {
    title: 'Technical support',
    text: 'I reproduce user issues, investigate POS and business-system behavior, explain solutions clearly, and verify that operations can continue.',
  },
  {
    title: 'Full-stack ownership',
    text: 'I work across frontend, server actions, APIs, backend extensions, databases, Docker environments, exports, and print output.',
  },
  {
    title: 'Workflow and data minded',
    text: 'I protect existing workflows and inspect the records underneath them, because dependable interfaces require dependable data.',
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
    items: [
      'Next.js',
      'React',
      'Vue 3',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Responsive UI',
      'Accessibility',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Directus',
      'REST APIs',
      'Server Actions',
      'Authentication',
      'Business Logic',
      'Data Validation',
    ],
  },
  {
    title: 'Business Systems',
    items: [
      'ERP',
      'POS',
      'Document Management',
      'Purchasing',
      'Inventory',
      'Accounting',
      'Project Cost Reporting',
      'Role-Based Access',
    ],
  },
  {
    title: 'Data & Tools',
    items: [
      'MySQL',
      'phpMyAdmin',
      'Docker',
      'Git/GitHub',
      'Excel Export',
      'Print/PDF Layouts',
      'Data Investigation',
    ],
  },
  {
    title: 'Support & Quality',
    items: [
      'Technical Support',
      'Issue Reproduction',
      'Root-Cause Analysis',
      'System Testing',
      'User Assistance',
      'Production Fixes',
      'Workflow Validation',
    ],
  },
]

export const systems = [
  {
    title: 'BR&V ERP Platform',
    meta: 'Production system · Confidential',
    text: 'Develop and maintain a modular internal ERP spanning purchasing, inventory, accounting, projects, users, companies, warehouses, and operational reporting.',
    outcome:
      'Role: full-stack development, data investigation, workflow design, bug fixing, and user support.',
    stack: ['Next.js', 'React', 'TypeScript', 'Directus', 'MySQL', 'Docker'],
    visual: ['Purchasing', 'Inventory', 'Reporting'],
  },
  {
    title: 'KonekTaV POS',
    meta: 'Point of sale · Current work',
    text: 'Provide hands-on technical support for the POS platform, investigating synchronization, sales, transaction, and day-to-day operational issues reported by users.',
    outcome:
      'Role: Technical Support — reproducing issues, checking system behavior, assisting users, and helping keep store operations running.',
    stack: ['Technical Support', 'POS', 'Troubleshooting', 'User Support', 'System Testing'],
    visual: ['Investigate', 'Validate', 'Support'],
  },
  {
    title: 'Company Document Management System',
    meta: 'Document platform · Current work',
    text: 'Maintain and fix code across a company document-management system covering controlled documents, folders, access, metadata, history, retention, and administration.',
    outcome:
      'Current work: tracing defects through the interface and application flow, implementing fixes, and validating document workflows.',
    stack: ['Full-Stack Fixes', 'DMS', 'Debugging', 'Access Control', 'Workflow Testing'],
    visual: ['Access', 'Metadata', 'History'],
  },
  {
    title: 'Project Cost Reporting',
    meta: 'ERP analytics · Confidential',
    text: 'Built project cost summaries that combine purchasing and ledger data, with filtering, styled spreadsheet export, consistent project naming, and report-ready totals.',
    outcome:
      'Turns operational records into clearer cost visibility for review and decision-making.',
    stack: ['Next.js', 'TypeScript', 'Directus', 'MySQL', 'Excel'],
    visual: ['Source data', 'Cost logic', 'Export'],
  },
  {
    title: 'Purchasing & Inventory Workflows',
    meta: 'ERP operations · Confidential',
    text: 'Improved material requests, supplier selection, purchase orders, item creation, item groups, warehouse data, inventory tables, and printable purchasing documents.',
    outcome: 'Connects user-friendly forms to dependable records across the purchasing lifecycle.',
    stack: ['React', 'TypeScript', 'Directus', 'MySQL', 'Tailwind CSS'],
    visual: ['Request', 'Supplier', 'Purchase order'],
  },
  {
    title: 'Directus Company Automation',
    meta: 'Backend extensions · Confidential',
    text: 'Worked on Directus hooks and initialization logic that prepare company-specific item types, item groups, units of measure, and accounting behavior.',
    outcome: 'Makes new-company setup more consistent and reduces repetitive administrative work.',
    stack: ['Node.js', 'Directus Extensions', 'JavaScript', 'Docker', 'MySQL'],
    visual: ['Company', 'Defaults', 'Ready'],
  },
  {
    title: 'Gege Portfolio',
    meta: 'Personal product · Public',
    text: 'Designed and built this responsive multi-view portfolio with theme persistence, accessible navigation, animated transitions, and an interactive canvas systems graph.',
    outcome: 'A custom Vue experience built without a portfolio template.',
    stack: ['Vue 3', 'Vite', 'Canvas API', 'CSS', 'Accessibility'],
    href: 'https://github.com/NeppyS/Gege',
    visual: ['Design', 'Build', 'Refine'],
  },
  {
    title: 'Frontend Practice Collection',
    meta: 'Web projects · Public',
    text: 'A progression of responsive interfaces including MartialPro, an admin dashboard, TypeScript coursework, and deployed layout challenges.',
    outcome:
      'Shows continued practice across JavaScript, TypeScript, component layouts, and responsive CSS.',
    stack: ['TypeScript', 'JavaScript', 'CSS', 'Responsive Design', 'Vercel'],
    href: 'https://github.com/NeppyS?tab=repositories',
    visual: ['Practice', 'Ship', 'Learn'],
  },
]

export const contactReasons = [
  'ERP system work',
  'POS system work',
  'Full-stack build',
  'Database checking',
  'Support / troubleshooting',
]
