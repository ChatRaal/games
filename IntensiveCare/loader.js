function Loader(endCallback) {
	this.queued = 0;
	this.queuedFunctions = [];
	this.endCallback = endCallback;
}

Loader.prototype.attachedOne = function() {
	this.queue++;
};
 
Loader.prototype.finishedOne = function() {
	this.queue--;
};

Loader.prototype.gogogo = function() {
	var self = this;
	self.timer = setInterval(function(){
		if (self.queued === 0) {
			clearInterval(self.timer);
			self.endCallback();
		}
	}, 100);
}