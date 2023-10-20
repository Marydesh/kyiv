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
    //let blockHour = id.split("-")[1]
    console.log(blockHour, currentHour);
    //compare the block hour to the currentHour
    if(currentHour < blockHour){
      //assign class 'future' to timeblock
      $(this).addClass('future')
    } else if (currentHour > blockHour){
      //assign class 'past' to timeblock
      $(this).addClass('past')
    } else {
      //assign class 'present' to timeblock
      $(this).addClass('present')
    }
  })
  // const prevHour = currentHour.subtract(1, 'hour')
  // const nextHour = currentHour.add(1, 'hour')
  // const hours = [prevHour, currentHour, nextHour]
  // timeBlocks.each(function(i, timeBlock) {
  //   const hourEl = $(timeBlock).children('.hour')
  //   const hour = hours[i]
  //   hourEl.text(hour.format("ha"))
  //   timeBlock.id = "hour-" + hour.format('h')
  // })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  timeBlocks.each(function (i, timeBlock) {
    // const hour = hours[i]
    // const textArea = $(timeBlock).children('textarea')
    // const saved = localStorage.getItem("hour-" + hour.format('h'))
    // if (!saved) return
    // $(textArea).val(saved)
  })

  // TODO: Add code to display the current date in the header of the page.
  /*
    $()
      .text("..")
      currentHour.format("")

    https://api.jquery.com/
      .text()
      .val()
      .each()
      .on()
      $()
  */
});


// const _saveBtns = document.querySelectorAll(".saveBtn")
// _saveBtns.forEach(function(banana, abc) {
//   console.log(`
//     the banana is: ${banana}
//     the index is: ${abc}
//   `)
// })

/*
  https://day.js.org/docs/en/get-set/hour

  HTMLElement.addEventListener("mouseenter", function(){})
  HTMLElement.addEventListener("mouseenter", ()=>{})

  When you do DOM stuff with plain HTML, you are dealing with HTMLElement objects
    {
      innerText: "",
      innerHTML: "",
      addEventListener: (){},
      style: {
        backgroundColor: ""
      }
    }
  When you do DOM stuff with plain jQuery, you are dealing with jQuery objects
    {
      text(){},
      on(){},
    }

    localStorage.getItem("key")
    localStorage.setItem("key", "value")

    // https://day.js.org/docs/en/parse/string-format
    https://day.js.org/docs/en/display/format
    https://day.js.org/docs/en/manipulate/add
*/