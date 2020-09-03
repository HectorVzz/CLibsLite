const path = require('path');


module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      loader: 'postcss-loader',
              options: {
                  ident: 'postcss',
                  syntax: 'postcss-scss',
                  plugins: () => [
                      require('postcss-import'),
                      require('tailwindcss'),
                      require('autoprefixer'),
                  ]
              }
    });

    // Return the altered config
    return config;
  },
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-docs','@storybook/addon-essentials'],
};
