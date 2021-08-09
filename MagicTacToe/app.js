let icon = false;
let gameMatrix = [[0,0,0],[0,0,0],[0,0,0]];
let win = false;

document.querySelectorAll(".icon-holder").forEach(elem=>{
	elem.addEventListener('click',event=>{
		if(!win)
		if(!document.querySelector("#"+elem.getAttribute("id")+" img").src.includes(".png")){
			if(icon){
				document.querySelector("#"+elem.getAttribute("id")+" img").src = "./0.png";
				icon = false;
				gameMatrix[elem.getAttribute("x")][elem.getAttribute("y")] = 1;
				checkForWin();
			}
			else{
				document.querySelector("#"+elem.getAttribute("id")+" img").src = "./1.png";
				icon = true;
				gameMatrix[elem.getAttribute("x")][elem.getAttribute("y")] = 2;
				checkForWin();
			}
		}
	})
})
function checkForWin(){
	console.log("check For Win is running...")
	console.log(gameMatrix)
	
	if(gameMatrix[0][0]==gameMatrix[1][1]&&gameMatrix[1][1]==gameMatrix[2][2]){
		if(gameMatrix[0][0]+gameMatrix[1][1]+gameMatrix[2][2]!=0){
			console.log("Left Diagonal Win")
			win = true;
			document.querySelector('.win-slash').style.top="0"
			document.querySelector('.win-slash').style.transform="rotate(45deg)";
			document.querySelector('.win-slash').style.right="0"
			document.querySelector('.win-slash').style.left="0"
			document.querySelector('.win-slash').style.bottom="0"
		}
	}
	
	if(gameMatrix[0][2]==gameMatrix[1][1]&&gameMatrix[1][1]==gameMatrix[2][0]){
		if(gameMatrix[2][0]+gameMatrix[1][1]+gameMatrix[2][0]!=0){
			console.log("Right Diagonal Win")
			win = true;
			
			document.querySelector('.win-slash').style.top="0"
			document.querySelector('.win-slash').style.transform="rotate(-45deg)";
			document.querySelector('.win-slash').style.right="0"
			document.querySelector('.win-slash').style.left="0"
			document.querySelector('.win-slash').style.bottom="0"
		}
	}
	
	if(gameMatrix[0][0]==gameMatrix[0][1]&&gameMatrix[0][1]==gameMatrix[0][2]){
		if(gameMatrix[0][0]+gameMatrix[0][1]+gameMatrix[0][2]!=0){
			console.log("Top Row Win")
			win = true;
			document.querySelector('.win-slash').style.top="15%"
		}
	}
	
	if(gameMatrix[1][0]==gameMatrix[1][1]&&gameMatrix[1][1]==gameMatrix[1][2]){
		if(gameMatrix[1][0]+gameMatrix[1][1]+gameMatrix[1][2]!=0){
			console.log("Middle Row Win")
			win = true;
			document.querySelector('.win-slash').style.top="50%"
		}
	}
	
	if(gameMatrix[2][0]==gameMatrix[2][1]&&gameMatrix[2][1]==gameMatrix[2][2]){
		if(gameMatrix[2][0]+gameMatrix[2][1]+gameMatrix[2][2]!=0){
			console.log("Bottom Row Win")
			win = true;
			document.querySelector('.win-slash').style.top="85%"
		}
	}
	
	if(gameMatrix[0][0]==gameMatrix[1][0]&&gameMatrix[1][0]==gameMatrix[2][0]){
		if(gameMatrix[0][0]+gameMatrix[1][0]+gameMatrix[2][0]!=0){
			console.log("Left Column Win")
			win = true;
			document.querySelector('.win-slash').style.top="0"
			document.querySelector('.win-slash').style.transform="rotate(90deg)";
			document.querySelector('.win-slash').style.left="-67%"
			document.querySelector('.win-slash').style.bottom="0"
		}
	}
	
	if(gameMatrix[0][1]==gameMatrix[1][1]&&gameMatrix[1][1]==gameMatrix[2][1]){
		if(gameMatrix[0][1]+gameMatrix[1][1]+gameMatrix[2][1]!=0){
			console.log("Middle Column Win")
			win = true;
			document.querySelector('.win-slash').style.top="0"
			document.querySelector('.win-slash').style.transform="rotate(90deg)";
			document.querySelector('.win-slash').style.left="0"
			document.querySelector('.win-slash').style.bottom="0"
		}
	}
	
	if(gameMatrix[0][2]==gameMatrix[1][2]&&gameMatrix[1][2]==gameMatrix[2][2]){
		if(gameMatrix[0][2]+gameMatrix[1][2]+gameMatrix[2][2]!=0){
			console.log("Right Column Win")
			win = true;
			document.querySelector('.win-slash').style.top="0"
			document.querySelector('.win-slash').style.transform="rotate(90deg)";
			document.querySelector('.win-slash').style.left="41%"
			document.querySelector('.win-slash').style.bottom="0"
		}
	}
	
	if(win){
		document.querySelector('.win-slash').style.width="85%"
		document.querySelector('.who-wins img').src = (!icon)?"./0.png":"./1.png";
		document.querySelector(".who-wins").style.opacity = "1";
	}
	
	//Check if tie
	let filled = true;
	for(let i = 0 ; i < 3 ; i++)
		for(let j = 0 ; j < 3 ; j++){
			if(gameMatrix[i][j]==0) {
				filled = false;
			}
		}
	if(filled&&!win){
		document.querySelector(".who-wins div").innerHTML = "It's a Tie, dumbass...";
		document.querySelector(".who-wins").style.opacity = "1";
	}
	
}