

  $(function () {
    // Add click event listener to all save buttons
    $(".saveBtn").on("click", function() {
      // Get the id of the containing time-block
      var blockId = $(this).closest(".time-block").attr("id");
      // Get the user input from the description text area
      var userInput = $(this).siblings(".description").val();
      // Save the user input in local storage using the block id as the key
      localStorage.setItem(blockId, userInput);
    });
  });
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
;
