const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif'],
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'],
    extraNodeModules: {
      'missing-asset-registry-path': path.resolve(__dirname, 'missing-asset-registry-path.js'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
