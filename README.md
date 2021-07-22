# Udagram
[![CircleCI](https://circleci.com/gh/jacksondieter/udagram.svg?style=svg)](https://circleci.com/gh/jacksondieter/udagram)

The udagram application is a simple Full-Stack web application  for posting photos ready for production.

## Getting Started

To get started, clone this repo and run `npm install && npm run install:all` in your terminal at the project root.

## Development server

Afte config all you environment variable run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `www/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests.

### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

### Deployment
- [Deployment documentation](docs/Deployment-doc.md)

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework




