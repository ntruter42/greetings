function Greet() {
	let name = "";
	let message = "";

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
		return message;
	}

	return {
		setName,
		getName,
		setMessage,
		getMessage
	}
}