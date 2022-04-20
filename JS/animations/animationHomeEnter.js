import gsap from "gsap";
import { spanLetter } from "../utility";

//****************************** SPLASH ANIMATIONS ******************************
// Span wrap letters
function animationHomeEnter(container) {
	const splashTitles = container.querySelectorAll(".span");
	let delayT = 0;

	splashTitles.forEach((title) => {
		title.innerHTML = spanLetter(title);
		gsap.set(title, { autoAlpha: 1 });
		gsap.from(title.childNodes, {
			yPercent: 100,
			stagger: {
				each: 0.03,
			},
			delay: delayT,
			clearProps: "all",
		});
		delayT += 0.15;
	}, 0);
}
export default animationHomeEnter;
