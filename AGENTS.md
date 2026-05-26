# Repository Conventions

## Tailwind Tokens

- Tailwind v4 `@theme` CSS files are the source of truth for design tokens.
- The Tailwind entrypoint is `src/styles/tailwind.css`.
- Token definitions live in `src/styles/tokens/`.
- Components should use static Tailwind classes backed by theme tokens, such as `bg-primary`, `text-primary-foreground`, `border-border`, `bg-background`, `text-foreground`, `rounded-md`, `px-4`, and `py-2`.
- Do not use inline styles as the primary component styling approach.
- Do not generate dynamic Tailwind class names such as ``bg-${color}``.
- Stories should demonstrate tokens with static utility class strings so Tailwind can detect them.
- If a new semantic token is needed, add it to the appropriate `@theme` token file first, then consume it through Tailwind utilities.
