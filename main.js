var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  freeScroll: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false
//   contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});