class EventEmmiter {
	constructor() {
		this.events = {};
	}

	on(type, calback) {
		this.events[type] = this.events[type] || [];
		this.events[type].push(calback);
		// console.log(this.events);
	}

	emit(type, arg, arg2) {
		if (this.events[type]) {
			this.events[type].forEach(calback => calback(arg, arg2));
		}
		// console.log(this.events);
	}

};

export default EventEmmiter;