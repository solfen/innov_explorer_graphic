function draw() {
	updateBackgroundLayers()
	playerDraw();
	drawOtherObjects();
	GRAPHICDATA.renderer.render(GRAPHICDATA.mainContainer);
}