import gsap from "gsap";
import { spanLetter, spanWord } from "./utility.js";

//****************************** SPLASH ANIMATIONS ******************************
// Span wrap letters
let incr = 0;

const splashTitles = document.querySelectorAll(".section_1 .span");

// splashTitles.forEach((title) => {
// 	title.innerHTML = spanLetter(title);

// 	title.childNodes.forEach((letter) => {
// 		gsap.to(letter, {
// 			y: "-40%",
// 			opacity: 0,
// 			ease: "none",
// 			scrollTrigger: {
// 				id: "SPLASH",
// 				trigger: ".pin-start",
// 				start: "top top-=" + incr,
// 				end: "+=" + 100,
// 				scrub: true,
// 				// markers: true,
// 			},
// 		});
// 		incr += 16;
// 	});
// });

//****************************** GET IN TOUCH ANIMATION ******************************
gsap.to(".marquee", { xPercent: -50, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);
gsap.set(".get-in-touch", { xPercent: -50 });
