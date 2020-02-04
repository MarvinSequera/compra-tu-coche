const path = require('path')
const app_name = require('../package.json').name

module.exports = app => {
    const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)
}
