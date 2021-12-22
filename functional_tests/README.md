# Front end testing base

> Start point for browser based testing

- [Front end testing base](#front-end-testing-base)
  - [What is it?](#what-is-it)
    - [Stack](#stack)
  - [Required software](#required-software)
      - [Cucumber (Gherkin) Full Support](#cucumber-gherkin-full-support)
  - [Getting started](#getting-started)
    - [Excluding tests](#excluding-tests)
    - [Running single features](#running-single-features)
  - [Docker](#docker)

## What is it?

A starter boilerplate project for writing browser-based functional tests in [WebdriverIO 6](http://webdriver.io/).

### Stack

- [WebdriverIO 6](http://webdriver.io/)
- [Cucumber.js](https://cucumber.io/) for writing BDD [features](features) in Gherkin syntax
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code style and linting
- Uses [@nice-digital/wdio-cucumber-steps](https://github.com/nice-digital/wdio-cucumber-steps) shared step definitions
- [TeamCity reporter](https://github.com/sullenor/wdio-teamcity-reporter) for TeamCity integration
- [Cucumber (Gherkin) Full Support VSCode](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete#overview) extension support

## Required software

- Node >= 12
- Chrome, Firefox or Edge

#### Cucumber (Gherkin) Full Support

The [Cucumber (Gherkin) Full Support VSCode extension](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete#overview) is great for intellisense for step definitions.

Install the extension and configure by adding the following to _.vscode/settings.json_:

```diff
{
+    "cucumberautocomplete.steps": [
+        "node_modules/@nice-digital/wdio-cucumber-steps/src/given/definitions.js",
+        "node_modules/@nice-digital/wdio-cucumber-steps/src/when/definitions.js",
+        "node_modules/@nice-digital/wdio-cucumber-steps/src/then/definitions.js",
+    ]
}
```

## Getting started

- `git clone https://github.com/nice-digital/frontend-testing-base.git`
- `cd frontend-testing-base`
- `npm i`

If you have issues with regard to:

```gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
```

After the install has finished run the tests by running the following command. This starts a selenium server and opens Chrome to run the tests:

```sh
npm test
```

### Excluding tests

Exclude tests by using the `@pending` [cucumber tag](https://github.com/cucumber/cucumber/wiki/Tags).

### Running single features

To run a single feature file, use the following command:

```sh
npm test -- --spec ./features/homepage.feature
```

Note: you can pass in multiple files, separated by a comma.

Or you can use a keyword to filter e.g.:

```sh
npm test -- --spec homepage
```

Finally, if you've grouped your specs into suites you can run and individual suite with:

```sh
npm test -- --suite homepage
```

See [organizing test suites](http://webdriver.io/guide/testrunner/organizesuite.html) in the WebdriverIO docs for more info.

if you want to run tests against all browsers locally you can do so via this command:

```sh
npm run test:allbrowsers
```

The baseUrl in wdio.conf.js determines which instance of guidance web that tests will run against, you can change this to suit your needs.

## Docker

Running tests on Docker is a good option as it means you don't need browsers installed on the host machine, and the Selenium grid is automatically created for you. This is useful on a TeamCity build agent where you can't rely on Chrome and Firefox being installed.

In bash:

```sh
./run.sh
```

Or in CMD on Windows:

```sh
run
```

Or in PowerShell:

```sh
cmd /c "run"
```
