import gsap from "gsap";

function animationHomeLeave(container) {
	const splashTitles = container.querySelectorAll("h2");

	const tl = gsap.timeline({
		defaults: {
			// ease: "power1.in",
		},
	});
	splashTitles.forEach((title) => {
		console.log(title.childNodes);
		tl.to(
			title.childNodes,
			{
				opacity: 0,
				yPercent: 101,
				stagger: {
					each: 0.04,
				},
			},
			0
		);
	});

	return tl;
}
export default animationHomeLeave;
