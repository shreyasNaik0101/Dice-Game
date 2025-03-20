var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImageSource = "./" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice"+ randomNumber2+ ".png";

var randomImageSource2 = "./" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}