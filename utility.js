export function spanWord(word) {
	let wordArr = word.textContent
		.trim()
		.split(" ")
		.map((word) => {
			return `<span>${word}</span>`;
		});

	return wordArr.join(" ");
}

export function spanLetter(word) {
	let wordArr = word.textContent
		.trim()
		.split("")
		.map((word) => {
			return `<span>${word}</span>`;
		});
	return wordArr.join("");
}
