const enddate = "14 march 2023 1:23 pm"

document.getElementById("endDate").innerText=enddate
const day=document.getElementById("Day")
const hour=document.getElementById("Hour")
const Min=document.getElementById("Min")
const Sec=document.getElementById("Sec")




function clock(){

    const end = new Date(enddate)
    const newd = new Date();
    const diff = (newd-end) /1000   //for seconds
    day.value=(Math.round(diff/3600/24)); // how many days are left quotient
    hour.value=(Math.round(diff/3600)%24); // how many hours are remaining after days calculation so remainder
    Min.value=(Math.round(diff/60)%60)
    Sec.value=(Math.round(diff)%60)
}
clock();
setInterval(function(){
    clock()},1000);
   
setInterval();
