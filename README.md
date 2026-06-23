# Responsive Site — Web Design Final Project

A multi-page responsive website built as a learning project for **Web Design 2**. The goal is to practice modern layout techniques, mobile-first design, and component-based styling with **Tailwind CSS**.

**Live demo:** [https://fatemeafd.github.io/responsive-site/](https://fatemeafd.github.io/responsive-site/)

## About

This project is a Finsweet-inspired marketing website for a digital agency. It includes a home page, service pages, pricing, blog, FAQ, and contact sections — all styled with Tailwind utility classes and built to work across screen sizes.

## Tech Stack

- **HTML5** — semantic markup
- **Tailwind CSS v4** — utility-first styling
- **Vite** — dev server and production build
- **Flowbite** — accordion and UI components
- **Swiper** — testimonial slider
- **Poppins** — custom font family

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `src/index.html` | Hero, projects, features, testimonials, FAQ, blog preview |
| About Us | `src/about-us.html` | Company info and team |
| Features | `src/features.html` | Service highlights |
| Pricing | `src/pricing.html` | Pricing plans and FAQ accordion |
| FAQ | `src/faq.html` | Work portfolio showcase |
| Blog | `src/blog.html` | Blog listing |
| Read Blog | `src/read-blog.html` | Single blog post |
| Contact Us | `src/contact-us.html` | Contact form |
| Privacy Policy | `src/privacy-policy.html` | Policy content |

## Project Structure

```
├── src/
│   ├── index.html          # Home page
│   ├── about-us.html
│   ├── features.html
│   ├── pricing.html
│   ├── faq.html
│   ├── blog.html
│   ├── read-blog.html
│   ├── contact-us.html
│   ├── privacy-policy.html
│   ├── css/
│   │   ├── main.css        # Tailwind entry file
│   │   └── input.css
│   ├── image/              # Images and SVG assets
│   └── fonts/              # Poppins font files
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The built site is output to the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

## GitHub Pages Deployment

This project uses **Vite** to compile Tailwind CSS before deployment. The raw `main.css` file cannot be used directly in the browser — it must be built first.

On every push to `main`, GitHub Actions will:

1. Install dependencies
2. Run `npm run build`
3. Deploy the `dist/` folder to the `gh-pages` branch

### Pages settings

In your GitHub repository, go to **Settings → Pages** and set:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

> If you rename the repository, update the `base` path in `vite.config.js` to match the new repo name (e.g. `base: "/your-repo-name/"`).

## What I Learned

- Building responsive layouts with Tailwind CSS utility classes
- Mobile-first design with breakpoints (`sm`, `md`, `lg`)
- Multi-page project structure with Vite
- Reusable navbar and footer across pages
- Interactive components (accordion, slider, hover effects)
- Deploying a static site to GitHub Pages with a build step

## Author

**Fateme Ahmadifard** — Web Design 2 final project
