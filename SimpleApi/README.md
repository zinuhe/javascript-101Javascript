# Simple API

## Init

Start a project

```shell
npm init -y
```

Will create a package json to install other dependencies

## Run the app

```shell
node --watch http.js
```

## Restart the application automatically - second approach

Alternative to the `--watch` option. The node command has to be re-executed in bash whenever there is a change in the application. To restart the application automatically, use the `nodemon` module.

Install the `nodemon` module as a development dependency.

```shell
npm install nodemon -D
```

This local installation of `nodemon` can be run by calling it from within `npm` script such as `npm start` or using `npx nodemon`.

Run the application using the nodemon command followed by the application's file name:

```shell
nodemon http.js
```

The recomended way to do it is using the scripts

```json
"scripts": {
    "dev": "nodemon http.js",
  },
```

And run it as

```shell
npm run dev
```

## Linter

### Install

```shell
npm install standard -D
# npm install standard --development
# Install it as a Development dependency
```

[standard JS](https://standardjs.com/)

It's necessary to have install `ESLint` extension in Visual Code
[ESLint Documentation](https://eslint.org/docs/latest/use/configure/)

### Config

On **`package.json`** add at the end:

```javascript
"eslintConfig": {
  "extends": [
    "standard"
  ],
  "rules": {
    "prefer-promise-reject-errors": "off",
    "space-before-function-paren": ["error", "never"]
  }
}
```

# Testing

Using the extension REST Client
Add a file api.http (could be any name) and add

```
### Get Pokemon info
GET http://localhost:1234/pokemon/ditto
```
