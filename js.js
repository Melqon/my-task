var hod = 0;
function checkWinner(){
	var allblock = document.getElementsByClassName("block");
	console.log(allblock);
	let score1 = 0;
	let score2 = 0;
	var txt = document.getElementById("text");

	if(allblock[0].innerHTML=="X" && allblock[1].innerHTML=="X" && allblock[2].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики `" + "  "+ (++score1) + " : "+ score2+	"</h1>"}
	if(allblock[3].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[5].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	}
	if(allblock[6].innerHTML=="X" && allblock[7].innerHTML=="X" && allblock[8].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	}
	if(allblock[0].innerHTML=="X" && allblock[3].innerHTML=="X" && allblock[6].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	}
	if(allblock[1].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[7].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	}
	if(allblock[2].innerHTML=="X" && allblock[5].innerHTML=="X" && allblock[8].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	}
	if(allblock[0].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[8].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	} 
	if(allblock[2].innerHTML=="X" && allblock[4].innerHTML=="X" && allblock[6].innerHTML=="X"){txt.innerHTML = "<h1>"+"Победили крестики" + "  "+ (++score1) + " : "+ score2+	"</h1>"	}  
		//noliki))
	if(allblock[0].innerHTML=="O" && allblock[1].innerHTML=="O" && allblock[2].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}
	if(allblock[3].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[5].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}
	if(allblock[6].innerHTML=="O" && allblock[7].innerHTML=="O" && allblock[8].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}
	if(allblock[0].innerHTML=="O" && allblock[3].innerHTML=="O" && allblock[6].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}
	if(allblock[1].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[7].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}	
	if(allblock[2].innerHTML=="O" && allblock[5].innerHTML=="O" && allblock[8].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}
	if(allblock[0].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[8].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"}	 
	if(allblock[2].innerHTML=="O" && allblock[4].innerHTML=="O" && allblock[6].innerHTML=="O"){txt.innerHTML ="<h1>"+"Победили Нолики" + "  "+ (++score2) + " : "+ score1+	"</h1>"} 
		

				// mekel ay es nichayi pahy chi linum

		if(allblock.innerHTML== ""){alert("nicha")}
}	

				// ay es replayi momenty chem karum anem
   	function replay(){
		document.getElementsByClassName("block")
	}
	document.getElementById("Game").onclick = function(event) {
		console.log(event)
		if(event.target.className == "block") {

			if(event.target.innerHTML == 0){
			if(hod % 2== 0 ){
				event.target.innerHTML = "X";
			}			
			else {
				event.target.innerHTML = "O";
			}
			hod++
			checkWinner();
		}
		}

}
