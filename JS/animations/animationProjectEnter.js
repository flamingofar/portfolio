import gsap from "gsap";
import { spanLetter } from "../utility";

function animationProjectEnter(container, trigger) {
	console.log(trigger);
	const h2 = container.querySelectorAll(".title h2");
	const details = container.querySelectorAll(".details_container");

	const tl = gsap.timeline({ defaults: { duration: 1 }, delay: 0.3 });
	tl.from(h2, {
		opacity: 0,
		stagger: { amount: 0.2 },
	}).from(
		details,
		{
			opacity: 0,
			stagger: { amount: 0.2 },
		},
		"-=0.5"
	);

	return tl;
}
export default animationProjectEnter;
