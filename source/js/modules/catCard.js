export default class CatCard {

  constructor(card) {
    this.name = card.name;
    this.img = card.img;
    this.color = card.color;
    this.age = card.age;
    this.paws = card.paws;
    this.price = card.price;
    this.elem = document.createElement('div');

    this.render(card);

    this.elem.addEventListener('click', (event) => this.productAdd(event));
  }

  render(elem) {
    this.elem.classList.add('card');
    this.elem.innerHTML = `
      <div class="card__top">
          <img src="../img/${this.img}" class="card__img" alt="photo" width="380" height="264">
          <div class="card__like">
            <img src="../img/icon-heart.svg" class="card__heart" alt="like">
          </div>
      </div>
      <div class="card__body">
          <div class="card__title">${this.name}</div>
          <div class="card__descr">
            <div class="card__color">${this.color}</div>
            <div>
              <div class="card__age">${this.age}</div>
              Возраст
            </div>
            <div>
              <div class="card__paws">${this.paws}</div>
              Кол-во лап
            </div>
          </div>
          <div class="card__price">${this.price}</div>
      </div>
      <button type="button" class="card__btn">
        Купить
      </button>
    `;
  }
}
