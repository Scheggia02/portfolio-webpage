# Portfolio Webpage

Personal portfolio website for a software engineer, built with React, Vite, Tailwind CSS, and Framer Motion.

## Project Structure

```text
portfolio-webpage/
├── public/                 # Static assets served as-is
├── src/
│   ├── components/         # Reusable React UI components
│   ├── data/               # Portfolio/project content
│   ├── styles/             # Global CSS and Tailwind imports
│   ├── App.jsx             # Main application shell
│   └── main.jsx            # React entry point
├── index.html              # Vite HTML entry
├── package.json            # Dependencies and npm scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Useful Commands

```bash
npm run dev      # Start local development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```
