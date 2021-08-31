/*
-----------------------------------------------
Theme: myWedding - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on('load', function() { 
    "use strict";   
     $('.status').fadeOut();
     $('#preloader').delay(350).fadeOut('slow'); 
 }); 
 /* END Preloader js */
 
 /* ***************** start document load **********************/
 $(document).ready(function() {
    "use strict";   
    $(".loader").hide(); 
    $(".success-alert").hide();
    $(".error-alert").hide();
    var $tfront = $(".title-front").hide();
    var $tunder = $(".title-under").hide();
    $tfront.show().arctext({radius: 250});
    $tunder.show().arctext({radius: 180, dir: -1});
 
     var content = $("body"),
       navbar = $(".navbar"),
       col = $(".col-transform");
 
     $(".show-info").on('click', function() { 
       if (window.innerWidth > 990) {
         if (content.hasClass('show-content')) {
           col.removeClass('col-md-6').addClass('col-md-12');
           content.removeClass('show-content');
           setTimeout(function () {
             navbar.removeClass('navbar-open')
           }, 900);
         } else {
           col.removeClass('col-md-12').addClass('col-md-6');
           content.addClass('show-content');
           setTimeout(function () {
             navbar.addClass('navbar-open')
           }, 300);
         }
       }
     });
     
     // Gallery Lightbox
     $(".bearr-gallery-item a").simpleLightbox();   
     
     //Google maps
     //Map
     var map;
     var odessa = new google.maps.LatLng(12.2409385,79.034233);
 
     var MY_MAPTYPE_ID = 'custom_style';
 
     function initialize() {
         //Start options
         var featureOpts = 
         [
         {
             "featureType": "landscape",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "transit",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "poi",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "water",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "road",
             "elementType": "labels.icon",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "stylers": [
                 {
                     "hue": "#00aaff"
                 },
                 {
                     "saturation": -100
                 },
                 {
                     "gamma": 2.15
                 },
                 {
                     "lightness": 12
                 }
             ]
         },
         {
             "featureType": "road",
             "elementType": "labels.text.fill",
             "stylers": [
                 {
                     "visibility": "on"
                 },
                 {
                     "lightness": 24
                 }
             ]
         },
         {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": [
                 {
                     "lightness": 57
                 }
             ]
         }
         ];
         //END options
 
         //END maps options
    //      var mapOptions = {
    //          zoom: 7,
    //          center: odessa,
    //          //disableDefaultUI: true,
    //          scrollwheel: false,
    //          mapTypeControlOptions: {
    //            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    //          },
    //          mapTypeId: MY_MAPTYPE_ID
    //      };
    //      //END maps options
         
    //      map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    //      var styledMapOptions = {
    //          name: 'Custom Style'
    //      };
    //      var customMapType_church = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    //      map.mapTypes.set(MY_MAPTYPE_ID, customMapType_church);
         
    //      //marker church
    //     var image_church  = new google.maps.MarkerImage("static/img/marker-church.png", null, null, null, new google.maps.Size(33,50));
    //      var positionpin_church  = new google.maps.LatLng(13.1018843,80.156587);
    //      var marker_church  = new google.maps.Marker({
    //        position: positionpin_church ,
    //        icon: image_church ,
    //        map: map,
    //        flat: true,
    //        title: ''
    //      });
    //      var boxText_church = document.createElement("div");
    //      boxText_church.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4>Wedding Hall</h4><h5>HPM PARADISE Mahal, <br/> Ambattur, Chennai</h5></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-mahal.jpg"></div>';
    //      var marker_church_options = {
    //           content: boxText_church
    //          ,disableAutoPan: false
    //          ,maxWidth: 0
    //          ,pixelOffset: new google.maps.Size(-127, -160)
    //          ,zIndex: null
    //          ,boxStyle: { 
    //            opacity: 1,
    //            width: "250px",
    //            background: "#fff",
    //           }
    //          ,closeBoxMargin: "10px"
    //          ,closeBoxURL: "static/img/map-close.png"
    //          ,infoBoxClearance: new google.maps.Size(1, 1)
    //          ,isHidden: false
    //          ,pane: "floatPane"
    //          ,enableEventPropagation: false
    //      };
    //      var info_box_church = new InfoBox(marker_church_options);
    //      google.maps.event.addListener(marker_church, 'click', function() {
    //          info_box_church.open(map,marker_church);
    //      });
    //      info_box_church.open(map,marker_church);
    //      //end marker church
         
    //      //marker restaurant
    //     //  var image_restaurant = new google.maps.MarkerImage("static/img/marker-restaurant.png", null, null, null, new google.maps.Size(33,50));
    //     //  var positionpin_restaurant = new google.maps.LatLng(13.1018843,80.156587);
    //     //  var marker_restaurant = new google.maps.Marker({
    //     //    position: positionpin_restaurant,
    //     //    icon: image_restaurant,
    //     //    map: map,
    //     //    flat: true,
    //     //    title: ''
    //     //  });
    //     //  var boxText_restaurant = document.createElement("div");
    //     //  boxText_restaurant.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4><strong>Restaurant</strong></h4><h5>PARTY</h5><p>14:00 PM</p></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-restaurant.jpg"></div>';
    //     //  var marker_restaurant_options = {
    //     //       content: boxText_restaurant
    //     //      ,disableAutoPan: false
    //     //      ,maxWidth: 0
    //     //      ,pixelOffset: new google.maps.Size(-127, -160)
    //     //      ,zIndex: null
    //     //      ,boxStyle: { 
    //     //        opacity: 1,
    //     //        width: "250px",
    //     //        background: "#fff",
    //     //       }
    //     //      ,closeBoxMargin: "10px"
    //     //      ,closeBoxURL: "static/img/map-close.png"
    //     //      ,infoBoxClearance: new google.maps.Size(1, 1)
    //     //      ,isHidden: false
    //     //      ,pane: "floatPane"
    //     //      ,enableEventPropagation: false
    //     //  };
    //     //  var info_box_restaurant = new InfoBox(marker_restaurant_options);
    //     //  google.maps.event.addListener(marker_restaurant, 'click', function() {
    //     //      info_box_restaurant.open(map,marker_restaurant);
    //     //  });
    //     //  info_box_restaurant.open(map,marker_restaurant);
    //      //end marker restaurant
         
    //      //marker hotel
    //      var image_hotel = new google.maps.MarkerImage("static/img/marker-hotel.png", null, null, null, new google.maps.Size(33,50));
    //      var positionpin_hotel = new google.maps.LatLng(9.8857518,78.1178544);
    //      var marker_hotel = new google.maps.Marker({
    //        position: positionpin_hotel,
    //        icon: image_hotel,
    //        map: map,
    //        flat: true,
    //        title: ''
    //      });
    //      var boxText_hotel = document.createElement("div");
    //      boxText_hotel.innerHTML = '<div class="grid grid_6 percentage block-focus"><div class="block-focus center"><h4>Reception</h4><h5>Samyuktha Mahal, <br/>Avaniyapuram, Madurai</h5></div></div><div class="grid grid_6 percentage block-focus"><img class="block-focus block-focus" src="static/img/map-hall.jpg"></div>';
    //      var marker_hotel_options = {
    //           content: boxText_hotel
    //          ,disableAutoPan: false
    //          ,maxWidth: 0
    //          ,pixelOffset: new google.maps.Size(-127, -160)
    //          ,zIndex: null
    //          ,boxStyle: { 
    //            opacity: 1,
    //            width: "250px",
    //            background: "#fff",
    //           }
    //          ,closeBoxMargin: "10px"
    //          ,closeBoxURL: "static/img/map-close.png"
    //          ,infoBoxClearance: new google.maps.Size(1, 1)
    //          ,isHidden: false
    //          ,pane: "floatPane"
    //          ,enableEventPropagation: false
    //      };
    //      var info_box_hotel = new InfoBox(marker_hotel_options);
    //      google.maps.event.addListener(marker_hotel, 'click', function() {
    //          info_box_hotel.open(map,marker_hotel);
    //      });
    //      info_box_hotel.open(map,marker_hotel);
    //      //end marker hotel
    //  }
    //  google.maps.event.addDomListener(window, 'load', initialize);
     //END GOOGLE MAPS  
        }
    $("form").submit(function(e){
        $(".loader").show();
        $('button[type="submit"]').hide();
        $.ajax({
            url:"./rsvp",
            method:"post",
            data:{
                from: $("#inputEmail").val(),
                message: $("#message").val()
            },
            success: function(){
                $(".loader").hide();
                $("#inputEmail").val("");
                $("#message").val("");
                $(".success-alert").show();
                setTimeout(function(){
                    $(".success-alert").hide();
                    $('button[type="submit"]').show();
                },3000);
                
            },
            error: function(){
                $(".loader").hide();
                $(".error-alert").show();
                setTimeout(function(){
                    $(".error-alert").hide();
                    $('button[type="submit"]').show();
                },3000);
            }
        })
        e.preventDefault();
    });

     /*========== Countdown start ================*/
             var clock;
 
             clock = $('#countdown').FlipClock({
                 clockFace: 'DailyCounter',
                 autoStart: false,
                 minimumDigits: 9,
                 callbacks: {
                     stop: function() {
                         $('.message').html('Hurray!!! We\'re married!!!');
                     }
                 }
             });
                     
             var ts = +new Date("September 15, 2021 7:30 GMT+5:30");
             var date_now = new Date();
             var seconds = Math.floor((ts - (date_now))/1000);
             //console.log(seconds);
             clock.setTime(seconds);
             clock.setCountdown(true);
             clock.start();
 
           
     /*========== Countdown end ================*/
 }); 
 
 var map, infoWindow,pos;

 window.onload=function initMap() {
     //console.log("hai")
     var directionsDisplay = new google.maps.DirectionsRenderer({
        
        polylineOptions: {
            strokeColor: "#050E5B"
          }
     });
     var directionsService = new google.maps.DirectionsService;
     var latlng = new google.maps.LatLng(9.8857518, 78.1178544);
     map = new google.maps.Map(document.getElementById('map-canvas'),{
         zoom:7
     });
 infoWindow = new google.maps.InfoWindow;

 var image_church  = new google.maps.MarkerImage("static/img/marker-church.png", null, null, null, new google.maps.Size(33,50));
         var positionpin_church  = new google.maps.LatLng(13.1018843,80.156587);
         var marker_church  = new google.maps.Marker({
           position: positionpin_church ,
           icon: image_church ,
           map: map,
           flat: true,
           title: ''
         });
         var boxText_church = document.createElement("div");
         boxText_church.innerHTML = '<div class="grid grid_6 percentage border-white" ><div class="block-focus center"><h4>Wedding Hall</h4><h5>PRK Mahal, <br/> Salaigramam</h5></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-mahal.jpeg"></div>';
         var marker_church_options = {
              content: boxText_church
             ,disableAutoPan: false
             ,maxWidth: 0
             ,pixelOffset: new google.maps.Size(-127, -160)
             ,zIndex: null
             ,boxStyle: { 
               opacity: 1,
               width: "250px",
               background: "#fff",
              }
             ,closeBoxMargin: "10px"
             ,closeBoxURL: "static/img/map-close.png"
             ,infoBoxClearance: new google.maps.Size(1, 1)
             ,isHidden: false
             ,pane: "floatPane"
             ,enableEventPropagation: false
         };
         var info_box_church = new InfoBox(marker_church_options);
         google.maps.event.addListener(marker_church, 'click', function() {
             info_box_church.open(map,marker_church);
         });
         info_box_church.open(map,marker_church);
         //end marker church
 
//  var image_church  = new google.maps.MarkerImage("static/img/marker-church.png", null, null, null, new google.maps.Size(33,50));
//          var positionpin_church  = new google.maps.LatLng(9.6071303,78.7110671);
//          var marker_hotel  = new google.maps.Marker({
//            position: positionpin_church ,
//            icon: image_church ,
//            map: map,
//            flat: true,
//            title: ''
//          });
         
        //        var boxText_hotel = document.createElement("div");
        //  boxText_hotel.innerHTML = '<div class="grid grid_6 percentage block-focus"><div class="block-focus center"><h4>Reception</h4><h5>Samyuktha Mahal, <br/>Avaniyapuram, Madurai</h5></div></div><div class="grid grid_6 percentage block-focus"><img class="block-focus block-focus" src="static/img/map-hall.jpg"></div>';
        //  var marker_hotel_options = {
        //       content: boxText_hotel
        //      ,disableAutoPan: false
        //      ,maxWidth: 0
        //      ,pixelOffset: new google.maps.Size(-127, -160)
        //      ,zIndex: null
        //      ,boxStyle: { 
        //        opacity: 1,
        //        width: "250px",
        //        background: "#fff",
        //        left: "-200px",
        //       }
        //      ,closeBoxMargin: "10px"
        //      ,closeBoxURL: "static/img/map-close.png"
        //      ,infoBoxClearance: new google.maps.Size(1, 1)
        //      ,isHidden: false
             
        //      ,pane: "floatPane"
        //      ,enableEventPropagation: false
        //  };
        //  var info_box_hotel = new InfoBox(marker_hotel_options);
        //  google.maps.event.addListener(marker_hotel, 'click', function() {
        //      info_box_hotel.open(map,marker_hotel);
        //  });
        //  info_box_hotel.open(map,marker_hotel);

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      directionsDisplay.setMap(map);
      normaltrack(directionsService, directionsDisplay,{lat:13.1018843, lng:80.156587},{lat: 9.8857518, lng: 78.117854})
      //console.log(pos)
      
      infoWindow.setPosition(pos);
      infoWindow.setContent("I am here")
      infoWindow.open(map);
      map.setCenter(pos);
    },
  
    function() {
      handleLocationError(true, infoWindow, map.getCenter());
     
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
}



function calculateAndDisplayRoute(directionsService, directionsDisplay,pos,Mandapamloc) {

    var directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "#733F25"
        }
      });
     var directionsService = new google.maps.DirectionsService;
     var latlng = new google.maps.LatLng(9.8857518, 78.1178544);
     map = new google.maps.Map(document.getElementById('map-canvas'),{
         zoom:7
     });
 infoWindow = new google.maps.InfoWindow;

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      directionsDisplay.setMap(map);
    
      //console.log(pos)
      infoWindow.setPosition(pos);
      infoWindow.setContent("I am here")
      infoWindow.open(map);
      map.setCenter(pos);
    },
  
    function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
   
    //console.log(pos,Mandapamloc)
    directionsService.route({
       
     
      origin: pos,  // Haight.
      destination: Mandapamloc ,  // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode["DRIVING"]
    }, function(response, status) {
      if (status == 'OK') {
          //console.log(1)
        directionsDisplay.setDirections(response);
       
        //console.log(map)
      } else {
          
        //console.log('Directions request failed due to ' + status);
      }
    });
  }
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function normaltrack(directionsService, directionsDisplay,pos,Mandapamloc){
    directionsService.route({
       
     
        origin: pos,  // Haight.
        destination: Mandapamloc ,  // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode["DRIVING"]
      }, function(response, status) {
        if (status == 'OK') {
            //console.log(1)
          directionsDisplay.setDirections(response);
         
          //console.log(map)
        } else {
            
          //console.log('Directions request failed due to ' + status);
        }
      });
    }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function Wedding() {
  //console.log("wed")
  google.maps.event.trigger(map, 'resize');
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var Weddinglocation={lat:13.1018843, lng:80.156587};
    calculateAndDisplayRoute(directionsService, directionsDisplay,pos,Weddinglocation);
}

function Reception() {
   
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService; 
    var Receptionlocation=  {lat: 9.8857518, lng: 78.117854};
    calculateAndDisplayRoute(directionsService, directionsDisplay,pos,Receptionlocation);
}

