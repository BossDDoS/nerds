let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-first').addEventListener('click', function(){
    offset = 0;
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.slider-second').addEventListener('click', function(){
    offset = 1160;
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-third').addEventListener('click', function(){
    offset = 2320;
    sliderLine.style.left = -offset + 'px';
});
