export default function scroll() {
  let pageup = document.querySelector('.main-catalog__pageup');

  window.addEventListener('scroll', () => {
    let clientHeight = document.documentElement.clientHeight;
    let pageof = window.pageYOffset;

    if(pageof > clientHeight) {
      pageup.style.display = 'block';
    } else {
      pageup.style.display = 'none';
    }
  })

  pageup.addEventListener('click', () => {
    window.scrollTo(0,0);
  })
}
