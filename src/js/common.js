// TODO: Простой калькулятор на ванильном JS в императивном стиле

/*
* Алгоритм

- отследить нажатие кнопки, вывести ее значение на экран, сохранить в переменную
- каждую следующую нажатую кнопку добавить к значению предыдушей и вывести на экран
- если нажат знак, сохранить его в другую переменную, вывести на экран
- последующие нажатые кнопки выводить на экран, сохранять в другую переменную

- если нажат = произвести вычисления, сохранить их в переменную, вывести на очищенный экран

*/

// *Реализация

// Переменные

let a = '';
let b = '';
let mathSign = '';

let screen = document.querySelector('.calc-screen p');
let numbers = ['0', '1', '2','3', '4', '5','6', '7', '8', '9', '.'];
let mathActions = ['+/-', '%', '/', 'x', '-', '+', '='];

// Отливливает событие нажатия на все кнопки

let buttons = document.querySelector('.calc-buttons').addEventListener('click', main);


// Сбросить все значения

function clear() {
			a = '';
			b = '';
			mathSign = '';
			screen.textContent = '0';
};


// Основной функционал 

function main() {
	let element = event.target.textContent;
	let number = numbers.includes(element);
	let mathAction = mathActions.includes(element);

	if (element === 'ac') {
		clear();
	} else

	if (number && mathSign === '' ) {
		a += element;
		screen.textContent = a;
	} else 

	if (mathAction) {
		mathSign = element;
		screen.textContent = a + ' ' + mathSign;
	}  else 

	{
		b += element;
		screen.textContent = a + ' ' + mathSign + ' ' + b;
	}
		

	console.log(a, mathSign, b);
}





