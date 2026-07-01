let you = document.querySelector(".user");
let computer = document.querySelector(".computer");

const boxes = document.querySelectorAll(".box");

let rock = document.querySelector("#rock"); 
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let arr = ["rock", "paper", "scissors"];

let winner =  document.querySelector(".winner");

let countc=0,county=0,count=0;
boxes.forEach( (box) => {

    
    box.addEventListener("click",() => {
        count++;
        let userInput="";
        let compInput="";
        // if(count%2!=0){
        userInput += box.getAttribute("id");
    //     }
    // if(count%2==0){
        
        compInput = arr[Math.floor(Math.random()*3)];
        compInput += box.getAttribute("id");
    // console.log(compInput);
    // }
    // if(count%2==0){
    if(userInput == "rock" ){
        if( compInput == "paper" ) countc++;
        if( compInput == "scissors" ) county++;
    }
    if(userInput == "paper" ){
        if( compInput == "rock" ) county++;
        if( compInput == "scissors" ) countc++;
    }
    if(userInput == "scissors" ){
        if( compInput == "rock" ) countc++;
        if( compInput == "paper" ) county++;
    }

    // you.innerText = `${county}`;
    // computer.innerText = `${countc}`;
    if(county>countc) winner.innerText = `Congratulations! You have ${county-countc} more points than computer.`;
    else if(county<countc) winner.innerText = `You have ${countc-county} less points than computer.`;
    else winner.innerText = "Both have equal points.";
    // }



    });

    

});


