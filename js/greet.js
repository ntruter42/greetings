function Greet() {
	let name = "";
	let namesGreeted = JSON.parse(localStorage.getItem("namesGreeted")) || {};
	let message = "";

	function hasBeenGreeted() {
		if (namesGreeted[name.toLowerCase()] === undefined) {
			return false;
		}
		alert("Name has already been greeted");
		return true;
	}

	function setName(input) {
		name = input.trim();
	}

	function getName() {
		return name;
	}

	function addName() {
		if (!hasBeenGreeted()) {
			namesGreeted[name.toLowerCase()] = 0;
			localStorage.setItem("namesGreeted", JSON.stringify(namesGreeted));
		}
		namesGreeted[name.toLowerCase()] += 1;
	}

	function setNames(obj) {
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
		message += ", " + getName() + ".";
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