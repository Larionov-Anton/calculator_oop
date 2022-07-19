import EventEmmiter from './eventEmmiter'

// *Представление (взаимодействие с дом)

class View extends EventEmmiter{
	constructor() {
		super();
		this.screen = document.querySelector('.calc-screen p');
		this.ac = document.querySelector('.ac');
		this.buttons = document.querySelector('.calc-buttons');
		this.error = false;

		// Отливливает событие нажатия на все кнопки

		this.buttons.addEventListener('click', this.addChar.bind(this));
		this.ac.addEventListener('click', this.clearAll.bind(this));
		
	}

	screenLength(string) {
		this.error = false;
		let length = string.length;
		if (length < 7) {
			this.screen.style.fontSize = '4rem';
		} else if (length < 10)
		{
			this.screen.style.fontSize = '3rem';
		} else if (length < 13) {
			this.screen.style.fontSize = '2.5rem';
		} else if (length < 16) {
			this.screen.style.fontSize = '2rem';
		} else if (length < 21) {
			this.screen.style.fontSize = '1.5rem';
		} else 
		{
			this.screen.style.fontSize = '1.5rem';
			return this.error = true;
		}
	};

	clearAll() {
		this.screen.textContent = '0';
		this.screen.style.fontSize = '4rem';
		this.emit('clear');
	};
	
	addChar() {
		if(!event.target.classList.contains('btn')) return;
		if(event.target.classList.contains('ac')) return;

		let char = event.target.textContent;

		this.emit('add', char, this.error);
	};

	showData(state) {
	
			if (state.secondNumber === '' && state.mathSign === '') {
				this.screen.textContent = state.firstNumber;
			} else if (state.finish) {
				this.screen.textContent = state.firstNumber;
			} else if (state.firstNumber !== '' && state.mathSign !== '' && state.secondNumber === '') {
				this.screen.textContent = state.mathSign;
			}
			
			else {
				this.screen.textContent = state.secondNumber;
			} 
	
			this.screenLength(this.screen.textContent);

		return
	}
};

export default View; 