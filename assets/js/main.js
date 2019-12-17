(function ($) {
	"use strict";
/*--document ready functions--*/
    jQuery(document).ready(function($){


	//typed activate
    $('.header-inner h6').typed({
        strings: ["未定向CS本科生", "希望成为个厉害的设计者", "特来国海求份实习经历"],
        loop: true,
        startDelay: 1000,
        backDelay: 1000,
        typeSpeed: 30,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });

	/*-- circle progress activate --*/
		CircleProg('.75','#00B9E4',$('#circle-1'));
		CircleProg('.65','#DF457E',$('#circle-2'));
		CircleProg('.80','#2FD4BE',$('#circle-3'));
		CircleProg('.80','#F28055',$('#circle-4'));
		CircleProg('.60','#003472',$('#circle-5'));
		CircleProg('.75','#b35c44',$('#circle-6	'));


	/*--- function for Circle progreass var activation ---*/
		function CircleProg(val,color,selector){
			selector.append('<span>'+val.substr(1)+' % </span>');
			selector.circleProgress({
				value: val,
				size: 150,
				fill: {
				  color: color
				},
				 thickness:10,
				 lineCap:'round',
				 emptyFill:"#ddd"
			  });
		}



		/* smoth scroll*/
		 $('#main-menu li a').on('click', function(event) {
			 event.preventDefault();
			 var anchor = $(this).attr('href');
			  var top = $(anchor).offset().top;
			     $('html, body').animate({
						scrollTop: $(anchor).offset().top
					}, 1000);
		  });
        /*bottom to top*/
        $(document).on('click','.go-top',function(){
           $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        /*--slick Nav Responsive Navbar activation--*/
          var SlicMenu = $('#main-menu');
         SlicMenu.slicknav();
		/*--- scroll spy activate --*/
			new ScrollSpy('#main-menu', {
				nav: '#main-menu > li a',
				className: 'active'
			});
    });

/*--window Scroll functions--*/
    $(window).on('scroll', function () {
      /*--show and hide scroll to top --*/
         var ScrollTop = $('.go-top');
        if ($(window).scrollTop() > 1000) {
                ScrollTop.show(1000);
        } else {
                ScrollTop.fadeOut(100);
       }
        /*--sticky menu activation--*/
            var mainMenuTop = $('.nav-area');
            if ($(window).scrollTop() > 300) {
                mainMenuTop.addClass('nav-fixed');
            } else {
                mainMenuTop.removeClass('nav-fixed');
            }
        /*--sticky Mobile menu activation--*/
            var mobileMenuTop = $('.slicknav_menu');
            if ($(window).scrollTop() > 300) {
                mobileMenuTop.addClass('nav-fixed');
            } else {
                mobileMenuTop.removeClass('nav-fixed');
            }


    });

/*--window load functions--*/
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

    });

}(jQuery));
