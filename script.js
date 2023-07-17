$(function () {
  // current hour is saved
  var currentHour = Number(dayjs().format('H'));
  // removes/adds class to hour block if it's in past/present/future
  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var hourValue = parseInt(timeBlocks[i].getAttribute("data-value"), 10);
    if (currentHour > hourValue) {
      timeBlocks[i].classList.remove("present");
      timeBlocks[i].classList.remove("future");
      timeBlocks[i].classList.add("past");
    } else if (currentHour < hourValue) {
      timeBlocks[i].classList.remove("past");
      timeBlocks[i].classList.remove("present");
      timeBlocks[i].classList.add("future");
    } else {
      timeBlocks[i].classList.remove("past");
      timeBlocks[i].classList.remove("future");
      timeBlocks[i].classList.add("present");
    }
  }
  // TODO: Add code to display the current date in the header of the page.
  var currentTime = dayjs().format('dddd, MMM D');
  $('#display-4').text(currentTime);

  // all elements with the "saveBtn" class are selected and will react to this onclick function
  $(".saveBtn").on("click", saveToLocalStorage);

  // called when the save button is clicked
  function saveToLocalStorage() {
    // finds the save button's parents's id
    var blockId = $(this).parent().attr("id");
    // finds the save button's sibling's (.description) value (this user inputted area)
    var blockDescription = $(this).siblings(".description").val();
    // saves description according to the id of it's container
    localStorage.setItem(blockId, blockDescription);
  }

  // sets value of each description box to the value of the items of these id's
  $("#9 .description").val(localStorage.getItem("9"));;
  $("#10 .description").val(localStorage.getItem("10"));;
  $("#11 .description").val(localStorage.getItem("11"));;
  $("#12 .description").val(localStorage.getItem("12"));;
  $("#13 .description").val(localStorage.getItem("13"));;
  $("#14 .description").val(localStorage.getItem("14"));;
  $("#15 .description").val(localStorage.getItem("15"));;
  $("#16 .description").val(localStorage.getItem("16"));;

});
