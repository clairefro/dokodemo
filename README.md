[![Netlify Status](https://api.netlify.com/api/v1/badges/7aca2f06-a4cd-43b6-ae29-bcf29b88e07b/deploy-status)](https://app.netlify.com/sites/frosty-bardeen-00bed9/deploys)

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

`yarn test`

Run api side tests only with

`yarn test api`

Run web side tests only with

`yarn test web`




