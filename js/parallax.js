let layer0 = document.querySelector('.layer0');
let layer1 = document.querySelector('.layer1');
let layer2 = document.querySelector('.layer2');
let balloon2 = document.querySelector('.balloon2');
let layer3 = document.querySelector('.layer3');
let layer5 = document.querySelector('.layer5');
let layer6 = document.querySelector('.layer6');
let layer7 = document.querySelector('.layer7');
let layer8 = document.querySelector('.layer8');

const svg = document.querySelectorAll('svg');
window.addEventListener('scroll', scrollParallax);

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop<360){
    layer0.style.transform = 'translateY('+ scrollTop * 1.3 +'px)';
    layer1.style.transform = 'translateY('+ scrollTop * 1.2 +'px)';
    layer2.style.transform = 'translateY('+ scrollTop * .9 +'px)';
    balloon2.style.transform = 'translateY('+ scrollTop * .3 +'px)';
    layer3.style.transform = 'translateY('+ scrollTop * .2 +'px)';
    layer5.style.transform = 'translateY('+ scrollTop * -1.5 +'px)';
    layer6.style.transform = 'translateY('+ scrollTop * 1.1 +'px)';
    layer7.style.transform = 'translateY('+ scrollTop * 1 +'px)';
    layer8.style.transform = 'translateY('+ scrollTop * .9 +'px)';
    }
    svgAnimate();
}

function svgAnimate(){
    let scroll = document.documentElement.scrollTop;
    if (scroll>290){svg[0].classList.add('active')}
    else {svg[0].classList.remove('active')}    
    if (scroll>460){svg[1].classList.add('active')}
    else {svg[1].classList.remove('active')}
}
