function Greet() {
	let name = "";
	let message = "";
	let namesGreeted = {};

	function setName(input) {
		name = input.trim();
	}

	function getName() {
		return name;
	}

	function setMessage() {
		message = "Hello, " + getName();
	}

	function getMessage() {
		addName();
		countGreeting();
		return message;
	}

	function getCount() {
		return namesGreeted.length;
	}

	function addName() {
		if (!hasBeenGreeted) {
			namesGreeted[name] = 1;
		} else {

		}
	}

	function hasBeenGreeted() {
		if (namesGreeted[name] === undefined) {
			return false;
		}
		return true;
	}

	return {
		setName,
		getName,
		setMessage,
		getMessage,
		getCount,
		addName,
		hasBeenGreeted
	}
}