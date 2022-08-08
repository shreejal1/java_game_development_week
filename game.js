var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
var score = 0;
var logoCollected = 0;

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

//codes for creation and fall of nami & university logos
function namiLogo(){

	var body = document.getElementsByTagName('body')[0];
	var randomN = Math.ceil(Math.random()*2);
	var logos2 = document.createElement('img');
	logos2.className = 'logoNami';
	logos2.src = "logo" + randomN + ".png";
	var randNumber = Math.random()*10;
	body.appendChild(logos2);
	logos2.style.top = 50 + 'px';
	logos2.style.left = (randNumber * 150) + 'px'; 

	
	setInterval(namiunilogo, 20);

	var body = document.getElementsByTagName('body')[0];
	var player = document.getElementById('player');
	var playerLeft = parseInt(player.offsetLeft);
	var playerTop = parseInt(player.offsetTop);

	var manyLogos = document.getElementsByClassName('logoNami');
	for (var i = 0; manyLogos.length > i; i++) {
		var logos = manyLogos[i];
		logosTop = parseInt(logos.style.top);
		var logosLeft = parseInt(logos.style.left);
		if ((playerTop - logosTop) <= 85) {
			if (logosLeft >= (playerLeft - 70) 
						&&
			 	logosLeft <= (playerLeft + 70)){
					logoCollected += 1;
					logos.className = 'logosOnGround';
					setTimeout(function(){
						var logosOnGround = document.getElementsByClassName('logosOnGround');
						for (var i = 0; i < logosOnGround.length; i++) {
							body.removeChild(logosOnGround[i]);
						}
					}, 5);
				}
		}
	}



}


function namiunilogo(){
	var namiLogos = document.getElementsByClassName('logoNami');
	for (var i = 0; namiLogos.length > i; i++) {
		var logosnami = namiLogos[i];
		var logosTop = parseInt(logosnami.style.top);
		
		
		logosnami.style.top = logosTop + 1 + 'px';
		
	}
}



//game loads in webpage when start button is clicked.
function loadGame() {
	
	var start = document.getElementsByClassName('start');
	start[0].firstChild.nodeValue = 'Launch';
	setTimeout(function(){start[0].style.opacity = '0.8'; }, 200);
	setTimeout(function(){start[0].style.opacity = '0.6'; }, 400);
	setTimeout(function(){start[0].style.opacity = '0.2'; }, 600);
	setTimeout(function(){start[0].style.display = 'none'; }, 800);
	shipsInterval = setInterval(logosOnTop, 1000);
	namilogoint = setInterval(namiLogo, 750);
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
	var randNumber = Math.random()*60;
	var logos = document.createElement('img');
	logos.className = 'logos';
	var randomL = Math.ceil(Math.random() * 5);
	logos.src = randomL + ".png";
	body.appendChild(logos);
	logos.style.top = 50 + 'px';
	logos.style.left = (randNumber * 20) + 'px'; 
}

// logoss falls and vanish on ground
function releaseLogo() {
	
	var manyLogos = document.getElementsByClassName('logos');
	for (var i = 0; manyLogos.length > i; i++) {
		var logos = manyLogos[i];
		var logosTop = parseInt(logos.style.top);
		
		
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
				
				var logos = document.getElementsByClassName('logosOnGround');
				for (var i = 0; i < logos .length; i++) {
					body.removeChild(logos[i]);



					score += 1;
					var scoreb = document.getElementById('scorehere');
					scoreb.firstChild.nodeValue = 'SCORE : ' + (score + (logoCollected*10)) + '\nLogos Collected : ' + logoCollected;
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

	
	

	var scoreb = document.getElementById('scorehere');
	scoreb.remove();
	
	var start = document.getElementsByClassName('start')[0];
	start.style.display = 'block';
	start.style.opacity = '1';
	start.firstChild.nodeValue = 'PLAY AGAIN?';

	// player cannot move after dying
	document.removeEventListener('keydown', keydown);
	document.removeEventListener('keyup', keyup);
	clearInterval(timeout);

	

	
	// reloads the game
	start.addEventListener('click', function () {
		location.reload();
	});

	// input feild for player's name.
	setTimeout(function () {

		console.log(logoCollected);
		var chrName = prompt("Please Enter Your Name", "");
		window.localStorage.setItem("chrName", chrName);
		alert("Player Name: " + localStorage.getItem("chrName") + "\nScore: " + (score + (logoCollected*10)) + "\nLogos Collected: " + logoCollected);
		clearInterval(cracklogos);
		clearInterval(loadGame);

		// alerts player name and score.
	}, 10);
}


	document.addEventListener('DOMContentLoaded', btnClick);