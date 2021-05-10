var left = 0;
function move(key){
	console.log(key);
	var ship = document.getElementById('schip')
		//console.log(ship)
	left = parseInt(ship.style.left) //45% -> parseInt -> 45
	if (key === 'ArrowRight' && left <= 90){
		left= left+5;
		ship.style.left = left + "%";
	}
	if (key === 'ArrowLeft' && left >= 1){
		left= left - 5;
		ship.style.left = left + "%";
	}
	if (key === 'ArrowUp'){
		shoot()
	}
}

function shoot(){
	var img = document.createElement('img');
		img.className = "shot";
		img.src = 'lasershot.png';
		img.style.position = "fixed";
		img.style.width = 2.8 + "%";
		img.style.height = 6 + "%";
		img.style.left = left + 5.6 + "%";
		img.style.top = 75 + "%";
		document.body.appendChild(img);
}

function shootup(){
	//console.log('shootup functie')
	var shots = document.getElementsByClassName('shot');
	for (let i = 0; i<shots.length; i++){
		var top = parseInt(shots[i].style.top) //75% -> parseint -> 75
		top--;
		shots[i].style.top = top + "%"
		
		if (top < 0){
			removeimg(shots[i])
		}
	}
	
}

function removeimg(img){
	console.log('Cleanup of ' + img)
	img.parentNode.removeChild(img)
}

setInterval(shootup, 15);