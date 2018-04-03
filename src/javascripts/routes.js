/**
 * Created by lonelydawn on 2018-04-03.
 */

import homepage from '../views/homepage.html'
import product from '../views/product.html'
import server from '../views/server.html'

let Router = function (config) {
  config = config || {}
  let app = document.getElementById(config.el) || document.body
  let routes = Object.prototype.toString.call(config.routes) === '[object Array]'
    ? config.routes : []
  let load = function (route) {
    if (route) {
      let beforeLoad = route.beforeLoad || function () {}
      let afterLoad = route.afterLoad || function () {}
      beforeLoad()
      app.innerHTML = route.template
      afterLoad()
    }
  }
  let redirect = function () {
    let url = window.location.hash.slice(1) || '/'
    for (let route of routes) {
      if (url === route.url) {
        load(route)
        return
      }
    }
    load(routes[0])
  }
  this.push = function (route) {
    if (Object.prototype.toString.call(route) === '[object Object]') {
      routes.push(route)
    }
  }
  this.bind = function (el) {
    app = document.getElementById(el) || document.body
  }
  // event
  window.addEventListener('load', redirect, false)
  window.addEventListener('hashchange', redirect, false)
}

let router = new Router()
router.bind('app')
router.push({
  url: '/',
  template: homepage
})
router.push({
  url: '/product',
  template: product
})
router.push({
  url: '/server',
  template: server
})
