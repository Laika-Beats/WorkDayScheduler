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
////
///9AM
document.getElementById("9AM").innerText += 9 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 9 ){
  document.getElementById("input2").className += " " + "past"; //turns red
} else if (compareHr < 8){
  document.getElementById("input2").className += " " + "future"; //turns green
} else if (compareHr === 8){
  document.getElementById("input2").className += " " + "present"; //turns white
}


var inputEvent= document.getElementById("input2");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent2(){
  document.getElementById("input2").removeAttribute("placeholder");
  document.getElementById("input2").setAttribute('value', localStorage.getItem("event2"));

}
if (localStorage.getItem("event2") === null){
  console.log("storage is empty")
} else {
  showEvent2();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent2(){
  localStorage.setItem("event2", inputEvent.value);  
}

