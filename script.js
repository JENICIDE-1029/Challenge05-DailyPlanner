// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var now = dayjs().$H
  // .format('ha');
  console.log(now);

  $('.time-block').each(function () {
    var timeEl = $(this);
    var timeBlock = parseInt(timeEl.attr('id').split('-')[1]);
    console.log(timeEl, timeBlock);

    //so since our NOW is in military time, then we are going to need to account for how the number we are comparing our time with is also in miltary time
    if (now > 12 && timeBlock == 1) {

      timeBlock += 12;
      console.log(timeBlock);

    };
    if (now > 12 && timeBlock == 3) {

      timeBlock += 12;
      console.log(timeBlock);

    };
    if (now > 12 && timeBlock == 4) {

      timeBlock += 12;
      console.log(timeBlock);

    };
    if (now > 12 && timeBlock == 5) {

      timeBlock += 12;
      console.log(timeBlock);

    };


    //this cute lil function is what adds in the correct styling for the timeblock depending on the time that the site was loaded 
    if (timeBlock < now) {
      timeEl.addClass('past');
    } else if (timeBlock == now) {
      timeEl.addClass('present');

    } else if (timeBlock > now) {
      timeEl.addClass('future');

    }


  })

 
  
  // TODO: Add code to display the current date in the header of the page.
});

var buttonContainer = document.querySelector("#container");

// Listen for any clicks within the img-container div
buttonContainer.addEventListener("click", function (event) {
  var selectedButton = event.target;
  console.log(selectedButton)
  // Check if the clicked element was an image
  if (selectedButton.matches("button")) {
    // Get the current value of the image's data-state attribute
    var state = selectedButton.getAttribute("data-state");

    if (state === "still") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      selectedButton.dataset.state = "animate";
      selectedButton.setAttribute("data-state", "animate");

      // Update the image's source to the string being stored in the data-animate attribute
      selectedButton.setAttribute("src", selectedButton.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      selectedButton.dataset.state = "still";
      selectedButton.setAttribute("src", selectedButton.dataset.still);
    }
  }
});

