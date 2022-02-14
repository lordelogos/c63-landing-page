let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  freeScroll: true,
  wrapAround: true, 
  autoPlay: 3000,
  pauseAutoPlayOnHover: false
//   contain: true
});

// register scrollTrigger plugini with gsap
gsap.registerPlugin(ScrollTrigger);

// toggle nav on mobile
let nav = document.querySelector('.header .menu')
let menuOpen = document.querySelector('#open-btn')
let menuClose = document.querySelector('#close-btn')

const openMenu = e => {
  nav.classList.add('active-menu')
}

const closeMenu = e => {
  nav.classList.remove('active-menu')
}

menuOpen.addEventListener('click', openMenu)

menuClose.addEventListener('click', closeMenu)

//animate the mobile nav

//animation for desktop
let tl = gsap.timeline({ defaults: {ease: "power4.inOut", duration: 2}})

tl.to('.banner-infotext', {y: 0, clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)", opacity: 1})
.to('.banner-infocta', {y: 0, clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)", opacity: 1}, "-=1.6")
.to('.banner-stats li', {y: 0, clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)", opacity: 1, stagger: .2}, "-=1.8")
.from('.stat-figure-1', {
  textContent: 0,
  duration: 2,
  snap: { textContent: 43 },
}, "-=1.8")
.from('.stat-figure-2', {
  textContent: 0,
  duration: 2,
  snap: { textContent: 28},
}, "-=1.8")
.from('.stat-figure-3', {
  textContent: 0,
  duration: 2,
  snap: { textContent: 3 },
}, "-=1.8")
.from('.stat-figure-4', {
  textContent: 0,
  duration: 2,
  snap: { textContent: .1 },
}, "-=1.8")


// animating the showcase section
let sc_tl = gsap.timeline({defaults : {ease: 'power4.inOut', duration: 2}, scrollTrigger: {trigger: '.showcase1', toggleActions: 'play none none none' }})

sc_tl.from('#sc1', {opacity: 0, x: -100, duration: 2.2})
.from('#sc1-image', {opacity: 0, x: 100, duration: 2.2}, "-=2.2")
.from('.showcase-header', {opacity:0, y: 100}, "-=1")
.from('#sc2', {opacity: 0, x: 100, duration: 2.2}, "-=1")
.from('#sc2-image', {opacity: 0, x: -100, duration: 2.2}, "-=2.2")

//animating the image carousel
let carousel_tl = gsap.timeline({defaults : {ease: 'power4.inOut', duration: 2}, scrollTrigger: {trigger: '.carousel', start: 'top bottom', toggleActions: 'play none none none'}})

carousel_tl.from('.carousel h2', {opacity: 0, y: 100})
.from('.main-carousel', {opacity: 0, y: 100}, "-=1.6")
.from('.carousel-progress', {opacity: 0}, "-=1.6")

//animating the progress bar with gsap

//dashboard features
let dash_tl = gsap.timeline({defaults : {ease: 'power4.inOut', duration: 1}, scrollTrigger: {trigger: '.dashboard', start: 'top center', toggleActions: 'play none none none'}})

dash_tl.from('.dashboard h2', {opacity: 0, y: 100})
.from('.dashboard img, .dashboard-feature-layer', {opacity: 0, y: 100}, '-=.8')
.from('.dashboard-feature', {opacity: 0, y: 100, stagger: .2}, "-=.8")
.from('.dashboard-connect, .feature-desc', {opacity: 0, stagger: .05}, "-=.8")

//test drive
// setting up the timeline
let td_tl = gsap.timeline({defaults : {ease: 'power4.inOut', duration: 1}, scrollTrigger: {trigger: '.offers', start: 'top bottom', toggleActions: 'play none none none'}})

td_tl.from('.exploretext', {opacity: 0, y: 100})
.from('.testdrive img' ,{opacity: 0, x: -100,}, '-=.8')
.from('.testdrive div', {opacity: 0, x: 100}, "-=1")

//offers section
let offer_tl = gsap.timeline({defaults: {ease: 'power4.inOut', duration: 1}, scrollTrigger: {trigger: '.offers', toggleActions: 'play none none none'}})

offer_tl.from('.offers img, .offers div', {opacity: 0, transform: 'scale(0.1)', duration: 2, stagger: .5})