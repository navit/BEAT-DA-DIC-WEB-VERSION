//FACEBOOK LOGIN : facebook()
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

var facebook = function(){

		 FB.login(function(response) {
		 	
		 	console.log(response);
		 	
		 	if(response.authResponse) { //if log in works,
			 	console.log("LOGGED IN"); //print "LOGGED IN" to the console
			 	
			 	loggedInChecker = true;

		 		FB.api("/me",function(response) { //ask facebook API for the user's info, and store it into var me
		 			
		 			me = response; //the object for ME is now stored in the var me. this will allow us to reference it later, once we have "overwritten" response.

		 			// console.log("API FOR ME LOADED");
		 			// console.log (me);
					// console.log ("Welcome to the game, " + me.first_name);
					// matches.currentMatch.player.name = me.first_name;
					// console.log(matches.currentMatch.player.name);//storing my name to our array
					// matches.currentMatch.player.image = me.first_name;
					// $("#fb-data .image-container").html("<img src=" + imageSource + " />");
					
					imageSource = "http://graph.facebook.com/" + me.id + "/picture";
					matches.currentMatch.player.image = imageSource;//store the url to my profile pic
				
		 		}); //closes FB.api ("/me"...	
		 	} //closes FB.login 
		 	
		 	else { //if user hits CANCEL instead of logging in,
		 		alert("YOU HIT CANCEL, YOU ASSHOLE"); //tell him he did so
		 	} //closes else
		 	
		}) //closes fb.login
		
}// closes facebook()

////////////////////
///////////////////  facebook() ends
//////////////////


//----------------------------------------------------------------------------------------------------//


// WHO IS THE MATCH WINNER? : whoIsMatchWinner()
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

var whoIsMatchWinner = function(){

		if (matches.currentMatch.games.game1.winner=="computer" && matches.currentMatch.games.game2.winner=="computer" && matches.currentMatch.games.game3.winner=="computer"){
		matches.currentMatch.matchWinner = "computer";
		}
	
		else if (matches.currentMatch.games.game1.winner=="player" && matches.currentMatch.games.game2.winner=="computer" && matches.currentMatch.games.game3.winner=="computer"){
		matches.currentMatch.matchWinner = "computer";
		}
	
		else if (matches.currentMatch.games.game1.winner=="computer" && matches.currentMatch.games.game2.winner=="player" && matches.currentMatch.games.game3.winner=="computer"){
		matches.currentMatch.matchWinner = "computer";
		}
	
		else if (matches.currentMatch.games.game1.winner=="computer" && matches.currentMatch.games.game2.winner=="computer" && matches.currentMatch.games.game3.winner=="player"){
		matches.currentMatch.matchWinner = "computer";
		}
	
	
		else if (matches.currentMatch.games.game1.winner=="player" && matches.currentMatch.games.game2.winner=="player" && matches.currentMatch.games.game3.winner=="player"){
		matches.currentMatch.matchWinner = "player";
		}
	
	
		else if (matches.currentMatch.games.game1.winner=="computer" && matches.currentMatch.games.game2.winner=="player" && matches.currentMatch.games.game3.winner=="player"){
		matches.currentMatch.matchWinner = "player";
		}
	
		else if (matches.currentMatch.games.game1.winner=="player" && matches.currentMatch.games.game2.winner=="computer" && matches.currentMatch.games.game3.winner=="player"){
		matches.currentMatch.matchWinner = "player";
		}
	
	
		else if (matches.currentMatch.games.game1.winner=="player" && matches.currentMatch.games.game2.winner=="player" && matches.currentMatch.games.game3.winner=="computer"){
		matches.currentMatch.matchWinner = "player";
		}
		
		if (matches.currentMatch.matchWinner != 0){
		gameCounter = 5;
		}
}

//----------------------------------------------------------------------------------------------------//
//RANDOMIZE: 
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
function randomizeInt(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

