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
document.getElementById("8AM").innerText += "0" + 8 + ":" + 0 + 0 + " AM";

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
document.getElementById("9AM").innerText += "0" + 9 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 9 ){
  document.getElementById("input2").className += " " + "past"; //turns red
} else if (compareHr < 9){
  document.getElementById("input2").className += " " + "future"; //turns green
} else if (compareHr === 9){
  document.getElementById("input2").className += " " + "present"; //turns white
}


var inputEvent2= document.getElementById("input2");

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
  localStorage.setItem("event2", inputEvent2.value);  
}
////
///10AM
document.getElementById("10AM").innerText += " " + 10 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 10 ){
  document.getElementById("input3").className += " " + "past"; //turns red
} else if (compareHr < 10){
  document.getElementById("input3").className += " " + "future"; //turns green
} else if (compareHr === 10){
  document.getElementById("input3").className += " " + "present"; //turns white
}


var inputEvent3= document.getElementById("input3");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent3(){
  document.getElementById("input3").removeAttribute("placeholder");
  document.getElementById("input3").setAttribute('value', localStorage.getItem("event3"));

}
if (localStorage.getItem("event3") === null){
  console.log("storage is empty")
} else {
  showEvent3();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent3(){
  localStorage.setItem("event3", inputEvent3.value);  
}
////
///11AM
document.getElementById("11AM").innerText += 11 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 11 ){
  document.getElementById("input4").className += " " + "past"; //turns red
} else if (compareHr < 11){
  document.getElementById("input4").className += " " + "future"; //turns green
} else if (compareHr === 11){
  document.getElementById("input4").className += " " + "present"; //turns white
}


var inputEvent4= document.getElementById("input4");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent4(){
  document.getElementById("input4").removeAttribute("placeholder");
  document.getElementById("input4").setAttribute('value', localStorage.getItem("event4"));

}
if (localStorage.getItem("event4") === null){
  console.log("storage is empty")
} else {
  showEvent4();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent4(){
  localStorage.setItem("event4", inputEvent4.value);  
}
////
///12PM
document.getElementById("12PM").innerText += 12 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 12 ){
  document.getElementById("input5").className += " " + "past"; //turns red
} else if (compareHr < 12){
  document.getElementById("input5").className += " " + "future"; //turns green
} else if (compareHr === 12){
  document.getElementById("input5").className += " " + "present"; //turns white
}


var inputEvent5= document.getElementById("input5");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent5(){
  document.getElementById("input5").removeAttribute("placeholder");
  document.getElementById("input5").setAttribute('value', localStorage.getItem("event5"));

}
if (localStorage.getItem("event5") === null){
  console.log("storage is empty")
} else {
  showEvent5();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent5(){
  localStorage.setItem("event5", inputEvent5.value);  
}
////
///1PM
document.getElementById("1PM").innerText += "0" + 1 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 13 ){
  document.getElementById("input6").className += " " + "past"; //turns red
} else if (compareHr < 13){
  document.getElementById("input6").className += " " + "future"; //turns green
} else if (compareHr === 13){
  document.getElementById("input6").className += " " + "present"; //turns white
}


var inputEvent6= document.getElementById("input6");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent6(){
  document.getElementById("input6").removeAttribute("placeholder");
  document.getElementById("input6").setAttribute('value', localStorage.getItem("event6"));

}
if (localStorage.getItem("event6") === null){
  console.log("storage is empty")
} else {
  showEvent6();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent6(){
  localStorage.setItem("event6", inputEvent6.value);  
}
////
///2PM
document.getElementById("2PM").innerText += "0" + 2 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 14 ){
  document.getElementById("input7").className += " " + "past"; //turns red
} else if (compareHr < 14){
  document.getElementById("input7").className += " " + "future"; //turns green
} else if (compareHr === 14){
  document.getElementById("input7").className += " " + "present"; //turns white
}


var inputEvent7= document.getElementById("input7");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent7(){
  document.getElementById("input7").removeAttribute("placeholder");
  document.getElementById("input7").setAttribute('value', localStorage.getItem("event7"));

}
if (localStorage.getItem("event7") === null){
  console.log("storage is empty")
} else {
  showEvent7();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent7(){
  localStorage.setItem("event7", inputEvent7.value);  
}
////
///3PM
document.getElementById("3PM").innerText += "0" + 3 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 15 ){
  document.getElementById("input8").className += " " + "past"; //turns red
} else if (compareHr < 15){
  document.getElementById("input8").className += " " + "future"; //turns green
} else if (compareHr === 15){
  document.getElementById("input8").className += " " + "present"; //turns white
}


var inputEvent8= document.getElementById("input8");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent8(){
  document.getElementById("input8").removeAttribute("placeholder");
  document.getElementById("input8").setAttribute('value', localStorage.getItem("event8"));

}
if (localStorage.getItem("event8") === null){
  console.log("storage is empty")
} else {
  showEvent8();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent8(){
  localStorage.setItem("event8", inputEvent8.value);  
}
////
///4PM
document.getElementById("4PM").innerText += "0" + 4 + ":" + 0 + 0 + " AM";

//Changes color of the input field depending on what time it is:
if (compareHr > 16 ){
  document.getElementById("input9").className += " " + "past"; //turns red
} else if (compareHr < 16){
  document.getElementById("input9").className += " " + "future"; //turns green
} else if (compareHr === 16){
  document.getElementById("input9").className += " " + "present"; //turns white
}


var inputEvent9= document.getElementById("input9");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent9(){
  document.getElementById("input9").removeAttribute("placeholder");
  document.getElementById("input9").setAttribute('value', localStorage.getItem("event9"));

}
if (localStorage.getItem("event9") === null){
  console.log("storage is empty")
} else {
  showEvent9();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent9(){
  localStorage.setItem("event9", inputEvent9.value);  
}
////
///5PM
document.getElementById("5PM").innerText += "0" + 5 + ":" + 0 + 0 + " PM";

//Changes color of the input field depending on what time it is:
if (compareHr > 17 ){
  document.getElementById("input10").className += " " + "past"; //turns red
} else if (compareHr < 17){
  document.getElementById("input10").className += " " + "future"; //turns green
} else if (compareHr === 17){
  document.getElementById("input10").className += " " + "present"; //turns white
}


var inputEvent10= document.getElementById("input10");

//displays local storage entry; if localstorage is empty it displays a input field placeholder:
function showEvent10(){
  document.getElementById("input10").removeAttribute("placeholder");
  document.getElementById("input10").setAttribute('value', localStorage.getItem("event10"));

}
if (localStorage.getItem("event10") === null){
  console.log("storage is empty")
} else {
  showEvent10();
}

//saves input field text in local sotrage once the input 'save' button is clicked:
function saveEvent10(){
  localStorage.setItem("event10", inputEvent10.value);  
}