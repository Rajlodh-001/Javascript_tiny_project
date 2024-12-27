



function updateclock(){
const now =new Date();
let hour = now.getHours();

let meridiem = hour>=12?"PM" : "AM"

hour= hour %12||12 ;
hour=hour.toString().padStart(2,0)
const miniuts = now.getMinutes().toString().padStart(2,0);
const seconds = now.getSeconds().toString().padStart(2,0);



const timeString =`${hour}:${miniuts}:${seconds}  ${meridiem}`;

document.getElementById("clock").textContent=timeString;
}




updateclock();
setInterval(updateclock,1000)









