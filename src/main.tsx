import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <h1 className="text-2xl font-semibold">Design System Workshop</h1>
      <p className="mt-2 max-w-prose text-sm text-secondary-foreground">
        This starter is intentionally empty. Components will be generated during the workshop.
      </p>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
