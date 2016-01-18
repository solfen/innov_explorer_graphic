window.GRAPHICDATA = {};

GRAPHICDATA.imgsLoaded = 0;
GRAPHICDATA.isImgsLoaded = false;
GRAPHICDATA.isImgsLoaded = false;

GRAPHICDATA.pixiTexturesList = [
	"imgs/planet.png",
	"imgs/1.png"
];

GRAPHICDATA.imagesList = [
	"imgs/planet.png",
	"imgs/placeHolderPopUPImg.jpg",
	"imgs/cloud1.jpg",
	"imgs/cloud2.jpg",
	"imgs/cloud3.jpg",
	"imgs/cloud4.jpg",
	"imgs/cloud5.jpg",
	"imgs/repeatableStarfield1.png",
	"imgs/repeatableStarfield2.png",
	"imgs/ship1.png", 
	"imgs/ship2.png"
];

GRAPHICDATA.images = {};

GRAPHICDATA.planetUITemplate = '<table><tbody><tr><td style="width: 50%;"><img src="{{imgSrc}}" alt="une photo" style="width: 100%;"></td><td><h2>{{title}}</h2><p>{{text}}</p></td></tr></tbody></table>';

GRAPHICDATA.carnetPopupTemplate = '<h2 style="text-align: center;">Exploration Notebook</h2><div style="text-align: center;width: 90%;height: 25px;border:1px solid black;margin: auto;border-radius: 10px;"><div style="width: {{percent}}%;height: 100%;background-color: green;border-radius: inherit;">{{percent}}%</div></div><hr/><table><tbody>{{content}}</tbody></table></div>';

GRAPHICDATA.mapPopup = '<h2 style="text-align: center;">Space Map</h2><hr><div><img src="imgs/space_map.png" alt="space map" style="width: 100%"></div>';

GRAPHICDATA.carnetPlanetSummaryTemplate = '<tr><td style="width: 15%;"><img src="{{img}}" style="width: 100%;"></td><td style="width:80%"><p style="font-size:18px;">{{summary}}</p></td><td style="width: 10%;"><div class="button" style="width: 100%;" onclick="showPopUp(\'{{name}}\')">Details</div></td></tr>';

GRAPHICDATA.levelUpPopupTemplate = '<h1 style="text-align: center;">Level Up!</h1><h4 style="text-align:center;">Welcome to level {{lvlNb}}! Choose one of the two possible upgrades</h4><hr><table><tr><td style="width: 20%; padding-bottom: 10px;"><img src="{{img1}}" style="width: 100%;"></td><td style="width:70%; padding-bottom: 10px;"><div class="FillBar" style="width: 50%; height: 20px;margin: auto; margin-bottom: 5px;"><div class="FillBarFillIndex" style="width: {{speedPercent}}%; background-color: #188FF0">{{speedPercent}}%</div><div style="color:black; margin-left: -55px; margin-top: -20px;">Speed:</div></div><div class="FillBar" style="width: 50%; height: 20px;margin: auto;"><div class="FillBarFillIndex" style="width: {{toughnessPercent}}%; background-color: #1ABD11; margin-bottom: 5px;">{{toughnessPercent}}%</div><div style="color:black; margin-left: -88px; margin-top: -20px;">Toughness:</div></div></div></td><td style="width: 10%;"><div class="button" style="width: 100%;" onclick="chooseLvlReward(0)">Choose</div></td></tr><tr><td style="width: 20%; padding-bottom: 10px;"><img src="{{img2}}" style="width: 100%;"></td><td style="width:70%; padding-bottom: 10px;"><div class="FillBar" style="width: 50%; height: 20px;margin: auto; margin-bottom: 5px;"><div class="FillBarFillIndex" style="width: {{speedPercent2}}%; background-color: #188FF0">{{speedPercent2}}%</div><div style="color:black; margin-left: -55px; margin-top: -20px;">Speed:</div></div><div class="FillBar" style="width: 50%; height: 20px;margin: auto;"><div class="FillBarFillIndex" style="width: {{toughnessPercent2}}%; background-color: #1ABD11; margin-bottom: 5px;">{{toughnessPercent2}}%</div><div style="color:black; margin-left: -88px; margin-top: -20px;">Toughness:</div></div></td><td style="width: 10%;"><div class="button" style="width: 100%;" onclick="chooseLvlReward(1)">Choose</div></td></tr></table>'

GRAPHICDATA.spaceShips = {

}

GRAPHICDATA.spaceShipsTrees = {
	
}

GRAPHICDATA.popupsData = {
	"planets": {
		"uranus" : {
			"img":  "imgs/placeHolderPopUPImg.jpg",
			"title": "Happy pepole",
			"text": "Bacon ipsum dolor amet short ribs fatback ham pancetta, bacon venison bresaola hamburger ground round cow pork chop andouille short loin meatball turkey. Turducken filet mignon tri-tip shankle ball tip fatback sausage. Short loin salami landjaeger jerky boudin. Salami venison bacon corned beef pork loin shankle picanha shank t-bone tongue filet mignon bresaola swine. Drumstick hamburger pork loin meatball.Spare ribs jowl kielbasa ball tip. Pastrami doner ball tip turkey, cow jerky shank ham hock pancetta shoulder. Meatball tri-tip andouille chuck beef ribs. Ham andouille tail, cupim meatball capicola fatback ribeye ball tip pork chop pancetta pork loin turkey shankle. Turducken doner salami pancetta shankle cow leberkas spare ribs ball tip chuck strip steak. Brisket jerky capicola tenderloin short loin pork loin hamburger chuck sirloin pig pork boudin."
		},		
		"neptune" : {
			"img":  "imgs/placeHolderPopUPImg.jpg",
			"title": "Happy pepole",
			"text": "BACON Bacon ipsum dolor amet short ribs fatback ham pancetta, bacon venison bresaola hamburger ground round cow pork chop andouille short loin meatball turkey. Turducken filet mignon tri-tip shankle ball tip fatback sausage. Short loin salami landjaeger jerky boudin. Salami venison bacon corned beef pork loin shankle picanha shank t-bone tongue filet mignon bresaola swine. Drumstick hamburger pork loin meatball.Spare ribs jowl kielbasa ball tip. Pastrami doner ball tip turkey, cow jerky shank ham hock pancetta shoulder. Meatball tri-tip andouille chuck beef ribs. Ham andouille tail, cupim meatball capicola fatback ribeye ball tip pork chop pancetta pork loin turkey shankle. Turducken doner salami pancetta shankle cow leberkas spare ribs ball tip chuck strip steak. Brisket jerky capicola tenderloin short loin pork loin hamburger chuck sirloin pig pork boudin."
		}
	},
	
	"carnet" : {
		"lockedTemplate": {
			"img" : "imgs/planetLocked.png",
			"summary" : "Locked ! Visit the planet to unlock the summary.",
			"isUnlocked" : false
		},
		"planets": {
			"uranus": {
				"img" : "imgs/planetPlaceholder.png",
				"summary" : "Bacon ipsum dolor amet jowl beef porchetta, venison fatback tongue pork ball tip sausage capicola. Porchetta spare ribs strip steak, beef short ribs shankle ground round flank cupim ball tip turducken. Ball tip shoulder cupim jerky pork kielbasa. Turkey hamburger chuck cow filet mignon, short ribs pork ham. Pork loin hamburger bresaola ribeye corned beef pork cupim.",
				"isUnlocked" : true
			},			
			"neptune": {
				"img" : "imgs/planetPlaceholder.png",
				"summary" : "Bacon ipsum dolor amet jowl beef porchetta, venison fatback tongue pork ball tip sausage capicola. Porchetta spare ribs strip steak, beef short ribs shankle ground round flank cupim ball tip turducken. Ball tip shoulder cupim jerky pork kielbasa. Turkey hamburger chuck cow filet mignon, short ribs pork ham. Pork loin hamburger bresaola ribeye corned beef pork cupim.",
				"isUnlocked" : false
			},			
			"saturne": {
				"img" : "imgs/planetPlaceholder.png",
				"summary" : "Bacon ipsum dolor amet jowl beef porchetta, venison fatback tongue pork ball tip sausage capicola. Porchetta spare ribs strip steak, beef short ribs shankle ground round flank cupim ball tip turducken. Ball tip shoulder cupim jerky pork kielbasa. Turkey hamburger chuck cow filet mignon, short ribs pork ham. Pork loin hamburger bresaola ribeye corned beef pork cupim.",
				"isUnlocked" : false
			},			
			"Nemo": {
				"img" : "imgs/planetPlaceholder.png",
				"summary" : "Bacon ipsum dolor amet jowl beef porchetta, venison fatback tongue pork ball tip sausage capicola. Porchetta spare ribs strip steak, beef short ribs shankle ground round flank cupim ball tip turducken. Ball tip shoulder cupim jerky pork kielbasa. Turkey hamburger chuck cow filet mignon, short ribs pork ham. Pork loin hamburger bresaola ribeye corned beef pork cupim.",
				"isUnlocked" : false
			},			
			"Nemo2": {
				"img" : "imgs/planetPlaceholder.png",
				"summary" : "Bacon ipsum dolor amet jowl beef porchetta, venison fatback tongue pork ball tip sausage capicola. Porchetta spare ribs strip steak, beef short ribs shankle ground round flank cupim ball tip turducken. Ball tip shoulder cupim jerky pork kielbasa. Turkey hamburger chuck cow filet mignon, short ribs pork ham. Pork loin hamburger bresaola ribeye corned beef pork cupim.",
				"isUnlocked" : false
			},
		}
	}
}
