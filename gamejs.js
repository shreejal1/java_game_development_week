function moveLeft() {
  var element = document.getElementById("backfront");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 10 + "px";
}

function moveRight() {
  var element = document.getElementById("backfront");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 10 + "px";
}

var interval = 0;
function myKeyDown(event) {
  if (event.keyCode == 37) {
    moveLeft();
    // interval = setInterval(moveLeft, 10);
  }
  if (event.keyCode == 39) {
    moveRight();
    //interval = setInterval(moveRight, 10);
  }
}


alert('About the game: \n This fun game is based on the theme related to nami college. \n Instructions: \n Logo of nami increases score by 1\n Logo of University Of Northampton increases score by 5 \n Logo of other colleges kills the character \n Touching the boundary kills the character \n GOODLUCK !!!');


function logo(){

  var randomN= Math.round(Math.random()*1800);
  //var logoNami= document.getElementById('namiL');
  
  

  var logoNami= document.createElement('img');
  //logoNami.className='namiL';
  
  logoNami.src = 'nami.png';
  logoNami.style.marginLeft= randomN +'px';
  logoNami.style.width = 110 + 'px';
  logoNami.style.height = 110 + 'px';
  logoNami.style.position = 'absolute';
  //logoNami.style.offsetTop = 0 + 'px';
  //logoNami.style.marginTop = -720 + 'px';

  var body=document.getElementsByTagName('body')[0].appendChild(logoNami);
  var source=document.getElementById('backfront');
  
  

  setInterval(function(){
    var positiontop= logoNami.offsetTop;
    logoNami.style.top= positiontop + 10 + 'px';
  },
  25);

 

  setInterval(function(){
    logoNami.remove();
  }, 1600);

  if (logoNami.x < source.x + source.width &&
   logoNami.x + logoNami.width > source.x &&
   logoNami.y < source.y + source.height &&
   logoNami.height + logoNami.y > source.y) {
    alert('out');
}
}


function uonLogo(){
var randomU= Math.round(Math.random()*1000);
var logoUon= document.createElement('img');
logoUon.src = 'uon.png';
  logoUon.style.marginLeft= randomU +'px';
  logoUon.style.width = 110 + 'px';
  logoUon.style.height = 110 + 'px';
  logoUon.style.position = 'absolute';

 var body=document.getElementsByTagName('body')[0].appendChild(logoUon);

setInterval(function(){
    var positiontop= logoUon.offsetTop;
    logoUon.style.top= positiontop + 15 + 'px';
  },
  25);

  setInterval(function(){
    logoUon.remove();
  }, 1000);
}

function oneLogo() {
var random1= Math.round(Math.random()*1000);
var oneLogo= document.createElement('img');
oneLogo.src = '1.png';
  oneLogo.style.marginLeft= random1 +'px';
  oneLogo.style.width = 110 + 'px';
  oneLogo.style.height = 110 + 'px';
  oneLogo.style.position = 'absolute';

 var body=document.getElementsByTagName('body')[0].appendChild(oneLogo);

setInterval(function(){
    var positiontop= oneLogo.offsetTop;
    oneLogo.style.top= positiontop + 15 + 'px';
  },
  25);

  setInterval(function(){
    oneLogo.remove();
  }, 1000);
}

function twoLogo(){
var random2= Math.round(Math.random()*1000);
var twoLogo= document.createElement('img');
twoLogo.src = '2.png';
  twoLogo.style.marginLeft= random2 +'px';
  twoLogo.style.width = 110 + 'px';
  twoLogo.style.height = 110 + 'px';
  twoLogo.style.position = 'absolute';

 var body=document.getElementsByTagName('body')[0].appendChild(twoLogo);

setInterval(function(){
    var positiontop= twoLogo.offsetTop;
    twoLogo.style.top= positiontop + 15 + 'px';
  },
  25);

  setInterval(function(){
    twoLogo.remove();
  }, 1000);
}



function countdown(){
  var countdown = document.getElementById('start');
  countdown.style.width= 200 + 'px';
  countdown.style.height= 40 + 'px';
  countdown.style.backgroundColor = 'lawngreen';
  countdown.style.top = 50 + '%';
  countdown.style.left = 50 + '%';
  countdown.style.textAlign = 'center';
  countdown.style.position = 'absolute';
  countdown.style.marginLeft = '-' + 100 + 'px';
  countdown.style.borderRadius = 10 + '%';
  countdown.style.cursor = 'pointer';
  countdown.addEventListener('click', function(){
    countdown.remove();
    myLoadEvent();
  });


  //countdown.style.display = 'center';

  //var skycountdown = document.getElementById('start').appendChild(countdown);

}

function myLoadEvent() {

  setInterval(logo, 1000);
  setInterval(oneLogo, 4000);
  setInterval(twoLogo, 6000);
  setInterval(uonLogo, 10000);

  document.addEventListener("keydown", myKeyDown);
}
document.addEventListener("DOMContentLoaded", countdown);
