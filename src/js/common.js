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

// TODO: - исправить баг переполнения дисплея калькулятора


// Переменные

let a = '';
let b = '';
let mathSign = '';

let screen = document.querySelector('.calc-screen p');
let numbers = ['0', '1', '2','3', '4', '5','6', '7', '8', '9', '.'];
let mathActions = ['+/-', '%', '/', 'x', '-', '+'];

let error = false;
let finish = false;

// Отливливает событие нажатия на все кнопки

document.querySelector('.ac').addEventListener('click', clear);
document.querySelector('.calc-buttons').addEventListener('click', main);


// Отслеживает переполнение дисплея

function screenLength(string) {
	let length = string.length;
	if (length < 7) {
		screen.style.fontSize = '4rem';
	} else if (length < 10)
	{
		screen.style.fontSize = '3rem';
	} else if (length < 13) {
		screen.style.fontSize = '2.5rem';
	} else if (length < 16) {
		screen.style.fontSize = '2rem';
	} else if (length < 21) {
		screen.style.fontSize = '1.5rem';
	} else 
	{
		return error = true;
	}
};


// Сбросить все значения

function clear() {
	a = '';
	b = '';
	mathSign = '';
	screen.textContent = '0';
	finish = false;
	error = false;
};



// Математические вычисления

function equal() {
	if (b === '') b = a;
	switch (mathSign) {
		case '+': 
			a = (+a) + (+b);
			break;
		case '-':
			a = a - b;
			break;
		case '/':
			a = a / b;
			break;
		case 'x':
			a = a * b;
			break;
		case '+/-':
			a = -a;	
			break;
		case '%':
			a = a / 100 * b;
			break;
	}

	finish = true;
	screen.textContent = a;
};

// Основной функционал 

function main() {
	let char = event.target.textContent;
	let number = numbers.includes(char);
	let mathAction = mathActions.includes(char);

			if(!event.target.classList.contains('btn')) return;
			if(event.target.classList.contains('ac')) return;

			
			if (number) {

				screenLength(screen.textContent);

				if (b === '' && mathSign === '' && !error) {
					a += char;
					screen.textContent = a;
				} 
				else if (a!== '' && b!== '' && finish) {
					b = char;
					finish = false;
					screen.textContent = b;
				}
				else if(!error) {
					b += char;
					screen.textContent = b;
				}

				return;
			};

			if (mathAction) {
				mathSign = char;
				error = false;
				if (char === '+/-') {
					equal();
				} else {
					screen.textContent = mathSign;
				}
				
				return;
			};

			if (char === '=' ) {
				equal();

				return;
			};


};


