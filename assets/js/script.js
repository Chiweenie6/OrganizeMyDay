// Current date and time
const currentDay = new Date().toDateString();
document.getElementById("currentDay").innerHTML = currentDay;

const currentTime = new Date().toLocaleTimeString();
document.getElementById("currentTime").innerHTML = currentTime;




// Changes the color on the time boxes depending on the current time.
const timeBlock = document.getElementsByClassName("timeBlock");
const timeHour = (new Date()).getHours();
// $(".timeBlock").each(function() {
//   var cTime = parseInt($(this).prop("id"));
//   if(cTime < timeHour){
//     $(this).css("background-color", "grey");
//   } else if (cTime === timeHour) {
//     $(this).css("background-color", "green");
//   } else if (cTime > timeHour) {
//     $(this).css("background-color", "lightblue");
//   }
// });
 console.log(timeHour);
console.log(parseInt(document.querySelectorAll("#id")));
console.log(timeBlock.classList);




// $(".timeBlock").each(function() {
//   var cTime = parseInt($(this).prop("id"));
//   if (cTime < timeHour){
//     timeBlock.classList.add("past");

//   }
// });


//  function changingColor() {
//   var timeBlock = document.querySelectorAll(".timeBlock");
//   timeBlock.classList.add("past");
//  };

//  changingColor();








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
  