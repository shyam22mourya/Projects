// Started 
let stared = false;
let level = 0;
let gameseq = [];
let userseq = [];
let high_score=0 ;

let btns = ["green", "red", "blue", "yellow"];

//
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {

    if (stared == false) {
        console.log("game started")
        stared = true;
    levelup();
    }
});

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}


function levelup() {
    userseq=[];
    level++;
    h2.innerText = ` level ${level}`;
    //random btn choose 
    let randind = Math.floor(Math.random() * 4);
    let randcol = btns[randind];
    gameseq.push(randcol);
    // console.log(gameseq)
    let randBtn = document.querySelector(`.${randcol}`);
    btnflash(randBtn);
}


function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("purpel");
    setTimeout(function () {
        btn.classList.remove("purpel");
    }, 250);
}

function checkAns(ind){

     if (userseq[ind]==gameseq[ind]) {
        if (userseq.length==gameseq.length) {
            setTimeout(levelup,1000);
        }
     } else{
        if (level>high_score) {
            high_score=level
        }
         h2.innerHTML=`Game Over ! Your score is <b> ${level}</b> <br> Press any key to start  <br> high score : ${high_score}`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
         },100);
         reset();
     }
}
function btnPress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

     checkAns(userseq.length-1);
}


function reset() {
    level=0;
    stared=false;
    userseq=[];
    gameseq=[];
}