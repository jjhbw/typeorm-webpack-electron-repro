# Reproduction case for https://github.com/typeorm/typeorm/issues/6854

Run `yarn install --frozen-lockfile` and then `yarn start`.

Note that the invocation of `createConnection` resides in `src/App.js`.

The `(TypeError): this.driver.connect is not a function` should trigger immediately after the app is rendered.