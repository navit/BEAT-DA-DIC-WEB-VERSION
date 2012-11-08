$(document).ready(function(){

/* attrs -------------------------------------------------------------------------------	*/	
	var stroke={'stroke':'#000','stroke-width':'5'},
		fill={'fill':'#000'},
		speechAttr={'fill':'#000','stroke-width':'.3','stroke':'#fff'};
/* ----------------------------------------------------------------------------------------	*/

	var canvas = new ScaleRaphael('canvas', 800, 800); // initiate scalable canvas
	// to randomize speec texts
	function randomizeInt(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

/* ----------------------------------------------------------------------------------------	*/
var faceAnimate = Raphael.animation({'fill':'#FF4848','opacity':'1'},200,'ease');
/* responsive -----------------------------------------------------------------------------	*/
function resizePaper(){
	var win = $(this);
	canvas.changeSize(win.width(), win.height(), true, false);
}

resizePaper();
$(window).resize(resizePaper);
/* ----------------------------------------------------------------------------------------	*/

/* rock, paper, scissor, happy functions --------------------------------------------------	*/
function scissors(dicName){
	dicName.leftArm.stop().animate(dicName.scissors[+(now = !now)],100,'bounce'); 
};
function rock(dicName){
	dicName.leftArm.stop().animate(dicName.rock[+(now = !now)],100,'bounce'); 
}; 
function paper(dicName){
	dicName.leftArm.stop().animate(dicName.paper[+(now = !now)],100,'bounce'); 
}; 
// defining happy arm animations:

function dicWin(dicName){
	var leftArmAnim = Raphael.animation(dicName.leftArmHappy[+(happyArmsCounter = !happyArmsCounter)],1000,'bounce').repeat(10);
	var rightArmAnim = Raphael.animation(dicName.rightArmHappy[+(happyArmsCounter = happyArmsCounter)],1000,'bounce').repeat(10);
	dicName.mouth.stop().animate(dicName.happyMouth[+(mouthCounter = !mouthCounter)],400,'backOut',function(){
		kimJongIl.winSpeech.animate({'transform':'t-300 0'},300,'backOut',function(){
			dicName.rightArm.stop().animate(rightArmAnim);
			dicName.leftArm.stop().animate(leftArmAnim);
		});
	});

};
/* ----------------------------------------------------------------------------------------	*/	
/* Weapon functions --------------------------------------------------------------------	*/
function grenade(dicName){
	
	dicName.leftArm.stop().animate(dicName.grenade[+(now = !now)],100,'bounce',function(){
		var drawGrenade = canvas.path(paths.grenade).attr(fill).animate({'transform':'s7 7 r -30 t-5 20 '},900,'bounce',function(){
			drawGrenade.animate({'transform':'s-500 -500','fill':'#FF0000'},100,'linear',function(){
				console.log('oh shit we\'re dead.');
			});				
		});
	}); 
}
/* ----------------------------------------------------------------------------------------	*/	
/* Angry Kim Jong Il -------------------------------------------------------------------	*/
function angryKim(){
	kimJongIl.leftBrow.stop().animate(kimJongIl.angryLeftBrow[+(browsCounter = !browsCounter)],500,'bounce');
	kimJongIl.rightBrow.stop().animate(kimJongIl.angryRightBrow[+(browsCounter = browsCounter)],500,'bounce');
	kimJongIl.face.animate(faceAnimate)
	kimJongIl.mouth.animate({'stroke-width':'15'},2000,'ease',function(){
		kimJongIl.loseSpeech.animate({'transform':'t-300 0'},300,'backOut',function(){
			grenade(kimJongIl);
		});
		
	});
	

	
};
/* ----------------------------------------------------------------------------------------	*/	

	// counter variables for animation	    
    var now = 1,
    	browsCounter = 1,
    	mouthCounter = 1,
    	happyArmsCounter = 1;
    console.log('Press "r" for Rock, "p" for Paper and "s" for Scissors\nPress any other key and piss Kim off!');
    $('html').keypress(function(event){
    	switch(event.which){
    		case 114:
    			rock(kimJongIl);
    			console.log('rock');
    			break;
    		case 112:
    			paper(kimJongIl);
    			console.log('paper');
    			break;
    		case 115:
    			scissors(kimJongIl);
    			console.log('scissors');
    			break;
			case 32:
				dicWin(kimJongIl);
				console.log('Kim wins!');
			break;
    		default:
    			angryKim();
    			console.log('oh no! you pissed off the great leader!');	
    	}
    });
});
	