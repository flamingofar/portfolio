import "./sass/main.scss";

const workLink = document.querySelector("nav ul li:first-child");
workLink.addEventListener("click", () => {
	localStorage.setItem("pageNr", 1);
});

const projectImg = document.querySelectorAll(".projects img");
projectImg.forEach((img) => {
	img.addEventListener("mouseover", () => {
		console.log("IMG");
		img.style.opacity = "1";
	});
});
