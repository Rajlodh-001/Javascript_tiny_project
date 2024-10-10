// Random Number Generator
// let rmin =50;
// let rmax =100;

// let randomNum= Math.floor(Math.random()*(rmax-rmin))+rmin;

// console.log(randomNum);



const buttons =document.getElementById("buttons")

const lables1 =document.getElementById("labales1")
const lables2 =document.getElementById("labales2")
const lables3 =document.getElementById("labales3")


const min = 1;
const max = 6;

let  rnum1;
let  rnum2;
let  rnum3;
rnum = Math.floor(Math.random()*6)+1;

buttons.onclick=function(){
    
    rnum1 = Math.floor(Math.random()*max)+min;
    lables1.textContent=rnum1;
    rnum2 = Math.floor(Math.random()*max)+min;
    lables2.textContent=rnum2;
    rnum3 = Math.floor(Math.random()*max)+min;
    lables3.textContent=rnum3;

}

