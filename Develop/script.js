

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
  $(function () {
    // Get current date and time
    var currentHour = dayjs().hour();
  
    // Loop through each time block
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // Apply appropriate class based on comparison to current hour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    // Add listener for click events on save button
    $(".saveBtn").on("click", function () {
      // Get user input
      var userInput = $(this).siblings(".description").val().trim();
      // Get id of time block as key for local storage
      var blockId = $(this).parent().attr("id");
      // Save user input to local storage
      localStorage.setItem(blockId, userInput);
    });
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
;
