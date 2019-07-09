// import $ from 'jquery';

$(document).ready(function () {
	$('.side_search_content a').click(function () {
		$('.right_side_search').toggleClass('open_search');
	});
	$('.side_search_content').click(function (et) {
		et.stopPropagation();
	});
	$(document).click(function (ent) {
		ent.stopPropagation();
		$(".right_side_search").removeClass('open_search');
	});
	$('.back_to_top').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
	$(".specialities_toggle_btn").click(function () {
		$(".specialities_toggle_menu").slideToggle();
	});
	$("#spec_drop_btn").click(function(){
		$("#flip").slideToggle();
	  });

	$(window).scroll(function () {
		if ($(window).scrollTop() > 600) {
			$('.back_to_top').fadeIn();
		} else {
			$('.back_to_top').fadeOut();
		}
	});

	// $('.doctor_slider').slick({
	// 	dots: false,
	// 	infinite: true,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 5,
	// 	nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
	// 	prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
	// 	draggable: false,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1367,
	// 			settings: {
	// 				slidesToShow: 4,
	// 				slidesToScroll: 4
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 870,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 620,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });

	// $('.customer_slider').slick({
	// 	dots: false,
	// 	infinite: true,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 5,
	// 	arrows: false,
	// 	autoplay: true,
	// 	draggable: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1367,
	// 			settings: {
	// 				slidesToShow: 4,
	// 				slidesToScroll: 4
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 870,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 576,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });

	$(function() {

		$('#calendar').fullCalendar({
		//   themeSystem: 'bootstrap4',
		  header: {
			left: 'title',
			center: '',
			right: 'prev,next'
		  },
		  eventLimit: true, // allow "more" link when too many events
		});
	   
	   });

	   $(".geolocation").click(function () {
        $(this).addClass('show_search_fields');
        $(".geolocation_menu").slideToggle();
        $(".hospital_menu").slideUp('fast');
        $(".hospitals").removeClass('show_search_fields');
    });
    $('.geolocation, .geolocation_menu').click(function (ge) {
        ge.stopPropagation();
    });
    $(document).click(function (geo) {
        geo.stopPropagation();
        $(".geolocation_menu").slideUp('fast');
    });

    $(".hospitals").click(function () {
        $(this).addClass('show_search_fields');
        $(".hospital_menu").slideToggle();
        $(".geolocation_menu").slideUp('fast');
        $(".geolocation").removeClass('show_search_fields');
    });
    $('.hospitals, .hospital_menu').click(function (ho) {
        ho.stopPropagation();
    });

});
