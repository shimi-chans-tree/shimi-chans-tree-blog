module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (baseConfig) => {
    // scss を読み込む
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 1 => postcss-loader
            modules: {
              localIdentName: '[local]___[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    });
    return { ...baseConfig };
  },
};
