let tlh = new TimelineMax();
tlh.to(document.querySelector('.home_page .content h1'), {duration: .8, y: 0, opacity: 1, ease: "ease-in-out"})
tlh.to(document.querySelector('.home_page .content p'), {duration: .8, y: 0, opacity: 1, ease: "ease-in-out"}, '-=.4')
tlh.to(document.querySelector('.home_page a'), {duration: .8, y: 0, opacity: 1, ease: "ease-in-out"}, '-=.4');
//scroll down
let tl = new TimelineMax();
document.querySelector('.scroll-icon').addEventListener('click', () => {
  tl.to(document.querySelector('html, body'), {duration: 1, scrollTo:{y:"#section2"}, ease: Expo.easeInOut});
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.shadow');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.shadow .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//call the carousel
$(document).ready(function(){
  //activate the carousel
  $('.owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
