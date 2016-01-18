//The background is composed of four images that moves around the player to give the illusion of movement.
//Each image (a tile) is repeatable and blend with the others.
//Each tile is a generated by drawing on an unAdded canvas.

function initBackgroundFactory() {
	//GRAPHICDATA.mainContainer.scale.set(0.25,0.25) //tmp
	GRAPHICDATA.background = {
		layers: {}
	}
	
	createLayer('base', 0.5, 1, drawBackgroundImage);
	createLayer('starfield', 0.2, 100, drawStarField);
	createLayer('starfieldFast', 10, 100, drawStarFieldLight);
}

function createLayer(layerName, speed, imageChangeNbChance, drawFunction) {
	var data = GRAPHICDATA;
	data.background.layers[layerName] = {
		'sprites'  : [],
		'speed': speed,
		'drawFunction' : drawFunction,
		'imageChangeNbChance' : imageChangeNbChance,
	}

	var container = new PIXI.Container();
	addContainerToMain(container);
	
	for(var i=0; i<4; i++) {
		var texture = createTexture(drawFunction);
		var sprite = new PIXI.Sprite(texture);
		sprite.position.set(i%2 * data.gameWidth, (i/2 | 0) * data.gameHeight);
		
		data.background.layers[layerName].sprites.push(sprite);
		container.addChild(sprite);
	}
	
	data.background.layers[layerName].container = container;
}

function createTexture(drawFunction, size) {
	var canvas = document.createElement("canvas");
	canvas.width = GRAPHICDATA.gameWidth;
	canvas.height = GRAPHICDATA.gameHeight;
	drawFunction(canvas);

	return PIXI.Texture.fromCanvas(canvas);
}
// creates background by compositing some images together
function drawBackgroundImage(canvas) {
	var ctx = canvas.getContext("2d");
	var cloudNb = Math.random()*4 + 1 | 0;
	ctx.drawImage(GRAPHICDATA.images["imgs/cloud" + cloudNb +".jpg"], 0,0, canvas.width, canvas.height);
}

function drawStarField(canvas) {
	var ctx = canvas.getContext("2d");
	var starImgNb = Math.random() + 1 | 0;
	ctx.drawImage(GRAPHICDATA.images["imgs/repeatableStarfield" + starImgNb +".png"], 0,0, canvas.width, canvas.height);
}

function drawStarFieldLight(canvas) {
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#ffffff"
	for(var i=0; i<1000; i++) {
		ctx.beginPath();
		ctx.arc( (Math.random() * canvas.width | 0), (Math.random() * canvas.height | 0), 0.5, 2 * Math.PI, false); //tmp
		ctx.fill();
	}
}
function updateLayerImage(sprite, drawFunction) {
	var texture = createTexture(drawFunction);
	sprite.texture = texture;
}

function updateBackgroundLayers() {
	var data = GRAPHICDATA;
	
	for(var i in data.background.layers) {
		var x = (game.player.x * data.background.layers[i].speed % (data.gameWidth*2)) -data.gameWidth | 0; // loop from -width to +width
		var x2 = ( (game.player.x * data.background.layers[i].speed + data.gameWidth) % (data.gameWidth*2)) -data.gameWidth | 0; // same but with an offset of width
		var y = (game.player.y * data.background.layers[i].speed % (data.gameHeight*2)) -data.gameHeight | 0;
		var y2 = ( (game.player.y * data.background.layers[i].speed + data.gameHeight) % (data.gameHeight*2)) -data.gameHeight | 0;

		data.background.layers[i].sprites[0].position.set(-x, -y);
		data.background.layers[i].sprites[1].position.set(-x2, -y);
		data.background.layers[i].sprites[2].position.set(-x, -y2);
		data.background.layers[i].sprites[3].position.set(-x2, -y2);
	}
}