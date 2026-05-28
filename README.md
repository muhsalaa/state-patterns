# React State Patterns

> Interactive visual documentation — understand how data flows in React apps.

A comprehensive reference site covering React state management patterns from `useState` to XState, Redux to Signals. Built with **Astro + Starlight** and includes **interactive HTML visualizers** for hands-on exploration.

**Live:** https://state-patterns.pages.dev

---

## Contents

| Section | Covers |
|---|---|
| **Foundations** | What is state, vanilla JS patterns, how React renders |
| **Communication** | Props, lifting state, context, event bus, composition |
| **State Patterns** | Unidirectional, bidirectional, event-driven, atomic, signals |
| **Specialized** | Form state, URL state, server state, FSM |
| **Hybrid** | Combining patterns, decision flowchart |

## Interactive Visualizers

Four standalone HTML playgrounds in `public/visualizers/`:

- **Unidirectional Flow** — Redux/Vuex-style dispatch chain
- **Event Bus** — Pub/sub messaging pattern
- **Signals** — Reactive signal graph (Solid/Vue-like)
- **FSM** — Finite state machine explorer (XState-style)

## Stack

- **Astro 6** + **Starlight** docs theme
- **MDX** content
- **Vanilla HTML/JS/CSS** visualizers (no framework)
- Deployed on **Cloudflare Pages** via `wrangler`

## Local Dev

```bash
npm install
npm run dev      # → localhost:4321
npm run build    # → dist/
npm run preview  # preview production build
```

## Deploy

```bash
npx wrangler pages deploy dist/ --branch production
```

