$(function() {

  var device = navigator.userAgent.toLowerCase();
  var mobile = device.match(/(iphone|ipod|ipad|Android|BlackBerry)/);

  var mapCenter = new google.maps.LatLng(45.650738, -75.745711);

  function initialize() {
    var layer = "toner";
    var mapOptions = {
      center: mapCenter,
      zoom: 7,
      mapTypeId: layer,
      mapTypeControl: false,
      scrollwheel: true
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    marker = new RichMarker({
      position: mapCenter,
      map: map,
      draggable: false,
      shadow: false,
      content: '<section id="clock_holder"><header><h1>Save the date</h1></header><time datetime="2013-7-29T12:00Z"><span>29</span>June 2<b>013</b></time><a class="button" href="webcal://dev.ollieandkat.com/files/iCal-20120701-103114.ics">Add to calendar</a></section>'
    });
    map.mapTypes.set(layer, new google.maps.StamenMapType(layer));

    if (mobile) {
      map.setOptions({ 
        draggable: false,
        disableDefaultUI: true,
        zoom: 5,
      });
    }

    function offsetCenter(latlng,offsetx,offsety) {

      var scale = Math.pow(2, map.getZoom());
      var nw = new google.maps.LatLng(
          map.getBounds().getNorthEast().lat(),
          map.getBounds().getSouthWest().lng()
      );

      var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
      var pixelOffset = new google.maps.Point((offsetx/scale) || 0,(offsety/scale) ||0)

      var worldCoordinateNewCenter = new google.maps.Point(
          worldCoordinateCenter.x - pixelOffset.x,
          worldCoordinateCenter.y + pixelOffset.y
      );

      var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

      map.setCenter(newCenter);

    }

    offsetCenter(mapCenter,0,-150);

    var center;
    function calculateCenter() {
      center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
      calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(center);
    });

  }

  google.maps.event.addDomListener(window, 'load', initialize);

});