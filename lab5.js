//1. defin/ huvisagchaa zarlana3
var cpoint = document.querySelector('.cpoint')
var ppoint = document.querySelector('.ppoint')
var cchoice = document.querySelector('.cchoice')
var pchoice = document.querySelector('.pchoice')
var result = document.querySelector('.result')
var computerChoice;
var player=0, computer=0;
// 2. function
function play(playerChoice){
    //alert(playerChoice);
    pchoice.innerText = "player choice:" + playerChoice;
    var random = Math.floor(Math.random()*3);
    console.log(random);
    cchoice.innerText = "computer choice:" + random;
    if(random==0){
        cchoice.innerText = "computer choice: rock";
        computerChoice="rock";
    }else if(random==1){
        cchoice.innerText ="computer choice: paper";
        computerChoice="paper";
    }else if(random==2){
        cchoice.innerText ="computer choice: scissors";
        computerChoice="scissors";
    }
// if (playerChoice=="rock"&& computerChoice=="scissors") {
//     result.innerText ="winner:player";
// } else if (playerChoice=="scissors"&& computerChoice=="paper") {
//     result.innerText ="winner:player";
// } else if (playerChoice=="paper"&& computerChoice=="scissors") {
// result.innerText ="winner:player";
// }else if (computerChoice=="rock"&& playerChoice=="scissors") {
//     result.innerText ="winner:computer";
// } else if (computerChoice=="scissors"&& playerChoice=="paper") {
//     result.innerText ="winner:computer";
// } else if (computerChoice=="paper"&& playerChoice=="scissors") {
// result.innerText ="winner:computer";
// } else if (computerChoice=="rock"&& playerChoice=="rock") {
//     result.innerText ="Draw";
// } else if (computerChoice=="paper"&& playerChoice=="paper") {
//     result.innerText ="Draw";
// } else if (computerChoice=="scissors"&& playerChoice=="scissors") {
// result.innerText ="draw";
// }
if(
    (playerChoice=="rock"&& computerChoice=="scissors")
    || (playerChoice=="paper"&& computerChoice=="rock")
    || (playerChoice=="scissors"&& computerChoice=="paper")
){
    result.innerText = "winner:player";
    player++;
    ppoint.innerText="player point:" + player;
}else if(playerChoice==computerChoice){
    result.innerText = "winner:draw";
}else{
    result.innerText = "winner:computer";
    computer++;
    cpoint.innerText="computer point:" + computer;
}
}
function restart(){
    cchoice.innerText="Computer choice:";
    pchoice.innerText="player choice:";
    result.innerText="winner:";
    player=0;
    computer=0;
    ppoint.innerText="player point:0";
    cpoint.innerText="computer point:0";
}