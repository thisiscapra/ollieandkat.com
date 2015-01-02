//= require "jquery-1.11.2.min"

$(function(){

  /*/mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
    if (!pageYOffset) window.scrollTo(0, 1);
  }, 2000);*/

  var scroll_pos = 0;
  $(window).scroll(function(){
    scroll_pos = $(this).scrollTop();
    var headerHeight = $('#header').height() - 100;
    if(scroll_pos > headerHeight) {
      $("nav").addClass('active');
    } else {
      $("nav").removeClass('active');
    }
  });

  var lastId,
    topMenu = $("nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  menuItems.click(function(e){
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
      scrollTop: offsetTop + 30
    }, 500);
    e.preventDefault();
  });

  $(window).scroll(function(){
    $('nav a').removeClass('active');
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
      lastId = id;
    menuItems
      .parent().removeClass("active")
      .end().filter("[href=#"+id+"]").parent().addClass("active");
    }                   
  });

}); 
