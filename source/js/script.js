import cards from './modules/cards.js';
import CatsGrid from './modules/catsGrid.js';
import filterCards from './modules/filter.js';
import getToggle from './modules/toggle.js';
import checkbox from './modules/checkbox.js';
import scroll from './modules/scroll.js';

'use strict';

let catsList = document.querySelector('.main-catalog__list');

//Прорисовка карточек
let catGrid = new CatsGrid(cards);
catsList.append(catGrid.elem);

//Фильтрация карточек
filterCards('main-catalog__sort-price', '.card__price');
filterCards('main-catalog__sort-age', '.card__age');

// Адаптивное меню
getToggle();

// Чекбокс
checkbox();

// Cкролл
scroll();
