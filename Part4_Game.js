// Restart Game Button
var restart = document.querySelector("#b");

// Grab all the squares
var squares=document.querySelectorAll("td");

// Clear Squares Function
function clearBoard() {
	for(var i=0;i<squares.length;i++){
		squares[i].textContent='';
	}
}

restart.addEventListener('click',clearBoard);


// Create a function that will check the square marker
function changeMarker(){
	if(this.textContent===''){
		this.textContent='X';
	}
	else if(this.textContent==='X'){
		this.textContent='O';
	}
	else{
		this.textContent='';
	}
}

// Use a for loop to add Event listeners to all the squares
for(var j=0;j<squares.length;j++){
	squares[j].addEventListener('click',changeMarker);
}