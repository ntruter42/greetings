const button = document.querySelector("#greet-button");
const input = document.querySelector('#greet-input');
const message = document.querySelector('#greet-message');

const greet = Greet();

button.addEventListener('click', function () {
	greet.setName(input.value);
	greet.setMessage();

	message.innerHTML = greet.getMessage();
});