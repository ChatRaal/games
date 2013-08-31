$(document).ready(function() {
	 sounds['levelup'] = new Howl({urls: ['skinbbq/sfx/levelup.wav']});
	 sounds['ready'] = new Howl({urls: ['skinbbq/sfx/ready.wav']});
	 sounds['select'] = new Howl({urls: ['skinbbq/sfx/select.wav']});
	 sounds['youlose'] = new Howl({urls: ['skinbbq/sfx/youlose.wav']});
	 sounds['youwin'] = new Howl({urls: ['skinbbq/sfx/youwin.wav']});
	 
	 $('#lstart, #lleaderboard, #lcredits').click(function() {
		sounds['select'].play(); 
	 });
 });