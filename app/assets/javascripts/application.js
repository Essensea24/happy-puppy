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

(function() { var s = document.createElement("script");s.async = true;s.onload = s.onreadystatechange = function(){getYelpWidget("happy-puppy-dog-training-los-angeles-2","300","RED","y","y","1");};s.src='https://chrisawren.com/widgets/yelp/yelpv2.js' ;var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);})();

var $window = $(window);

// background image to load differently on smaller devices
$(document).ready(function(){


    if ($(window).width() < 768) {
        //hide the regular logo in nav
        $('img.brandword').hide();
        //show mobile logo with menu bar
        $('img.phone-logo').show();
        // hide parallax div since it won't work on tablet or mobile devices
        $('section.module.parallax').css("display", "none");
         $('div.mobile-background').show();

        $(window).on('scroll', function() {
            $topOffset = $(this).scrollTop();
            console.log($topOffset );
             //fade out phone logo when user see the footer logo
            if ($topOffset > 470) {
     
                $('img.phone-logo').fadeOut('slow');
                $('button.navbar-toggle').css({
                    'float': 'left',
                    'margin-left': '5%'
                    });

            } 
            //fade in when user scrow backup away from the footer
            if ($topOffset <= 470) {

                $('img.phone-logo').fadeIn();
                $('button.navbar-toggle').css("float", "right");
            }
        });
    }

    if ($(window).width() ==768) {

        $('img.phone.logo').hide();
        $('img.brandword').show();
        // hide parallax div since it won't work on tablet or mobile devices
        $('section.module.parallax').hide()
        $('div.mobile-background').show();

         $(window).on('scroll', function() {
            $topOffset = $(this).scrollTop();
            console.log($topOffset );
             //fade out phone logo when user see the footer logo
            if ($topOffset > 470) {
                console.log("greater than 470")
     
                $('img.brandword').hide();

            } 
            //fade in when user scrow backup away from the footer
            if ($topOffset <= 470) {
                  console.log("less than 470")

                $('img.brandword').show();
            }
        });

    }


    if ($(window).width() <1024) {
        // hide parallax div since it won't work on tablet or mobile devices
        $('section.module.parallax').css("display", "none");
        //display background div for normal scroll background image
        $('div.mobile-background').show();

         $(window).on('scroll', function() {
            $topOffset = $(this).scrollTop();
            console.log($topOffset );
             //fade out phone logo when user see the footer logo
            if (($topOffset > 2600) && ($(window).width() < 768)) {
                  console.log("2600")
     
                $('img.brandword').fadeOut('slow');

            } 
            //fade in when user scrow backup away from the footer
            if (($topOffset <= 2600) && ($(window).width() < 768)) {
                  console.log("less than 2600")
                $('img.brandword').fadeIn();

            }
        });
    }

    if ($(window).width() > 1024) {
        $('section.module.parallax').show();
        $('div.mobile-background').hide();

        $(window).on('scroll', function() {
            $topOffset = $(this).scrollTop();
            console.log($topOffset );
             //fade out phone logo when user see the footer logo
            if ($topOffset > 1100) {
     
                $('img.brandword').fadeOut('slow');

            } 
            //fade in when user scrow backup away from the footer
            if ($topOffset <= 1100) {

                $('img.brandword').fadeIn();
            }
        });

    }
})






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
    },  4000);


       

     

});

