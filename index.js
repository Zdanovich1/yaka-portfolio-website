const aboutBtn = document.querySelector('.first-screen__btn_about');
const linkAbout = document.getElementById('link__about');
const returnBtn = document.querySelector('.first-screen__btn_return');
const firstScreenSlider = document.querySelector('.first-screen__slider');
const cardBtn = document.querySelectorAll('.card__button');
const cardList = document.querySelectorAll('.card__inner');
const cardBlob = document.querySelectorAll('.card__blob');
const cardCloseIcons = document.querySelectorAll('.card__close-icon');
const burgerButton = document.querySelector('.header__burger-button');
const navList = document.querySelector('.nav__list');

/*first screen slider*/

aboutBtn.addEventListener('click', moveSlide);
linkAbout.addEventListener('click', moveSlide);
returnBtn.addEventListener('click', returnSlide);

/*show portfolio item list*/

cardBtn.forEach((el, index) => {
   el.addEventListener('click', function (e) {
      cardBlob[index].classList.add('big');
      setTimeout(showList, 400, index);
   })
})

cardCloseIcons.forEach((el, index) => {
   el.addEventListener('click', function (e) {
      cardBlob[index].classList.remove('big');
      hideList(index);
   })
})


/*burger menu*/
/*! закончить работу над меню!!!!!!!*/
/*! закончить работу над меню!!!!!!!*/
/*! закончить работу над меню!!!!!!!*/
burgerButton.addEventListener('click', openMenu)

/*helpers*/

function showList(index) {
   cardList[index].style.display = 'flex';
}

function hideList(index) {
   cardList[index].style.display = 'none';
}

function moveSlide() {
   firstScreenSlider.style.marginLeft = '-110%';
}

function returnSlide() {
   firstScreenSlider.style.marginLeft = '0%';
}

function openMenu() {
   navList.style.right = '0';
}