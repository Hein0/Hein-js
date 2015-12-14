//---------------------------------------------------------------------
//  Bundles JavaScript, CSS and images into one or more packages
//  ready to be used in a browser
//---------------------------------------------------------------------

'use strict';
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

function bundle() {
  return new Promise((resolve, reject) => {
    const bundler = webpack(webpackConfig)
    let bundlerRunCount = 0

    function onComplete(err, stats) {
      if (err) {
        return reject(err)
      }

      console.log(stats.toString(webpackConfig.stats))
      return resolve()
    }

    if (global.WATCH) {
      bundler.watch(200, onComplete)
    } else {
      bundler.run(onComplete)
    }
  });
}

module.exports = bundle
