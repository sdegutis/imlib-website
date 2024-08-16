import { Page } from "./page.js";

export default <Page which="About">
  <link rel='stylesheet' href='style.css' />
  <h3>imlib</h3>
  <p>Docs and better site coming soon.</p>
  <ul>
    <li>Very simple TypeScript SSG</li>
    <li>Custom JSX implementation (can return DOM nodes, strings, etc)</li>
    <li>Extremely fast and efficient (processes 1500+ files in ~700ms)</li>
  </ul>
</Page>;
