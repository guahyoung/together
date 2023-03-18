/** @type { import('@storybook/react-vite').StorybookConfig } */
// import type { StorybookConfig } from '@storybook/types';
import { mergeConfig } from 'vite';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-react-router-v6',
    '@storybook/addon-styling',
  ],
  // core: {
  //   builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  // },
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     // Add dependencies to pre-optimization
  //     optimizeDeps: {
  //       include: ['storybook-dark-mode'],
  //     },
  //   });
  // },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
