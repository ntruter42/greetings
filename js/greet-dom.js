const button = document.querySelector("#greet-button");
const input = document.querySelector('#greet-input');
const message = document.querySelector('#greet-message');

const greet = Greet();

function greetButtonClick() {
	if (input.value === "") {
		alert("Name can't be empty");
	} else {
		greet.setName(input.value);
		greet.setMessage();

		message.innerHTML = greet.getMessage();
		input.value = "";
	}
}

input.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		greetButtonClick();
	}
});

button.addEventListener('click', greetButtonClick);