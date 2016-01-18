// TODO : rename file to remove the "factory" part

function initPopupFactory() {
	for(var i in GRAPHICDATA.popupsData.planets) {
		createPlanetPopup(i);
	}
	createCarnetPopup();
	ModalManager.getInstance().createModal("map", 0.9, GRAPHICDATA.mapPopup, false, null, null, "hidePopUp");
}

function createPlanetPopup(name) {
	var html = GRAPHICDATA.planetUITemplate
				.replace("{{imgSrc}}", GRAPHICDATA.popupsData.planets[name].img)
				.replace("{{title}}", GRAPHICDATA.popupsData.planets[name].title)
				.replace("{{text}}", GRAPHICDATA.popupsData.planets[name].text);
	ModalManager.getInstance().createModal(name, 0.9, html, false, null, null, "hidePopUp");
}

function createLevelUpPopup(levelNb, img1, img2) {
	var html = GRAPHICDATA.levelUpPopupTemplate
				.replace("{{lvlNb}}", levelNb)
				.replace("{{img1}}", img1)
				.replace("{{img2}}", img2)
				.replace("{{speedPercent}}", img1)
				.replace("{{speedPercent2}}", img1)
				.replace("{{toughnessPercent}}", img1)
				.replace("{{toughnessPercent2}}", img1);
	ModalManager.getInstance().createModal("levelUp", 0.6, html, false, null, null, "hidePopUp");
}

function createCarnetPopup() {
	var content = '';
	var planetNb = 0;
	var planetLockedNb = 0;
	
	for(var i in GRAPHICDATA.popupsData.carnet.planets) {
		planetNb++;
		var planetData = GRAPHICDATA.popupsData.carnet.planets[i];
		if(!GRAPHICDATA.popupsData.carnet.planets[i].isUnlocked) {
			planetLockedNb++;
			planetData = GRAPHICDATA.popupsData.carnet.lockedTemplate;
		}
		content += GRAPHICDATA.carnetPlanetSummaryTemplate
					.replace("{{img}}", planetData.img)
					.replace("{{summary}}", planetData.summary)
					.replace("{{name}}", i);
	}
	var html = GRAPHICDATA.carnetPopupTemplate
					.replace(/{{percent}}/g, (100 - planetLockedNb/planetNb * 100 | 0))
					.replace("{{content}}", content);
					
	ModalManager.getInstance().createModal("carnet", 0.9, html, false, null, null, "hidePopUp");
}


function showPopUp(name) {
	ModalManager.getInstance().showModal(name);
	game.player.is_stopped = true;
}

function hidePopUp(name) {
	game.player.is_stopped = false;
	ModalManager.getInstance().hideModal(name);
}

function unLockPopUp(name) {
	GRAPHICDATA.popupsData.carnet.planets[name].isUnlocked = true;
	createCarnetPopup();
	showPopUp(name);
}

function chooseLvlReward(choice) {
	// choice = 0 || 1;
	hidePopUp(name);
	upgradePlayerSprite(choice)
}
