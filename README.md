# [peoples-park.vercel.app](https://peoples-park.vercel.app/)

## To-Do

### Important

- [ ] ! fill out home page with important links and info
- [ ] ! madlibs lookin email template to contact local reps
- [ ] ! email/text newsletter sign up
  - *signup form accepts phone #s and will save them for later use, but actual text updates will be added later cuz it costs $*

### Next Up

- [ ] ! latest updates/announcements/upcoming events section
  - *dynamically updated in a way that's easy & quick for organizers*
  - *maybe embedded ig post feed*
- [ ] buttons to share on socials
- [ ] make a cutie email template & [make sure the emails don't go to spam](https://www.mail-tester.com/)
- [ ] domain
- [ ] [accessibility](https://accessibe.com/accessscan)
- [ ] [SEO](https://www.seobility.net/en/seocheck/)

### Finished

- [x] basic setup stuff, pretty base template, placeholder content on each page
- [x] looks good on mobile
- [x] planning & docs
- [x] newsletter form

---

## Install & Setup

```bash
# Clone this repo
$ git clone https://github.com/AcidicNic/peoples-park && cd peoples-park

# Install dependencies & dev dependencies
$ yarn
# OR
$ npm i --include=dev
```

### Environment Variables Setup

1. Make a copy of `.env_EXAMPLE` in the project's root directory (`/peoples-park/`)
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

<!-- TODO: add mailchimp api key field to env vars -->
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAcidicNic%2Fpeoples-park)

## Project Structure & Details

`/src/components/MainWrapper.js`

* Base template component, wraps each page
* Includes the top navbar, hamburger sidebar menu, footer, and light/dark toggle

`/src/context.js`

* Context provider that wraps the root in `/src/index.js`
* Currently unused, but it's set up for later use

`/src/router.js`

* Configures routes for each page in `/src/pages/`

`/src/pages/`

* Contains main components for each route

## Resources / Docs For Tools Used

* [Tailwind](https://tailwindcss.com/) - CSS utility library

* [DaisyUI](https://daisyui.com/components/) - CSS component library

* [HeroIcons](https://heroicons.com/) - SVG icons
