import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GScroll from "https://cdn.skypack.dev/@grcmichael/gscroll";
import { spanLetter, spanWord } from "./utility.js";

//* Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

//* GSCROLL SETUP
const scroll = new GScroll("[data-scroll-container]", 0.6, () => {
	ScrollTrigger.update();
});

scroll.init();
scroll.wheel();
window.addEventListener("load", () => {
	scroll.resize();
});

const scroller = document.querySelector("[data-scroll-container]");
ScrollTrigger.defaults({
	scroller: scroller,
});

ScrollTrigger.scrollerProxy(scroller, {
	scrollTop(value) {
		if (arguments.length) {
			scroll.current = -value; // setter
		}
		return -scroll.current; // getter
	},
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
});

window.addEventListener("resize", () => {
	scroll.resize();
});

//****************************** SPLASH ANIMATIONS ******************************
// Span wrap letters
let incr = 0;

const splashTitles = document.querySelectorAll(".section_1 .span");

splashTitles.forEach((title) => {
	title.innerHTML = spanLetter(title);

	title.childNodes.forEach((letter) => {
		gsap.to(letter, {
			y: "-40%",
			opacity: 0,
			ease: "none",
			scrollTrigger: {
				id: "SPLASH",
				trigger: ".pin-start",
				start: "top top-=" + incr,
				end: "+=" + 100,
				scrub: true,
				// markers: true,
			},
		});
		incr += 16;
	});
});

ScrollTrigger.create({
	trigger: ".section_1 .pin-start",
	start: "top top",
	end: 100,
	pin: true,
	// markers: true,
	id: "RANDOM",
});

//****************************** PROJECTS ANIMATIONS ******************************
const projectsTitle = document.querySelector(".section_2 .title");
projectsTitle.innerHTML = spanLetter(projectsTitle);
//! **************************** PROJECT TITLE ******************************
const projectsTitleTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_2 .pin-start",
		start: "top top",
		end: "500",
		scrub: true,
		pin: true,
		markers: true,
	},
});

projectsTitleTl
	.fromTo(
		".section_2 .title",
		{ opacity: 0 },
		{
			opacity: 1,
		}
	)
	.to(".section_2 .title span", { opacity: 0, stagger: { each: 0.1, from: "center" } });

const projectsTl = gsap.timeline({
	scrollTrigger: {
		id: "PROJECTS",
		trigger: ".section_2 .pin-start",
		start: "top top",
		end: "+=" + 1000,
		scrub: true,
		pin: true,
		markers: true,
	},
});

projectsTl
	.fromTo(
		".projects .text",
		{
			opacity: 0,
			y: 0,
		},
		{ opacity: 1, y: "-100%", duration: 0.2, delay: 0.55 },
		0
	)
	.fromTo(
		".img_container img",
		{
			opacity: 0,
			y: 0,
		},
		{
			opacity: 1,
			y: -1300,
		},
		"<"
	);
