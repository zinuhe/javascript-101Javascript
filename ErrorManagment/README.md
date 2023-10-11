# Error Managment

## Create

```shell
npm create vite@latest ErrorManagment
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

---

## Files

### main.js

Simple approach to manage errors

### errors.js

Simple approach creating class by class

### errorFactory.js

Creating a factory class to generate error classes
