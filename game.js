var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
var score = 0;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	

	

}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	
	
	if (leftPressed) {
		var newLeft = positionLeft - 5;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';
		}


	}
	if (rightPressed) {
		var newLeft = positionLeft + 5;

		var element = document.elementFromPoint(newLeft + 100, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';
		}
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}

function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}

function btnClick() {
	var start = document.getElementsByClassName('start');
	start[0].addEventListener('click', loadGame);
}


//game loads in webpage when start button is clicked.
function loadGame() {
	var start = document.getElementsByClassName('start');
	start[0].firstChild.nodeValue = 'Launch';
	setTimeout(function(){start[0].style.opacity = '0.8'; }, 200);
	setTimeout(function(){start[0].style.opacity = '0.6'; }, 400);
	setTimeout(function(){start[0].style.opacity = '0.2'; }, 600);
	setTimeout(function(){start[0].style.display = 'none'; }, 800);
	shipsInterval = setInterval(logosOnTop, 500);
	setInterval(function(){
		if (score >= 4 && score <=6){
		setInterval(releaseLogo, 7);   // the flag's speed get enhanced
		 }
		if (score >= 7 && score <= 30) {
			setInterval(releaseLogo, 7);   //the flag's speed get enhanced
		}
		if (score >= 60 && score <= 110) {
			setInterval(releaseLogo, 6);   //ethe flag's speed get enhanced
		}
		if (score >= 111) {
			setInterval(releaseLogo, 5);   //the flag's speed get enhanced
		}
	}, 500);
	logosFalls = setInterval(releaseLogo, 20);
	
	myLoadFunction();
}


//players can see logoss and logoss falling from it on the screen.
function logosOnTop() {
	var body = document.getElementsByTagName('body')[0];
	var windowsize = screen.availWidth;
	var randNumber = Math.ceil(Math.random() * 1100);
	var logos = document.createElement('img');
	logos.className = 'logos';
	var randomL = Math.ceil(Math.random() * 10);
	logos.src = randomL + ".png";
	body.appendChild(logos);
	logos.style.top = 50 + 'px';  
	logos.style.left = (randNumber * 2) + 'px'; 
}

// logoss falls and vanish on ground
function releaseLogo() {
	var player = document.getElementById('player');
	var manyLogos = document.getElementsByClassName('logos');
	for (var i = 0; manyLogos.length > i; i++) {
		var logos = manyLogos[i];
		var logosTop = parseInt(logos.style.top);
		var logosLeft = parseInt(logos.style.left);
		var playerOnLeft = parseInt(player.offsetLeft);
		logos.style.top = logosTop + 1 + 'px';
		
	}
	logosAndPlayerCollide();
}



//if character is hit by logos, it loses a health & the logos explodes.
function logosAndPlayerCollide(){
	var body = document.getElementsByTagName('body')[0];
	var player = document.getElementById('player');
	var playerLeft = parseInt(player.offsetLeft);
	var playerTop = parseInt(player.offsetTop);

	var manyLogos = document.getElementsByClassName('logos');
	for (var i = 0; manyLogos.length > i; i++) {
		var logos = manyLogos[i];
		logosTop = parseInt(logos.style.top);
		console.log(logosTop);
		var logosLeft = parseInt(logos.style.left);
		if ((playerTop - logosTop) <= 85) {
			if (logosLeft >= (playerLeft - 70) 
						&&
			 	logosLeft <= (playerLeft + 70)){
					lifeLosses();
					logos.className = 'logosOnGround';
					setTimeout(function(){
						var logosOnGround = document.getElementsByClassName('logosOnGround');
						for (var i = 0; i < logosOnGround.length; i++) {
							body.removeChild(logosOnGround[i]);
						}
					}, 5);
				}
			cracklogos();
		}
	}
}


// logos explodes in different height on green area.
function cracklogos(){
	var body = document.getElementsByTagName('body')[0];
	var manyLogos = document.getElementsByClassName('logos');
	var player = document.getElementById('player');
	var playerTop = parseInt(player.offsetTop);
	for (var i = 0; manyLogos.length > i; i++) {
		var logos = manyLogos[i];
		logosTop = parseInt(logos.style.top);
		logosLeft = parseInt(logos.style.left);
		if (logosTop == playerTop) { // logos explodes a/c to player top position.
			logos.className = 'logosOnGround';
			setTimeout(function () {
				var scoreb = document.getElementById('scorehere');
				var logos = document.getElementsByClassName('logosOnGround');
				for (var i = 0; i < logos .length; i++) {
					body.removeChild(logos[i]);
					score += 1;
					scoreb.firstChild.nodeValue = 'SCORE : ' + score;

				}
			}, 5);
		}
	}
}


function lifeLosses(){
	var player = document.getElementById('player');
	var manyLives = document.getElementsByTagName('ul')[0];
	var aLife = document.getElementsByTagName('li');
	if (aLife.length > 1) {
		manyLives.removeChild(aLife[0]);
		player.className = 'characterdead';
	} 
	else {
		manyLives.removeChild(aLife[0]);
		player.className = 'characterdead';
		
		finishTheGame();
		
	}
}

// when character dies, the game stops and shows restart button for restarting the game.
function finishTheGame() {
	var start = document.getElementsByClassName('start')[0];
	start.style.display = 'block';
	start.style.opacity = '1';
	start.firstChild.nodeValue = 'PLAY AGAIN?';

	// player cannot move after dying
	document.removeEventListener('keydown', keydown);
	document.removeEventListener('keyup', keyup);
	clearInterval(timeout);

	

	//logos stops
	clearInterval(releaseLogo);
		clearInterval(logosOnTop);
		clearInterval(loadGame);

	// reloads the game
	start.addEventListener('click', function () {
		location.reload();
	});

	// input feild for player's name.
	setTimeout(function () {
		var chrName = prompt("Please Enter Your Name", "");
		window.localStorage.setItem("chrName", chrName);
		alert("Player Name: " + localStorage.getItem("chrName") + "\nScore: " + score);
		// alerts player name and score.
	}, 10);
}


	document.addEventListener('DOMContentLoaded', btnClick);