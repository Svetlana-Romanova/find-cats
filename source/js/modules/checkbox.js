export default function checkbox () {
  let check = document.querySelector('.main-footer__checkbox');
  let checkDescr = document.querySelector('.main-footer__checkbox-descr');

  checkDescr.addEventListener('click', () => {
    if (check.checked === true) {
      check.checked = false;
    } else {
      check.checked = true;
    }
  })
}
