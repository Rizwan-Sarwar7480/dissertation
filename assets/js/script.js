// type writer effect
var app = document.getElementById('typeWriterEffect');
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();
  
// document.addEventListener('DOMContentLoaded', function () {
    
// })
// splide carousel
var SplideScrollLtr = new Splide( '.splide__scroll__ltr', {
    type   : 'loop',
    drag: 'free',
    perPage: 6,
    arrows: false,
    autoScroll: {
        speed: 1,
    },
} );
SplideScrollLtr.mount(window.splide.Extensions);

var trustPilotReviews = new Splide( '.trustpilot__reviews', {
  type   : 'loop',
  // drag: 'free',
  perPage: 3,
  arrows: true,
  pagination : false,
  // arrowPath: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
  // autoScroll: {
  //     speed: 1,
  // },
} );
trustPilotReviews.mount();