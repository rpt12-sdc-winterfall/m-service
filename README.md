# Project Name

> The description and metadata module for Goodreads books. Contains a lot of book info, as well as a few interactive elements (ratings, wishlist dropdown)

## Related Projects

- <https://github.com/rpt12-knightrider/jb-service>
- <https://github.com/rpt12-knightrider/mj-service>

## Table of Contents

1. [Usage](#Usage)
2. [Custom Config](#custom%20config) - essential to getting the service running
3. [Requirements](#requirements)
4. [API Endpoint](#api%20endpoint)

## Usage

> For setup, please follow this pattern:

1. `npm install`
2. `npm run seed` - runs seeding script
3. `npm run build` - compiles webpack into `bundle.js`
4. `npm start`
5. Navigate to [localhost:3004](http://localhost:3004)

## Custom Config

> A couple elements are still hardcoded into the service, given time constraints during FEC. Two things to watch out for are:

1. Image load - currently, in `image.jsx`, the image files are hardcoded to reference an S3 folder.
2. Fetch book - in `index.jsx`, the book info is currently hardcoded as a `fetch` to the AWS service that was previously running

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## API Endpoint

### `/books/:id`

- method: `GET`.
- description: get the specified book details.
- API response:
A JSON-encoded object with all the book details:

The response would look like this:

```js
{
    "ratings": {
        "five": 83107,
        "four": 82120,
        "three": 72919,
        "two": 88658,
        "one": 69832
    },
    "links": {
        "stores": {
            "audible": "https://roel.biz",
            "barnesAndNoble": "https://robb.info",
            "walmart": "https://mervin.info",
            "apple": "https://faustino.net",
            "google": "https://emiliano.info",
            "abebooks": "http://delfina.biz",
            "bookDepository": "https://eleanora.biz",
            "indigo": "https://kaylie.info",
            "alibris": "http://lloyd.name",
            "betterWorldBooks": "http://vena.biz",
            "indieBound": "http://foster.org"
        },
        "kindle": "https://ivory.info",
        "amazon": "http://cassandra.info"
    },
    "metadata": {
        "originalTitle": "Customer Future application",
        "isbn": 12169,
        "isbn13": 39248,
        "language": "English"
    },
    "_id": "5cf5f6d128b6aa5c7bbc20bb",
    "id": 999,
    "title": "Customer Future application",
    "author": "Hanna O'Conner",
    "description": "Vel ratione quo hic enim eos inventore qui sit quia. Earum ducimus veritatis libero libero earum. Est et totam aut quibusdam laudantium autem. Eaque quisquam enim. Voluptatum reprehenderit placeat ratione.\n \rEius iste nihil sunt hic ratione. Laudantium nisi culpa dolores. Est ea eos neque pariatur corporis deleniti fugiat non ratione. Deserunt dolor eius qui saepe. Quidem voluptate ipsam alias voluptatem.\n \rId rerum est fugit. Recusandae repellat vel explicabo est assumenda fugit ut. Tempore rerum impedit inventore. Non aut quia repudiandae omnis. Sunt non modi.",
    "reviews": 29502,
    "type": "blue",
    "pages": 1089,
    "publishDate": "2018-08-19T04:55:48.204Z",
    "publisher": "Reilly Inc",
    "image": "http://lorempixel.com/480/640/abstract/"
}
```

### `/books`

- method: `POST`.
- description: add the specified book to the database.
- API response:
A status code of `201` if the object was successfully inserted or an error string otherwise.

### `/books/:id`

- method: `PATCH`.
- description: edit the specified book within the database.
- API response:
A JSON-encoded object representing the updated object or an error string otherwise.

### `/books/:id`

- method: `Delete`.
- description: delete the specified book from the database.
- API response:
A status code of `200` if the object was successfully deleted or an error string otherwise.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
