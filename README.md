# Electron React Webpack

Clone to try a simple Electron app using webpack and React. 

## Develop and deploy

### Install

```bash
$ cd path/to/repo
$ npm install
$ npm start
```

### Develop

1. Start Webpack-dev-server

```bash
$ npm run dev-file
```

2. Start Electron

```bash
$ npm run dev-app
```

### Deploy

1. Deploy js html and css files

```bash
$ npm run deploy-file
```

2. Start Electron

```bash
$ npm run deploy-app
```

### Directory structure

```
|---app # All React projects goes here
|----index
|-----start.jsx # index.html require this script
|---assets # Client Files here
|----images
|-----icon.jpg
|---templates # React html templates
|----index.html
|---webpack
|----routes.js # Webpack Routes
|----webpack.deploy.config.js # Webpack config of deployment
|----webpack.dev.config.js # Webpack config of develop
|---main.js # Electron entry point
|---package.json
|---.babelrc # Babal's Configurations
```


## LICENSE

Copyright 2015-2016 Xu Xiaomeng(@sekaiamber)

Released under the MIT and GPL (version 2 or later) Licenses.
