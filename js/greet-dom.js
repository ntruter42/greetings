const button = document.querySelector("#greet-button");
const input = document.querySelector('#greet-input');
const message = document.querySelector('#greet-message');

const greet = Greet();

let animationTimeout = 0;

function greetButtonClick() {
	if (input.value === "") {
		alert("Name can't be empty");
	} else {
		clearTimeout(animationTimeout);
		message.classList.remove('scale-up');
		message.classList.add('scale-down');

		greet.setName(input.value);
		greet.setMessage();
		
		animationTimeout = setTimeout(function () {
			message.innerHTML = greet.getMessage();
			message.classList.remove('scale-down');
			message.classList.add('scale-up');
		}, 200);
		
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