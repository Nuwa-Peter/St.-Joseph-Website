# AI Editor Rules for St Joseph's Vocational Secondary School Website

This document outlines the technical stack and guidelines for the AI editor when making changes to the St Joseph's Vocational Secondary School website.

## Current Tech Stack Overview

The application is built using a traditional web development approach, focusing on simplicity and direct browser compatibility.

*   **HTML5:** All pages are structured using semantic HTML5 for content and layout.
*   **CSS3:** Styling is managed through a single, custom stylesheet (`styles.css`), utilizing responsive design principles and CSS variables.
*   **Vanilla JavaScript:** Client-side interactivity, DOM manipulation, and dynamic features are implemented using plain JavaScript (`script.js`) without external frameworks.
*   **Multi-Page Architecture:** Navigation is handled by direct links between separate HTML files, rather than client-side routing.
*   **No Front-end Frameworks:** The project does not currently use JavaScript frameworks like React, Vue, or Angular.
*   **No Build Tools:** The application is served directly from its HTML, CSS, and JS files, without a complex build pipeline.
*   **Image Assets:** Images are stored and managed within the `gallery/` directory, following descriptive naming conventions.

## Library and Tooling Usage Rules

To maintain consistency and adhere to the current project's architecture, please follow these guidelines:

*   **Styling:**
    *   Continue to implement all styling within the `styles.css` file.
    *   Utilize native CSS3, responsive design patterns, and existing CSS variables.
    *   **Do not introduce new CSS frameworks (e.g., Tailwind CSS, Bootstrap) unless a full project migration is explicitly requested and planned.**
*   **Scripting:**
    *   All client-side logic should be written in vanilla JavaScript within `script.js`.
    *   **Do not introduce external JavaScript libraries or frameworks (e.g., jQuery, React, Vue) without explicit user approval and a clear migration plan.**
*   **Icons:**
    *   For any new icons, prefer using SVG assets or image files.
    *   **Do not introduce React-specific icon libraries (e.g., `lucide-react`) as the current project is not React-based.**
*   **UI Components:**
    *   New UI elements should be built using standard HTML and styled with CSS, consistent with the existing components.
    *   **Do not introduce component libraries (e.g., `shadcn/ui`) unless the project is migrated to a React environment.**
*   **Routing:**
    *   Maintain the current multi-page HTML structure with direct `<a>` tag navigation.
    *   If client-side routing is desired, it would require a significant architectural change and should be discussed as a separate migration.
*   **File Structure:**
    *   Adhere to the existing file structure: HTML files in the root, `styles.css`, `script.js`, and images in `gallery/`.
    *   **Do not introduce a `src/` directory structure (e.g., `src/pages`, `src/components`) unless the project is migrated to a framework-based setup.**

---

**Note from AI Editor:**
My internal guidelines are optimized for modern React/TypeScript/Tailwind/shadcn/ui projects. While I will strictly follow the rules above for your current vanilla JS project, please be aware that if you wish to transition to a more modern front-end stack in the future, I can assist with a migration plan to leverage those technologies.