var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
var diceImage1 = "https://github.com/YashPalekar/Dice/blob/2a11d52c9f67d2b4f6b16c44cbb422597a1466cd/images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute( "src", diceImage1 );

var randomNumber2 = Math.floor( Math.random() * 6) + 1;
var diceImage2 = "https://github.com/YashPalekar/Dice/blob/2a11d52c9f67d2b4f6b16c44cbb422597a1466cd/images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if(randomNumber1 > randomNumber2) { document.querySelector("h1").innerHTML = "🚩PLayer 1 Wins!"; }
else if(randomNumber1 < randomNumber2) { document.querySelector("h1").innerHTML = "PLayer 2 Wins!🚩"; }
else {document.querySelector("h1").innerHTML = "Draw!"; }
