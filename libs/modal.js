var ModalManager = function() {
	this.overlay = document.createElement("div");
	this.overlay.style.position = "absolute";
	this.overlay.style.left = "0px";
	this.overlay.style.top = "0px";
	this.overlay.style.backgroundColor = "black";
	this.overlay.style.opacity = "0.35";
	this.overlay.style.zIndex = "9000";
	
	this.modals = {};
	
	this.animTime = 0.5;
}

ModalManager.getInstance = function() {
	if(!this.instance) {
		this.instance = new ModalManager();
	}
	return this.instance;
};

ModalManager.prototype.createModal = function(name, width, innerHTML, isBlocking, destructTime, animationTime, destructFunctionString) {
	destructFunction = destructFunctionString + "('"+name+"')" || "ModalManager.getInstance().hideModal('"+name+"')";
	var closeButton = document.createElement("span");
	closeButton.style.cssFloat = "right";
	closeButton.style.cursor = "pointer";
	closeButton.innerHTML = "X";
	closeButton.setAttribute("onclick", destructFunction);
	
	var modal = document.createElement("div");
	var innerModal = document.createElement("div");
	modal.id = name;
	modal.style.position = "absolute";
	modal.style.backgroundColor = "white";
	modal.style.fontFamily = "Helvetica Neue,Helvetica,Arial,sans-serif";
	modal.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.5)";
	modal.style.border = "1px solid rgba(0, 0, 0, 0.2)";
	modal.style.borderRadius = "4px";
	modal.style.overflow = "hidden";
	modal.style.zIndex = "9001";
	modal.relativeWidth = width; // width is in percent so that the width is actually set at the opening of the modal and not fixed at creation
	modal.finalY = 50;
	modal.isBlocking = isBlocking;
	modal.destructTime = destructTime;
	modal.animationTime = animationTime || this.animTime;
	
	modal.appendChild(innerModal);
	innerModal.appendChild(closeButton);
	innerModal.innerHTML += innerHTML;
	innerModal.style.padding = "15px";
	innerModal.style.overflowY = "auto";
	
	this.modals[name] = modal;
	
	return modal;
}

ModalManager.prototype.showOverlay = function() {
	this.overlay.style.width = window.innerWidth + "px";
	this.overlay.style.height = window.innerHeight + "px";
	document.body.appendChild(this.overlay);
}

ModalManager.prototype.hideOverlay = function() {
	document.body.removeChild(this.overlay);
}

ModalManager.prototype.showModal = function(name) {
	if(!this.modals[name]) {
		console.error("modal: " + name + " doesn't exists");
		return;
	}
	
	if(this.modals[name].isBlocking) {
		this.showOverlay();
	}
	
	this.animatingModal = name;
	
	var modalWidth = this.modals[name].relativeWidth * window.innerWidth
	this.modals[name].style.width = modalWidth + "px";
	this.modals[name].children[0].style.maxHeight = window.innerHeight * 0.8 + "px";
	this.modals[name].style.left = window.innerWidth/2 - modalWidth/2 + "px";
	
	document.body.appendChild(this.modals[name]);
	
	var h = this.modals[name].getBoundingClientRect().height
	this.modals[name].style.top = - h + "px";
	this.modals[name].style.transition = 'transform ' + this.modals[name].animationTime + 's';
	this.modals[name].style.transform = 'translate(0%,' + (window.innerHeight/2 + h/2 | 0) + 'px)';
	
	if(this.modals[name].destructTime) {
		window.setTimeout( function() { ModalManager.getInstance().hideModal(name) }, this.modals[name].animationTime*1000 + this.modals[name].destructTime);
	}	
}

ModalManager.prototype.hideModal = function(name) {
	if(this.modals[name].isBlocking) {
		this.hideOverlay();
	}
	this.modals[name].style.transform = 'translate(0%,' + (-this.modals[name].getBoundingClientRect().height-50) + 'px)';
	var name = this.modals[name];
	window.setTimeout(function() { document.body.removeChild(name) }, name.animationTime*1000);
}
