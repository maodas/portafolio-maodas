/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design tokens — resolve to CSS custom properties so dark/light
        // mode swaps automatically when :root variables change.
        'bg':         'var(--bg)',
        'surface':    'var(--surface)',
        'text-col':   'var(--text)',        // 'text' is reserved by Tailwind; use text-col
        'muted':      'var(--muted)',
        'dim':        'var(--dim)',
        'accent':     'var(--accent)',
        'accent-dim': 'var(--accent-dim)',
        // Border tokens — used as border-color values
        'border-base': 'var(--border)',
        'border-hi':   'var(--border-hi)',
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
      },
      maxWidth: {
        'content': '1100px',
      },
      fontSize: {
        // Spec §1.2 heading sizes
        'h2': ['1.1rem', { fontWeight: '400' }],
      },
      lineHeight: {
        'body': '1.7',
        'tight': '1.1',
      },
    },
  },
  plugins: [],
}