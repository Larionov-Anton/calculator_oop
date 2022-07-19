// Сохранение данных в Local Storage



	function save(data) {
		let string = JSON.stringify(data);
		localStorage.setItem('calculator', string);
	}

	function load(data) {
		let string = localStorage.getItem('calculator');
		data = JSON.parse(string);

		return data;
	}

export {save, load};