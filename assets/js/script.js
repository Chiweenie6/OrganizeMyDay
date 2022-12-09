
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
  if (timeBlockID > timeNow) {
    $(this).addClass("past");
  } else if (timeBlockID == timeNow) {
    $(this).addClass("present");
  } else if (timeBlockID < timeNow) {
    $(this).addClass("future");
  }
});



// function to store information locally using the save button
$("button").click(function(){

});












// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?


    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });})













  // var timeID = $(".activity").parent().attr("id");
// var activity = $(".activity").parent().attr("id");

// console.log(timeID);


// var timeArray = $(".activity").parent().toArray();

// var timeID = [];
// $(".activity").parent().each(function() {
//   timeID.push(this.id);
// });

// var timeIDNum = timeID.map(function(x) {
//   return parseInt(x);
// });



  // var idArray = [];
// $(this).attr("id");



// console.log($(".timeHolder").children());

// var timeSpace = $(".timeHolder").children().attr("id");

// $(".timeHolder").each(Function() {
  

// })

// var timeBlock = $(".timeBlock").attr("id");
// console.log(timeBlock);


// var timeBlockID = [];
// $(".timeBlock").each(function() {
//   timeBlockID.push(this.id);
//   console.log(timeBlockID);
// });



// var timeBlockID = [];
// $(".timeBlock").each(function() {
//   timeBlockID.push($(this).attr("id"));
//   console.log(timeBlockID);
// });
// console.log(timeBlock);


// var theHour = parseInt($(this).attr("id"));