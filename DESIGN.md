---
version: alpha
name: State Pattern site
description: Technical Reference with Warmth — a React state pattern docs site.
colors:
  # Dark mode
  dark-bg: "#0d1117"
  dark-surface: "#161b22"
  dark-border: "#21262d"
  dark-text-primary: "#f0f6fc"
  dark-text-secondary: "#8b949e"
  dark-text-muted: "#6e7681"
  # Light mode
  light-bg: "#ffffff"
  light-surface: "#f6f8fa"
  light-border: "#d0d7de"
  light-text-primary: "#1f2328"
  light-text-secondary: "#656d76"
  light-text-muted: "#8b949e"
  # Accent — amber
  accent: "#f59e0b"
  accent-hover: "#d97706"
  accent-subtle: "#fef3c7"
  accent-subtle-dark: "#292524"
  # Semantic
  success: "#22c55e"
  warning: "#eab308"
  error: "#ef4444"
  info: "#3b82f6"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  h2:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  h3:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
layout:
  sidebar-width: 280px
  content-max-width: 800px
  page-max-width: 1280px
breakpoints:
  mobile: 640px
  tablet: 768px
  desktop: 1024px
  wide: 1280px
components:
  sidebar:
    backgroundColor: "{dark-surface}"
    textColor: "{dark-text-secondary}"
    hoverBgColor: "{dark-bg}"
    hoverTextColor: "{dark-text-primary}"
    activeTextColor: "{accent}"
    width: "{layout.sidebar-width}"
  sidebar-light:
    backgroundColor: "{light-surface}"
    textColor: "{light-text-secondary}"
    hoverBgColor: "{light-bg}"
    hoverTextColor: "{light-text-primary}"
    activeTextColor: "{accent}"
  content-area:
    backgroundColor: "{dark-bg}"
    textColor: "{dark-text-primary}"
    maxWidth: "{layout.content-max-width}"
  content-area-light:
    backgroundColor: "{light-bg}"
    textColor: "{light-text-primary}"
  code-block:
    backgroundColor: "{dark-bg}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  code-block-light:
    backgroundColor: "{light-surface}"
  inline-code:
    backgroundColor: "{dark-surface}"
    textColor: "{accent}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  inline-code-light:
    backgroundColor: "{light-surface}"
  link:
    textColor: "{accent}"
    hoverTextColor: "{accent-hover}"
  card:
    backgroundColor: "{dark-surface}"
    borderColor: "{dark-border}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-light:
    backgroundColor: "{light-surface}"
    borderColor: "{light-border}"
  button-primary:
    backgroundColor: "{accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    fontWeight: 500
  button-primary-hover:
    backgroundColor: "{accent-hover}"
  tag:
    backgroundColor: "{accent-subtle-dark}"
    textColor: "{accent}"
    rounded: "{rounded.sm}"
    padding: "2px 10px"
  tag-light:
    backgroundColor: "{accent-subtle}"
---
