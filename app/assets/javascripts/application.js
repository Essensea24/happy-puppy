// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

var $window = $(window);

$(window).on('scroll', function() {

 // to remove logo after passing div.mission
    $topOffset = $(this).scrollTop();
    console.log($topOffset);
 
    if ($topOffset >= 960) {
    	// $('nav.navbar-inverse').css("background-color", "black");
    	 $('img.brandword').fadeOut();

    } else {
    	// $('nav.navbar-inverse').css("background-color", "white");
    	$('img.brandword').fadeIn();

    } 


  //div fade in & fade out for vet recommended

  
});