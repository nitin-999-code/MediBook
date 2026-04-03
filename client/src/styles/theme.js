/**
 * MediBook Design System
 * ─────────────────────
 * Centralized design tokens for colors, spacing, typography, shadows, and radius.
 * All values are mirrored as CSS custom properties in App.css for use in stylesheets.
 */

const theme = {
  colors: {
    // Primary palette — deep teal family
    primary:       '#166534',
    primaryLight:  '#15803d',
    primaryDark:   '#14532d',
    primaryBg:     '#eefaff',
    primaryGhost:  'rgba(22, 101, 52, 0.06)',

    // Accent — warm amber for CTAs / highlights
    accent:        '#E8913A',
    accentLight:   '#F5B870',
    accentBg:      '#FFF8EE',

    // Neutrals
    white:         '#FFFFFF',
    bgPage:        '#F7F9FC',
    bgCard:        '#FFFFFF',
    bgMuted:       '#F1F4F8',

    // Text
    textPrimary:   '#111928',
    textSecondary: '#4B5563',
    textMuted:     '#9CA3AF',
    textInverse:   '#FFFFFF',

    // Borders
    border:        '#E5E7EB',
    borderLight:   '#F3F4F6',

    // Semantic
    success:       '#059669',
    successBg:     '#ECFDF5',
    warning:       '#D97706',
    warningBg:     '#FFFBEB',
    error:         '#DC2626',
    errorBg:       '#FEF2F2',
    info:          '#2563EB',
    infoBg:        '#EFF6FF',

    // Dark surface (footer, dark sections)
    darkSurface:   '#0B1F1A',
    darkMuted:     'rgba(255,255,255,0.7)',
  },

  spacing: {
    xs:  '4px',
    sm:  '8px',
    md:  '16px',
    lg:  '24px',
    xl:  '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',

    // Page / section spacing
    sectionY:  '80px',
    containerX: '24px',
  },

  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyMono: "'JetBrains Mono', 'Fira Code', monospace",

    // Sizes
    xs:  '12px',
    sm:  '14px',
    base: '16px',
    lg:  '18px',
    xl:  '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    display: '56px',

    // Weights
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,

    // Line heights
    tight: 1.2,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.65,
  },

  radius: {
    sm:   '6px',
    md:   '10px',
    lg:   '14px',
    xl:   '20px',
    full: '9999px',
  },

  shadows: {
    xs:  '0 1px 2px rgba(0,0,0,0.05)',
    sm:  '0 2px 8px rgba(0,0,0,0.06)',
    md:  '0 4px 16px rgba(10,110,85,0.08)',
    lg:  '0 8px 30px rgba(10,110,85,0.12)',
    xl:  '0 12px 48px rgba(0,0,0,0.12)',
    card: '0 2px 12px rgba(0,0,0,0.05)',
    cardHover: '0 8px 30px rgba(10,110,85,0.14)',
    button: '0 2px 8px rgba(10,110,85,0.18)',
  },

  transitions: {
    fast:   '150ms ease',
    normal: '250ms ease',
    slow:   '400ms ease',
  },

  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },

  layout: {
    maxWidth: '1280px',
    navHeight: '72px',
  },
};

// Ant Design theme token override (for ConfigProvider)
export const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
    colorInfo: theme.colors.primaryLight,
    colorSuccess: theme.colors.success,
    colorWarning: theme.colors.warning,
    colorError: theme.colors.error,
    borderRadius: 10,
    fontFamily: theme.typography.fontFamily,
    fontSize: 15,
    colorBgContainer: theme.colors.white,
    colorBorder: theme.colors.border,
    controlHeight: 40,
  },
};

export default theme;
