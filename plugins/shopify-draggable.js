import { Sortable } from '@shopify/draggable'

const sortable = new Sortable(document.querySelectorAll('ul.star-container'), {
  draggable: '.lone-star',
  delay: 200,
  mirror: {
    constrainDimensions: true,
  }
})


