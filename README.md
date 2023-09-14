<h1 align="center">
  josiascastro.tk.com
</h1>
<!-- <p align="center">
  Initial release of <a href="https://josiascastro.tk" target="_blank">josiascastro.tk</a> developed with <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a></a>
</p> -->

![demo](https://raw.githubusercontent.com/iJosiasCastro/portfolio/master/demo/screenshot.png?token=GHSAT0AAAAAACGYHSFQ6YDSYYIGLAHSAGK6ZIA7SSA)

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Production Deployment
Using PM2
For a production-ready deployment, you can use PM2. Here's how:

```bash
# Install PM2 globally
$ npm install pm2@latest -g

# Start application
$ pm2 start ecosystem.config.js

# View a list of all running processes
$ pm2 list

# Stop application
$ pm2 stop NuxtAppName
```