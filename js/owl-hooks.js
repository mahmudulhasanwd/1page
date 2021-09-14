// code for hero slider
		$('.products-slider').owlCarousel({
			loop: true,
			margin: 0,
			center: false,
			nav: false,
			dots: true,
			autoplay:true,
			autoplayTimeout:5000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 1
				},
				960 : {
					items: 1
				},
				1200 : {
					items: 1
				},
				1920 : {
					items: 1
				}
			}
		});

		// code for owl nav
		var owl = $('.products-slider');
		owl.owlCarousel();
		$('#hright').click(function() {
			owl.trigger('next.owl.carousel');
		});
		$('#hleft').click(function() {
			owl.trigger('prev.owl.carousel', [300]);
		});

	// code for join slider
	$('.join').owlCarousel({
		loop: true,
		margin: 0,
		center: false,
		nav: false,
		dots: true,
		autoplay:true,
		autoplayTimeout:5000,
		responsiveClass: true,
		responsiveRefreshRate: true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 1
			},
			960 : {
				items: 1
			},
			1200 : {
				items: 1
			},
			1920 : {
				items: 1
			}
		}
	});


	var joinnav = $('.join');
	joinnav.owlCarousel();
	$('#join-right').click(function() {
		joinnav.trigger('next.owl.carousel');
	});
	$('#join-left').click(function() {
		joinnav.trigger('prev.owl.carousel', [300]);
	});


   // code for p2bottom_product-slider
   $('.p2bottom_product-slider').owlCarousel({
		loop: true,
		margin: 20,
		center: false,
		nav: false,
		dots: false,
		autoplay:true,
		autoplayTimeout:5000,
		responsiveClass: true,
		responsiveRefreshRate: true,
		responsive : {
			0 : {
				items: 2
			},
			577 : {
				items: 2
			},
			768 : {
				items: 3
			},
			960 : {
				items: 6
			},
			1200 : {
				items: 6
			},
			1920 : {
				items: 6
			}
		}
	});

   var pbs = $('.p2bottom_product-slider');
	pbs.owlCarousel();
	$('#p2bottom-right').click(function() {
		pbs.trigger('next.owl.carousel');
	});
	$('#p2bottom-left').click(function() {
		pbs.trigger('prev.owl.carousel', [300]);
	});

	// code for p3proslider
   $('.p3pro-slider').owlCarousel({
		loop: true,
		margin: 20,
		center: false,
		nav: false,
		dots: false,
		autoplay:true,
		autoplayTimeout:5000,
		responsiveClass: true,
		responsiveRefreshRate: true,
		responsive : {
			0 : {
				items: 1
			},
			577 : {
				items: 2
			},
			768 : {
				items: 3,
				margin: 10
			},
			960 : {
				items: 3
			},
			1200 : {
				items: 4
			},
			1350: {
				items: 5
			},
			1920 : {
				items: 6
			}
		}
	});

	 var p3last = $('.p3pro-slider');
	 p3last.owlCarousel();
	 $('#p3pbright_arrow').click(function() {
	 	p3last.trigger('next.owl.carousel');
	 });
	 $('#p3pbleft_arrow').click(function() {
	 	p3last.trigger('prev.owl.carousel', [300]);
	 });


