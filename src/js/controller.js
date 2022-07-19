// Обьединяет модель и представление



class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		view.on('add', this.addChars.bind(this));
		view.on('clear', this.clearAll.bind(this));

		// Подписаться на события представления
	}

	addChars(char, error) {
		let state = this.model.addData(char, error);
		this.view.showData(state);
		// console.log(state);
	}

	clearAll() {
		this.model.clear();
	}

}

export default Controller;