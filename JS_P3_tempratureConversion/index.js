

const textbox = document.getElementById("textbox");

const toFH = document.getElementById("toFH");
const toCL = document.getElementById("toCL");

const result = document.getElementById("result");

let temp ;

function convert(){


    if(toFH.checked){
        temp =Number(textbox.value);
        temp =temp *9/5+32;
        result.textContent = temp.toFixed(1) +"°F";

    }else if(toCL.checked){

        temp =Number(textbox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) +"°C";
    }else{
        result.textContent = " Select a unit ";
        console.log("test")
    }
    
}