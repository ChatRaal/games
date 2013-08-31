(function() {
	if (window==window.top) { 
		// we are not in a frame so we can load the simulator

		var g = new CWGame('mock');
		function mockLoading() {
			g.start({difficulty: 1});
		}

		function mockGameTransition(wonGame, score) {
			var res = wonGame?"won":"lost";
			console.log('end game: '+res+' score='+score);
			var result = document.getElementById('cwResult');
			result.innerHTML = res;
			result.score = score;
		}

		g.onReady(mockLoading);
		g.onEnd(mockGameTransition);

		document.addEventListener('DOMContentLoaded',function(){
			var div = document.createElement('div');
			div.id = "cwResult";
			div.style = "display: none";
			var body = document.getElementsByTagName('body')[0];
			body.appendChild(div);	
			gameLoad(g); 
		});

	}
})();