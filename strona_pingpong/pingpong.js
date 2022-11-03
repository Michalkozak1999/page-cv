const canvas1 = document.querySelector("canvas");
const ctx = canvas1.getContext('2d');


canvas1.width = 1000;
canvas1.height = 500;

const cw = canvas1.width;
const ch = canvas1.height;

const ballsize = 10;


let ballX = cw/2 -ballsize/2
let ballY = ch/2 - ballsize/2


const paddleHeight = 100;
const paddleWidth = 20;

const Playerx = 70;
const aiX = 910

let playerY = 200;
let aiY = 200;


const linewidth = 6;
const lineheight = 16;

let ballspeedX = 3;
let ballspeedY = 3;


const bramkaheight = paddleHeight*1.7
const bramkaposuition = (ch/2)-bramkaheight/2


const licznikgracz = document.querySelector(".gracz")
var licznikgraczav1 = 0

const licznikbota = document.querySelector(".computer")
var licznikbotav1 = 0

function line() {
    

for(let line_position = 20; line_position < ch; line_position +=30){
    ctx.fillStyle = "green"
    ctx.fillRect(cw/2 - linewidth/2, line_position, linewidth, lineheight)
}
}



function bramkaplayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, bramkaposuition, paddleWidth, bramkaheight ) 
}


function bramkaai() {
    ctx.fillStyle = "red";
    ctx.fillRect(cw-20, bramkaposuition, paddleWidth, bramkaheight ) 
}




function player() {
    ctx.fillStyle = "yellow"
    ctx.fillRect(Playerx, playerY, paddleWidth, paddleHeight)
    
}
function ai() {
    ctx.fillStyle = "yellow"
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight)
    
}



function table() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cw, ch); 
    

    
    
}

function graczwygral() {
    ctx.fillStyle = "blue"
    ctx.fillText("Gracz wygrał", cw/2-150, ch/2)
    ctx.font = "50px fantasy"
    
}

function botwygral() {
    ctx.fillStyle = "Red"
    ctx.fillText("Bot wygrał", cw/2-100, ch/2)
    ctx.font = "50px fantasy"
    
}

function ball() {
    ctx.beginPath()
    ctx.arc(ballX+5 , ballY+5, ballsize,  0, 2 * Math.PI)
    ctx.fillStyle = "black";
    ctx.stroke()
    ctx.fill()

    ballX +=  ballspeedX;
    ballY +=  ballspeedY;

        
        if(ballY <= 0 || ballY + ballsize >= ch){
        ballspeedY = -ballspeedY
speedup();
}

if  (ballX <= 90 &&ballX>=70 && ballY>= playerY && ballY<=playerY+101){
    ballspeedX = -ballspeedX
}
if  (ballX >= 910 &&ballX<=930 && ballY>= aiY-50 && ballY<=aiY+100 ){
     ballspeedX = -ballspeedX
   
 }
            if(ballX <= 0 || ballX + ballsize >= cw){
           ballspeedX = -ballspeedX
          
speedup();
}

if(ballX<=0 && ballY>= (ch-bramkaheight)/2 && ballY<=ch-bramkaheight ){
    ballX = 500
    ballY = 250
    ballspeedX = 3;
    ballspeedY = 3;
    licznikbotav1++
licznikbota.innerHTML = licznikbotav1;
if(licznikbotav1>=3){
    ballspeedX = 0;
    ballspeedY = 0;
}


   
}
if(ballX>=cw-20 && ballY>= (ch-bramkaheight)/2 && ballY<=ch-bramkaheight ){
    ballX = 500
    ballY = 250
    ballspeedX = 3;
    ballspeedY = 3;
   
licznikgraczav1++
    licznikgracz.innerHTML = licznikgraczav1;
    if(licznikgraczav1>=3){
        ballspeedX = 0;
         ballspeedY = 0;
         
        graczwygral()
    }

}

}

let topcanvas = canvas1.offsetTop;
//console.log(topcanvas)
let leftcanvas = canvas1.offsetLeft
console.log(leftcanvas)




function speedup() {
   if(ballspeedX > 0 && ballspeedX < 16){
       ballspeedX += 1
   }
   if(ballspeedX < 0  && ballspeedX >-16){
    ballspeedX-=1
}
if(ballspeedY > 0 && ballspeedY < 16){
    ballspeedY += 1
}
if(ballspeedY < 0  && ballspeedY >-16){
 ballspeedY-=1
}
 
} 

function playerposition(e) {
   
    playerY = e.clientY  - topcanvas - paddleHeight/2;
   
    //console.log(playerY)

            if(playerY > ch - paddleHeight){
                 playerY = ch - paddleHeight
                                            }
                if(playerY < 0){
                    playerY = 0
                        }
                       
}


function aiPosition() {
    var middlepadle = aiY + paddleHeight/2;
    var middleball = ballY + ballsize/2;


if (ballX>500){
    if(middlepadle  - middleball >200){
        aiY -= 5;
    //console.log("-200")
    }
        else if(middlepadle  - middleball >50){
            aiY -= 6;
        //console.log("50")
        }
            else if(middlepadle  - middleball < -200){
                aiY += 5;
            //console.log("20000")
            }
                else if(middlepadle  - middleball <-50){
                    aiY += 6;
                //console.log("500000")
                }
            }

    else if(ballX<500 && ballX>150){
    if(middlepadle - middleball > 100){
        aiY -= 5;
    }
    else if(middlepadle - middleball < -100){
        aiY += 7;
    }
    }

}



 canvas1.addEventListener("mousemove", playerposition )



function game() { 
    
table()
line()
bramkaai()
bramkaplayer()
player()
ai()
aiPosition()
ball()


//startgavev2()


if(licznikgraczav1>=3){
    graczwygral()
}
if(licznikbotav1>=3){
    botwygral()
}
 

}

function startgavev2() {
    ctx.fillStyle = "pink"
    ctx.fillText(" Click to Start Game", cw/2-200, ch/2)
    ctx.font = "50px fantasy"


    
}
startgavev2()






function startgame() {


    table()
    line()
    bramkaai()
    bramkaplayer()
    player()
    ai()
    ball()
    startgavev2()
    aiPosition()
    
   
}
startgame()

canvas1.addEventListener("click", function (e) {
    
       setInterval(game, 1000/60)
       e.preventDefault()
      // return
})

function playagain() {
    
   
}


