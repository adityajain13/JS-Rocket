var timer = null;
var countdownNumber = 10;

var changeState = function(state) {
	document.body.className = 'body-state' + state;
	
	clearInterval(timer);
	
	countdownNumber = 10;
	
	document.getElementById('countdown').innerHTML = countdownNumber;
			countdownNumber = countdownNumber - 1;
			
	document.getElementById('nervous').className = 'nervous';
	document.getElementById('cant-wait').className = 'cant-wait'
	
	if(state == 2) {
		
	}
	else if(state == 3) {
		var success = setTimeout(function() {
			var randomNumber = Math.round(Math.random()*10)
			
			console.log('randomNumber: ', randomNumber);
			
			if(randomNumber > 2) {
				changeState(4);
			}
			else {
				changeState(5);
			}
		}, 2000);
	}
}
