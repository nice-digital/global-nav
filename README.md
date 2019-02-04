# Global navigation

> Global header and footer used across all NICE digital services

<details>
<summary><strong>Table of contents</strong></summary>

<!-- START doctoc -->

- [Global navigation](#global-navigation)
	- [What is it?](#what-is-it)
		- [Functionality](#functionality)
		- [Non-functional](#non-functional)
	- [Stack](#stack)
		- [Principles](#principles)
		- [Why Nerv?](#why-nerv)
			- [Why not Preact?](#why-not-preact)
	- [Set up](#set-up)
		- [Other commands](#other-commands)
			- [Tests](#tests)
			- [Linting](#linting)
			- [Production build](#production-build)
		- [IDE](#ide)
			- [Extensions](#extensions)
		- [Gotchas](#gotchas)
	- [How to use](#how-to-use)
		- [React](#react)
			- [Props](#props)
		- [CDN](#cdn)
			- [Configuration](#configuration)
				- [service](#service)
				- [header](#header)
					- [header.enabled](#headerenabled)
					- [header.onRendering](#headeronrendering)
					- [header.onRendered](#headeronrendered)
				- [footer](#footer)
					- [footer.enabled](#footerenabled)
	- [Deployments](#deployments)

<!-- END doctoc -->
</details>
  
## What is it?

Global Nav consists common header and footer to be used across all NICE digital services. It is designed to be used across any NICE branded, externally facing web application. This includes all externally facing services that sit under the nice.org.uk domain. It also includes other NICE branded sites like Evidence Search that sit on non-NICE domains. It is a replacement for [NICE.TopHat](https://github.com/nhsevidence/NICE.TopHat).

### Functionality

The header covers the following high-level functionality:

- main navigation
- skip links
- search and autocomplete
- cookie message
- TLS warning message fr old IE
- sign in and account management via NICE Accounts
  - In the future will support Auth0

### Non-functional

The following non-functional requirements apply:

- _accessible_: to WCAG 2.0 AA
- _touch_: optimized for touch with sufficient touch targets
- _performance_: budget of 50KB total minified and gzipped, with single HTTP request
- _print_: print styles
- _security_: tested against OWASP top 10 and pen tested
- _progressive enhancement_:
  - mobile first
  - non-JS fallback for SSR React apps
- _browser support_: IE8+
  - 'functional' in < IE11

## Stack

- [React](https://reactjs.org/)
- [NervJS](https://github.com/NervJS/nerv) for smaller footprint and IE8 support, until we drop support for IE8, then we can consider Preact
- [SCSS](https://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html) for styles
- [CSS Modules](https://github.com/css-modules/css-modules) for generated class names
- [PostCSS](https://postcss.org/) for trasforming CSS with plugis:
  - [autoprefixer](https://autoprefixer.github.io/) for automatically adding vendor prefixes in CSS
  - [pixrem](https://github.com/robwierzbowski/node-pixrem) for adding pixel fallbacks to rem values to support IE8+
  - and [NICE Digital shared browserslist config](https://github.com/nhsevidence/browserslist-config#readme)
- [Webpack](https://webpack.js.org/) for module bundling
- [Babel 7](https://babeljs.io/) for ES6/JSX → ES5 transpilation
- [js-cookie](https://github.com/js-cookie/js-cookie) for cookie management
- TODO https://github.com/alphagov/accessible-autocomplete or https://github.com/Pixabay/JavaScript-autoComplete for autocomplete
- [ESLint](https://eslint.org/) for linting our JavaScript
  - with [NICE Digital shared eslint config](https://www.npmjs.com/package/@nice-digital/eslint-config)
- [Stylelint](https://stylelint.io/) for linting our SCSS
  - TODO with NICE Digital shared stylelint config
- [Prettier](https://prettier.io/) for code formatting
- [Jest](https://jestjs.io/) for JS unit tests and snapshot tests
- [NICE Design System](https://nhsevidence.github.io/nice-design-system/) core for SASS mixins, functions and colour/spacing variables
- [NICE Icons](https://github.com/nhsevidence/nice-icons)

TODO: add wdio etc here when we add browser based tests

### Principles

Consider the following development principles:

- One single header and footer component across _all_ NICE services
- Progressively enhanced to support maximum number of devices and browsers
- Fast performance
  - single HTTP request for CDN minified bundle
  - as small as possible bundle size
- High unit test coverage
- 'Standard' React wherever possible
  - easy for any React developer to pickup
- Consistent code style and formatting
  - as if a single developer worked across the codebase
- Clear extension points and hooks for integrating into applications
  - To avoid some of the issues from TopHat where there was no consistency

### Why Nerv?

You've probably never heard of [Nerv](https://nerv.aotu.io/). So why use it?

We are using React because:

- it gives us structure to our app
- is well used in the community
- is easy to test
- is being adopted across Digital Services.

However, consider the [non-functional requirements](#non-functional) and [development principles](#principles) above - specifically the need to support IE8 and to have a small bundle size. React works in IE9+ (with Polyfills) and is 31.8K (React 16.2.0 + React DOM minified and gzipped). Both of these make it less than ideal for creating a standalone bundle that will load on every page across NICE alongisde each application's code.

This is where Nerv fits in. It's a "blazing fast React alternative, compatible with IE8 and React 16" and is one third of React's size. It's a drop in replacement (via [aliases in Webpack](https://github.com/NervJS/nerv#usage-with-webpack)) so allows us to write 'normal' React, but compile with Nerv.

#### Why not Preact?

We considered [Preact](https://preactjs.com/) as a React alternative as it's only 3kB. However, we discounted it at the time of writing because:

- it didn't have full support for React 16
- the [browser support](https://preactjs.com/about/browser-support) docs we're vague on detail for supporting IE8 and we struggled to get it to work.

We may consider replacing Nerv with Preact in the future if we drop support for IE8.

## Set up

TL;DR; to run the project locally, do the following:

- install [Node 6+](https://nodejs.org/en/download/) or latest LTS version
- run `npm i` on the command line to install dependencies
- run `npm start` on the command line
- navigate to http://localhost:8080/ in a browser.

This compiles the application and spins up a development server. It then watches for changes to files and:

- lints changed files
- automatically rebuilds the app.

It then automatically reloads the application in the Browser (so no need for a manual reload) using [Hot Module Replacement (HMR) in webpack](https://webpack.js.org/concepts/hot-module-replacement/).

> Note HMR doesn't work in IE8. Run the app via `npm run start:nohot` to test in IE8. You'll then to reload manually.

### Other commands

There are various other commands you can run for further things like tests and linting:

#### Tests

- `npm test` Lints code and runs tests
- `npm test:unit` Runs Jest unit tests
- `npm test:unit:watch` Runs Jest unit tests and watches for changes. Run this in development.
- `npm test:unit:coverage` Runs Jest unit tests and reports coverage

If you've installed the [VSCode npm extension](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) then you can easily run scripts by:

- right-clicking the script name in _package.json_
- or _Ctrl+Shift+P_ -> _npm run script_ -> _test:unit:watch_.

#### Linting

- `npm run lint` Lists both JavaScript and SCSS
- `npm run lint:js` Lints just JavaScript files
- `npm run lint:js:fix` Fixes linting issues automatically in JavaScript files
- `npm run lint:scss` Lints just SCSS files
- `npm run lint:scss:fix` Fixes linting issues automatically in SCSS files

#### Production build

Run `npm run build` to create a production build. This creates a build into the _dist_ folder and is what is used to deploy to the CDN.

### IDE

We recommend using VS Code as the IDE. TODO: why and any more detail?

#### Extensions

The following VS Code extensions are **strongly** recommended, but not required:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - configures VSCode to use the correct settings (line endings etc) for various files
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) - this will highlight SCSS linting errors directly in the IDE
- [eslint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) - automatically lints your JavaScript as you type and highlights any errors
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - highlights code formatting issues in the IDE and formats the file on save
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) and [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) for support for using npm
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) for automatically running tests and highlighting errors in the IDE

### Gotchas

- Check you have the right version of Node installed
- Make sure have LF line endings as this is a cross-platform project. This _should_ happen automatically because of settings in _.gitattributes_ and _.editorconfig_

## How to use

We support 2 main methods for using the Global Nav in your projects: in [React](#react) or via the [CDN](#cdn).

### React

Global nav is published as an npm package in the @nice-digital org on npm. This means you can install the package and require the `Header` and `Footer` React components into your application, just as you would for any other 3rd party component.

This is a good option if you're rendering you're app via React, either client side of server side. For example, if you're using [Create React App](https://facebook.github.io/create-react-app/), [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/).

First, install the [_@nice-digital/global-nav_ package](https://www.npmjs.com/package/@nice-digital/global-nav) into your project:

```sh
npm install @nice-digital/global-nav --save
```

> Or, if you're using npm 5+ use the shorthand `npm i @nice-digital/global-nav`.

Then, require the header and/or footer into your application. If you're using ES6, do it like this:

```js
import { Header, Footer } from "@nice-digital/global-nav";
```

Or if you're using ES5, do:

```js
var globalNav = require("@nice-digital/global-nav"),
	Header = globalNav.Header,
	Footer = globalNav.Footer;
```

These header and footer components that can be be used like any other React component and configured via [props](#props), e.g.:

```jsx
const page = () => (
	<div>
		<Header service="pathways" />
		<Footer />
	</div>
);
```

#### Props

TODO: Add React component props here

### CDN

TODO: Add CDN usage URLs

```js
<!--[if lt IE 9]>
	<script src="//cdn.nice.org.uk/global-nav/global-nav.ie8.min.js"></script>
<![endif]-->
<script src="//cdn.nice.org.uk/global-nav/global-nav.min.js"></script>
```

#### Configuration

Global Nav configuration is loaded from a global JavaScript variable on the window object called `global_nav_config`. The following config options apply:

##### service

- Type: `String`
- Default: `null`

The key of the service to highlight on the navigation elements. See [_src/Header/Nav/links.json_](src/Header/Nav/links.json) for the available options.

##### header

- Type: `Object`
- Default: `null`

Key/value pairs of settings specific to the header

###### header.enabled

- Type: `Boolean`
- Default: `true`

The header renders by default. Set `header.enabled` to `false` to stop it from rendering.

###### header.onRendering

- Type: `Function | String` signature: `function(element)`
- Default: `null`

Function parameters:

- `element` (`HTMLElement`) the HTML the header will be rendered in to

A callback function, called just before the header is rendered. If it is a string, then a function with that name will be looked for on `window`.

###### header.onRendered

- Type: `Function | String` signature: `function(element)`
- Default: `null`

Function parameters:

- `element` (`HTMLElement`) the HTML the header was rendered in to

A callback function, called just after the header has been rendered. If it is a string, then a function with that name will be looked for on `window`.

##### footer

- Type: `Object`
- Default: `null`

Key/value pairs of settings specific to the footer

###### footer.enabled

- Type: `Boolean`
- Default: `false`

The is disabled by default. Set `footer.enabled` to `true` render it.

## Deployments

We create 2 deployment artifacts: one for deploying to the CDN and one test site for previewing the header and footer.

To test what the deployment packages looks like locally, run the following command:

```sh
nuget pack cdn.nuspec -Version X.Y.Z
# or: nuget pack preview-site.nuspec -Version X.Y.Z
```

Where the version number can be any valid [SemVer build number](https://octopus.com/blog/semver2) compatible with Octopus Deploy. Note: this version number will be the build number when TeamCity creates this build artifact.

> Note: you'll need to have NuGet.exe in your path or download the latest NuGet.exe from https://www.nuget.org/downloads.
