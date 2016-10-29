import $ from 'jquery'
import Backbone from 'backbone'

// This config file is and should be hidden, Don't push your personal api_key to Github.
import { api_key } from './config'

import Model from './model'

module.exports = Backbone.Collection.extend({
  initialize() {

  },

  model: Model,

  url: `https://openapi.etsy.com/v2/listings/active.js?includes=Images&api_key=${api_key}&callback=?`,

  parse(response){
    return response.results
  },

})
