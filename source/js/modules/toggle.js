// export default function toggle() {
//   let toggleMain = document.querySelector('.main-nav__toggle'),
//     navList = document.querySelector('.main-nav__list'),
//     nav = document.querySelector('.main-nav'),
//     body = document.querySelector('body');

//   toggleMain.addEventListener('click', (event) => {
//     toggleMain.classList.toggle('active');
//     navList.classList.toggle('main-nav__list--active');

//     if (toggleMain.classList.contains('active')) {
//       nav.classList.add('main-nav--adaptive');
//       body.style.overflow = 'hidden';
//       document.querySelector('.container').style.maxWidth = '100%';
//     } else {
//       nav.classList.remove('main-nav--adaptive');
//       body.style.overflow = '';
//     }
//   });
// }

export default function getToggle() {

  let toggleMain = document.querySelector('.main-nav__toggle'),
      navList = document.querySelector('.main-nav__list'),
      nav = document.querySelector('.main-nav'),
      body = document.querySelector('body');

  function openMenu() {
    toggleMain.classList.add('active');
    nav.classList.add('main-nav--adaptive');
    body.classList.add('overlay');
    navList.classList.add('main-nav__list--active');
  }

  function closeMenu() {
    toggleMain.classList.remove('active');
    nav.classList.remove('main-nav--adaptive');
    body.classList.remove('overlay');
    navList.classList.remove('main-nav__list--active');
  }

  function changeMenu() {
    if (toggleMain.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggleMain.addEventListener('click', () => {
    changeMenu();
  });

  body.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      closeMenu();
    }
  });

  body.addEventListener('click', (e) => {
    if(e.target.classList.contains('main-nav__link') && toggleMain.classList.contains('active')) {
      changeMenu();
    };
  });
}
