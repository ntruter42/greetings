// INPUT ELEMENTS
const input = document.querySelector('#greet-input');
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

	let duration = messageValidation.length * 100;
	validationAnimationTimeout = setTimeout(function () {
		setTimeout(function () {
			validationBox.classList.add('scale-forward');
		}, duration);
		validationBox.classList.add('hidden');
	}, duration);
}

function greetButtonClick() {
	const language = document.querySelector('input[type="radio"][name="greet-language"]:checked');

	if (input.value === "") {
		displayMessage("Name can't be empty", "red");
	} else if (!greet.isName(input.value)) {
		displayMessage("Name should only contain alphabet characters and/or 1 dash or space", "red");
	} else if (!language) {
		displayMessage("No language selected", "red");
	} else {
		clearTimeout(messageAnimationTimeout);
		message.classList.replace('scale-up', 'scale-down');

		greet.setName(input.value);
		if (greet.hasBeenGreeted()) {
			displayMessage("Name has already been greeted before", "orange");
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
button.addEventListener('click', greetButtonClick);

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
});

function greetResetClicked() {
	message.classList.replace('scale-up', 'scale-down');
	displayMessage("Counter has been reset", "green");

	setTimeout(function () {
		greet.resetNames();
		message.innerHTML = "";
		counter.innerHTML = greet.getCount();
	}, 200);
}
reset.addEventListener('click', greetResetClicked);