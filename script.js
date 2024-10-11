let userscore=0;
let compscore=0;
let userch;
let compch;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let usersc=document.querySelector("#user-score");
let compsc = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});

const computerChoice =()=>{
    return Math.floor(Math.random()*3);
}


const playGame =(userChoice)=>{ 
    if(userChoice==='rock') userch=0;
    else if(userChoice==='paper') userch=1;
    else userch=2;
    compch = computerChoice();
    if(userch===compch){
      userch = userch===0?'rock':userch===1? 'paper':'scissors';
      compch = compch===0?'rock':compch===1? 'paper':'scissors';
      msg.innerHTML=`game draw! your ${userch} equals ${compch}`;
      msg.style.backgroundColor = "#081b31";

    }
    else if(userch ===0 && compch===2)
    {
        userscore++;
        usersc.innerText=userscore;
        userch = userch===0?'rock':userch===1? 'paper':'scissors';
        compch = compch===0?'rock':compch===1? 'paper':'scissors';        
        msg.innerHTML=`you win! ${userch} beats ${compch}`;
        msg.style.backgroundColor = "green";
        
    }
    else if(userch===2 &&compch===0){
        compscore++;
        compsc.innerText=compscore;
        userch = userch===0?'rock':userch===1? 'paper':'scissors';
        compch = compch===0?'rock':compch===1? 'paper':'scissors';
        msg.innerHTML=`you lose, ${userch} lose to  ${compch}`;
        msg.style.backgroundColor = "red";
    }
    else if(userch<compch){
        compscore++;
        compsc.innerText=compscore;
        userch = userch===0?'rock':userch===1? 'paper':'scissors';
        compch = compch===0?'rock':compch===1? 'paper':'scissors';
        msg.innerHTML=`you lose,${userch} lose to ${compch}`;
        msg.style.backgroundColor = "red";
    }
    else {
        userscore++;
        usersc.textContent=userscore;
        userch = userch===0?'rock':userch===1? 'paper':'scissors';
        compch = compch===0?'rock':compch===1? 'paper':'scissors';
        msg.innerHTML=`you win! ${userch} beats ${compch}`;
        msg.style.backgroundColor = "green";

    }
}