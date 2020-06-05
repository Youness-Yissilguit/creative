//loading
window.addEventListener('load', () => {
  const loadScreen = document.querySelector('.loading');
  loadScreen.classList.add('remove');
});

//nav toggle
document.querySelector('.nav-toggle').addEventListener('click', function(){
  console.log('open');
  this.classList.toggle('open');
  document.querySelector('.nav-links').classList.toggle('down');
  document.querySelector('body').classList.toggle('top');
});
AOS.init({
   offset: 200,
   duration: 900
});
