DROP DATABASE IF EXISTS books;

CREATE DATABASE books;

USE books;

CREATE TABLE books (
  id INTEGER PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  rating_five INTEGER NOT NULL,
  rating_four INTEGER NOT NULL,
  rating_three INTEGER NOT NULL,
  rating_two INTEGER NOT NULL,
  rating_one INTEGER NOT NULL,
  reviews INTEGER NOT NULL,
  kindle TEXT NOT NULL,
  amazon TEXT NOT NULL,
  audible TEXT NOT NULL,
  barnesAndNoble TEXT NOT NULL,
  walmart TEXT NOT NULL,
  apple TEXT NOT NULL,
  google TEXT NOT NULL,
  abebooks TEXT NOT NULL,
  bookDesository TEXT NOT NULL,
  indigo TEXT NOT NULL,
  alibris TEXT NOT NULL,
  betterWorldBooks TEXT NOT NULL,
  indieBound TEXT NOT NULL,
  type TEXT NOT NULL,
  pages INTEGER NOT NULL,
  publishDate DATETIME NOT NULL,
  publisher TEXT NOT NULL,
  originalTitle TEXT NOT NULL,
  isbn INTEGER NOT NULL,
  asin INTEGER NOT NULL,
  isbn13 INTEGER NOT NULL,
  language TEXT NOT NULL,
  series_name TEXT,
  series_url TEXT
);
