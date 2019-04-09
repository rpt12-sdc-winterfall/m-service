# Project Name

> The description and metadata module for Goodreads books. Contains a lot of book info, as well as a few interactive elements (ratings, wishlist dropdown)

## Related Projects

  - https://github.com/rpt12-knightrider/jb-service
  - https://github.com/rpt12-knightrider/mj-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [API Endpoint](#api%20endpoint)

## Usage

> For setup, please follow this pattern:

1. `npm install`
2. `npm run seed` - runs seeding script
3. `npm run build` - compiles webpack into `bundle.js`
4. `npm start`
5. Navigate to [localhost:3004](http://localhost:3004)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## API Endpoint

Request:
```
GET books/:id
Content-type: application/json
```

Response:
```
{
  _id: unique key,
  title: string,
  author: array,
  description: string,
  ratings: {
    five: number,
    four: number,
    three: number,
    two: number,
    one: number
  },
  reviews: number,
  links: {
    kindle: string,
    amazon: string,
    stores: {
      audible: string,
      barnesAndNoble: string,
      walmart: string,
      apple: string,
      google: string,
      abebooks: string,
      bookDesository: string,
      indigo: string,
      alibris: string,
      betterWorldBooks: string,
      indieBound: string
    }
    worldcat: string
  },
  type: string,
  pages: number,
  publishDate: date,
  publisher: string,
  metadata: {
    originalTitle: string,
    isbn: number,
    isbn13: number,
    asin: string,
    language: string,
    series: {
      name: string,
      url: string
    }
  }
}
```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

