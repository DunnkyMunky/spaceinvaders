
var left = 0;



function move(key){
	console.log(key)
	var ship = document.getElementById("ruimteschip")
	var pixleft = parseInt(document.getElementById("ruimteschip").style.left)
	
	if(parseInt(ship.style.left) <= 1780  && key == "ArrowRight"){

		
		var pixleft = parseInt(document.getElementById("ruimteschip").style.left)
		pixleft +=15;
		console.log("pixleft: " + pixleft)
		document.getElementById("ruimteschip").style.left = pixleft + "px";
		
		
	}
	

	if(parseInt(ship.style.left) >= 10  && key == "ArrowLeft"){

		
		var pixleft = parseInt(document.getElementById("ruimteschip").style.left)
		pixleft -=15;
		console.log("pixleft: " + pixleft)
		document.getElementById("ruimteschip").style.left = pixleft + "px";
		
		
	}
	
	
	if( key == "ArrowUp"){
		
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