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

    };


  })
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
