
// code for ps-one
$('.ps-one').owlCarousel({
	loop: true,
	margin: 4,
	center: false,
	nav: false,
	dots: false,
	responsiveClass: true,
	responsiveRefreshRate: true,
	responsive : {
		0 : {
			items: 3
		},
		768 : {
			items: 3
		},
		960 : {
			items: 3
		},
		1200 : {
			items: 3
		},
		1920 : {
			items: 3
		}
	}
});

var psone = $('.ps-one');
psone.owlCarousel();
$('#psone').click(function() {
    psone.trigger('next.owl.carousel');
});

// code for ps-two
$('.ps-two').owlCarousel({
	loop: true,
	margin: 4,
	center: false,
	nav: false,
	dots: false,
	responsiveClass: true,
	responsiveRefreshRate: true,
	responsive : {
		0 : {
			items: 3
		},
		768 : {
			items: 3
		},
		960 : {
			items: 3
		},
		1200 : {
			items: 3
		},
		1920 : {
			items: 3
		}
	}
});

var pstwo = $('.ps-two');
pstwo.owlCarousel();
$('#pstwo').click(function() {
    pstwo.trigger('next.owl.carousel');
});


// code for ps-three
$('.ps-three').owlCarousel({
	loop: true,
	margin: 4,
	center: false,
	nav: false,
	dots: false,
	responsiveClass: true,
	responsiveRefreshRate: true,
	responsive : {
		0 : {
			items: 3
		},
		768 : {
			items: 3
		},
		960 : {
			items: 3
		},
		1200 : {
			items: 3
		},
		1920 : {
			items: 3
		}
	}
});

var psthree = $('.ps-three');
psthree.owlCarousel();
$('#psthree').click(function() {
    psthree.trigger('next.owl.carousel');
});

// code for ps-four
$('.ps-four').owlCarousel({
	loop: true,
	margin: 4,
	center: false,
	nav: false,
	dots: false,
	responsiveClass: true,
	responsiveRefreshRate: true,
	responsive : {
		0 : {
			items: 3
		},
		768 : {
			items: 3
		},
		960 : {
			items: 3
		},
		1200 : {
			items: 3
		},
		1920 : {
			items: 3
		}
	}
});

var psfour = $('.ps-four');
psfour.owlCarousel();
$('#psfour').click(function() {
    psfour.trigger('next.owl.carousel');
});


// code for ps-five
$('.ps-five').owlCarousel({
	loop: true,
	margin: 4,
	center: false,
	nav: false,
	dots: false,
	responsiveClass: true,
	responsiveRefreshRate: true,
	responsive : {
		0 : {
			items: 3
		},
		768 : {
			items: 3
		},
		960 : {
			items: 3
		},
		1200 : {
			items: 3
		},
		1920 : {
			items: 3
		}
	}
});

var psfive = $('.ps-five');
psfive.owlCarousel();
$('#psfive').click(function() {
    psfive.trigger('next.owl.carousel');
});




$(".pop-cnt p ").click(function (){
	$(this).parents(".ring-thumb").next(".tsize").css({
		"display":"flex"
	})
})