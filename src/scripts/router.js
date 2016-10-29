import $ from 'jquery'
import Backbone from 'backbone'

import Collection from './collection'
import HomeView from './home.view'


module.exports = Backbone.Router.extend({
  initialize() {

  },

  routes: {
    '' : 'renderHome',
  },

  /***************
  * This will fetch/render data for our Home Page
  ****************/
  renderHome() {
    const activeCollection = new Collection()

    activeCollection.fetch().then( () => {
      console.log("activeCollection", activeCollection);
      
      const homeView = new HomeView()
      homeView.render(activeCollection)
    })
  }

})
