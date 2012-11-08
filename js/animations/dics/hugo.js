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
/* Saddam Hussein -------------------------------------------------------------------------	*/
var hugoChavez={
	
			'body'			: canvas.path(paths.common.body).attr(fill),
			'face'			: canvas.path(paths.common.face).attr(stroke),
			'hair'			: canvas.path(paths.hugoChavez.hair).attr(fill),
			'mouth'			: canvas.path(paths.common.mouth).attr(stroke),
			'leftFaceLine'	: canvas.path(paths.hugoChavez.faceLines.left).attr(stroke).attr({'stroke-width':'2'}),
			'leftFaceLine'	: canvas.path(paths.hugoChavez.faceLines.right).attr(stroke).attr({'stroke-width':'2'}),
			'nose'			: canvas.path(paths.hugoChavez.nose).attr({'stroke-width':'2'}),
			'happyMouth'	: [{path:paths.common.mouthHappy},{path:paths.common.mouth}],
			'leftEye'		: canvas.path(paths.hugoChavez.eyes.right).attr(fill),
			'rightEye' 		: canvas.path(paths.hugoChavez.eyes.left).attr(fill),
			'leftBrow' 		: canvas.path(paths.hugoChavez.brows.left).attr(fill),
			'rightBrow' 	: canvas.path(paths.hugoChavez.brows.right).attr(fill),
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
			//'loseSpeech'	: canvas.path(paths.hugoChavez.speech.lose[randomizeInt(0,paths.hugoChavez.speech.lose.length)]).transform('t-300 -700').attr(speechAttr),
			'winSpeech'		: canvas.path(paths.hugoChavez[randomizeInt(0,paths.hugoChavez.speech.win.length)]).transform('t-300 -700').attr(speechAttr)
		}
	
/* ----------------------------------------------------------------------------------------	*/
var faceAnimate = Raphael.animation({'fill':'#FF4848','opacity':'1'},200,'ease');
/* responsive -----------------------------------------------------------------------------	*/
function resizePaper(){
	var win = $(this);
	canvas.changeSize(win.width(), win.height(), true, false);
}
console.log(paths.hugoChavez.speech);
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
		hugoChavez.winSpeech.animate({'transform':'t-300 0'},300,'backOut',function(){
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
function angrySaddam(){
	hugoChavez.leftBrow.stop().animate({'transform':'r20'},500,'bounce');
	hugoChavez.rightBrow.stop().animate({'transform':'r-20'},500,'bounce');
	hugoChavez.face.animate(faceAnimate)
	hugoChavez.mouth.animate({'stroke-width':'15'},2000,'ease',function(){
		hugoChavez.loseSpeech.animate({'transform':'t-300 0'},300,'backOut',setTimeout(function(){
			
			grenade(hugoChavez);
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
    			rock(hugoChavez);
    			console.log('rock');
    			break;
    		case 112:
    			paper(hugoChavez);
    			console.log('paper');
    			break;
    		case 115:
    			scissors(hugoChavez);
    			console.log('scissors');
    			break;
			case 32:
				dicWin(hugoChavez);
				console.log('Kim wins!');
			break;
    		default:
    			angrySaddam();
    			console.log('oh no! you pissed off the great leader!');	
    	}
    });
});
	