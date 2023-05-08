const input = document.querySelector('#greet-input');
const button = document.querySelector('#greet-button');
const message = document.querySelector('#greet-message');
const counter = document.querySelector('#greet-counter');
const reset = document.querySelector('#greet-reset');

let animationTimeout = 0;

var greet = Greet();
counter.innerHTML = greet.getCount();

function greetButtonClick() {
	const language = document.querySelector('input[type="radio"][name="greet-language"]:checked');

	if (!language) {
		alert("No language selected");
	} else if (input.value === "") {
		alert("Name can't be empty");
	} else if (!greet.isName(input.value)) {
		alert("Name should only contain alphabet characters and/or 1 dash or space")
	} else {
		clearTimeout(animationTimeout);
		message.classList.replace('scale-up', 'scale-down');

		greet.setName(input.value);
		greet.setMessage(language.value);

		animationTimeout = setTimeout(function () {
			message.innerHTML = greet.getMessage();
			counter.innerHTML = greet.getCount();

			message.classList.remove('scale-down');
			message.classList.add('scale-up');
		}, 200);

		input.value = "";
	}
}
button.addEventListener('click', greetButtonClick);
input.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		greetButtonClick();
	}
});

function greetResetClicked() {
	message.classList.replace('scale-up', 'scale-down');

	setTimeout(function () {
		greet.resetNames();
		message.innerHTML = "";
		counter.innerHTML = greet.getCount();
	}, 200);
}
reset.addEventListener('click', greetResetClicked);