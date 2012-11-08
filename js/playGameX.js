var dicMoveRock,
	dickMovePaper,
	dicMoveScissors,
	dicMove,
	randomCompMove,
	playerMove = 'null',
	game1Winner,
	game1Loser,
	game2Winner,
	game3Winner,
	continueGame = true,
	counter = 5;

//convert the string to dot notation
function getDescendantProp(obj, desc) {
    var arr = desc.split(".");
    while(arr.length && (obj = obj[arr.shift()]));
    return obj;
}	
function playGameOne(){
		
	if(continueGame){
	
		var countDown = setInterval(function(){
		if (counter > 0){
			$("#timer h5").text(counter);
    			$('#tools li').click(function(){
    				$("#timer h5").text(0); // zero the clock upon choice of weapon
    				$('ul#tools').slideUp(200);
    			});
    			$("#playRock").click(function() { //if the player chooses rock,
					playerMove = "rock"; //store the player's answer to the currentMatch object
					continueGame = false;
					clearInterval(countDown);
					 //this will make the timer end once the player has clicked on their choice
				}); //closes if player plays rock
				
				$("#playPaper").click(function() { //if the player chooses paper,
					playerMove = "paper"; //store the player's answer to the currentMatch object
					continueGame = false;
					clearInterval(countDown);
				});	//closes if player plays paper
				
				$("#playScissors").click(function() { //if player chooses scissors,
					playerMove = "scissors"; //store the player's answer to the currentMatch
					continueGame = false;
					clearInterval(countDown);
				}); //closes if player plays scissors		
				counter--;
			} //closes if counter > 0
				
			setTimeout(function endGame(){
				continueGame = false;
				clearInterval(countDown);
				$('ul#tools').slideUp(200);
				// determine the winner:
	        	var pathToMoves = getDescendantProp(dictators,thisDic + ".choices");
	        	console.log(pathToMoves);
	        	console.log ("opponent chosen = " + thisDic);
	        	//console.log ("opponent chosen = " + matches.currentMatch.computer.id);	
	        	randomPos = randomizeInt(1,10);	
        		console.log ("random number = " + randomPos);
				randomCompMove = pathToMoves[randomPos];
				//console.log(randomCompMove);
				//console.log ("random number has been chosen. it is:" + randomCompMove)		
				
				if (playerMove == 'null'){ //if player didn't make a move,
					playerMove = "rock"; //assign rock to his move
					console.log("player didn't choose a move");
				}	
				if (randomCompMove == 1){
					dicMove = 'rock';
					//matches.currentMatch.games.game1.cMove = "rock";
					console.log("computer chose rock");
				}
				else if (randomCompMove == 2){
					dicMove = 'paper';
					//matches.currentMatch.games.game1.cMove = "paper";
					console.log("player chose paper");
				}
				else if (randomCompMove == 3){
					dicMove = 'scissors';
					//matches.currentMatch.games.game1.cMove = "scissors";
					console.log("player chose scissors");
				}  
				//var playerMove = matches.currentMatch.games.game1.pMove; //this a shortcut so the code is not so long
				//var computerMove = matches.currentMatch.games.game1.cMove; //this a shortcut so the code is not so long			
				console.log ("player's move is: " + playerMove);
				console.log ("comp's move is: " + dicMove);
					
				if (playerMove==dicMove){ // if player and computer made the same move (tie),
					// playerMove = "null"; //don't store a move for player
					// dicMove = "null"; //don't store a move for computer
					game1Winner = "null";
					continueGame = true; // restart game because of a tied game
				}
				else if (playerMove=="rock" && dicMove=="scissors"){ //if player plays rock and computer plays scissors,
					game1Winner = "player"; //player is the winner of this game
					game1Loser = "computer"; //computer is the loser of this game
					console.log ("gameEnded");
					gameCounter++; //make gameCounter = 2
				}
				else if (playerMove=="paper" && dicMove=="rock"){
					game1Winner = "player"; //player is the winner of this game
					game1Loser = "computer"; //computer is the loser of this game
					console.log ("gameEnded");
					gameCounter++; //make gameCounter = 2
				}
				else if (playerMove=="scissors" && dicMove=="paper"){
					game1Winner = "player"; //player is the winner of this game
					game1Loser = "computer"; //computer is the loser of this game
					console.log ("gameEnded");
					gameCounter++; //make gameCounter = 2
				}
				else if (playerMove=="paper" && dicMove=="scissors"){
					game1Winner = "computer"; //computer is the winner of this game
					game1Loser = "player"; //player is the winner of this game
					console.log ("gameEnded");
					gameCounter++; //make gameCounter = 2
				}
				else if (playerMove=="scissors" && dicMove=="rock"){
					game1Winner = "computer"; //computer is the winner of this game
					game1Loser = "player"; //player is the winner of this game
					console.log ("gameEnded");
					gameCounter++; //make gameCounter = 2
					
				}
				else if (playerMove=="rock" && dicMove=="paper"){
					game1Winner = "computer"; //computer is the winner of this game
					game1Loser = "player"; //player is the winner of this game
					console.log ("gameEnded");
					gameCounter++; //make gameCounter = 2
				}
				
				if (gameCounter == 2){
				
					console.log ('game counter is equal to 2')
				
					if (game1Winner == "player"){
						$("#game").load('winner.html');
					}
					
					else if (game1Winner == "computer"){
						$("#game").load('loser.html');
					}
					console.log (game1Winner);
					
				}
				
			},5000);
		},1000);// setInterval();
	} // if(continueGame)
} // playGameOne();

			
			
    		
	
   
    			
	    	
 //closes playGameOne()
	  
	  
	  
var playGameTwo = function(){
			
			var timer = 5000; 
				
			if (timer > 0) { //if the player still has time left to choose a move,
			
				timer--; //subtract time from timer
				
				$("#playRock").click(function() { //if the player chooses rock,
					matches.currentMatch.games.game2.pMove = "rock"; //store the player's answer to the currentMatch object
					timer = 0; //this will make the timer end once the player has clicked on their choice
				}); //closes if player plays rock
				
				$("#playPaper").click(function() { //if the player chooses paper,
					matches.currentMatch.games.game2.pMove = "paper"; //store the player's answer to the currentMatch object
					timer = 0; //this will make the timer end once the player has clicked on their choice
				});	//closes if player plays paper
				
				$("#playScissors").click(function() { //if player chooses scissors,
					matches.currentMatch.games.game2.pMove = "scissors"; //store the player's answer to the currentMatch object
					timer = 0; //this will make the timer end once the player has clicked on their choice				
				}); //closes if player plays scissors
	
	    	} //closes "if timer > 5000"
	  
	    	else if (timer < 0) { //when the amount of time given has ended,
	    		//var pathToMoves = "dictators." + matches.currentMatch.computer.id + ".choices";
	    		var pathToMoves = "dictators." + thisDic + ".choices";
	    		
				matches.currentMatch.games.game2.cMove = pathToMoves[randomizeInt(0,pathToMoves.length)];
	    	
	    		if (matches.currentMatch.games.game2.pMove == 0){ //if player didn't make a move,
					matches.currentMatch.games.game2.pMove = "paper"; //assign paper to his move
				}
	
				var playerMove = matches.currentMatch.games.game2.pMove; //this a shortcut so the code is not so long
				var computerMove = matches.currentMatch.games.game2.cMove; //this a shortcut so the code is not so long
				
				
				if (playerMove===computerMove){ // if player and computer made the same move (tie),
					matches.currentMatch.games.game2.pMove = "null"; //don't store a move for player
					matches.currentMatch.games.game2.cMove = "null"; //don't store a move for computer
				}
				
				else if (playerMove==="rock" && computerMove==="scissors"){ //if player plays rock and computer plays scissors,
					matches.currentMatch.games.game2.winner = "player"; //player is the winner of this game
					matches.currentMatch.games.game2.loser = "computer"; //computer is the loser of this game
					gameCounter++; //make gameCounter = 3
				}
				
				else if (playerMove==="paper" && computerMove==="rock"){
					matches.currentMatch.games.game2.winner = "player"; //player is the winner of this game
					matches.currentMatch.games.game2.loser = "computer"; //computer is the loser of this game
					gameCounter++; //make gameCounter = 3
				}
				
				else if (playerMove==="scissors" && computerMove==="paper"){
					matches.currentMatch.games.game2.winner = "player"; //player is the winner of this game
					matches.currentMatch.games.game2.loser = "computer"; //computer is the loser of this game
					gameCounter++; //make gameCounter = 3
				}
				
				else if (playerMove==="paper" && computerMove==="scissors"){
					matches.currentMatch.games.game2.winner = "computer"; //computer is the winner of this game
					matches.currentMatch.games.game2.loser = "player"; //player is the winner of this game
					gameCounter++; //make gameCounter = 3
				}
				
				else if (playerMove==="scissors" && computerMove==="rock"){
					matches.currentMatch.games.game2.winner = "computer"; //computer is the winner of this game
					matches.currentMatch.games.game2.loser = "player"; //player is the winner of this game
					gameCounter++; //make gameCounter = 3
				}
				
				else if (playerMove==="rock" && computerMove==="paper"){
					matches.currentMatch.games.game2.winner = "computer"; //computer is the winner of this game
					matches.currentMatch.games.game2.loser = "player"; //player is the winner of this game
					gameCounter++; //make gameCounter = 3
				}
	     
	    	} //closes "else if timer < 1"
	    	
} //closes playGameTwo()



var playGameThree = function(){
			
			var timer = 5000; 
				
			if (timer > 0) { //if the player still has time left to choose a move,
			
				timer--; //subtract time from timer
				
				$("#playRock").click(function() { //if the player chooses rock,
					matches.currentMatch.games.game3.pMove = "rock"; //store the player's answer to the currentMatch object
					timer = 0; //this will make the timer end once the player has clicked on their choice
				}); //closes if player plays rock
				
				$("#playPaper").click(function() { //if the player chooses paper,
					matches.currentMatch.games.game3.pMove = "paper"; //store the player's answer to the currentMatch object
					timer = 0; //this will make the timer end once the player has clicked on their choice
				});	//closes if player plays paper
				
				$("#playScissors").click(function() { //if player chooses scissors,
					matches.currentMatch.games.game3.pMove = "scissors"; //store the player's answer to the currentMatch object
					timer = 0; //this will make the timer end once the player has clicked on their choice				
				}); //closes if player plays scissors
	
	    	} //closes "if timer > 5000"
	  
	    	else if (timer < 0) { //when the amount of time given has ended,
	    		var pathToMoves = "dictators." + thisDic + ".choices";
	    		//var pathToMoves = "dictators." + matches.currentMatch.computer.id + ".choices";
				matches.currentMatch.games.game3.cMove = pathToMoves[randomizeInt(0,pathToMoves.length)];
	    	
	    		if (matches.currentMatch.games.game3.pMove == 0){ //if player didn't make a move,
					matches.currentMatch.games.game3.pMove = "scissors"; //assign scissors to his move
				}
	
				var playerMove = matches.currentMatch.games.game3.pMove; //this a shortcut so the code is not so long
				var computerMove = matches.currentMatch.games.game3.cMove; //this a shortcut so the code is not so long
				
				
				if (playerMove===computerMove){ // if player and computer made the same move (tie),
					matches.currentMatch.games.game3.pMove = "null"; //don't store a move for player
					matches.currentMatch.games.game3.cMove = "null"; //don't store a move for computer
				}
				
				else if (playerMove==="rock" && computerMove==="scissors"){ //if player plays rock and computer plays scissors,
					matches.currentMatch.games.game3.winner = "player"; //player is the winner of this game
					matches.currentMatch.games.game3.loser = "computer"; //computer is the loser of this game
					gameCounter++; //make gameCounter = 4
				}
				
				else if (playerMove==="paper" && computerMove==="rock"){
					matches.currentMatch.games.game3.winner = "player"; //player is the winner of this game
					matches.currentMatch.games.game3.loser = "computer"; //computer is the loser of this game
					gameCounter++; //make gameCounter = 4
				}
				
				else if (playerMove==="scissors" && computerMove==="paper"){
					matches.currentMatch.games.game3.winner = "player"; //player is the winner of this game
					matches.currentMatch.games.game3.loser = "computer"; //computer is the loser of this game
					gameCounter++; //make gameCounter = 4
				}
				
				else if (playerMove==="paper" && computerMove==="scissors"){
					matches.currentMatch.games.game3.winner = "computer"; //computer is the winner of this game
					matches.currentMatch.games.game3.loser = "player"; //player is the winner of this game
					gameCounter++; //make gameCounter = 4
				}
				
				else if (playerMove==="scissors" && computerMove==="rock"){
					matches.currentMatch.games.game3.winner = "computer"; //computer is the winner of this game
					matches.currentMatch.games.game3.loser = "player"; //player is the winner of this game
					gameCounter++; //make gameCounter = 4
				}
				
				else if (playerMove==="rock" && computerMove==="paper"){
					matches.currentMatch.games.game3.winner = "computer"; //computer is the winner of this game
					matches.currentMatch.games.game3.loser = "player"; //player is the winner of this game
					gameCounter++; //make gameCounter = 4
				}
	     
	    	} //closes "else if timer < 1"
	    	
} //closes playGameThree()

	  
