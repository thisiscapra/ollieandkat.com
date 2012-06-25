$(function() {
  var currentDate = new Date();
  
  $('#clock').countdown(369 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function(event) {
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span#'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
  
});