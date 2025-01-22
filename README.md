This is a NextJS boilerplate that I use to build my web applications.

## Folder Structure

```

src
├── actions -> This is where my current directory's server actions reside
├── app
│   ├── favicon.ico
│   ├── layout.tsx
│   └── page.tsx
├── assets -> This is where my images and logos usually reside
├── components -> This is where my reusable components reside
│   └── ui
│   └── button.tsx
├── data-access -> My Persistence Layer
│   └── users.ts
├── hooks -> Custom Hooks
├── lib -> This is where my helper functions usually reside
│   └── utils.ts
├── providers -> This is where my providers reside (theme, context etc.)
├── styles -> This is where my css files reside
│   └── globals.css
├── types -> This is where my types and schemas reside
│   └── users.ts
├── use-cases -> My Business Layer
│   └── users.ts
└── utils -> Utility functions

```

## Libraries I use

- Prisma
- Supabase
- Zod
- zsa-react
- ShadcnUI
- TailwindCSS
- NextAuth
- Bcrypt
- Typescript

## Getting Started

Install Dependencies using your package installer. I use npm to install my dependences.

```
npm i
```

## Run server

```
npm run dev
```
