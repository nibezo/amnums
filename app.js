const amNumbers = [
	"zro (զրո)",
	"mek (մեկ)",
	"erku (երկու)",
	"erek (երեք)",
	"chors (չորս)",
	"hing (հինգ)",
	"vets (վեց)",
	"yot (յոթ)",
	"ut (ութ)",
	"iny (ինը)",
];
const firts = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const question = document.querySelector(".question");
const myScore = document.querySelector(".score");
let options = [];
let score = 0;
let rightAnswer = 0;

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", generateOptions);

function generateOptions() {
	while (options.length < 4) {
		let variant = getRndInteger(0, 9);
		if (options.includes(variant) === false) {
			options.push(variant);
		}
	}
	firts.textContent = options[0];
	second.textContent = options[1];
	third.textContent = options[2];
	fourth.textContent = options[3];
	rightAnswer = getRndInteger(0, 3);
	question.textContent = `What is ${amNumbers[options[rightAnswer]]}?`;
	rightAnswer = options[rightAnswer];
}

function check(event) {
	if (+event.target.textContent === rightAnswer) {
		myScore.textContent = `My score is ${(score += 100)}`;
		options = [];
		generateOptions();
		myScore.style.color = "green";
	} else {
		myScore.textContent = `My score is ${(score -= 100)}`;
		options = [];
		generateOptions();
		myScore.style.color = "red";
	}
}
