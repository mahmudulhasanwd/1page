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







// checkbox hide show in catagroy page
$(".p2main-left-content-one-heading").click(function (){
   $(this).next(".p2main-left-content-one-check").slideToggle();
   $(this).children("h4").find("span i").toggleClass("fa-minus fa-plus");
});


// code for custom made size slider
$('.babu .next').click(function () {
   var last = $(this).parent(".babu").children("ul").children("li:last-child");
   var first = $(this).parent(".babu").children("ul").children("li:first-child");
   var list = $(this).parent(".babu").children("ul").children("li");
   active = $(this).parent(".babu").children("ul").children("li.active").next();
   if (active.length > 0) {
      list.removeClass('active');
      active.addClass('active');
   }

   if (first.hasClass('active')) {
      $(this).prev('.prev').addClass('d-none');
   } else {
      $(this).prev('.prev').removeClass('d-none');
   }   
});

$('.babu .prev').click(function () {
   deactive = $(this).parent(".babu").children("ul").children("li.active").prev();
   var first = $(this).parent(".babu").children("ul").children("li:first-child");
   if (deactive.length > 0) {
      var listP = $(this).parent(".babu").children("ul").children("li");
      listP.removeClass('active');
      deactive.addClass('active');				
   }

   if (first.hasClass('active')) {
      $(this).addClass('d-none');
   } else {
      $(this).removeClass('d-none');
   }				
});

// code for add to card hover in thumb block
$(".p2main-right-block-one").mouseenter(function (){
   $(this).children(".p2main-right-block-one-thumb").children("p#addtoCart").show();
});

$("p#addtoCart").click(function (){
   $(this).next(".p2main-hover").addClass("d-flex");
});

$(".p2main-right-block-one").mouseleave(function (){
   $(this).children(".p2main-right-block-one-thumb").children("p#addtoCart").hide();
   $(this).children(".p2main-right-block-one-thumb").children(".p2main-hover").removeClass("d-flex");
});

// change thumbnail form slider
$(".pro2-one li img").click(function (){
   var getImages = $(this).attr('src');
   var thubnail_images = $(this).parents('.p2main-right-block-one-thumb-img-chg').parents('.p2main-right-block-one').children('.p2main-right-block-one-thumb').find('img#thumbimg2');
   thubnail_images.attr('src',getImages);
});

// acitve items in thumbnail slider
$('.p2main-right-block-one .pro2-one ul li').click(function (){ 
   $(this).addClass('active');
   $(this).nextAll('li').removeClass('active');
   $(this).prevAll('li').removeClass('active');
});

// page-two responsive filter code 
$(".p2smfilter-wrapper span").click(function (){
   $(".smfilter").animate({
      'left':'0'
   });
   $("body").addClass("filter_over")
});

$(".smfilter-heading span").click(function (){
   $(".smfilter").animate({
      'left':'-100%'
   });
   $("body").removeClass("filter_over")
});


// code for p3-header customer dropdown
$("#header_custormer a#dropdownMenuLink").click(function (){
  $("#header_custormer img#expend").toggleClass('p3rotedimg')
});

// code for p3-thubnail-changer
$(".p3product-left-small ul li img").click(function (){
   var p3changer = $(this).attr('src');
   $(".p3product-left-big img").attr('src',p3changer);
});

// code for p3-thumbail changer-active border
$('.p3product-left-small ul li').click(function(){
    $('.p3product-left-small ul li').removeClass("active");
    $(this).addClass("active");
});

// code for p3-pani
$(".tigger4pani").click(function (){
   $(".p3product-right-details-pricing .pnati").show();
});

//code for p3slider pani
$(".p3pros-one-warning p ").click(function (){
   $(this).parents(".p3pros-one-warning").prev(".p3pros-one-content").children("#p3slider_props").show();
});

// code for p9input
$(".p9upload-form-right-one-input input").focus(function (){
   $(this).prev('label').animate({
      'top':'0'
   });
});

$(".p9upload-form-right-one-input input").blur(function (){
   var lbval = $(this).val();
   if (lbval == "") {
      $(this).prev('label').animate({
         'top':'36px'
      });
   } else {
      $(this).prev('label').animate({
         'top':'0'
      });
   }
});


// code for p4page warning
$(".p4total-left p#warning").click(function (){
   $(this).parents(".p4total-left").parents(".p4tab-content-three-content ul").next(".pnati").show();
});


// search bar position change when alert close in mobile

$(".alert-wrapper  p span").click(function () {
   $(".search").css({
         "top": "13px"
   });

   $(".mini-cart").css({
         "top": "65px"
   });
});


// code for page6 responsive hambarger
$("#p6droptigger").click(function (){
   $(this).next("ul").slideToggle();
});

// code for p4input label
$(".new_adddress-input input").focus(function (){
   $(this).prev('label').animate({
      'top':'0'
   });
})

$(".new_adddress-input input").blur(function (){
   var lbval4p = $(this).val();
   if (lbval4p == "") {
      $(this).prev('label').animate({
         'top':'35px'
      });
   } else {
      $(this).prev('label').animate({
         'top':'0'
      });
   }
});


// code for add address
$(".p7plus").click(function (){
   $("#addaddress ").show();
   $("body").addClass("overflow");
   return false;
   
});

$(".new_address-heading span").click(function (){
   $("#addaddress ").hide();
   $("body").removeClass("overflow");
});


// code for edit address
$(".p6accdbmain-right-one-heading  a ").click(function (){
   $("#editaddress ").show();
   $("body").addClass("overflow");
   return false;
   
});

$(".new_address-heading span").click(function (){
   $("#editaddress ").hide();
   $("body").removeClass("overflow");
});


// code for edit address
$(".p6accdbmain-right-one-heading  a#editxtwox, a#editxtwox ").click(function (){
   $("#editaddress-two ").show();
   $("body").addClass("overflow");
   return false;
   
});

$(".new_address-heading span").click(function (){
   $("#editaddress-two ").hide();
   $("body").removeClass("overflow");
});





