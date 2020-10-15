//variables for date and time
var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var hours = today.getHours();
var compareHr = parseInt(today.getHours());
var minutes = today.getMinutes();
var hoursMins = hours 
console.log(hoursMins); 
// Check whether AM or PM 
var newformat = hours >= 12 ? 'PM' : 'AM';    
// Find current hour in AM-PM Format 
hours = hours % 12;           
// To display "0" as "12" 
hours = hours ? hours : 12;  
minutes = minutes < 10 ? '0' + minutes : minutes;
var todayTime = date + " " + hours + ':' + minutes + ' ' + newformat;

var inputEvent= document.getElementById("input");
//var storedValue = localStorage.getItem("event");

//displays date and time in the html file:
document.getElementById("currentDate").innerText += todayTime;
document.getElementById("8AM").innerText += 8 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 8 ){
  document.getElementById("input").className += " " + "past"; //turns red
} else if (compareHr < 8){
  document.getElementById("input").className += " " + "future"; //turns green
} else if (compareHr === 8){
  document.getElementById("input").className += " " + "present"; //turns white
}


var inputEvent= document.getElementById("input");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent(){
  document.getElementById("input").removeAttribute("placeholder");
  document.getElementById("input").setAttribute('value', localStorage.getItem("event"));

}
if (localStorage.getItem("event") === null){
  console.log("storage is empty")
} else {
  showEvent();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent(){
  localStorage.setItem("event", inputEvent.value);  
}

