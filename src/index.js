// *Стили
import './scss/main.scss';

// *Логика

// *Императивный стиль

// import './js/common.js';

// *ООП в патерне MVC

// Основные модули
import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';

// Вспомогательные модули
import {save, load} from './js/saveLocalStorage';


let state = load();

const view = new View();
const model = new Model(
	state ||

	{
		firstNumber : '',
		mathSign : '',
		secondNumber : '',
		finish : false,
		error : false,
	} 
	
	|| undefined
	
);

model.on('change', state => save(state));

const controller = new Controller(model, view);


