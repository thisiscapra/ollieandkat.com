<<<<<<< HEAD
$(function(){var e=0;$(document).scroll(function(){e=$(this).scrollTop();var t=$("#header").height()-100;e>t?$("nav").addClass("active"):$("nav").removeClass("active")});var t,n=$("nav"),r=n.outerHeight()+15,i=n.find("a"),s=i.map(function(){var e=$($(this).attr("href"));if(e.length)return e});i.click(function(e){var t=$(this).attr("href"),n=t==="#"?0:$(t).offset().top-r+1;$("html, body").stop().animate({scrollTop:n+30},500),e.preventDefault()}),$(window).scroll(function(){$("nav a").removeClass("active");var e=$(this).scrollTop()+r,n=s.map(function(){if($(this).offset().top<e)return this});n=n[n.length-1];var o=n&&n.length?n[0].id:"";t!==o&&(t=o,i.parent().removeClass("active").end().filter("[href=#"+o+"]").parent().addClass("active"))})});
=======
$(function(){function r(){function s(e,t,n){var r=Math.pow(2,i.getZoom()),s=new google.maps.LatLng(i.getBounds().getNorthEast().lat(),i.getBounds().getSouthWest().lng()),o=i.getProjection().fromLatLngToPoint(e),u=new google.maps.Point(t/r||0,n/r||0),a=new google.maps.Point(o.x-u.x,o.y+u.y),f=i.getProjection().fromPointToLatLng(a);i.setCenter(f)}function u(){o=i.getCenter()}var e="toner",r={center:n,zoom:7,mapTypeId:e,mapTypeControl:!1,scrollwheel:!0},i=new google.maps.Map(document.getElementById("map"),r);i.mapTypes.set(e,new google.maps.StamenMapType(e)),t?(i.setOptions({draggable:!1,disableDefaultUI:!0,zoom:5}),s(n,0,-120)):setTimeout(function(){s(n,0,-150)},200),marker=new RichMarker({position:n,map:i,draggable:!1,shadow:!1,content:'<section id="clock_holder"><header><h1>Save the date</h1></header><time datetime="2013-7-29T12:00Z"><span>29</span>June 2<b>013</b></time><a class="button" href="webcal://www.ollieandkat.com/files/iCal-20120701-103114.ics">Add to calendar</a></section>'});var o;google.maps.event.addDomListener(i,"idle",function(){u()}),google.maps.event.addDomListener(window,"resize",function(){i.setCenter(o)})}var e=navigator.userAgent.toLowerCase(),t=e.match(/(iphone|ipod|ipad|Android|BlackBerry)/),n=new google.maps.LatLng(45.650738,-75.745711);google.maps.event.addDomListener(window,"load",r)});
>>>>>>> eca75fead164ff6d838a7aee7ceae3fd1f87f235
