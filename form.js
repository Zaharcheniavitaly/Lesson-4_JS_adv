'use strict';

let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let inputName = document.querySelector('.js-input-name');
let inputLastName = document.querySelector('.js-input-lastname');
let inputEmail = document.querySelector('.js-input-email');
let inputPhone = document.querySelector('.js-input-phone');
let inputCheckbox = document.querySelector('.js-input-checkbox');



function validateName(name) {
	let testName = /^[a-zA-Z]+$/;
	return testName.test(String(name));
}

function validateLastName(lastname) {
	let testLastName = /^[^0-9]+$/;
	return testLastName.test(String(lastname));
}

function validateEmail(email) {
	let testEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i; //^[a-zа-я0-9._-]+@[a-z0-9-_]+\.[a-z0-9-_]{2,4}/;
	return testEmail.test(String(email).toLowerCase());
}

function validatePhone(phone) {
	let testPhone = /^[\+][\d\(\)\ -]{4,14}\d$/;
	return testPhone.test(String(phone));
}


form.addEventListener('onsubmit', function (event) {
	event.preventDefault();

	let nameVal = inputName.value;
	let lastNameVal = inputLastName.value;
	let emailVal = inputEmail.value;
	let phoneVal = inputPhone.value;
	let emptyInputs = Array.from(formInputs).filter(input => input.value == '');

	formInputs.forEach((input) => {
		if (input.value == '') {
			input.classList.add('error');
		} else {
			input.classList.remove('error');
		}
	});


	if (emptyInputs.length != 0) {
		console.log('input not filled');
		return false;
	}

	if (!validateName(nameVal)) {
		inputName.classList.add('error');
		alert('Введите Ваше имя!');
		return false;
	} else {
		inputName.classList.remove('error');
	}

	if (!validateLastName(lastNameVal)) {
		inputLastName.classList.add('error');
		alert('Введите Вашу фамилию');
		return false;
	} else {
		inputLastName.classList.remove('error');
	}


	if (!validateEmail(emailVal)) {
		inputEmail.classList.add('error');
		alert('Введите корректный email');
		return false;
	} else {
		inputEmail.classList.remove('error');
	}

	if (!validatePhone(phoneVal)) {
		inputPhone.classList.add('error');
		alert('Введите корректный номер телефона');
		return false;
	} else {
		inputPhone.classList.remove('error');
	}


	if (!inputCheckbox.checked) {
		alert('Отметьте поле "Accept privacy policy"');
		inputCheckbox.classList.add('error');
		return false;
	} else {
		inputCheckbox.classList.remove('error');
	}

})



// можно вместо

// form.addEventListener('onsubmit', function (event) {
// 	event.preventDefault();
// })

// писать:

// form.onsubmit = function () {

// }
