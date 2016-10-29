import $ from 'jquery'
import Backbone from 'backbone'

module.exports = Backbone.View.extend({
  initialize() {
    console.log('home view init');
  },

  el: '#app-container',

  events: {

  },

  render(data) {
    /********************
    * the frag will create a virtual node for us to append html elements
    * this allows less DOM intercation, thus better performance.
    *********************/
    const frag = document.createDocumentFragment()

    data.models.forEach((model, i) => {
      const item = document.createElement('LI')
      const title = model.get('title')
      const img = model.get('Images')

      item.innerHTML = `
        <img class="thumbnail" src="${ img[0].url_170x135 }"/>
        <span class="title">${ title.length > 40 ? (title.slice(0,40) + '...') : title }</span>
      `;
      frag.appendChild(item)
    })

    this.el.appendChild(frag)
  }
})
