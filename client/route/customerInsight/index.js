module.exports = {
  path: 'customerInsight',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {

      cb(null, require('./containers/App'))

    })
  },
}