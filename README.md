# SAIIIVERSE

A premium, responsive creative portfolio built with React, Vite, React Three Fiber, Drei, Framer Motion and Lenis.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ recommended.

```bash
npm install
npm run dev
```

Visit the local URL printed by Vite.

## Production

```bash
npm run build
npm run preview
```

Deploy to Vercel or Netlify as a Vite site: build command `npm run build`, output directory `dist`.

## Personalize before launch

Edit `src/content.js`:
- Add your verified email and WhatsApp number to enable contact buttons.
- Replace placeholder project descriptions with accurate details, screenshots and live links.
- Add editing showreel only when you have a real video to show.
- Update social links and availability.

The motion studio intentionally labels its showreel **coming soon** rather than pretending a video exists. The 3D visual is a procedural scene, not an external asset. No IRMS project is included.

## Accessibility & performance

- Semantic sections, keyboard-accessible links, responsive navigation and reduced-motion support.
- 3D Canvas has capped DPR; use the browser performance profiler on target devices.
- If low-end mobile performance needs improvement, conditionally hide the 3D Canvas and display a static hero gradient.

## Repository

Intended for `saikumarnagishetty/saiiixverse-portfolio`.
