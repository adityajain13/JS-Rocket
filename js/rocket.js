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
		timer = setInterval(function() {
			countdownNumber = countdownNumber - 1;
			
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if(countdownNumber > 3 && countdownNumber <= 7) {
				document.getElementById('nervous').className = 'nervous show';
			}
			else {
				document.getElementById('nervous').className = 'nervous';
			}
			
			if(countdownNumber > 2 && countdownNumber <= 3) {
				document.getElementById('cant-wait').className = 'cant-wait show';
			}
			else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}
			
			if(countdownNumber < 0) {
				changeState(3);
			}
		}, 1000);
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
