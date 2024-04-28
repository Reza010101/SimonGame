let sequence = [];
let gameLevel = 0;
let GameOver = false;
let userSequence = [];
let userSequenceIndex = 0;
let levelPass = false ;

var red = new Audio("./assets/red.wav");
var green = new Audio("./assets/green.wav");
var blue = new Audio("./assets/blue.wav");
var yellow = new Audio("./assets/yellow.wav");

document.addEventListener("keydown",startGame);

function startGame(){
    generatSecuence();
}

function generatSecuence(){
    var next = Math.floor(Math.random()*4)+1;
    sequence.push(next);
    if(sequence.length==1){
        playSound(sequence);
    }else{
        setTimeout(playSound,2000,sequence);
    }
    
}


function playSound(sequenceButtonPlay){
    document.removeEventListener("keydown",startGame);
    var endSequenceIndex = sequenceButtonPlay.length-1;
        switch (sequenceButtonPlay[endSequenceIndex]) {
            case 1:
                red.play();
                document.querySelector("#red").classList.toggle("clicked");
                setTimeout(function(){
                    document.querySelector("#red").classList.toggle("clicked");
                },400);
                console.log("red play")
                break;
            case 2:
                green.play();
                document.querySelector("#green").classList.toggle("clicked");
                setTimeout(function(){
                    document.querySelector("#green").classList.toggle("clicked");
                },400);
                console.log("green play")
                break;
            case 3:
                blue.play();
                document.querySelector("#blue").classList.toggle("clicked");
                setTimeout(function(){
                    document.querySelector("#blue").classList.toggle("clicked");
                },400);
                console.log("blue play")
                break;
            case 4:
                yellow.play();
                document.querySelector("#yellow").classList.toggle("clicked");
                setTimeout(function(){
                    document.querySelector("#yellow").classList.toggle("clicked");
                },400);
                console.log("yellow play")
                break;
            default:
                console.log(sequence);
                break;
        }
    checkPlayerSequence();
}



function checkPlayerSequence(){
    userSequence = [];
    userSequenceIndex = 0;
    levelPass = false ;
    document.querySelector("h1").innerHTML = `level ${sequence.length-1}`;
    for(let i =0;i<4;i++){
        document.querySelectorAll("button")[i].addEventListener("mousedown", mouseDownFuc);
    } 

}

function mouseDownFuc() {
   
        switch (this.id) {
            case "red":
                if(sequence[userSequenceIndex]==1){
                    userSequence.push(1);
                    if(userSequence.length == sequence.length){
                        console.log(`level passed  ${userSequence}   ${sequence}`);
                        levelPassFuc();
                    }  
                    userSequenceIndex++;
                    console.log(userSequence);
                }else{
                    console.log(`game over in ${this.id}`);
                    GameOver = true ;
                    gameOverFuc();
                    break;
                }  
                break;                   
            case "green":
                if(sequence[userSequenceIndex]==2){
                    userSequence.push(2);
                    if(userSequence.length == sequence.length){
                        console.log(`level passed  ${userSequence}   ${sequence}`);
                        levelPassFuc();
                    }  
                    userSequenceIndex++;
                    console.log(userSequence);
                }else{
                    console.log(`game over in ${this.id}`);
                    GameOver = true ;
                    gameOverFuc();
                    break;
                }  
                break;                   
             case "blue":
                if(sequence[userSequenceIndex]==3){
                    userSequence.push(3);
                    if(userSequence.length == sequence.length){
                        console.log(`level passed  ${userSequence}   ${sequence}`);
                        levelPassFuc();
                    }  
                    userSequenceIndex++;
                    console.log(userSequence);
                }else{
                    console.log(`game over in ${this.id}`);
                    GameOver = true ;
                    gameOverFuc();
                    break;
                }  
                break;                   
            case "yellow":
                if(sequence[userSequenceIndex]==4){
                    userSequence.push(4);
                    if(userSequence.length == sequence.length){
                        console.log(`level passed  ${userSequence}   ${sequence}`);
                        levelPassFuc();
                    }  
                    userSequenceIndex++;
                    console.log(userSequence);
                }else{
                    console.log(`game over in ${this.id}`);
                    GameOver = true ;
                    gameOverFuc();
                    break;
                }  
                break;                   
            default:
                console.log(this.id);
                break;
        } 
        var audio = new Audio(`./assets/${this.id}.wav`);
        audio.play();
}    

  

function levelPassFuc(){
    for(var i=0;i<4;i++){
        document.querySelectorAll("button")[i].removeEventListener("mousedown",mouseDownFuc);
    }
    generatSecuence();
}

function gameOverFuc(){
        document.querySelector("h1").innerHTML = `Game Over in level ${sequence.length}`;
        for(var i=0;i<4;i++){
            document.querySelectorAll("button")[i].removeEventListener("mousedown",mouseDownFuc);
        }
}
