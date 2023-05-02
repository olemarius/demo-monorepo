# Bloc Monorepo

This is a proof of concept repo, starting out from the pnpm workspace guide by Let's Talk Dev's videos on YT listed below. 

The project shows how to set up a monorepo with TypeScript, PNPM, Vite, VueJS.

## TODO

### Basics
- [x] Set up a Nuxt project and share components between vue app and nuxt app
- [x] set up vue-component-plugin, see if it can import from packages
- [ ] set up shared composables
- [ ] Add environment variables
- [ ] Set up shared pinia stores
- [ ] Set up Pinia
- [ ] Set up Storybook
- [ ] Set up shared typescript stores (had a bug for windows)
- [ ] Make sure caching is set up correctly
- [ ] Make sure I understand deploy routines correctly

### Experimental
- [ ] Test tRCP and Prisma
- [ ] Test SSR on Vercel


Prerequisites
To run this project, you need:

* Node.js 14 or higher
* PNPM 6 or higher

## Installation:
To install the dependencies, run:

`pnpm install`

To build the bloc-components, run:

`pnpm lib build`

or in whatch mode:

`pnpm lib dev`

## Usage
To start the frontend app, run:

`pnpm frontend dev`


For more details and explanations, please watch the YouTube videos.

## YouTube Videos

* [TypeScript Monorepo Setup with PNPM Workspaces, Vite, VueJS and TailwindCSS](https://youtu.be/HM03XGVlRXI)

* [DevSpace: The Easiest Way To Develop Kubernetes Apps Locally](https://youtu.be/N_XvAmzXwpA)


