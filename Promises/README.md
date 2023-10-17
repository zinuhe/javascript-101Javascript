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
# npm install standard --development
# Install as a Development dependency
```

[standard JS](https://standardjs.com/)

It's necessary to have install `ESLint` extension in Visual Code
[ESLint Documentation](https://eslint.org/docs/latest/use/configure/)

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

On **`settings.json`** :

```javascript
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
},
"editor.codeActionsOnsave": {
  "source.fixAll.eslint": true
}
```
