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


  // Adedd a function to save the text to the local storage when the save button is clicked
  const timeBlocks = $(".time-block")
  timeBlocks.each(function (i, timeBlock) {
    const saveBtn = $(timeBlock).children('.saveBtn')
    const textArea = $(timeBlock).children('textarea')
    $(saveBtn).on("click", function () {
      localStorage.setItem(timeBlock.id, $(textArea).val())
    })
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const currentHour = dayjs().hour()
  timeBlocks.each(function (i, timeBlock) {
    //get the id of each time block
    let id = timeBlock.id
    //get the hour inside the id
    let blockHour = id.slice(5)
    //compare the block hour to the currentHour
    if (currentHour < blockHour) {
      //assign class 'future' to timeblock
      $(this).addClass('future')
    } else if (currentHour > blockHour) {
      //assign class 'past' to timeblock
      $(this).addClass('past')
    } else {
      //assign class 'present' to timeblock
      $(this).addClass('present')
    }
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  timeBlocks.each(function (i, timeBlock) {
    const textArea = $(timeBlock).children('textarea')
    const saved = localStorage.getItem(timeBlock.id)
    if (!saved) return
    $(textArea).val(saved)
  })
  // THEN the current day is displayed at the top of the calendar

  // TODO: Add code to display the current date in the header of the page.

  // Added a function to display current time up to seconds 
  function displayTime() {
    $('#currentDay').text(dayjs().format('MMMM D YYYY, h:mm:ss a'))
  }

  displayTime()
  setInterval(displayTime, 1000)

});