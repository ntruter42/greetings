function Greet() {
	let name = "";
	let namesGreeted = {};
	let message = "";

	function setName(input) {
		name = input.trim();
	}

	function getName() {
		return name;
	}

	function hasBeenGreeted() {
		if (namesGreeted[name.toLowerCase()] === undefined) {
			return false;
		}
		return true;
	}

	function addName() {
		if (!hasBeenGreeted()) {
			namesGreeted[name.toLowerCase()] = 0;
		}
		namesGreeted[name.toLowerCase()] += 1;
	}

	function resetNames() {
		namesGreeted = {};
	}

	function setMessage(language) {
		addName();
		if (language === "english") {
			message = "Hello, ";
		} else if (language === "afrikaans") {
			message = "Hallo, ";
		} else if (language === "xhosa") {
			message = "Molo, ";
		}
		message += getName();
	}

	function getMessage() {
		return message;
	}

	function getCount() {
		return Object.keys(namesGreeted).length;
	}

	function isName(str) {
		return /^[a-zA-Z]+((-| )[a-zA-Z]+)?$/.test(str);
	}

	return {
		setName,
		getName,
		hasBeenGreeted,
		addName,
		resetNames,
		setMessage,
		getMessage,
		getCount,
		addName,
		isName
	}
}