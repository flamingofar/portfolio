import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GScroll from "https://cdn.skypack.dev/@grcmichael/gscroll";
import { spanLetter, spanWord } from "./utility.js";

//* Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

//! LOCOMOTIVE SCROLL SETUP
// // Instantiate smooth scrolling
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

//* SPLASH ANIMATIONS
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
				trigger: ".pin-start",
				start: "top top-=" + incr,
				end: "+=" + 100,
				scrub: true,
			},
		});
		incr += 16;
	});
});

ScrollTrigger.create({
	trigger: ".pin-start",
	start: "top top",
	end: 500,
	pin: true,
});

//* PROJECTS ANIMATIONS
const projectTl = gsap.timeline();
const projectH2 = document.querySelector(".section_2 h2");
projectH2.innerHTML = spanLetter(projectH2);
gsap.set(".section_2 h2 span", {
	autoAlpha: 0,
	y: -60,
});

projectTl.addLabel("start", 1);
projectTl
	.to(".section_2 h2 span", {
		autoAlpha: 1,
		y: 0,
		scrollTrigger: {
			trigger: ".section_2 .pin-start",
			start: "top 35%",
			end: "300",
			pin: true,
			scrub: !0,
			markers: true,
		},
	})
	.to(".section_2 h2 span", {
		autoAlpha: 0,
	});

console.log(document.querySelectorAll(".section_2 h2 span"));
