import "./sass/main.scss";

const projectImg = document.querySelectorAll(".projects img");
projectImg.forEach((img) => {
	img.addEventListener("mouseover", () => {
		console.log("IMG");
		img.style.opacity = "1";
	});
});
