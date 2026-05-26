# Repository Conventions

## Tailwind Tokens

- Tailwind v4 `@theme` CSS files are the source of truth for design tokens.
- The Tailwind entrypoint is `src/styles/tailwind.css`.
- Token definitions live in `src/styles/tokens/`.
- When tokens are generated, they should be added to the appropriate token file.
- Components should use static Tailwind classes backed by theme tokens.
- Do not use inline styles as the primary component styling approach.
- Do not generate dynamic Tailwind class names such as ``bg-${color}``.
- Stories should use static utility class strings so Tailwind can detect them.
- Every generated component should include a Storybook story.
- Every generated component should include a lightweight component test if the test setup exists.
- Do not invent variants, states, sizes, props, or behaviors that are not present in Figma unless explicitly requested.
