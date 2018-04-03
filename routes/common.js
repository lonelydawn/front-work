/**
 * Created by lonelydawn on 2018-04-03.
 */

const request = require('co-request')

module.exports = {
  config: function *(next) {
    this.routeConfig = function () {
      return request.apply(request, arguments).then(function (res) {
        return res
      })
    }
    yield next
  }
}
