import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    starlight({
      title: "React State Pattern",
      description: "Understand how data flows in React apps — from useState to XState, Redux to Signals.",
      social: [
        { label: "GitHub", icon: "github", href: "https://github.com/muhsalaa/state-patterns" },
      ],
      customCss: ["/src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "" },
          ],
        },
        {
          label: "Foundations",
          items: [
            { autogenerate: { directory: "foundations" } },
          ],
        },
        {
          label: "Communication",
          items: [
            { autogenerate: { directory: "communication" } },
          ],
        },
        {
          label: "State Patterns",
          items: [
            { autogenerate: { directory: "patterns" } },
          ],
        },
        {
          label: "Specialized",
          items: [
            { autogenerate: { directory: "specialized" } },
          ],
        },
        {
          label: "Hybrid Architecture",
          items: [
            { autogenerate: { directory: "hybrid" } },
          ],
        },
      ],
    }),
    mdx(),
  ],
  output: "static",
  site: "https://state-patterns.pages.dev",
});
