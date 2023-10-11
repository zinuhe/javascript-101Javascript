# Promises

## Create

```shell
npm create vite@latest Promises
```

## Install dependencies

```shell
npm install
```

## To Run

```shell
npm run dev
```

## Linter

### Install

```shell
npm install standard -D
```

[Documentation](https://eslint.org/docs/latest/use/configure/)

### Config

On **`package.json`** add at the end:

```javascript
"eslintConfig": {
  "extends":[
    "standard"
  ],
  "rules": {
    "prefer-promise-reject-errors": "off",
    "space-before-function-paren": ["error", "never"]
  }
}
```
