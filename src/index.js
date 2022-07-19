// Стили
import './scss/main.scss';

// Логика

// Императивный стиль

// import './js/common.js';

// ООП в патерне MVC

import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';

const view = new View();
const model = new Model();
const controller = new Controller(model, view);

// view.addData('9', false);

