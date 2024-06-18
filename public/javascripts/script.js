var menu = document.querySelector('.menu');
var close = document.querySelector(' #nav i');
var tl = gsap.timeline();

tl.to("#nav", {
    left : 0,
    duration : 0.4
})
tl.from("#nav a", {
    opacity : 0,
    duration : 0.7
})

tl.pause();

menu.addEventListener('click', function(){
    tl.play();
})
close.addEventListener('click', function(){
    tl.reverse();
})