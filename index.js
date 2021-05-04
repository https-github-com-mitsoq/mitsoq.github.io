"use strict";

Vue.component('nav-link', {
  props: ['title','link'],
  data: function() {
    return {
      count: 0
    }
  },
  template: '<a href="link">{{ title }}</a>'

});

let myHeader = new Vue({
  el: '#header',
  data: {
    navs: [
      {
        title:'Index',
        link: '/'
      },
      {
        title:'Kids',
        link: '/kids'
      },
      {
        title:'Women',
        link: '/women'
      },
      {
        title:'Men',
        link: '/men'
      }
    ]
  }
});


let theDiscounts = new Vue({
  el: '#discounts',
  data: {
    navs: [
      {
        title:'Product',
        link: '/product'
      },
      {
        title:'Categories',
        link: '/categories'
      }
    ]
  }
});

