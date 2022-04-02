"use strict";
import gsap from "gsap";

window.addEventListener("DOMContentLoaded", start);

function start() {
	gsap.to(".marquee", { xPercent: -50, repeat: -1, duration: 16, ease: "linear" }).totalProgress(0.5);

	setBtns();
}

function setBtns() {
	const prevBtn = document.querySelector("[data-btn='prev']");
	const nextBtn = document.querySelector("[data-btn='next']");
	const projectNr = parseInt(document.querySelector("[data-projectNr]").dataset.projectnr);
	const projectsAmount = parseInt(document.querySelector("[data-totalprojects").dataset.totalprojects);

	nextBtn.addEventListener("click", () => {
		if (projectNr !== projectsAmount) {
			window.location.href = `./project${projectNr + 1}.html`;
		}
	});
	prevBtn.addEventListener("click", () => {
		console.log(projectNr);
		if (projectNr === 1) {
			return;
		} else {
			window.location.href = `./project${projectNr - 1}.html`;
		}
	});
}
