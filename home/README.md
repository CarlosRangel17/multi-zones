# Introduction

This app is for demonstrating the Multi Zone feature from Nextjs. 

## TABLE OF CONTENT

- Pre-requisites
- Get Started
- Available Scripts
- Deploy
- Folder Architecture
- Notes

---

# Pre-requisites

1. Install node [here](https://nodejs.org/en/download/)

# Get Started

1. Install NodeJS. Use a node version manager such as nvm. Currently this repo targets Node 14
2. Install yarn.
3. Run `yarn` to install dependencies

# Available Scripts

In the project directory, you can run:yarn

## `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `yarn test`

Launches the test runner

## `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and ready to be deployed!

## `yarn start`

Starts the node server from the build output

# Deploy

- Any pushed branch with /features/\*\* will be deployed to the DEV environment
- Any push to master will be deployed to the UAT environment
- Any pushed branch with /releases/\*\* will be deployed to Production.

# Folder Architecture

- public: static assets
- src: The app
  - components: React components
  - consts: Constant static variables.
  - contexts: A gathering place for all contexts used within app.
  - hooks: Reusable React custom hooks.
  - interfaces: All interfaces and type definitions use throughout multiple components.
  - layout: Core UI layout that each page uses (Header, Footer, Layout).
  - pages: A React Component exported from a .js, .jsx, .ts, or .tsx file. Each page is associated with a route based on its file name.
  - styles: Global styles, mixins, and variables.
  - svg: SVG icons exported from a .js, .jsx, .ts, or .tsx.
  - utils: Utility functions that can be reused (formatters, validators, calculations, etc).

# Notes

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- To add a new route, add a file or folder to `/src/pages/`. [More information on dynamic routing here](https://nextjs.org/docs/basic-features/pages)

- Try to use CSS modules for styling. Add a file like this component.module.scss next to the component where you'll use the styles.

- Add global SCSS variables in `/src/styles/variables.scss`. If there are any global styles, add them to `src/pages/_app.tsx` (please limit these as they'll be added to EVERY page)

- Sometimes when you install a 3rd party dependency, you'll need to install the types for typescript

```
yarn add -D @types/[dependency]
```
