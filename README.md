# Gamepad Example

Example game using the [gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).

### Getting Started

Start app in development mode:

```shell
nvm use # uses supported Node version for this project
npm install
npm start
```

### Production Build

Build app in production mode:

```shell
nvm use # uses supported Node version for this project
npm install
npm run build
```

Run app in production:

```shell
# Install PM2 globally to manage the server process
npm add -g pm2
pm2 start --name app server/build/index.js
```
