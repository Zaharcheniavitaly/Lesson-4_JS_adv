

function replace() {

	let textEl = document.getElementById('text');

	let regExp = textEl.innerText.replace(/[']/gm, '"');

	textEl.innerHTML = regExp;
}

let buttonEl = document.querySelector('.btn-all');
buttonEl.addEventListener('click', replace);

//____________________________________________

function replace2() {

	let textEl = document.getElementById('text');

	let regExp = textEl.innerText.replace(/(?<=\w+:\s*)'(.+?)(?:'$|'(\s*\w+:))/gm, '"$1"$2');

	textEl.innerHTML = regExp;
}

document.querySelector('.btn').addEventListener('click', replace2);