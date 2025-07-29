import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetTypography,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // Glassmorphic card with responsive padding & shadow
    [
      'glass-card',
      'bg-white/20 dark:bg-gray-900/30 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-lg transition-shadow hover:shadow-2xl',
    ],

    // Primary button with hover, focus, and active states + smooth transitions
    [
      'btn-primary',
      'inline-block px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-400 dark:focus:ring-indigo-600 active:scale-95 transition-transform duration-150',
    ],

    // Secondary button, lighter for contrast
    [
      'btn-secondary',
      'inline-block px-6 py-3 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 active:scale-95 transition-transform duration-150',
    ],

    // Responsive container: max width with padding and centered horizontally
    ['container', 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'],

    // Center content flexbox helper
    ['flex-center', 'flex items-center justify-center'],

    // Smooth scroll utility for scroll behavior
    ['smooth-scroll', 'scroll-smooth'],

    // Text gradient for cool headings
    ['text-gradient', 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'],

    // Section padding for vertical spacing
    ['section', 'py-12 md:py-20'],

    // Card shadow animation on hover
    [
      'hover-glow',
      'transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]',
    ],

    // Card base for easier reuse
    ['card', 'glass-card max-w-md mx-auto mb-8 shadow-lg p-6 rounded-xl'],

    // Section header styling
    ['section-header', 'text-3xl font-bold mb-6 text-gradient tracking-tight'],

    // Link styles with smooth underline transition
    ['link', 'text-indigo-600 dark:text-indigo-400 hover:underline transition'],

    // Responsive grid for projects or gallery
    ['grid-cols-responsive', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'],

    // Utility for visually hidden text (for accessibility)
    ['sr-only', 'sr-only'],

    // Flex column center
    ['flex-col-center', 'flex flex-col items-center justify-center'],

    // Navbar links with smooth color and underline transitions
    [
      'nav-link',
      'relative px-3 py-1 font-medium text-gray-700 dark:text-gray-300 no-underline cursor-pointer transition-colors duration-300',
    ],

    // Animated underline for nav links on hover & active
    [
      'nav-link::after',
      'content-[""] absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-500 scale-x-0 origin-left transition-transform duration-300',
    ],
    [
      'nav-link:hover::after, nav-link.active::after',
      'scale-x-100',
    ],
  ],

  theme: {
    colors: {
      primary: '#4F46E5', // Indigo 600
      primaryLight: '#6366F1', // Indigo 400
      secondary: '#10B981', // Emerald 500
      darkBg: '#121212',
      lightBg: '#F9FAFB',
      accent: '#F59E0B', // Amber 400
      glassLight: 'rgba(255, 255, 255, 0.2)',
      glassDark: 'rgba(17, 24, 39, 0.3)',
      danger: '#DC2626',
      success: '#22C55E',
      warning: '#FBBF24',
      info: '#3B82F6',
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    animation: {
      fadeIn: 'fadeIn 0.6s ease forwards',
      slideUp: 'slideUp 0.6s ease forwards',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(-5%)' },
        '50%': { transform: 'translateY(0)' },
      },
    },
  },

  variants: [
    // Dark mode via class
    (matcher) => {
      if (!matcher.startsWith('dark:')) return matcher
      return {
        matcher: matcher.slice(5),
        selector: (s) => `.dark ${s}`,
      }
    },

    // Active variant for links and buttons
    (matcher) => {
      if (!matcher.startsWith('active:')) return matcher
      return {
        matcher: matcher.slice(7),
        selector: (s) => `${s}.active, ${s}:active`,
      }
    },
  ],

  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(), // Rich prose styles for content
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'Fira Code',
      },
    }),
  ],
})
