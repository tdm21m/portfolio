/** @type {import('tailwindcss').Config} */

/*
 * Meridian Design System
 * ──────────────────────
 * Modern. Minimal. Inevitable.
 *
 * A design system for marketing and landing pages.
 * Built on the 8px grid with a teal accent.
 */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class', // or 'media' for system preference

  theme: {
    /*
     * ═══════════════════════════════════════════════════════════════
     * COLORS
     * ═══════════════════════════════════════════════════════════════
     * 60% Dominant (gray-50, white) — backgrounds
     * 30% Secondary (gray-100, gray-200) — subtle sections, borders
     * 10% Accent (teal-500, teal-600) — CTAs, links, highlights
     */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',

      // Warm Gray (primary neutrals)
      gray: {
        50:  '#FAFAF9',
        100: '#F5F5F4',
        200: '#E7E5E4',
        300: '#D6D3D1',
        400: '#A8A29E',
        500: '#78716C',
        600: '#57534E',
        700: '#44403C',
        800: '#292524',
        900: '#1C1917',
        950: '#0C0A09',
      },

      // Teal (primary accent)
      teal: {
        50:  '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6', // Primary brand
        600: '#0D9488', // Primary hover
        700: '#0F766E', // Primary active
        800: '#115E59',
        900: '#134E4A',
        950: '#042F2E',
      },

      // Semantic colors
      success: {
        50:  '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
      },

      warning: {
        50:  '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
      },

      error: {
        50:  '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
      },
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * TYPOGRAPHY
     * ═══════════════════════════════════════════════════════════════
     * Scale: 1.25 ratio (Major Third)
     * Optimized for marketing: bold headlines, readable body
     */
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
      display: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    fontSize: {
      xs:   ['0.75rem',   { lineHeight: '1.5' }],     // 12px
      sm:   ['0.875rem',  { lineHeight: '1.5' }],     // 14px
      base: ['1rem',      { lineHeight: '1.6' }],     // 16px
      lg:   ['1.125rem',  { lineHeight: '1.6' }],     // 18px
      xl:   ['1.25rem',   { lineHeight: '1.5' }],     // 20px
      '2xl': ['1.5rem',   { lineHeight: '1.4' }],     // 24px
      '3xl': ['1.875rem', { lineHeight: '1.3' }],     // 30px
      '4xl': ['2.25rem',  { lineHeight: '1.2' }],     // 36px
      '5xl': ['3rem',     { lineHeight: '1.1' }],     // 48px
      '6xl': ['3.75rem',  { lineHeight: '1.1' }],     // 60px
      '7xl': ['4.5rem',   { lineHeight: '1' }],       // 72px
    },

    fontWeight: {
      normal:    '400',
      medium:    '500',
      semibold:  '600',
      bold:      '700',
      extrabold: '800',
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight:   '-0.025em',
      normal:  '0',
      wide:    '0.025em',
      wider:   '0.05em',
      widest:  '0.1em',
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * SPACING
     * ═══════════════════════════════════════════════════════════════
     * 8px grid system
     */
    spacing: {
      px: '1px',
      0:    '0',
      0.5:  '0.125rem',  // 2px
      1:    '0.25rem',   // 4px
      2:    '0.5rem',    // 8px  ← Base unit
      3:    '0.75rem',   // 12px
      4:    '1rem',      // 16px
      5:    '1.25rem',   // 20px
      6:    '1.5rem',    // 24px
      7:    '1.75rem',   // 28px
      8:    '2rem',      // 32px
      9:    '2.25rem',   // 36px
      10:   '2.5rem',    // 40px
      11:   '2.75rem',   // 44px
      12:   '3rem',      // 48px
      14:   '3.5rem',    // 56px
      16:   '4rem',      // 64px
      20:   '5rem',      // 80px
      24:   '6rem',      // 96px
      28:   '7rem',      // 112px
      32:   '8rem',      // 128px
      36:   '9rem',      // 144px
      40:   '10rem',     // 160px
      44:   '11rem',     // 176px
      48:   '12rem',     // 192px
      52:   '13rem',     // 208px
      56:   '14rem',     // 224px
      60:   '15rem',     // 240px
      64:   '16rem',     // 256px
      72:   '18rem',     // 288px
      80:   '20rem',     // 320px
      96:   '24rem',     // 384px
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * BORDERS
     * ═══════════════════════════════════════════════════════════════
     */
    borderRadius: {
      none:   '0',
      sm:     '0.25rem',   // 4px
      DEFAULT: '0.375rem', // 6px
      md:     '0.5rem',    // 8px
      lg:     '0.75rem',   // 12px
      xl:     '1rem',      // 16px
      '2xl':  '1.5rem',    // 24px
      '3xl':  '2rem',      // 32px
      full:   '9999px',
    },

    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * SHADOWS & ELEVATION
     * ═══════════════════════════════════════════════════════════════
     */
    boxShadow: {
      none: 'none',
      sm:   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md:   '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg:   '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl:   '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      // Colored shadows for CTAs
      teal:    '0 4px 14px 0 rgb(20 184 166 / 0.35)',
      'teal-lg': '0 8px 24px 0 rgb(20 184 166 / 0.4)',
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * TRANSITIONS & ANIMATION
     * ═══════════════════════════════════════════════════════════════
     */
    transitionDuration: {
      75:  '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },

    transitionTimingFunction: {
      linear: 'linear',
      in:     'cubic-bezier(0.4, 0, 1, 1)',
      out:    'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      // Custom animations
      'fade-in': 'fadeIn 300ms ease-out',
      'fade-out': 'fadeOut 300ms ease-in',
      'slide-up': 'slideUp 300ms ease-out',
      'slide-down': 'slideDown 300ms ease-in',
      'scale-in': 'scaleIn 200ms ease-out',
      shimmer: 'shimmer 1.5s infinite',
    },

    keyframes: {
      spin: {
        to: { transform: 'rotate(360deg)' },
      },
      ping: {
        '75%, 100%': { transform: 'scale(2)', opacity: '0' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '.5' },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      fadeOut: {
        from: { opacity: '1' },
        to: { opacity: '0' },
      },
      slideUp: {
        from: { opacity: '0', transform: 'translateY(16px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      slideDown: {
        from: { opacity: '1', transform: 'translateY(0)' },
        to: { opacity: '0', transform: 'translateY(16px)' },
      },
      scaleIn: {
        from: { opacity: '0', transform: 'scale(0.95)' },
        to: { opacity: '1', transform: 'scale(1)' },
      },
      shimmer: {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' },
      },
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * LAYOUT
     * ═══════════════════════════════════════════════════════════════
     */
    screens: {
      sm:  '640px',   // Large phones
      md:  '768px',   // Tablets
      lg:  '1024px',  // Laptops
      xl:  '1280px',  // Desktops
      '2xl': '1536px', // Large screens
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
      },
    },

    maxWidth: {
      none: 'none',
      xs:   '20rem',    // 320px
      sm:   '24rem',    // 384px
      md:   '28rem',    // 448px
      lg:   '32rem',    // 512px
      xl:   '36rem',    // 576px
      '2xl': '42rem',   // 672px
      '3xl': '48rem',   // 768px
      '4xl': '56rem',   // 896px
      '5xl': '64rem',   // 1024px
      '6xl': '72rem',   // 1152px
      '7xl': '80rem',   // 1280px
      full: '100%',
      prose: '65ch',    // Optimal reading width
      'prose-wide': '80ch',
      screen: '100vw',
    },

    zIndex: {
      auto: 'auto',
      0:  '0',
      10: '10',   // Raised elements
      20: '20',   // Dropdowns
      30: '30',   // Sticky headers
      40: '40',   // Overlays
      50: '50',   // Modals
      60: '60',   // Popovers
      70: '70',   // Toasts
    },

    /*
     * ═══════════════════════════════════════════════════════════════
     * EXTEND (Additions to defaults)
     * ═══════════════════════════════════════════════════════════════
     */
    extend: {
      // Semantic color aliases for convenience
      colors: {
        primary: {
          DEFAULT: '#14B8A6',
          hover: '#0D9488',
          active: '#0F766E',
          light: '#CCFBF1',
        },
        background: {
          DEFAULT: '#FAFAF9',
          subtle: '#F5F5F4',
          card: '#FFFFFF',
        },
        foreground: {
          DEFAULT: '#1C1917',
          muted: '#57534E',
          subtle: '#78716C',
        },
        border: {
          DEFAULT: '#E7E5E4',
          strong: '#D6D3D1',
        },
      },

      // Ring for focus states
      ringColor: {
        DEFAULT: '#14B8A6',
      },
      ringOpacity: {
        DEFAULT: '0.2',
      },
      ringWidth: {
        DEFAULT: '3px',
      },
      ringOffsetWidth: {
        DEFAULT: '2px',
      },

      // Aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/1': '2 / 1',
        '21/9': '21 / 9',
      },

      // Typography plugin config
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.600'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.teal.600'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-quotes': theme('colors.gray.600'),
            '--tw-prose-quote-borders': theme('colors.teal.500'),
            '--tw-prose-code': theme('colors.gray.800'),
            maxWidth: '65ch',
            a: {
              color: theme('colors.teal.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.teal.700'),
                textDecoration: 'underline',
              },
            },
          },
        },
        // Dark mode prose
        invert: {
          css: {
            '--tw-prose-body': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-headings': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-links': theme('colors.teal.400'),
            '--tw-prose-bold': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-quotes': 'rgba(255, 255, 255, 0.60)',
            '--tw-prose-quote-borders': theme('colors.teal.400'),
          },
        },
      }),
    },
  },

  plugins: [
    // Official Tailwind plugins (install separately)
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),

    // Custom plugin for focus-visible
    function({ addBase, addComponents, addUtilities, theme }) {
      // Base styles
      addBase({
        // Smooth scroll
        'html': {
          scrollBehavior: 'smooth',
        },
        // Reduced motion
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        // Focus visible
        ':focus-visible': {
          outline: `2px solid ${theme('colors.teal.500')}`,
          outlineOffset: '2px',
        },
        ':focus:not(:focus-visible)': {
          outline: 'none',
        },
      });

      // Component classes
      addComponents({
        // Button base
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: theme('fontWeight.semibold'),
          fontSize: theme('fontSize.base[0]'),
          lineHeight: theme('fontSize.base[1].lineHeight'),
          borderRadius: theme('borderRadius.DEFAULT'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          minHeight: '48px',
          transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1)',
          cursor: 'pointer',
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.teal.500'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.sm'),
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.teal.600'),
            boxShadow: theme('boxShadow.teal'),
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme('colors.teal.700'),
          },
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          color: theme('colors.gray.700'),
          border: `1px solid ${theme('colors.gray.300')}`,
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.gray.100'),
            borderColor: theme('colors.gray.400'),
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.teal.600'),
          '&:hover:not(:disabled)': {
            backgroundColor: theme('colors.teal.50'),
            color: theme('colors.teal.700'),
          },
        },

        // Card
        '.card': {
          backgroundColor: theme('colors.white'),
          border: `1px solid ${theme('colors.gray.200')}`,
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.sm'),
        },
        '.card-interactive': {
          transition: 'box-shadow 200ms cubic-bezier(0, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: theme('boxShadow.md'),
          },
        },

        // Input
        '.input': {
          display: 'block',
          width: '100%',
          backgroundColor: theme('colors.white'),
          border: `1px solid ${theme('colors.gray.300')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base[0]'),
          lineHeight: theme('fontSize.base[1].lineHeight'),
          color: theme('colors.gray.900'),
          minHeight: '48px',
          transition: 'border-color 150ms, box-shadow 150ms',
          '&::placeholder': {
            color: theme('colors.gray.400'),
          },
          '&:focus': {
            borderColor: theme('colors.teal.500'),
            boxShadow: `0 0 0 3px rgb(20 184 166 / 0.15)`,
            outline: 'none',
          },
          '&:disabled': {
            backgroundColor: theme('colors.gray.100'),
            cursor: 'not-allowed',
          },
        },

        // Skeleton loading
        '.skeleton': {
          background: `linear-gradient(90deg, ${theme('colors.gray.200')} 25%, ${theme('colors.gray.100')} 50%, ${theme('colors.gray.200')} 75%)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: theme('borderRadius.sm'),
        },
      });

      // Utility classes
      addUtilities({
        // Text balance for headlines
        '.text-balance': {
          textWrap: 'balance',
        },
        // Prose width
        '.prose-width': {
          maxWidth: '65ch',
        },
        // Hide scrollbar
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};
