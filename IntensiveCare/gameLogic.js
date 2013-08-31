	var playing = true;
	var counter = 0;
	var score = 0;
	var statuses  = ['dead', 'reanimating', 'grilled', 'alive'];
	var status = 'dead';

	function updateStatus() {
		if (counter < 30) {
			status = 'dead';
		} else if (counter < 70) {
			status = 'reanimating';
		} else {
			status = 'grilled';
		}
	}

	function bzzt() {
		counter++;
		updateStatus();
		console.log(counter);		
	}

	setInterval(function() {
		if (playing) {
			counter-=1;
			if (counter<0) {
				counter=0;
			}
			updateStatus();
			console.log('decr'+counter);
		}
	},1000);

	setTimeout(function() {
		playing = false;
		updateStatus();
		if (status=='reanimating') {
			status = 'alive';
		}
		if (status == 'dead' || status == 'grilled') {
			game.end(false,0);
		} else {
			game.end(true,Math.abs(50-counter));
		}
	},10000);