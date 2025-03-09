## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Docker

Build image
```bash
docker build -t blood-clock-tower .
```
Start image
```bash
docker run -p 8080:8080 --env-file .env --name blood-clock-tower -d blood-clock-tower
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
