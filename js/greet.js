function Greet() {
	let name = "";
	let namesGreeted = JSON.parse(localStorage.getItem("namesGreeted")) || {};
	let message = "";

	function hasBeenGreeted() {
		if (namesGreeted[name.toLowerCase()] === undefined) {
			return false;
		}
		return true;
	}

	function setName(input) {
		name = input.trim();
	}

	function getName() {
		return name;
	}

	function getAllNames() {
		return namesGreeted;
	}

	function addName() {
		if (!hasBeenGreeted()) {
			namesGreeted[name.toLowerCase()] = 0;
		}
		namesGreeted[name.toLowerCase()] += 1;
		localStorage.setItem("namesGreeted", JSON.stringify(namesGreeted));
	}

	function setNames(obj) {
		// useful only if localStorage needs to be seperated from the business logic
		namesGreeted = obj;
	}

	function resetNames() {
		namesGreeted = {};
		localStorage.removeItem("namesGreeted");
	}

	function setMessage(language) {
		addName();
		if (language === "english") {
			message = "Hello";
		} else if (language === "afrikaans") {
			message = "Hallo";
		} else if (language === "xhosa") {
			message = "Molo";
		}
		message += ", " + getName();
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
		getAllNames,
		addName,
		setNames,
		resetNames,
		setMessage,
		getMessage,
		getCount,
		isName,
		hasBeenGreeted
	}
}