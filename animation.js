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
	end: 50,
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
		id: "PROJECT-TITLE",
		trigger: ".section_2 .pin-start",
		start: "top top",
		end: "500",
		scrub: true,
		pin: true,
		// markers: true,
	},
});

projectsTitleTl
	.fromTo(
		".section_2 .title",
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 0.5,
		}
	)
	.to(".section_2 .title span", { opacity: 0, stagger: { each: 0.1, from: "center" } });

//! **************************** PROJECTS ******************************
gsap.set(".section_2 .img_container", {
	z: 2,
});
const projectsTl = gsap.timeline({
	scrollTrigger: {
		id: "PROJECTS",
		trigger: ".section_2 .pin-start",
		start: "top top",
		end: "+=" + 6000,
		scrub: true,
		pin: true,
		// markers: true,
	},
});

projectsTl
	.from(
		".projects .text",
		{
			y: "100%",
			opacity: 0,
			delay: 0.55,
			duration: 2,
		},
		0
	)
	.from(
		".img_container div",

		{
			autoAlpha: 0.5,
			y: 1300,
			duration: 3,
		},
		"<"
	)
	.to(".section_2", {
		opacity: 0,
	});
// .set(".section_2", {
// 	height: "-=" + 1500,
// });

//****************************** SKILLS ANIMATIONS ******************************
const skillsTitle = document.querySelector(".section_3 .title");
skillsTitle.innerHTML = spanLetter(skillsTitle);
//! **************************** SKILLS TITLE ******************************
const skillsTitleTl = gsap.timeline({
	scrollTrigger: {
		id: "SKILLS-TITLE",
		trigger: ".section_3 .pin-start",
		start: "top top",
		end: "500",
		scrub: true,
		pin: true,
		markers: true,
	},
});

skillsTitleTl.from(".section_3 .title", { opacity: 0 }).to(".section_3 .title span", {
	opacity: 0,
	stagger: { each: 0.1, from: "center" },
});

//! **************************** SKILLS ******************************
const skillsTl = gsap.timeline({
	scrollTrigger: {
		id: "SKILLS",
		trigger: ".section_3 .pin-start",
		start: "top  top",
		end: "+=" + 10000,
		scrub: true,
		pin: true,
		markers: true,
	},
});

skillsTl.from(".skills .icon", { opacity: 0, stagger: { amount: 1 } }).to(".skills .icon", {
	opacity: 0,
	stagger: {
		amount: 1,
	},
});
