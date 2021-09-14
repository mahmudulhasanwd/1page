(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// code for alert
		$(".alert-wrapper p span").click (function (){
			$(".alertspg").addClass("para-alert")
		});

	// code for mega menu
	$(".header-left li#product").click(function (){
		$("#mgone").slideToggle();
		$(this).children("a").children("span").find("img").toggleClass("p3rotedimg");
		
	});

	// code for profile dropdown
	$("a#dropdownMenuLink").click(function (){
		$(".dropdown-menu").slideToggle();
	})

	$(".header-left li#collection").click(function (){
		$("#mgtwo").slideToggle();
		$(this).children("a").children("span").find("img").toggleClass("p3rotedimg");
	});

	// code for cart
	$("#beg").click(function (){
		$(".mini-cart").show();

		$("body").addClass("overflow");
	});

	$(".mini-cart-heading img").click(function (){
		$(".mini-cart").hide();

		$("body").removeClass("overflow");
	});


	$("#smbeg").click(function (){
		$(".mini-cart").show();

		$("body").addClass("overflow");
	});

	$(".mini-cart-heading img").click(function (){
		$(".mini-cart").hide();

		$("body").removeClass("overflow");
	});


	// maincard load
	$("#main-card").click(function (){
		$(".mini-cart").hide();

		$(".cart").show();
	})

	$(".cart-heading span").click(function (){
		$(".cart").hide();

		$("body").removeClass("overflow")
	})

	// code for hide card items
	$(".cart-block-one-left img#remove").click(function (){
		$(this).parents(".cart-block-one").hide();
	});

	// code for input

	$("input#mail").focus(function (){
		$("label#maillabel").animate({
			"top":"12px"
		});
	});

	$("input#mail").blur(function (){
		var getValue = $("input#mail").val();
		if (getValue == "") {
			$("label#maillabel").animate({
				"top":"31px"
			});
		} else {
			$("label#maillabel").animate({
				"top":"12px"
			});
		}
	})

	$("input#password").focus(function (){
		$("label#passlavel").animate({
			"top":"12px"
		});
	});
	
	$("input#password").blur(function (){
		var getPass = $("input#password").val();
		if (getPass == "") {
			$("label#passlavel").animate({
				"top":"31px"
			});
		} else {
			$("label#passlavel").animate({
				"top":"12px"
			});
		}
	})


	$("input#number").blur(function (){
		var getValue = $("input#number").val();
		if (getValue == "") {
			$("label#numberlabel").animate({
				"top":"31px"
			});
		} else {
			$("label#numberlabel").animate({
				"top":"12px"
			});
		}
	})

	$("input#number").focus(function (){
		$("label#numberlabel").animate({
			"top":"12px"
		});
	});


	// code for show hide password
	$("li#hide").click(function (){
		$("input#password").attr("type","password");
	});

	$("li#show").click(function (){
		$("input#password").attr("type","text");
	});


	// signin popup
	$("#signin").click(function (){
		$("#siglog").show();
		$("body").addClass("overflow");
	});

	$(".login-wrapper .cart-heading span").click(function (){
		$("#siglog").hide();
		$("body").removeClass("overflow");
	});

		// register popup
		$("#regtigger").click(function (){
			$("#registerlog").show();
			$("body").addClass("overflow");
		});
	
		$("#registerlog .login-wrapper .cart-heading span").click(function (){
			$("#registerlog").hide();
			$("body").removeClass("overflow");
		});


	// code for phn reginput

	$("#phn-reg-one input").focus(function (){
		$("label#lreg-one").animate({
			"top":"12px"
		});
	});

	$("#phn-reg-one input").blur(function (){
		var phnreOne = $("#phn-reg-one input").val();
		if (phnreOne == "") {
			$("label#lreg-one").animate({
				"top":"31px"
			});
		} else {
			$("label#lreg-one").animate({
				"top":"12px"
			});
		}
	});

	$("#phn-reg-two input").focus(function (){
		$("label#lreg-two").animate({
			"top":"12px"
		});
	});

	$("#phn-reg-two input").blur(function (){
		var phnreTwo = $("#phn-reg-two input").val();
		if (phnreTwo == "") {
			$("label#lreg-two").animate({
				"top":"31px"
			});
		} else {
			$("label#lreg-two").animate({
				"top":"12px"
			});
		}
	})

	$("#phn-reg-three input").focus(function (){
		$("label#lreg-three").animate({
			"top":"12px"
		});
	});

	$("#phn-reg-three input").blur(function (){
		var phnreThree = $("#phn-reg-three input").val();
		if (phnreThree == "") {
			$("label#lreg-three").animate({
				"top":"31px"
			});
		} else {
			$("label#lreg-three").animate({
				"top":"12px"
			});
		}
	})


	// phnregister show hide

	$("#pop-one input").focus(function (){
		$("label#pop-one-label").animate({
			"top":"12px"
		});
	});

	$("#pop-one input").blur(function (){
		var popOne = $("#pop-one input").val();
		if (popOne == "") {
			$("label#pop-one-label").animate({
				"top":"31px"
			});
		} else {
			$("label#pop-one-label").animate({
				"top":"12px"
			});
		}
	});


	$("#pop-two input").focus(function (){
		$("label#pop-two-label").animate({
			"top":"12px"
		});
	});

	$("#pop-two input").blur(function (){
		var popTwo = $("#pop-two input").val();
		if (popTwo == "") {
			$("label#pop-two-label").animate({
				"top":"31px"
			});
		} else {
			$("label#pop-two-label").animate({
				"top":"12px"
			});
		}
	})

	$("#pop-three input").focus(function (){
		$("label#pop-three-label").animate({
			"top":"12px"
		});
	});

	$("#pop-three input").blur(function (){
		var popThree = $("#pop-three input").val();
		if (popThree == "") {
			$("label#pop-three-label").animate({
				"top":"31px"
			});
		} else {
			$("label#pop-three-label").animate({
				"top":"12px"
			});
		}
	})

	$("#pop-four input").focus(function (){
		$("label#pop-four-label").animate({
			"top":"12px"
		});
	});

	$("#pop-four input").blur(function (){
		var popFour = $("#pop-four input").val();
		if (popFour == "") {
			$("label#pop-four-label").animate({
				"top":"31px"
			});
		} else {
			$("label#pop-four-label").animate({
				"top":"12px"
			});
		}
	});


	// pin confirm page
	$("button#go4conf").click(function (){
		$(".phone-register").hide();
		$(".confirmation").show();
	});

	// code for searchbar
	$("#ser").click(function (){
		$(".search").show();
		$("body").addClass("overflow");
	});

	$(".search-button button").click(function (){
		$(".search").hide();
		$("body").removeClass("overflow");
	})


	$("#smser").click(function (){
		$(".search").show();
		$("body").addClass("overflow");
	});

	$(".search-button button").click(function (){
		$(".search").hide();
		$("body").removeClass("overflow");
	})

	// code for sm-menu
	$(".sm-header-left").click(function (){
		$(".sm-menu-items").animate({
			"left":"0%"
		})
		$("body").addClass("overflowsm");
	});

	$(".sm-menu-items-heading span").click(function (){
		$(".sm-menu-items").animate({
			"left":"-100%"
		})
		$("body").removeClass("overflowsm");
	})


	// code for sm-link-register
	$("#smlinkregister").click(function (){
		$("#registerlog").show();
	});

	$("#smlinksign").click(function (){
		$("#siglog").show();
	});

	$(".sm-menu-singup-product ul li a").click(function(){
		$(this).next(".menu-sub").animate({
			"left":"0%"
		});
	});

	$(".menu-sub-heading").click(function(){
		$(this).parents(".menu-sub").animate({
			"left":"-100%"
		});
	});

	
	



		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);
