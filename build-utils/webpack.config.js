/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

// const getAddons = addonsArgs => { ... };

module.exports = ({ env, micro, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);
  const commonConfig = require('./webpack.common.js')(micro);

  return webpackMerge(commonConfig, envConfig);
};
