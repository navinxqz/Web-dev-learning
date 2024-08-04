var imgAry = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

var rand1 = Math.floor(Math.random() * imgAry.length);
document.querySelector(".dice .img1").setAttribute("src", imgAry[rand1]);

var rand2 = Math.floor(Math.random() * imgAry.length);
document.querySelector(".dice .img2").setAttribute("src", imgAry[rand2]);

if(rand1 == rand2){
    document.querySelector("h1").textContent = "DRAW !!!";
}else if(rand1 > rand2){
    document.querySelector("h1").textContent = "🚩 player 1 wins";
}else{ document.querySelector("h1").textContent = "player 2 wins 🚩"; }