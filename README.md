# sitenow.ai

AI-powered website builder. Describe your vision and launch a production-ready site in seconds.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- [TanStack Query](https://tanstack.com/query)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Create a production build         |
| `npm start`     | Run the production build          |
| `npm run lint`  | Lint the project with ESLint      |

## Project structure

```
src/
├── app/              # App Router routes, layouts, and global styles
│   ├── layout.tsx
│   ├── providers.tsx
│   ├── globals.css
│   └── (routes)/
├── components/       # Shared React components
│   └── ui/           # shadcn/ui primitives
├── hooks/            # Custom React hooks
└── lib/              # Utilities
public/               # Static assets (images, favicons, manifest)
```
