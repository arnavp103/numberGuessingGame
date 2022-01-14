"use strict";

let number = Math.ceil(Math.random() * 20);

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	if (!guess) {
		document.querySelector(".message").textContent = "No Number :(";
	} else if (guess != number) {
		if (document.querySelector(".score").textContent > 1) {
			document.querySelector(".message").textContent =
				guess > number ? "Too High!" : "Too Low!";
			document.querySelector(".score").textContent -= 1;
		} else {
			document.querySelector(".message").textContent = "You Lost";
			document.querySelector(".score").textContent = "0";
		}
	} else {
		document.querySelector(".message").textContent = "Correct!";
		if (
			document.querySelector(".score").textContent >
			document.querySelector(".highscore").textContent
		) {
			document.querySelector(".highscore").textContent =
				document.querySelector(".score").textContent;
		}
		document.querySelector(".number").textContent = number;
		document.body.style.backgroundColor = "#60b347";
	}
});

document.querySelector(".again").addEventListener("click", function () {
	document.querySelector(".number").textContent = "?";
	document.querySelector(".message").textContent = "Start guessing...";
	document.body.style.backgroundColor = "#222";
	document.querySelector(".score").textContent = 20;
	document.querySelector(".guess").value = 0;
	number = Math.ceil(Math.random() * 20);
});
