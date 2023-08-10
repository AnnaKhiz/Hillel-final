export function sendContactForm() {
	let imageCircle = document.getElementById('loading');
	let hid = document.getElementById('hidden');
	const buttonSend = document.getElementById('btn');

	imageCircle.getAttribute('class');
	let buttonText = document.getElementById('btnDefault');
	buttonText.getAttribute('class');

	const form = document.getElementById('contact-form');
	const formInputName = document.getElementById('name');
	const formInputTel = document.getElementById('tel');
	const formInputEmail = document.getElementById('email');
	const messageWritten = document.getElementById('message');
	const errorBlock = document.getElementById('error-block');
	const regexTel = new RegExp('^[0-9]{0,12}$');
	const regexName = new RegExp('^[A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\\s]{2,10}$');
	const regexMessage = new RegExp('^[а-яА-Яa-zA-Z0-9\\s?!,.\'Ёё]+$');
	const regexEmail = new RegExp('^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$');

	function checkFields(field, regex) {
		field.addEventListener('keyup', (e) => {
			e.preventDefault();
			if (field.value.length > 1 && field.value !== '') {
				if (!regex.test(field.value)) {
					errorBlock.innerText = "Не верный формат ввода!";
				} else {
					errorBlock.innerText = "";
				}
			}
		});
	}
	checkFields(formInputName, regexName);
	checkFields(messageWritten, regexMessage);
	checkFields(formInputTel, regexTel);
	checkFields(formInputEmail, regexEmail);

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		setTimeout(function () {
			timeoutDelay();
			setTimeout(() => {
				hid.setAttribute('class', 'hidden');
				buttonText.removeAttribute('class', 'hidden');
				buttonText.innerText = 'Successfully sent';
				buttonSend.style.backgroundColor = '#0085FF';
				buttonSend.style.boxShadow = '0px 0px 20px rgb(36 163 255 / 50%)';
				formInputEmail.value = '';
				formInputTel.value = '';
				formInputName.value = '';
				messageWritten.value = '';
				setTimeout(() => {
					buttonText.innerText = 'Send message';
				}, 1700)
			}, 1500);
		}, 1000);
	});


	function timeoutDelay() {
		hid.removeAttribute('class');
		buttonText.setAttribute('class', 'hidden');
		buttonSend.style.backgroundColor = '#EDEDF7';
		buttonSend.style.boxShadow = 'none';
	}
}







