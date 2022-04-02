"use strict";
import gsap from "gsap";
import { spanLetter, spanWord } from "./utility.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
	const email = document.querySelector(".email span:first-child");
	console.log(email.textContent);
	const copy = document.querySelector(".email i");

	copy.addEventListener("click", () => {
		navigator.clipboard.writeText(email.textContent);

		const copyTl = gsap.timeline();
		copyTl
			.to(".copied span", {
				duration: 0.2,
				y: "-75%",
				opacity: 1,
			})
			.to(".copied span", {
				delay: 0.7,
				duration: 0.3,
				opacity: 0,
				onComplete: () => {
					gsap.set(".copied span", {
						opacity: 0,
						y: 0,
					});
				},
			});

		console.log("Something was copied");
	});
}
