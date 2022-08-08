const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@css': path.resolve(__dirname, 'src/assets/css'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@atoms': path.resolve(__dirname, 'src/store/atoms'),
      '@selectors': path.resolve(__dirname, 'src/store/selectors'),
    },
  },
};
