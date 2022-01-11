// implementation of turnOnOff function -->
function turnOnOff() {
	let image = document.getElementById("Image");

	//change it to ONbulb.jpg -->
	if (image.src.match("ONbulb")) {
		image.src = "./img/OFFbulb.jpg";
	} else {
		image.src = "./img/ONbulb.jpg";
	}
}

let image = $("#Image");