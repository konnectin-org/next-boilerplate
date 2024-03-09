## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


#### Run test

`npm run test`

Project Structure.

```shell
.
├── README.md
├── jest.config.ts
├── jest.setup.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── sentry.client.config.ts
├── sentry.edge.config.ts
├── sentry.server.config.ts
├── src
│   └── app
│       ├── about
│       │   ├── about.test.tsx
│       │   └── page.tsx
│       ├── components
│       ├── dashboard
│       │   ├── dashboard.test.tsx
│       │   └── page.tsx
│       ├── global-error.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── tailwind.config.ts
└── tsconfig.json
```
