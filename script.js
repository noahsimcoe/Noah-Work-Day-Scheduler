$(function () {
  // current hour is saved as a number
  var currentHour = Number(dayjs().format('H'));

  /* loops through each of the .time-block divs and adds/removes a class
  whether or not their id matches the current hour */
  $('.time-block').each(function() {
    // converts the id from a string to a number
    var hourValue = Number($(this).attr("id"));

    if (currentHour > hourValue) {
      $(this).removeClass("present future").addClass("past");
    } else if (currentHour < hourValue) {
      $(this).removeClass("past present").addClass("future");
    } else {
      $(this).removeClass("past future").addClass("present");
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  var currentTime = dayjs().format('dddd, MMM D');
  $('#display-4').text(currentTime);

  // all elements with the "saveBtn" class are selected and will react to this onclick function
  $(".saveBtn").on("click", saveToLocalStorage);

  function saveToLocalStorage() {
    // finds the save button's parents's id
    var blockId = $(this).parent().attr("id");
    // finds the save button's siblings's (.description) value (the user inputted area)
    var blockDescription = $(this).siblings(".description").val();
    // saves description according to the id of it's container
    localStorage.setItem(blockId, blockDescription);
  }

  // sets value of each description box to the value of the items of these id's
  for (var i = 9; i <= 16; i++) {
    // this is a "template literal" that is injecting a variable into a string (string representation, turning it into a string)
    $(`#${i} .description`).val(localStorage.getItem(`${i}`))
  }
});
