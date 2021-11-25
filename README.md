# dokodemo

A virtual demo day app for asynchronous teams, powered by [Loom](https://www.loom.com/).

Built with [RedwoodJS](https://redwoodjs.com/) and [Railway](https://railway.app/) (Postgres DB)

## Pre-reqs

- `node`
- `docker`
- `docker-compose` (used for running postgres test database)

## Getting started

`yarn install`

## Development

`yarn rw dev`

## Testing

At the beginning of your dev session run:

`yarn postgres:up`

This spins up a local Postgres test database in the background using `dokcer-compose`. Now you can run tests with

`yarn rw test`

Run api side tests only with

`yarn rw test api`

Run web side tests only with

`yarn rw test web`




