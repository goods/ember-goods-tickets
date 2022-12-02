module.exports = {
  stories: [
    '../addon/components/**/*.stories.js',
    // '../documentation/**/*.stories.mdx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/ember',
  core: {
    builder: 'webpack5',
  },
};
