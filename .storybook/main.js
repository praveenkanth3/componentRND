module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@storybook/addon-essentials', // Includes controls and other useful addons
        '@storybook/addon-interactions'
    ],
    framework: '@storybook/vue',
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-optional-chaining'],
              },
            },
        });
        return config;
    }
  };