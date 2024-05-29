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
  };