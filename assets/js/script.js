
// Time and date using Day.js
var theTime = dayjs().format("hh:mm:ss");
$("#currentTime").text(theTime);

var theDate = dayjs().format("MMMM DD, YYYY");
$("#currentDay").text(theDate);





$(function() {
// Changes the color on the time boxes depending on the current time.

var timeNow = dayjs().format("H");
console.log(timeNow);

var timeNowString = timeNow.toString();
console.log(timeNowString);

console.log();



// var timeID = $(".activity").parent().attr("id");
var activity = $(".activity").parent().attr("id");

console.log(timeID);


var timeArray = $(".activity").parent().toArray();

var timeID = [];
$(".activity").parent().each(function() {
  timeID.push(this.id);
});

var timeIDNum = timeID.map(function(x) {
  return parseInt(x);
});


console.log(timeArray);
console.log(timeID);
console.log(timeIDNum);

while (timeID.map == timeNow) {
  $(".activity").addClass("present");
}


// console.log($(".activity").addClass("present"));



// $(".activity").each(function() {
//   // var cTime = $(".activity").parent();
//   if (timeID < timeNow) {
//     $(".activity").addClass("past");
//   }
//   });
});












// function to store information locally using the save button
$("button").click(function(){

})


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
  });
  