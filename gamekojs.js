
alert('Game is about to start !!!');

function logo(){

	if(int i = 4; i>0; i--){

	}
	var randomN= Math.round(Math.random()*900);
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

	
	

	setInterval(function(){
		var positiontop= logoNami.offsetTop;
		logoNami.style.top= positiontop + 1 + 'px';
	},
	25);

}
function loadFunction(){

setInterval(logo, 1000);

}

document.addEventListener('DOMContentLoaded', loadFunction);