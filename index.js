
var randomLeft = Math.floor(Math.random() * 6);
var randomRight = Math.floor(Math.random() * 6);
var attributes = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
document.querySelector(".img-left").setAttribute("src", attributes[randomLeft]);
document.querySelector(".img-right").setAttribute("src", attributes[randomRight]);
if (randomLeft > randomRight){
    document.querySelector("h1").textContent = "player 1 wins";
}else{
    if (randomLeft < randomRight){
        document.querySelector("h1").textContent = "player 2 wins !!!";
    }else{
        document.querySelector("h1").textContent = "draw";
    }
}
