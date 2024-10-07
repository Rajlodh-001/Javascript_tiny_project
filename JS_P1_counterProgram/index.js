


const decreasebtn =document.getElementById("decrease");
const resetbtn =document.getElementById("reset");
const increasebtn =document.getElementById("increase");
const countLable =document.getElementById("counterLable")

let count = 0;

increasebtn.onclick = function(){
    count++;
    countLable.textContent = count;
    console.log(count)
}

reset.onclick = function(){
    count=0;
    countLable.textContent = count;
    console.log(count)
}

decreasebtn.onclick = function(){
    count--;
    countLable.textContent = count;
    console.log(count)
}
