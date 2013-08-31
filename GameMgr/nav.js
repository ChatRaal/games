function showScreen(id) {
	//console.log('showScreen '+id);
	$('#screens>div').hide();
	$('#'+id).show();
}

$(document).ready(function() {
	$('#gameTitle').append(gameName);
	showScreen('welcome');
	
	if (window.location.search != "") {
		var str = window.location.search.substr(1);
		var found = false;
		for (i = 0; i< gamesId.length; i++) {
			if (gamesId[i] == str) {
				found = true;
			}
		}
		if (found) {
			$('.backHome').remove();
			showScreen('loading');
			loadGames(str);
		} else {
			console.log('Game not found: '+str);
		}	
	}
	
	$('#lstart').click(function() {
		showScreen('loading');
		loadGames();
        return false;
    });

	$('.backHome').click(function() {
		$('#hud').hide();
		showScreen('welcome');
        return false;
    }); 
	$('#lleaderboard').click(function() {
		updateLeaderboard(10);
		$('.highscoresList').show();
		showScreen('leaderboard');
        return false;
    });
	$('#lcredits').click(function() {
		renderCredits();
		showScreen('credits');
        return false;
    });   

    $('#inputScoreWinner').submit(function() { addToLeaderboard(true); return false; });
    $('#inputScoreLoser').submit(function() { addToLeaderboard(false);  return false; });

});