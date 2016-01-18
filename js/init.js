function init() {
	var loader = PIXI.loader;
	for(var i=0;i< GRAPHICDATA.pixiTexturesList.length; i++) {
		loader.add(GRAPHICDATA.pixiTexturesList[i]);
	}
    loader.load(texturesLoaded);
	
	for(var i=0;i< GRAPHICDATA.imagesList.length; i++) {
		var img = new Image(); 
		img.src = GRAPHICDATA.imagesList[i];
		img.name = GRAPHICDATA.imagesList[i];
		img.onload = imgLoaded;
	}

}
function imgLoaded(e) {
	GRAPHICDATA.images[e.target.name] = e.target;
	GRAPHICDATA.imgsLoaded++;

	if(GRAPHICDATA.imgsLoaded == GRAPHICDATA.imagesList.length) {
		GRAPHICDATA.isImgsLoaded = true;
		if(GRAPHICDATA.isTexturesLoaded) {
			onAssetsLoaded();
		}
	}
}

function texturesLoaded() {
	GRAPHICDATA.isTexturesLoaded = true;
	if(GRAPHICDATA.isImgsLoaded) {
		onAssetsLoaded();
	}
}

function onAssetsLoaded() {	
	delete GRAPHICDATA.imgsLoaded; 
	delete GRAPHICDATA.isImgsLoaded;
	
	GRAPHICDATA.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	document.body.appendChild(GRAPHICDATA.renderer.view);

	GRAPHICDATA.mainContainer = new PIXI.Container();
	GRAPHICDATA.gameWidth = window.innerWidth;
	GRAPHICDATA.gameHeight = window.innerHeight;
	
	initBackgroundFactory();
	initPopupFactory();
	initGraphicalsObjects();
	
	initLucien();
	
	document.getElementById("loading").style.display = "none";
	document.getElementById("UI").style.display = "initial";

	run_loop(0);
}


function run_loop(t) {
	requestAnimationFrame(run_loop);
	update(t);
	draw();
}

function initLucien() {
	window.game = {
		W: window.innerWidth,
		H: window.innerHeight,
		visible_obj: [],
		planets: [],
		meteors: [],
		mouse: {
			x: 0,
			y: 0,
			is_down: false
		},
		world_edges: {
			w: 32000, // at least 3 * innerWidth
			h: 16000 // at least 3 * innerHeight
		},
		larger_visible_radius: 512,
		force_inertia_duration: 1000, // ms
		deltatime: 1,
		time: 0
	};

	game.hW = game.W >> 1;
	game.hH =  game.H >> 1;
	game.view_dist_sqrt = game.hW * game.hW + game.hH * game.hH + game.larger_visible_radius * game.larger_visible_radius;
	game.player = new Player(game.world_edges.w >> 1, game.world_edges.h >> 1);

	init_planets(100);
	
	init_events();

}

function init_planets (n)
{
	for (var i = n; i--;)
	{
		var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame("imgs/planet.png"));
		sprite.visible = false;
		sprite.anchor.set(0.5, 0.5);
		GRAPHICDATA.graphObjsContainer.addChild(sprite);
		game.planets[game.planets.length] = new Planet(sprite, Math.random()*game.world_edges.w, Math.random()*game.world_edges.h, 150, 300);
	}
}



function init_events ()
{
	// ------------ mouse ------------ //

	addEventListener("mousemove", function (e)
	{
		game.mouse.x = e.clientX;
		game.mouse.y = e.clientY;
	}, false);

	addEventListener("mousedown", function (e)
	{
		game.mouse.is_down = true;
		game.player.pulse();
	}, false);

	addEventListener("mouseup", function (e)
	{
		game.mouse.is_down = false;
		game.player.can_pulse = true;
	}, false);
}

// pour éviter les effets de bord
function addContainerToMain(container) {
	GRAPHICDATA.mainContainer.addChild(container);
}


