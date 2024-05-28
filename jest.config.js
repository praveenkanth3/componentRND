module.exports = {
    moduleFileExtensions: [
      'vue',
      'js',
      'json'
      // tell Jest to handle `*.vue` files
    ],
    transform: {
      // process `*.vue` files with `vue-jest`
      '^.+\\.vue$': 'vue-jest',
      // process `*.js` files with `babel-jest`
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jsdom'
  };