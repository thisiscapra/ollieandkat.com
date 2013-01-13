$(function(){
  
  $("nav a").click(function(event){
    event.preventDefault();
    $('nav a').removeClass('active');
    $(this).addClass('active');
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top -50}, 500);
  });

  var scroll_pos = 0;
  $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    var headerHeight = $('#header').height() - 100;
    if(scroll_pos > headerHeight) {
      $("nav").addClass('active');
    } else {
      $("nav").removeClass('active');
    }
  });

}); 