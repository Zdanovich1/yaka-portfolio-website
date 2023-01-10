const aboutBtn = document.querySelector('.first-screen__btn_about');
const returnBtn = document.querySelector('.first-screen__btn_return');
const firstScreenSlider = document.querySelector('.first-screen__slider');


aboutBtn.addEventListener('click', moveSlide);
returnBtn.addEventListener('click', returnSlide);

function moveSlide() {
   firstScreenSlider.style.marginLeft = '-110%';
}

function returnSlide() {
   firstScreenSlider.style.marginLeft = '0%';
}