module.exports = {
    moduleFileExtensions: [
      'vue',
      'js',
      'json'
      // tell Jest to handle `*.vue` files
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.jsx',
      '!src/main.js', // Exclude main.js if you don't want to cover the entry point
      '!src/stories/**'
    ],
    coverageDirectory: 'coverage',
    transform: {
      // process `*.vue` files with `vue-jest`
      '^.+\\.vue$': 'vue-jest',
      // process `*.js` files with `babel-jest`
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jsdom'
  };