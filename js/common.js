// code for input valid
$(".news-right input#error").keyup(function () {
   var values = $(this).val();
   values = values.length
   if (values <= 1) {
      $(this).addClass("error");
   } else {
      $(this).removeClass("error");
   }
});

// code for ring 
$(".ring-price-right p#warning").click(function () {
   $(this).next(".pnati").show();
});

$("span#pnaticross img").click(function () {
   $(this).parents(".pnati").hide();
});

// code for sticky-header
(function ($) {
   $(document).ready(function () {
      jQuery(window).on('scroll', function () {
         if (jQuery(window).scrollTop()) {
            jQuery('.header').addClass('black');
            jQuery('.mini-cart').addClass('after-mini-cart');
            jQuery('.search').addClass('after-mini-search');
         } else {
            jQuery('.header').removeClass('black');
            jQuery('.mini-cart').removeClass('after-mini-cart');
            jQuery('.search').removeClass('after-mini-search');
         }
      });
   });
})(jQuery);


// code for ring-size hide and show
$("#ring-one").mouseenter(function () {
   $("#ring-one .pop-cnt").show();
});

$("#ring-one").mouseleave(function () {
   $("#ring-one .pop-cnt").hide();
   $("#ring-one .tsize").hide();
});

$("#ring-two").mouseenter(function () {
   $("#ring-two .pop-cnt").show();
});

$("#ring-two").mouseleave(function () {
   $("#ring-two .pop-cnt").hide();
   $("#ring-two .tsize").hide();
});

$("#ring-three").mouseenter(function () {
   $("#ring-three .pop-cnt").show();
});

$("#ring-three").mouseleave(function () {
   $("#ring-three .pop-cnt").hide();
   $("#ring-three .tsize").hide();
});

$("#ring-four").mouseenter(function () {
   $("#ring-four .pop-cnt").show();
});

$("#ring-four").mouseleave(function () {
   $("#ring-four .pop-cnt").hide();
   $("#ring-four .tsize").hide();
});

$("#ring-five").mouseenter(function () {
   $("#ring-five .pop-cnt").show();
});

$("#ring-five").mouseleave(function () {
   $("#ring-five .pop-cnt").hide();
   $("#ring-five .tsize").hide();
});
