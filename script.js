$(function () {
  // current hour is saved as a number
  var currentHour = Number(dayjs().format('H'));

  /* loops through each of the .time-block divs and adds/removes a class
  whether or not their id matches the current hour */
  $('.time-block').each(function() {
    // converts the id from a string to a number
    var hourValue = Number($(this).attr("id"));

    if (currentHour > hourValue) {
      // this is refering to the current .time-block div that it's looped on
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currentHour < hourValue) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  var currentTime = dayjs().format('dddd, MMM D');
  $('#display-4').text(currentTime);

  // all elements with the "saveBtn" class are selected and will react to this onclick function
  $(".saveBtn").on("click", saveToLocalStorage);

  // called when the save button is clicked
  function saveToLocalStorage() {
    // finds the save button's parents's id
    var blockId = $(this).parent().attr("id");
    // finds the save button's siblings's (.description) value (the user inputted area)
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
