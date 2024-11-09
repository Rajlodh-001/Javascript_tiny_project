// Random Password Generator





const passwordLength = 12 ;

const includeLowerCase =false;
const includeUpperCase = false;
const includeNumber =true;
const includeSymbols=false;



function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){

    const lowercaseChar ="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number ="1234567890";
    const symbols="~@#$%^&*()_+{}[]?/,.<>";


    let allowCahr ="";

    let password ="";

    allowCahr += includeLowerCase ? lowercaseChar :"";
    allowCahr += includeUpperCase ? uppercaseChar :"";
    allowCahr += includeNumber ? number : "";
    allowCahr += includeSymbols ? symbols : "";

    totalcahr = allowCahr.length;
    console.log(totalcahr)

    if(passwordLength<=0){
        return `(Password lenth mustbe atleast 1)`;
    }

    if (allowCahr.length===0){
        return `(AT least 1 set of character need to be selected)`;
    }
    
    for(let i= 0;i<=passwordLength;i++){
        const ramdomindex =Math.floor(Math.random()*allowCahr.length+1);
        password+=allowCahr[ramdomindex]
        
    }

    

    return password;

}

const password =generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols)

console.log(`Generated PAssword ${password}`)



