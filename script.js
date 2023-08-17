let gameseq=[];
let userseq=[];
let scores=[];
let max=0;

let btns = ["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function() {
if(started==false){
    console.log("game started!");
    started=true;

    levelUp();
}
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userseq= [];
    level++;
    h2.innerText=`Level ${level}`; 

    let randidx=Math.floor(Math.random() * 3);
    let randcolor=btns[randidx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(randBtn);
    
}

function checkAns(inx){
    

    if(userseq[inx]===gameseq[inx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> Press any key to start`;
        scores.push(level);
        for(score of scores)
        if(score>max){
               max=score;
        }
        h3.innerHTML=`Your maximum score is <b>${max}</b>`
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
       
    }
}

function btnpress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}




let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
     btn.addEventListener("click" , btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}