import gsap from "gsap";

function animationProjectLeave(container) {
	const h2 = container.querySelectorAll(".title h2");
	const details = container.querySelectorAll(".details_container");

	const tl = gsap.timeline({ defaults: { duration: 1 }, delay: 0.3 });
	tl.to(h2, {
		opacity: 0,
		stagger: 0.4,
	}).to(details, {
		opacity: 0,
		stagger: 0.4,
	});

	return tl;
}
export default animationProjectLeave;
