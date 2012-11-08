//////////////////
/////////////////THIS ARRAY HOLDS ALL THE DICS INFO/////////////////// 
////////////////


var dictators = {
	
	hitler: 
	{
		id: 1,
		firstName: "Adolf",
		lastName: "Hitler",
		image: "/images/hitler/headshot.jpg",
		wins: 20,
		losses: 40,
		choices: [1, 1, 1, 1, 1, 2, 2, 2, 3, 3],
		chatter: 
			{
				win: 
					[
						"hail hitler!", 
						"Mein Kempf is better than your kempf!", 
						"I do not see why man should not be just as cruel as nature", 
						"It is not truth that matters, but victory", 
						"Humanitarianism is the expression of stupidity and cowardice"
					],
				lose:
					[
						"damn yew!!!",
						"Arians shall reign soon!!", 
						"to the camps thou shalt go!", 
						"fall 7 times, stand up 8!", 
						"purge purge purge!"
					], 
				
				waiting: "Wähle mich!"		
			}
	},
	
	
	stalin: 
	{
		id: 2,
		firstName: "Joseph",
		lastName: "Stalin",
		image: "/images/stalin/stalin.jpg",
		wins: 10,
		losses: 10,
		choices: ["1", "1", "1", "1", "2", "2", "2", "3", "3", "3"],
		chatter: 
			{
				win: 
					[
						"One death is a tragedy; one million is a statistic!", 
						"Death solves all problems - no man, no problem!", 
						"You cannot make a revolution with silk gloves", 
						"I believe in one thing only, the power of human will", 
						"Stalinist oppression on the march."
					],
				lose:
					[
						"This is a great mistake!",
						"I trust no one, not even myself!", 
						"good use of it against the Japanese", 
						"Die, but do not retreat!", 
					], 
				
				waiting: "забрать меня!"		
			}
	},
	
	kim: 
	{
		id: 3,
		firstName: "Jong-il",
		lastName: "Kim",
		image: "/images/kim/headshot.jpg",
		wins: 20,
		losses: 40,
		choices: ["1", "1", "1", "2", "2", "2", "2", "2", "3", "3"],
		chatter: 
			{
				win: 
					[
						"The revolution is carried out by means of one's thought, not through one's family background", 
						"Great ideology creates great times!", 
						"I'm an Internet expert too..", 
						"Glory to the heroic soldiers of the Korean People's Army!", 
					],
				lose:
					[
						"The liquidation of colonialism is a trend of the times which no force can hold back!!",
						"It's all a lie...They're just pretending to praise me!", 
						//"Let us advance under the banner of Marxism-Leninism and the Juche Idea", 
						"The dear leader shall never lose!",
						"bomb is coming soon!!!!", 
					], 
				
				waiting: "나 찍어줘/나 찍어 !"		
			}
	},
	
	pinochet: 
	{
		id: 4,
		firstName: "Augusto",
		lastName: "Pinochet",
		image: "/images/pinochet/headshot.jpg",
		wins: 20,
		losses: 40,
		choices: ["1", "1", "1", "2", "2", "3", "3", "3", "3", "3"],
		chatter: 
			{
				win: 
					[
						"My soldier's heart stirs and murmurs from deep within: Thank you.", 
						"I regret and suffer those losses, but it's God's will", 
						"god will pardon me if I committed excesses, but I don't think I did..", 
						"Sometimes democracy must be bathed in blood", 
					],
				lose:
					[
						"I'm not a dictator. It's just that I have a grumpy face.",
						"Not a leaf moves in Chile if I don't know about it", 
						"rather die in this battle than to go to Spain.", 
						"I'll take whatever steps necessary to end this situation.", 
					], 
				
				waiting: "¡Elígeme a mí!"		
			}
	},
	
	
	
	sadam: 
	{
		id: 5,
		firstName: "Sadam",
		lastName: "Hussein",
		image: "/images/sadam/sadam.jpg",
		wins: 10,
		losses: 10,
		choices: ["1", "1", "1", "1", "1", "2", "2", "3", "3", "3"],
		chatter: 
			{
				win: 
					[
						"Allah is on our side.", 
						"Long live the people, long live the nation, down with the invaders, God is great, God is great!", 
						"My name is Saddam Hussein. I am the president of Iraq!", 
						"I didn't have time to write poetry before, but now I have had the time to become a poet", 
					],
				lose:
					[
						"I am ready to die. I am not scared of execution!",
						"My spirit is still standing firm and will not fall, And in my body runs the blood of the great", 
						"Victory will be ours soon!", 
						"We will chase Americans to every corner at all times!", 
					], 
				
				waiting: "اختيار لي"		
			}
	},	
	
	
	
	chavez: 
	{
		id: 6,
		firstName: "Hugo",
		lastName: "Chavez",
		image: "/images/chavez/headshot.jpg",
		wins: 20,
		losses: 40,
		choices: ["1", "1", "2", "2", "2", "2", "3", "3", "3", "3"],
		chatter: 
			{
				win: 
					[
						"This has been a great victory for the Venezuelan people.", 
						"Venezuela has changed forever!", 
						"Long live the Unity of Latin America!", 
						"Capitalism leads us straight to hell!!", 
					],
				lose:
					[
						"They do not walk in... the path of Christ. ",
						"I haven't resigned, and I will not resign!", 
						"We must confront the privileged elite who have destroyed a large part of the world.", 
						"There is no turning back.", 
					], 
				
				waiting: "¡Deben escojerme!!"		
			}
	},
		
};





//////////////////
/////////////////THIS ARRAY HOLDS ALL THE DATA FROM MATCHES PLAYED AND BEING PLAYED//////////////////// 
////////////////

var matches = {

 currentMatch:
	{
		player: 
			{
				name: "Isaac Malca",
				image: "foo.com/images/img.jpg",
				facebook: "import here facebook object once it loads from API"
			},
		computer:
			{
				id: "nothing",
				name: "nooothing", 
				image: "gobblyGubb",
				WaitingChatter:"pull here from dictators[] computer.name.chatter"
			},
		gameCounter: 1,

		games: 
			{
				game1: 
					{
						pMove: 0,
						cMove: 0,
						chatter: "pullHereRandomFrom: dictators[] for computer.name.chatter depending on result of game",
						winner:0,
						loser: 0
					},
				game2: 
					{
						pMove: "scissors",
						cMove: "rock",
						chatter: "pullHereRandomFrom: dictators[] for computer.name.chatter depending on result of game",
						winner:0,
						loser: 0
					},  
				game3: 
					{
						pMove: "scissors",
						cMove: "rock",
						chatter: "pullHereRandomFrom: dictators[] for computer.name.chatter depending on result of game",
						winner: 0,
						loser: 0
					} 
			},
		
		
		matchWinner: "computer",
		
		matchDone: 1 //lets you know if the match has ended or not. this is what will trigger a push to the historical array.
		
	},

 
	historical:
	[
		{
		
		}
		
	] //closes 'historical' array

}; //closes var matches




