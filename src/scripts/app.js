import $ from 'jquery'
import Backbone from 'backbone'

import Router from './router'


document.querySelector('#app-container').innerHTML = `<h5>HANS YOLO</h5>`


window.addEventListener('load', () => {
  let router = new Router()

  Backbone.history.start()
})
