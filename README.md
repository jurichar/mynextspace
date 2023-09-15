This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## tools used

- [Next.js 13](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Neon database](https://neon.tech/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Vercel](https://vercel.com/)

## Steps

### database serverless

go to : <https://neon.tech/>
create new project
create new database with the name you want.
create new database with the name 'shadow'.
add the database url to the .env file.

### prisma

npx prisma init // create the prisma folder
allow migration to the database at the file : prisma/schema.prisma
add shadow database to the file : prisma/schema.prisma
npx prisma migrate dev // create the migration

/lib/prisma.ts // create the prisma client
export const prisma = new PrismaClient()
that allow to use prisma in the app
like : prisma.user.findMany()

### Db_auth

npm i @next-auth/prisma-adapter
add adapter to the file : pages/api/auth/[...nextauth].ts
add the secret to the .env file
add the database url and the shadow url to the .env file
