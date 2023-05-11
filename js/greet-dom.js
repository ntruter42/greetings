// INPUT ELEMENTS
const input = document.querySelector('#greet-input');
// const language = document.querySelector('input[type="radio"][name="greet-language"]:checked').value;
const button = document.querySelector('#greet-button');
const reset = document.querySelector('#greet-reset');
const radioButtons = document.querySelectorAll('input[type = "radio"][name = "greet-language"]');

// OUTPUT ELEMENTS
const message = document.querySelector('#greet-message');
const counter = document.querySelector('#greet-counter');
const validation = document.querySelector('#validation-message');
const validationBox = document.querySelector('#validation-container');

// FUNCTIONALITY
let messageAnimationTimeout = 0;
let validationAnimationTimeout = 0;

// INITIALISATION
const greet = Greet();
counter.innerHTML = greet.getCount();
languageChange();

function displayMessage(messageValidation, color) {
	clearTimeout(validationAnimationTimeout);
	validationBox.classList.remove('hidden', 'red', 'orange', 'green');

	validation.innerHTML = messageValidation;

	switch (color) {
		case 'red':
			validationBox.classList.add('red');
			break;
		case 'orange':
			validationBox.classList.add('orange');
			break;
		case 'green':
			validationBox.classList.add('green');
			break;
		default:
			break;
	}
	validationBox.classList.add('scale-forward');

	let duration = messageValidation.length * 120 - (Math.floor(messageValidation.length / 12) * 120);
	validationAnimationTimeout = setTimeout(function () {
		validationBox.classList.add('hidden');
	}, duration);
}

function greetButtonClick() {
	const language = document.querySelector('input[type="radio"][name="greet-language"]:checked');

	if (input.value === "" && !language) {
		displayMessage("Enter a name and  select a language", "red");
		input.focus();
	} else if (input.value === "") {
		displayMessage("Enter a name", "red");
		input.focus();
	} else if (!greet.isName(input.value)) {
		displayMessage("Name should only contain alphabets and/or 1 dash or space between", "red");
		input.select();
	} else if (!language) {
		displayMessage("Select a language", "red");
	} else {
		clearTimeout(messageAnimationTimeout);
		message.classList.replace('scale-up', 'scale-down');

		greet.setName(input.value);
		if (greet.hasBeenGreeted()) {
			displayMessage("Name has been greeted before", "orange");
		}
		greet.setMessage(language.value);

		messageAnimationTimeout = setTimeout(function () {
			message.innerHTML = greet.getMessage();
			counter.innerHTML = greet.getCount();

			message.classList.remove('scale-down');
			message.classList.add('scale-up');
		}, 200);

		input.value = "";
	}
}

function greetResetClicked() {
	const language = document.querySelector('input[type="radio"][name="greet-language"]:checked');
	message.classList.replace('scale-up', 'scale-down');

	if (greet.getCount() === 0 && (input.value || language)) {
		displayMessage("Inputs have been reset", "green");
		input.value = "";
		language.checked = false;
	} else if (greet.getCount() > 0) {
		displayMessage("Counter has been reset<br>Click again to reset inputs", "green");
		setTimeout(function () {
			greet.resetNames();
			message.innerHTML = "";
			counter.innerHTML = greet.getCount();
		}, 200);
	} else {
		displayMessage("Nothing to reset", "orange");
	}
}

function languageChange() {
	const language = document.querySelector('input[type="radio"][name="greet-language"]:checked');
	const heading = document.querySelector('#greet-header');
	const label = document.querySelector('#greet-label');

	const counterContainer = document.querySelector('#counter-container');
	counterContainer.classList.remove('xhosa-counter-adjust');

	if (!language || language.value === "english") {
		heading.innerHTML = "Greeting";
		label.innerHTML = "Name";
		button.innerHTML = "Greet Me";
		reset.innerHTML = "Reset";
	}

	else if (language.value === "afrikaans") {
		heading.innerHTML = "Begroeting";
		label.innerHTML = "Naam";
		button.innerHTML = "Groet My";
		reset.innerHTML = "Herstel";
	}

	else if (language.value === "xhosa") {
		heading.innerHTML = "Umbuliso";
		label.innerHTML = "Igama";
		button.innerHTML = "Ndibulise";
		reset.innerHTML = "Misela<br>Kwakhona";

		counterContainer.classList.add('xhosa-counter-adjust');
	}
}

button.addEventListener('click', greetButtonClick);
reset.addEventListener('click', greetResetClicked);
input.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		greetButtonClick();
	}
});
radioButtons.forEach(radio => {
	radio.addEventListener('keydown', function (event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			greetButtonClick();
		}
	});
	radio.addEventListener('click', function () {
		languageChange();
	});
});