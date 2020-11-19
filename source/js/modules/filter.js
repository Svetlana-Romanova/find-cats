export default function filterCards (clickplace, item) {
  let cards = document.querySelectorAll('.card');
  let catalog = document.querySelector('.main-catalog__inner');
  let arr = [];

  document.addEventListener('click', (e) => {
    if(e.target.classList.contains(clickplace) && !e.target.classList.contains('active')) {

      e.target.classList.add('active');

      cards.forEach(element => {
        let num = parseInt(element.querySelector(item).innerHTML.replace(/\D/g, ''));
        arr.push(num);
        arr.sort(function(a,b) {return a - b;})

        if(num === arr[0]) {
          catalog.prepend(element);
        } else if (num === arr[arr.length-1]) {
          catalog.append(element);
        }
      });
      
    } else if (e.target.classList.contains(clickplace) && e.target.classList.contains('active')) {
      e.target.classList.remove('active');

      cards.forEach(element => {
        let num = parseInt(element.querySelector(item).innerHTML.replace(/\D/g, ''));
        arr.push(num);
        arr.sort(function(a,b) {return a - b;})

        if(num === arr[0]) {
          catalog.append(element);
        } else if (num === arr[arr.length-1]) {
          catalog.prepend(element);
        }
      });
    }
  });
}
