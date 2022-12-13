
// Time and date using Day.js
var theTime = dayjs().format("hh:mm:ss");
$("#currentTime").text(theTime);

var theDate = dayjs().format("MMMM DD, YYYY");
$("#currentDay").text(theDate);


// Changes the color on the time boxes depending on the current time.
$(function() {
var timeNow = dayjs().format("H");
// console.log(timeNow);

$(".timeBlock").each(function () {
  var timeBlockID = parseInt($(this).attr("id"));
// console.log(timeBlockID);
  if (timeBlockID < timeNow) {
    $(this).addClass("past");
  } else if (timeBlockID == timeNow) {
    $(this).addClass("present");
  } else if (timeBlockID > timeNow) {
    $(this).addClass("future");
  }
});
});




// Restoring the local storage data back into the planner

$(".activity").each(function () {
  
var orderMyStuff = JSON.parse(localStorage.getItem("myStuff"));

  if (orderMyStuff !== null) {
    document.querySelector(".activity").textContent = Object.values(orderMyStuff);
  } 
  
  
  // console.log(Object.values(orderMyStuff));
  // console.log(orderMyStuff);
  // console.log($(this).siblings(".activity"));
});





// Allows the information the user enters to be saved locally. Each textarea paired with the parent ID.

var myStuff = {};

$(".storeInfoBtn").click(function() {

  var savetron = $(".storeInfoBtn").index(this);

  // console.log(savetron);

  myStuff[savetron] = $(this).parent().children(".activity").val();

  // console.log(myStuff);

  localStorage.setItem("myStuff", JSON.stringify(myStuff));


});