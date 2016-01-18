function initGraphicalsObjects() {
	GRAPHICDATA.graphObjsContainer = new PIXI.Container();
	addContainerToMain(GRAPHICDATA.graphObjsContainer);

	GRAPHICDATA.playerContainer = new PIXI.Container();
	addContainerToMain(GRAPHICDATA.playerContainer);
	
	initPlayerSprites();
}

function initPlayerSprites() {
	GRAPHICDATA.playerSprite = new PIXI.Sprite(PIXI.Texture.fromFrame("imgs/1.png"));
	GRAPHICDATA.playerSprite.anchor.set(0.5,0.5);
	GRAPHICDATA.playerSprite.position.x = window.innerWidth/2;
	GRAPHICDATA.playerSprite.position.y = window.innerHeight/2;
	
	GRAPHICDATA.particlesContainer = new PIXI.Container();
	GRAPHICDATA.playerContainer.addChild(GRAPHICDATA.particlesContainer);
	GRAPHICDATA.playerContainer.addChild(GRAPHICDATA.playerSprite);
	
	//------------ PARTICLES INITIALISATION -------------
	var texture = new PIXI.Texture.fromImage("imgs/particle.png");
	GRAPHICDATA.proton = new Proton;
	GRAPHICDATA.protonEmitter = new Proton.Emitter();
	GRAPHICDATA.protonEmitter.p.x = window.innerWidth/2;
	GRAPHICDATA.protonEmitter.p.y = window.innerHeight/2;
	GRAPHICDATA.protonEmitter.rate = new Proton.Rate(new Proton.Span(6, 8), new Proton.Span(.05, .1));
	GRAPHICDATA.protonEmitter.addInitialize(new Proton.Mass(1));
	GRAPHICDATA.protonEmitter.addInitialize(new Proton.ImageTarget(texture));
	GRAPHICDATA.protonEmitter.addInitialize(new Proton.Life(.4));
	GRAPHICDATA.protonEmitter.addInitialize(new Proton.Velocity(new Proton.Span(4,8), new Proton.Span(180, 10, true), 'polar'));
	GRAPHICDATA.protonEmitter.addBehaviour(new Proton.Alpha(1, 0));
	GRAPHICDATA.protonEmitter.addBehaviour(new Proton.Scale(1, 0));
	GRAPHICDATA.protonEmitter.emit();
	GRAPHICDATA.proton.addEmitter(GRAPHICDATA.protonEmitter);
	var renderer = new Proton.Renderer('other', GRAPHICDATA.proton);
	renderer.onProtonUpdate = function() {};
	renderer.onParticleCreated = function(particle) {
		var particleSprite = new PIXI.Sprite(particle.target);
		particleSprite.tint = 0xFFFF00;
		particle.sprite = particleSprite;
		GRAPHICDATA.particlesContainer.addChild(particle.sprite);
	};

	renderer.onParticleUpdate = function(particle) {
		updateParticleSprite(particle.sprite, particle);
	};

	renderer.onParticleDead = function(particle) {
		GRAPHICDATA.particlesContainer.removeChild(particle.sprite);
	};
	renderer.start();
}
function updateParticleSprite(particleSprite, particle) {
	particleSprite.position.x = particle.p.x;
	particleSprite.position.y = particle.p.y;
	particleSprite.scale.x = particle.scale;
	particleSprite.scale.y = particle.scale;
	particleSprite.anchor.x = 0.5;
	particleSprite.anchor.y = 0.5;
	particleSprite.alpha = particle.alpha;
	particleSprite.rotation = particle.rotation*Math.PI/180;
}

function playerDraw() {
	GRAPHICDATA.playerSprite.rotation = game.player.dir + Math.PI/2;
	GRAPHICDATA.protonEmitter.rotation = -(game.player.dir + Math.PI/2) * (180/Math.PI);
	GRAPHICDATA.proton.update();	
}

function drawOtherObjects() {
	var container = GRAPHICDATA.graphObjsContainer;

	for(var i in container.children) { //set all child to unvisible so that we only draw the one that are in game.visible_obj
		container.children[i].visible = false;
	}
	
	for(var i in game.visible_obj) {
		game.visible_obj[i].sprite.visible = true;
		game.visible_obj[i].sprite.position.x = game.visible_obj[i].screen_x;
		game.visible_obj[i].sprite.position.y = game.visible_obj[i].screen_y; 
		game.visible_obj[i].sprite.rotation = game.visible_obj[i].rotation;
	}
}