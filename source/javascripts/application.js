$(function() {

  // Set up the countdown timer
  
  var currentDate = new Date();

  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#clock').countdown({until: austDay});
  $('#year').text(austDay.getFullYear());

  // Position the countdown clock

  /*
  var horPosition = $('#clock').outerWidth();
  var verPosition = $('#clock').outerHeight();

  $('#clock').css({
    'margin-left':-horPosition/2,
    'margin-top':-verPosition/2
  });
*/
  
});