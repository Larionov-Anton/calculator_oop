// *Модель данных (взаимодействие с данными)

class Model {
	constructor() {
		this.state = {
			firstNumber : '',
			mathSign : '',
			secondNumber : '',
			
			finish : false,
			error : false,
		};


		// Служебные массивы
		this.numbers = ['0', '1', '2','3', '4', '5','6', '7', '8', '9', '.'];
		this.mathActions = ['+/-', '%', '/', 'x', '-', '+'];

	}

	// Очистить все

	clear() {
		this.state = {
			firstNumber : '',
			mathSign : '',
			secondNumber : '',
			
			finish : false,
			error : false,
		};
		console.log(this.state);
	};

	// Добавить данные

	addData(char, error) {
			console.log(error);
			this.state.error = error;
			let number = this.numbers.includes(char);
			let mathAction = this.mathActions.includes(char);
	
					if (number) {
	
						if (this.state.secondNumber === '' && this.state.mathSign === '' && !this.state.error) {
							this.state.firstNumber += char;
						
						} 

						else if(!this.state.error) {
							this.state.secondNumber += char;
						}
		
						console.log(this.state)
						return this.state;
					};
		
					if (mathAction) {
						this.state.mathSign = char;
						this.state.error = false;
						this.state.finish = false;
						this.state.secondNumber = '';
						if (char === '+/-') {
							this.equal();
						} 
						
						console.log(this.state)
						return this.state;
					};
		
					if (char === '=' ) {
						this.state.error = false;
						this.equal();

						console.log(this.state)
						return this.state;
					};
		
	};

	// Произвести вычисления

	equal() {
		if (this.state.secondNumber === '') this.state.secondNumber = this.state.firstNumber;
		switch (this.state.mathSign) {
			case '+': 
			this.state.firstNumber = (+this.state.firstNumber) + (+this.state.secondNumber);
				break;
			case '-':
				this.state.firstNumber = this.state.firstNumber - this.state.secondNumber;
				break;
			case '/':
				this.state.firstNumber = this.state.firstNumber / this.state.secondNumber;
				break;
			case 'x':
				this.state.firstNumber = this.state.firstNumber * this.state.secondNumber;
				break;
			case '+/-':
				this.state.firstNumber = -this.state.firstNumber;	
				break;
			case '%':
				this.state.firstNumber = this.state.firstNumber / 100 * this.state.secondNumber;
				break;
		}
	
		this.state.finish = true;
	
	};


}

export default Model;