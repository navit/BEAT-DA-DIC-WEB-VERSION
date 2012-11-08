//  Vars ----------------------------------------------------------------------
var thisDic,
	inGame = false,
	gameCounter = 0,
	dicFullName;
// ----------------------------------------------------------------------------

$(document).ready(function(){ 
	
		
	if (inGame == false){	
		
		$("#hitler").click(function() { //when you click on hitler in the "select a dic menu
			thisDic = $(this).attr('dicName');
			facebook(); //log in fb
			//var dicFirstName = getDescendantProp(dictators,thisDic + '.firstName'),
			//	dicLastName  = getDescendantProp(dictators,thisDic + '.lastName' );
			//	dicFullName = dicFirstName + dicLastName;
			inGame = true; //increase the count on gameCounter (this variable tells us what part of the game the player is in)
			//gameCounter ++;
			if (inGame && gameCounter == 1){
				console.log ("yyeeesssssssss");
				playGameOne() ;				
			} // inGame && gameCounter == 1
		}); //closes if click on this dictator, 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$("#stalin").click(function() { //when you click on hitler in the "select a dic menu
			thisDic = $(this).attr('dicName');
			facebook(); //log in fb
			var dicFirstName = getDescendantProp(dictators,thisDic + '.firstName'),
				dicLastName  = getDescendantProp(dictators,thisDic + '.lastName' );
				dicFullName = dicFirstName + dicLastName;
			inGame = true; //increase the count on gameCounter (this variable tells us what part of the game the player is in)
			gameCounter ++;
			if (inGame && gameCounter == 1){
				console.log ("yyeeesssssssss");
				playGameOne() ;				
			} // inGame && gameCounter == 1
		}); //closes if click on this dictator, 
		
		$("#kim").click(function() { //when you click on hitler in the "select a dic menu
			thisDic = $(this).attr('dicName');
			facebook(); //log in fb
			var dicFirstName = getDescendantProp(dictators,thisDic + '.firstName'),
				dicLastName  = getDescendantProp(dictators,thisDic + '.lastName' );
				dicFullName = dicFirstName + dicLastName;
			inGame = true; //increase the count on gameCounter (this variable tells us what part of the game the player is in)
			gameCounter ++;
			if (inGame && gameCounter == 1){
				console.log ("yyeeesssssssss");
				playGameOne() ;				
			} // inGame && gameCounter == 1
		}); //closes if click on this dictator,
		
		$("#pinochet").click(function() { //when you click on hitler in the "select a dic menu
			thisDic = $(this).attr('dicName');
			facebook(); //log in fb
			var dicFirstName = getDescendantProp(dictators,thisDic + '.firstName'),
				dicLastName  = getDescendantProp(dictators,thisDic + '.lastName' );
				dicFullName = dicFirstName + dicLastName;
			inGame = true; //increase the count on gameCounter (this variable tells us what part of the game the player is in)
			gameCounter ++;
			if (inGame && gameCounter == 1){
				console.log ("yyeeesssssssss");
				playGameOne() ;				
			} // inGame && gameCounter == 1
		}); //closes if click on this dictator,
		
		$("#sadam").click(function() { //when you click on hitler in the "select a dic menu
			thisDic = $(this).attr('dicName');
			facebook(); //log in fb
			var dicFirstName = getDescendantProp(dictators,thisDic + '.firstName'),
				dicLastName  = getDescendantProp(dictators,thisDic + '.lastName' );
				dicFullName = dicFirstName + dicLastName;
			inGame = true; //increase the count on gameCounter (this variable tells us what part of the game the player is in)
			gameCounter ++;
			if (inGame && gameCounter == 1){
				console.log ("yyeeesssssssss");
				playGameOne() ;				
			} // inGame && gameCounter == 1
		}); //closes if click on this dictator,
		
		$("#chavez").click(function() { //when you click on hitler in the "select a dic menu
			thisDic = $(this).attr('dicName');
			facebook(); //log in fb
			var dicFirstName = getDescendantProp(dictators,thisDic + '.firstName'),
				dicLastName  = getDescendantProp(dictators,thisDic + '.lastName' );
				dicFullName = dicFirstName + dicLastName;
			inGame = true; //increase the count on gameCounter (this variable tells us what part of the game the player is in)
			gameCounter ++;
			if (inGame && gameCounter == 1){
				console.log ("yyeeesssssssss");
				playGameOne() ;				
			} // inGame && gameCounter == 1
		}); //closes if click on this dictator,
			
		
	}; //closes inGame
	
}); //closes when document.ready





/*
switch (gameCounter)
{
case 0:
  alert ("gameCounter is 0");
  break;
case 1:
  
  break;
case 2:
  x="Today it's Tuesday";
  break;
case 3:
  x="Today it's Wednesday";
  break;
case 4:
  x="Today it's Thursday";
  break;
case 5:
  x="Today it's Friday";
  break;
case 6:
  x="Today it's Saturday";
  break;
}
*/
	