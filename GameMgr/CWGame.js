function CWGame(id) {
	this.id = id;
	this.startCB = null;
	this.readyCB = null;
	this.endCB = null;
	this.status = "stopped";
	this.preload = true;
};

// methods to use in your game

// CWGame.onStart(function(params) {}): pass a callback function with one parameter, the difficulty. 
// This callback function will be called when your game must start
CWGame.prototype.onStart = function(callback)
{
	this.startCB = callback;
}

// CWGame.end(wonGame, score): call this when the game is over. wonGame (boolean), score (integer)
CWGame.prototype.end = function(wonGame, score)
{
    if ((typeof wonGame)!='boolean' && (typeof score) !='integer') {
    	throw "CWGame.end: invalid data";
    }
    if (this.status != "stopped") {
	this.status = "stopped";
	console.log('['+this.id+'] end');
	this.endCB(wonGame, score); 
    }	else {
	console.log('['+this.id+'] already stopped!');
    }
}

CWGame.prototype.ready = function()
{
	if (this.status != "ready") {
		this.status = "ready";
		console.log('['+this.id+'] ready');
		this.readyCB();
	} else {
		console.log('['+this.id+'] already ready!');		
	}
}

CWGame.prototype.onReady = function(callback)
{
	this.readyCB = callback;
}

CWGame.prototype.start = function(params)
{
	if (this.status != "running") {
		this.status = "running";
		if (this.startCB != null) {
			console.log('['+this.id+'] start');
			this.startCB(params);
		} else {
			console.log('['+this.id+'] CWGame.onStart is not set!');
		}
	} else {
		console.log('['+this.id+'] already started');
	}
}

CWGame.prototype.onEnd = function(callback)
{
	this.endCB = callback;
}



