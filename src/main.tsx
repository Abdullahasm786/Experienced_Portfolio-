import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Canonical URL: only set when a real domain is configured via VITE_SITE_URL.
const site = import.meta.env.VITE_SITE_URL as string | undefined;
if (site) {
  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = site;
  document.head.appendChild(link);
  const og = document.createElement("meta");
  og.setAttribute("property", "og:url");
  og.content = site;
  document.head.appendChild(og);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
