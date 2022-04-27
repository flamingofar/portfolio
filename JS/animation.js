import gsap from "gsap";
import { spanLetter, spanWord } from "./utility.js";
import { animationHomeEnter, animationHomeLeave, animationProjectEnter, animationProjectLeave } from "./animations";
import barba from "@barba/core";

//****************************** GET IN TOUCH ANIMATION ******************************
gsap.to(".marquee", { xPercent: -50, repeat: -1, duration: 16, ease: "linear" }).totalProgress(0.5);

barba.init({
	debug: true,
	sync: true,
	transitions: [
		{
			//* TO PROJECT
			name: "project",
			// from: {
			// 	namespace: ["home"],
			// },
			to: {
				namespace: ["project"],
			},
			enter({ next }) {
				animationProjectEnter(next.container);
			},
			leave: ({ current }) => animationHomeLeave(current.container),
		},
		{
			//* FROM RPOJECT TO PROJECT
			name: "project-to-project",
			from: {
				namespace: ["project"],
			},
			to: {
				namespace: ["project"],
			},
			enter({ next }) {
				animationProjectEnter(next.container);
			},
			leave: ({ current }) => animationProjectLeave(current.container),
		},
		{
			//* TO HOME
			name: "home",
			to: {
				namespace: ["home"],
			},
			once({ next }) {
				animationHomeEnter(next.container);
			},
			enter({ next }) {
				animationHomeEnter(next.container);
			},
		},
		{
			//* TO ABOUT
			name: "about",
			to: {
				namespace: ["about"],
			},
			once({ next }) {
				// animationHomeEnter(next.container);
				return gsap.timeline().from(next.container, {
					duration: 1,
					opacity: 0,
				});
			},
			enter({ next }) {
				// animationHomeEnter(next.container);
				return gsap.timeline().from(next.container, {
					duration: 1,
					opacity: 0,
				});
			},
		},
	],
});
