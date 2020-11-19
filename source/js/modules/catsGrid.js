import CatCard from './catCard.js';

export default class CatsGrid {
  constructor(cats) {
    this.cats = cats;

    this.elem = document.createElement('div');
    this.elem.classList.add('main-catalog__inner');
    this.render();
    this.addMore();
  }

  render() {
    this.cats.forEach(element => {
        let catCard = new CatCard(element);
        this.elem.append(catCard.elem);
    });
    return this.elem;
  }

  addMore() {
    let btnMore = document.querySelector('[data-id="btn-more"]');
    btnMore.addEventListener('click', () => {
      console.log('hi');
    this.render();
    })
  }
}
