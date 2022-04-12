let maxScore=5;
// let maxScore=prompt("Enter the maximum score")

setTimeout(function(){
    alert("Select the maximum score!")
},2000)
const a=document.querySelector("#a");
const b=document.querySelector("#b");
const btnA=document.querySelector("#p1");
const btnB=document.querySelector("#p2");
let max=document.querySelector("#maxscore");


btnA.addEventListener("click",increaseA);
btnB.addEventListener("click",increaseB);
max.addEventListener("change",function(){
    maxScore=parseInt(this.value);
})

let isGameover=false;
const resetBtn=document.querySelector("#reset");

resetBtn.addEventListener("click",function(){
    a.innerText='0';
    b.innerText='0';
    scoreA=0;
    scoreB=0;
    isGameover=false;
})
let scoreA=0;
let scoreB=0;

function increaseA(){
    if(!isGameover){
    scoreA++;
    a.innerText=scoreA;
    }
    
    if(scoreA===scoreB){
        b.style.color='blue';
        a.style.color='blue';
    }
    else if(scoreA>scoreB){
        a.style.color='#337025';
        b.style.color='red';
    }
    else{
        b.style.color='#337025';
        a.style.color='red';
    }
    if(scoreA===maxScore){
        isGameover=true;
        alert("Player 1 Wins!!!")
        resetBtn.click();
    }
}

function increaseB(){
    if(!isGameover){
        scoreB++;
        b.innerText=scoreB;
    }
    
    if(scoreA===scoreB){
        b.style.color='blue';
        a.style.color='blue';
    }
    else if(scoreA>scoreB){
        a.style.color='#337025';
        b.style.color='red';
    }
    else{
        b.style.color='#337025';
        a.style.color='red';
    }
    if(scoreB===maxScore){
        isGameover=true;
        alert("Player 2 Wins!!!")
        resetBtn.click();
    }
}