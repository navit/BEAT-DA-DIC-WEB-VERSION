$(document).ready(function(){

/* attrs ----------------------------------------------------------------------------------	*/	
	var stroke={'stroke':'#000','stroke-width':'5'},
		fill={'fill':'#000'},
		speechAttr={'fill':'#000','stroke-width':'.3','stroke':'#fff'};
/* ----------------------------------------------------------------------------------------	*/

	var canvas = new ScaleRaphael('canvas', 800, 800); // initiate scalable canvas
	// to randomize speec texts
	function randomizeInt(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
/* Saddam Hussein -------------------------------------------------------------------------	*/

var augustoPinochet={
	
			'body'			: canvas.path(paths.common.body).attr(fill),
			'face'			: canvas.path(paths.common.face).attr(stroke),
			'hair'			: canvas.path(paths.augustoPinochet.hair).attr(fill),
			'mouth'			: canvas.path(paths.common.mouth).attr(stroke),
			'mustache'		: canvas.path(paths.augustoPinochet.mustache).attr(fill),
			'glasses'		: canvas.path(paths.augustoPinochet.glasses).attr(fill),
			'happyMouth'	: [{path:paths.augustoPinochet.mouthHappy},{path:paths.common.mouth}],
			'rightLeg'		: canvas.path(paths.common.legs.right).attr(fill),
			'leftLeg'		: canvas.path(paths.common.legs.left).attr(fill),
			'rightArm'		: canvas.path(paths.common.arms.right).attr(fill),
			'leftArm'		: canvas.path(paths.common.arms.left).attr(fill),
			'leftArmHappy'	: [{path:paths.common.arms.happyLeft},{path:paths.common.arms.left}],
			'rightArmHappy'	: [{path:paths.common.arms.happyRight},{path:paths.common.arms.right}],
			'scissors'		: [{path:paths.common.arms.scissor},{path:paths.common.arms.left}],
			'rock'			: [{path:paths.common.arms.rock},{path:paths.common.arms.left}],
			'paper'			: [{path:paths.common.arms.paper},{path:paths.common.arms.left}],
			'grenade'		: [{path:paths.common.arms.grenade},{path:paths.common.arms.left}],
			'loseSpeech'	: canvas.path(paths.augustoPinochet.speech.lose[randomizeInt(0,paths.augustoPinochet.speech.lose.length)]).transform('t-300 -700').attr(speechAttr),
			'winSpeech'		: canvas.path(paths.augustoPinochet.speech.win[randomizeInt(0,paths.kimJongIl.speech.win.length)]).transform('t-300 -700').attr(speechAttr)
		}
		
/* ----------------------------------------------------------------------------------------	*/
var faceAnimate = Raphael.animation({'fill':'#FF4848','opacity':'1'},200,'ease');
/* responsive -----------------------------------------------------------------------------	*/
function resizePaper(){
	var win = $(this);
	canvas.changeSize(win.width(), win.height(), true, false);
}
console.log(paths.augustoPinochet.speech);
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
		augustoPinochet.winSpeech.animate({'transform':'t-300 0'},300,'backOut',function(){
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
/* Angry Ausguto Pinochet  ----------------------------------------------------------------	*/
function angryAugusto(){
	augustoPinochet.face.animate(faceAnimate);
	augustoPinochet.mouth.animate({'stroke-width':'15'},2000,'ease',function(){
		augustoPinochet.loseSpeech.animate({'transform':'t-300 0'},300,'backOut',setTimeout(function(){
			
			grenade(augustoPinochet);
		},2000));
		
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
    			rock(augustoPinochet);
    			console.log('rock');
    			break;
    		case 112:
    			paper(augustoPinochet);
    			console.log('paper');
    			break;
    		case 115:
    			scissors(augustoPinochet);
    			console.log('scissors');
    			break;
			case 32:
				dicWin(augustoPinochet);
				console.log('Kim wins!');
			break;
    		default:
    			angryAugusto();
    			console.log('oh no! you pissed off the great leader!');	
    	}
    });
});
	