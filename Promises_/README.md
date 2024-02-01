# Promises

```bash
pnpm init
```

## Locally | globally in your project.
```bash
pnpm add -D typescript
pnpm add -D ts-node

pnpm add -g typescript
pnpm add -g ts-node
```


# Depending on configuration, you may also need these
```bash
pnpm add -D tslib @types/node
```

## Run

```bash
npx ts-node ./main.ts
```
Or
```bash
pnpm dev
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
  "extends": [
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
