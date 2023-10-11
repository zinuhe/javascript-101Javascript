## Run this file

```bash
node example1.js
```

```bash
node -e "console.log(123)"
```

## Restart the application automatically
The node command has to be re-executed in bash whenever there is a change in the application. To restart the application automatically, use the `nodemon` module.

Install the `nodemon` module globally to system path:

```bash
npm i -g nodemon
```
You can also install nodemon as a development dependency:

```bash
npm i --save-dev nodemon
```

This local installation of `nodemon` can be run by calling it from within `npm` script such as `npm start` or using `npx nodemon`.

Run the application using the nodemon command followed by the application's file name:

```bash
nodemon app.js
```
