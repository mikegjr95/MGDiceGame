function rollDie(numSides) {
	var diceRoll = Math.floor(Math.random() * numSides );
	return diceRoll;
}



	
function apartmentOne(){
	var outcomes1 = ["something swings in and starts chewing on your neck: DEAD",
		"BOOM thing behind door explodes: DEAD",
		"Something swings in but you manage to evade, it falls and you stomp on its neck killing it: Move ON",
		"Bang! Crazy martha gets suprised and shoots you with her twelve gauge: DEAD"];
	var outcomes2 = ["you take to long figuring out the combination boom an ugly ass zombie rips out your jugular: DEAD",
		"You get the code, but your anxiety collides with adrenaline and you fumble the gun and shoot yourself in the arm and as your weeping in pain a few zombies come in and enjoy your warm flesh: DEAD",
		"WOW! First try, the safe pops open theres already one in the chamber, you kill the zombie and all is clear: MOVE ON",
		"You get the safe open and the moment you shoot the zombie that rushes in you are soon surrounded by many more, you figure suicide is the only option: DEAD",];
	var outcomes3 = ["You weild Uncle Grandpas sword as if ready to slay a dragon! you run towards the door before you get to the door an old foe makes an unexpected appearance. shoe lace trips you, sword goes across your neck and as you black out you can see glimpse' of zombies running into your room: DEAD",
		 "you go to grab the machete and feel nothing,forgetting he took it to take care of the 'rainbow goat problem' going on in the back yard which seems to always takes place after participating in the devils lettuce? Well thanks alot goats: DEAD",
		 "the sword feels solid, its got weight but not to much the balance is amazing, needless to say it feels right, zombies head comes right off! your in the clear: MOVE ON",
		 "Afro Samurai initiated. You kill all three zombies that come ruuning in: MOVE ON"];
	var text;
	var apartmentLuck = prompt ("Whats your next move?");
	switch(apartmentLuck) {
		case "1":
		document.getElementById("door").innerHTML=(outcomes1[rollDie(3)]);
			break;
		case "2":
		document.getElementById("gun").innerHTML=(outcomes2[rollDie(3)]);
			break;
		case "3":
		document.getElementById("machete").innerHTML=(outcomes3[rollDie(3)]);
			break;
		default:
			alert(text = ("TRY AGAIN"));
			break;
	}

}


function hallWay(){
	var outcomes1 = ["as you press 1 you realize the elevator starts to rumble, before you realize it your on the ceiling and the elevator crashes into the floor with poles and springs blending everything inside to a human metal smoothie: DEAD",
	"you press 1 and the elevator gives in to gravity's pull right before it reaches level 1, the elevator gets cushened ny a cought cable and after going up and down a couple times you puke and crawl through the halfway opened door onto level 1: MOVE ON",
	"you press one and the elevator gets stuck at level 32 you press 1 again and it seems to glitch but closes and you make your way down to the first floor: MOVE ON",
	"you press one and the elevator gets stuck at level 32 zombies rush in and leave on traces of your clothing behind: DEAD"];
	var outcomes2 = ["Taking the elevator might've been one of your greatest decisions, the whole way down it was nice and quiet no zombies: MOVE ON",
	"You make it half way down and someone tries to open the door, out of reaction you punch him in the face and the zombie that has been behind you the past 10 floors starts eating on his face you run and make it down: MOVE ON",
	"As you go through the door you hear the door lock behind you and you realize the stairwell is flooded zombies you try to shoot them but there was too many and as you run out of bullets the rest run out of patience on there meal and eat you alive: DEAD",
	"Running through the door it locks behind you and you come to notice the overwhelming amount of smoke in the stairwell, doors are closed your screwed: DEAD"];
	var outcomes3 = ["you make it to your room and as you close the door United airlines comes crashing through your window misses you completely but you then fall through the hole in the floor: DEAD",
	"you are now back to the room adn after sitting there for a while you realize your a coward who doesnt deserve to live.Adios world :DEAD",
	"you make it to your room and after sitting there for a wile you get a boost of random courage and sprint down the hall, down the stairs screaming the whole time, how lucky are you, your on the first floor: MOVE ON",
	"as you try running back to your room a maniac spears you screaming 'britney spears for president life is dead glasses make my feet see better!' the impact of your head hitting the floor knocks you out and you never wake up: DEAD"];
	var text;
	var hallLuck = prompt ("HHmmm where you gunna go?");
	switch(hallLuck) {
		case "1":
		document.getElementById("elevator").innerHTML=(outcomes1[rollDie(3)]);
			break;
		case "2":
		document.getElementById("stairwell").innerHTML=(outcomes2[rollDie(3)]);
			break;
		case "3":
		document.getElementById("hide").innerHTML=(outcomes3[rollDie(3)]);
			break;
		default:
			alert(text = ("OMG NOOOO"));
			break;
	}
}

function twoWay(){
	var outcomes1 = ["as you make your way to levi street a sniper shoots you: DEAD",
	"as you make your way to levi street you get hit by an unmanned vehicle: DEAD",
	"as you make your way to levi street you see a car coming and jump out of the way: MOVE ON TO CHAPTER 4A",
	"as you make your way to levi street you see a sniper at the corner of your eye you turn and flick him off he flips you the bird you go your seperate ways: MOVE ON TO CHAPTER 4A"];
	var outcomes2 = ["as you make your way to hendrix avenue a lady runs up to your carrying a baby, you say hello and she throws the baby at you and the baby starts eating your arm. infection spreads: DEAD",
	"as you make your way to hendrix avenue you see 4 kids run up to you and start throwing rocks at you kick your eyes in and now your blind. Bite Bite: DEAD",
	"as you make your way to hendrix street 4 kids run up to you and try throwing rocks your too quick and shoot them all: MOVE ON TO CHAPTER 4B",
	"as you make your way to hendrix street you trip over a rock and break your nose, hurts but you'll live: MOVE ON TO CHAPTER 4B"];
	var outcomes3 = ["you pull the trigger bang! your done: DEAD",
	"you pull the trigger bang! your done: DEAD",
	"you pull the trigger bang! your done: DEAD",
	"you pull the trigger bang! your done: DEAD",
	"you pull the trigger bang! your done: DEAD",
	"you pull the trigger bang! your done: DEAD",
	"you pull the trigger bang! your done: DEAD",
	"you pull the trigger and the bullet goes through your head and the bullet goes through your head but you wake up five minutes later: MOVE ON TO CHAPTER 4B",
	"you pull the trigger and the gun jams: MOVE ON TO CHAPTER 4B"];
	var text;
	var twoLuck = prompt ("Hurry up and pick a street!");
	switch(twoLuck) {
		case "1":
		document.getElementById("levi").innerHTML=(outcomes1[rollDie(3)]);
			break;
		case "2":
		document.getElementById("hendrix").innerHTML=(outcomes2[rollDie(3)]);
			break;
		case "3":
		document.getElementById("suicide").innerHTML=(outcomes3[rollDie(8)]);
			break;
		default:
			alert(text = ("Wow someone does not know how to listen!"));
			break;
	}
}


function bigColdBody(){
	var outcomes1 = ["You go to shoot and the bullets dissapear no effect: DEAD",
	"you frantically reach for your gun dropping it, its too late: DEAD",
	"You grab your gun and aim for the head, boom one down the other moves to fast and pulls your head right off: DEAD",
	"you grab your gun and fire on one blowing his brains out, aim on the other and bang both dead: MOVE ON",
	"you aim on one kill him, the other one runs off in fear"];
	var outcomes2 = ["You try to dodge them and they trap you between there stomachs causing your head to exlpode: DEAD",
	"you try to dodge one and the other knocks your head clean off: DEAD",
	"you dodge one and dip right under the others fist and run: MOVE ON"];
	var outcomes3 = ["you crack a joke on their faces and they kill you: DEAD",
	"you crack a joke on their faces and they kill you: DEAD",
	"you crack a joke on their faces and they kill you: DEAD",
	"you hurt their feelings and they explode: MOVE ON"];
	var text;
	var bodyLuck = prompt ("He's a big boy you better act fast");
	switch(bodyLuck) {
		case "1":
		document.getElementById("pistol").innerHTML=(outcomes1[rollDie(4)]);
			break;
		case "2":
		document.getElementById("maneuver").innerHTML=(outcomes3[rollDie(2)]);
			break;
		case "3":
		document.getElementById("haha").innerHTML=(outcomes3[rollDie(3)]);
			break;
		default:
			alert(text = ("Seriously? You should know by now"));
	}
}

function scaryHorseDog(){
	var outcomes1 = ["drawing your gun angered it and it charged full speed dodging bullets and rips your head off: DEAD",
	"As soon as you reach for your gun it spits acid at you melting you alive: DEAD",
	"you shot faster then you drew and hit him in the eye, he runs away screaching in pain: MOVE ON"];
	var outcomes2 = ["steak does nothing as he stairs you down and pounces: DEAD",
	"steak proves worthless as he scarfs it down then you next: DEAD",
	"steak catches his eye as he sniffs it you get away: MOVE ON",
	"you throw the snake and the beast chases it as a hawk carries it away"];
	var outcomes3 = ["He waits for you to reach him then eats you: DEAD",
	"He waits for you to reach him then eats you: DEAD",
	"He waits for you to reach him then eats you: DEAD",
	"He waits for you to reach him then eats you: DEAD",
	"He waits for you to reach him then eats you: DEAD",
	"He waits for you to reach him then eats you: DEAD",
	"He waits for you to reach him then eats you: DEAD",
	"ill be damned, he actually shit himself whne you charged and ran away: MOVE ON"]
	var text;
	var dogLuck = prompt ("WELP! NICE KNOWING YA!");
	switch(dogLuck){
		case "1":
		document.getElementById("pop").innerHTML=(outcomes1[rollDie(2)]);
			break;
		case "2":
		document.getElementById("steak").innerHTML=(outcomes2[rollDie(3)]);
			break;
		case "3":
		document.getElementById("charge").innerHTML=(outcomes3[rollDie(7)]);
			break;
		default:
		alert(text = ("at this point i dont know what to tell you"));
	}
}

function imNotInfected() {
	var outcomes1 = ["They laugh and shoot your brains out: DEAD",
	"they look at eachother and beat you alive with sticks:DEAD",
	"they scan you once more and clear you to go in: YOU WIN" ]
	var outcomes2 = ["the moment you go for your gun the kill you: DEAD",
	"you go for your gun and they cowar and let you in: YOU WIN",
	"you draw your gun and kill them and now you cant get in: DEAD"]
	var outcomes3 = ["you get down on your knees and they kill you",
	"you get down on your knees and they kill you: DEAD",
	"you get down on your knees and they kill you: DEAD",
	"you get down on your knees and they kill you: DEAD",
	"you get down on your knees and they kill you: DEAD",
	"you get down on your knees and they kill you: DEAD",
	"you get down on your knees hear the scanner go of again and clears you as clean: YOU WIN"]
	var  text;
	var  infectedLuck = prompt("You've made it this far, what do you do?");
	switch (infectedLuck){
		case "1":
		document.getElementById("scan").innerHTML=(outcomes1[rollDie(2)]);
			break;
		case "2": 
		document.getElementById("fasthands").innerHTML=(outcomes2[rollDie(2)]);
			break;
		case "3":
		document.getElementById("acceptance").innerHTML=(outcomes3[rollDie(6)]);
			break;
		default:
		alert(text = ("0011100101000100001100011001!!!"));
	}
}



// function runGame(){
// 	let rolledNumber;
// 	rolledNumber = rollDie(4);
// 	alert(rolledNumber);
// }
// runGame();