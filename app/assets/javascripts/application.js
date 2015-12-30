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


// background image to load differently on smaller devices
$(document).ready(function(){
    if ($(window).width() <=1024) {
        $('section.module.parallax').css("display", "none");
        $('div.mobile-background').show();
    }

    if ($(window).width() > 1024) {
        $('section.module.parallax').show();
        $('div.mobile-background').hide();
    }
})




$(window).on('scroll', function() {

 // to remove logo after passing div.mission
    $topOffset = $(this).scrollTop();
    console.log($topOffset);
 
    if (($topOffset >= 1088) && ($(window).width() >= 768)) {
    	// $('nav.navbar-inverse').css("background-color", "black");
        $('img.brandword').fadeOut();
        $("img.phone-logo").fadeOut("slow");
        $('ul.nav.navbar-nav').css("margin-left", "0px");
           

    }

    if(($topOffset < 1088) && ($(window).width() >= 768)) {
    	// $('nav.navbar-inverse').css("background-color", "white");
    	$('img.brandword').fadeIn();
    	$('ul.nav.navbar-nav').css("margin-left", "15%");
            

    } 

    if(($topOffset > 470) && ($(window).width() < 768)) {
        // $('nav.navbar-inverse').css("background-color", "white");
        $('img.phone-logo').hide();
        $('button.navbar-toggle').css({
            'float': 'left',
            'margin-left': '5%'
            });

    } 

     if(($topOffset <= 470) && ($(window).width() < 768)) {
        // $('nav.navbar-inverse').css("background-color", "white");
        $('img.phone-logo').fadeIn();
        $('button.navbar-toggle').css("float", "right");
    }


});





// div rotation
$(document).ready(function(){

	$(".slideshow > div:gt(0)").hide();

	setInterval(function() { 
	   $('.slideshow > div:first')
	    .fadeOut(7000)
	    .next()
	    .fadeIn(2000)
	    .end()
	    .appendTo('.slideshow');
	},  7000);


            $("button.navbar-toggle").click(function() {
                $("img.brandword").hide();
            });

     

});