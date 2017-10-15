var hod = 0;
function checkWinner(){
	var allblock = document.getElementsByClassName("block");
	console.log(allblock);
	if(allblock[0].innerHTML=="X" && allblock[1].innerHTML=="X" && allblock[2].innerHTML=="X"){alert("Победили крестики!")	}
	if(allblock[3].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[5].innerHTML=="X"){alert("Победили крестики!")	}
	if(allblock[6].innerHTML=="X" && allblock[7].innerHTML=="X" && allblock[8].innerHTML=="X"){alert("Победили крестики!")	}
	if(allblock[0].innerHTML=="X" && allblock[3].innerHTML=="X" && allblock[6].innerHTML=="X"){alert("Победили крестики!")	}
	if(allblock[1].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[7].innerHTML=="X"){alert("Победили крестики!")	}
	if(allblock[2].innerHTML=="X" && allblock[5].innerHTML=="X" && allblock[8].innerHTML=="X"){alert("Победили крестики!")	}
	if(allblock[0].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[8].innerHTML=="X"){alert("Победили крестики!")	} 
	if(allblock[2].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[6].innerHTML=="X"){alert("Победили крестики!")	}  
		//noliki))
	if(allblock[0].innerHTML=="O" && allblock[1].innerHTML=="O" && allblock[2].innerHTML=="O"){alert("Победили нолики!")	}
	if(allblock[3].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[5].innerHTML=="O"){alert("Победили нолики!")	}
	if(allblock[6].innerHTML=="O" && allblock[7].innerHTML=="O" && allblock[8].innerHTML=="O"){alert("Победили нолики!")	}
	if(allblock[0].innerHTML=="O" && allblock[3].innerHTML=="O" && allblock[6].innerHTML=="O"){alert("Победили нолики!")	}
	if(allblock[1].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[7].innerHTML=="O"){alert("Победили нолики!")	}
	if(allblock[2].innerHTML=="O" && allblock[5].innerHTML=="O" && allblock[8].innerHTML=="O"){alert("Победили нолики!")	}
	if(allblock[0].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[8].innerHTML=="O"){alert("Победили нолики!")	} 
	if(allblock[2].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[6].innerHTML=="O"){alert("Победили нолики!")	}  

}
	document.getElementById("Game").onclick = function(event) {
		console.log(event)
		if(event.target.className == "block") {
			if(hod % 2== 0){
				event.target.innerHTML = "X";
			}			
			else {
				event.target.innerHTML = "O";
			}
			hod++
			checkWinner();

		}

}
