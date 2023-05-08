function Greet() {
	let name = "";
	let namesGreeted = {};

	function setName(input) {
		name = input.trim();
	}

	function getName() {
		return name;
	}

	function hasBeenGreeted() {
		if (namesGreeted[name] === undefined) {
			return false;
		}
		return true;
	}

	function addName() {
		if (!hasBeenGreeted) {
			namesGreeted[name] = 0;
		}
		namesGreeted[name]++;
	}

	function createMessage() {
		addName();
		return "Hello, " + getName();
	}

	function getCount() {
		return Object.keys(namesGreeted).length;
	}

	return {
		setName,
		getName,
		hasBeenGreeted,
		createMessage,
		getCount,
		addName,
	}
}