// Add event listener to all save buttons
function addSaveButtonListeners() {
  $(".saveBtn").each(function () {
    $(this).on("click", saveUserInput.bind(this));
  });
}
$(window).on('beforeunload', function() {
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    var userInput = $(this).find(".description").val();
    localStorage.setItem(blockId, userInput);
  });
});

function saveUserInput(btn) {
  var blockId = $(btn).closest(".time-block").attr("id");
  var userInput = $(btn).siblings(".description").val();
  localStorage.setItem(blockId, userInput); // save the user input in local storage
}

// Apply appropriate class based on comparison to current hour
function applyTimeBlockClasses() {
  var currentHour = dayjs().hour();
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// Get saved user input from local storage
function getSavedUserInput() {
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId); // get saved user input from local storage
    if (savedUserInput !== null) {
      $(this).find(".description").val(savedUserInput); // set the value of the textarea to the saved user input
    }
  });
}

// Display current date in header of page
function displayCurrentDate() {
  var currentDate = dayjs().format("dddd, MMMM D");
  document.getElementById("currentDay").textContent = currentDate;
}

// Call functions on page load
$(document).ready(function() {
  addSaveButtonListeners();
  applyTimeBlockClasses();
  getSavedUserInput(); // populate textareas with saved user input
  displayCurrentDate();
});