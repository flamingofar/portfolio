import "./sass/main.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//* Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const masterTl = gsap.timeline();

const splashTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".pin-start",
		markers: true,
		start: "0 top",
		pin: true,
		scrub: true,
	},
});

splashTl
	.to(".name:first-child", {
		opacity: 0,
	})
	.to(".name:last-child", {
		opacity: 0,
	})
	.to(".position:first-child", {
		opacity: 0,
	})
	.to(".position:last-child", {
		opacity: 0,
	});

masterTl.add(splashTl);
