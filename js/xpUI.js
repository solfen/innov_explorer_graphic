function UIXpGain(amount) {
	var feedbackUI = document.getElementById("xpGainFeedback");
	feedbackUI.innerHTML = "+" + amount;
	feedbackUI.style.display = 'initial';
	
	if(GRAPHICDATA.clearXpFeedbackTimeOut) {
		window.clearTimeout(GRAPHICDATA.clearXpFeedbackTimeOut);
	}
	GRAPHICDATA.clearXpFeedbackTimeOut = window.setTimeout(clearXpFeedback, 3000);
	
	var fillBar = document.getElementById("xpPercent");
	var percent = playerCurrentXp / playerNextLevelXp * 100 | 0;
	fillBar.innerHTML = percent + "%";
	fillBar.style.width = percent + '%';
}

function clearXpFeedback() {
	GRAPHICDATA.clearXpFeedbackTimeOut = null;
	document.getElementById("xpGainFeedback").style.display = 'none';
}

function UILevelUp(levelNb) {
	createLevelUpPopup(levelNb, "imgs/ship1.png", "imgs/ship2.png");
	showPopUp("levelUp");
	
	var fillBar = document.getElementById("xpPercent");
	fillBar.innerHTML = "0%";
	fillBar.style.width = '1%';
}

