# react boilerplate / project template

...

**live @ [<PROJECT_NAME>.vercel.app](https://<PROJECT_NAME>.vercel.app)**

## Install & Setup

```bash
# Clone this repo
$ git clone https://github.com/AcidicNic/<REPO_NAME> && cd <REPO_NAME>

# Install dependencies & dev dependencies
$ yarn
# OR
$ npm i --include=dev
```

### Environment Variables Setup

1. Make a copy of `.env_EXAMPLE` in the project's root directory (`/<PROJECT_NAME>/`)
2. Rename `.env_EXAMPLE` to `.env`
3. Follow instructions in the file

## Usage

### Run Locally

```bash
$ yarn start 
# OR
$ npm start 
```

### Lint

```bash
$ yarn lint 
# OR
$ npm lint 
```

## Deploy with Vercel

<!-- TODO: add env vars -->
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAcidicNic%2F<REPO_NAME>)

## Project Structure & Details

`/src/components/MainWrapper.js`

* Base template component, wraps each page
* Includes the top navbar, hamburger sidebar menu, footer, light/dark toggle, and theme selector.

`/src/context.js`

* Context provider that wraps the root in `/src/index.js`
* Currently unused, but it's set up for later use

`/src/router.js`

* Configures routes for each page in `/src/pages/`

`/src/pages/`

* Contains main components for each route

`/src/assets`

* Contains CSS and other assets

## Resources / Docs For Tools Used

* [Tailwind](https://tailwindcss.com/) - CSS utility library

* [DaisyUI](https://daisyui.com/components/) - CSS component library

* [HeroIcons](https://heroicons.com/) - SVG icons
