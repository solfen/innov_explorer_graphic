function init() {
	window.carrouselIndex = 0;
	window.demoGifs = ["carrouselPlaceholder.jpg", "carrouselPlaceholder2.jpg", "carrouselPlaceholder3.jpg"];
	window.demoTexts = [ 
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tellus eros.", 
	"Pellentesque ut sapien vel urna cursus porttitor. Integer finibus velit nec quam fringilla, ut tristique mauris varius.", 
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tellus eros"
	];
	window.gifTextMinHeight = 40;

	currentGif.style.maxHeight = (window.innerHeight - currentGif.getBoundingClientRect().top - gifTextMinHeight | 0) + "px";
	demoRow.style.height = window.innerHeight - demoRow.getBoundingClientRect().top + "px";

	slide(0);
}

function slide(direction) {
	window.carrouselIndex += direction;
	currentGif.src = 'imgs/' + window.demoGifs[window.carrouselIndex % window.demoGifs.length];
	currentText.innerHTML = window.demoTexts[window.carrouselIndex % window.demoGifs.length];
}