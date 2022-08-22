var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
var diceImage1 = "D:/Web Development/Sites/Dicee Challenge - Starting Files/images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute( "src", diceImage1 );

var randomNumber2 = Math.floor( Math.random() * 6) + 1;
var diceImage2 = "D:/Web Development/Sites/Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if(randomNumber1 > randomNumber2) { document.querySelector("h1").innerHTML = "🚩PLayer 1 Wins!"; }
else if(randomNumber1 < randomNumber2) { document.querySelector("h1").innerHTML = "PLayer 2 Wins!🚩"; }
else {document.querySelector("h1").innerHTML = "Draw!"; }