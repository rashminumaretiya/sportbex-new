// document.addEventListener("DOMContentLoaded", function() {
//   AOS.init();
// });

$(function () {
  var header = $(".navbar");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      header.addClass("dark-header");
    } else {
      header.removeClass("dark-header");
    }
  });
});


// Animation JS
$(function () {
  function ckScrollInit(items, trigger) {
    items.each(function () {
      var ckElement = $(this),
        AnimationClass = ckElement.attr("data-animation"),
        AnimationDelay = ckElement.attr("data-animation-delay");

      ckElement.css({
        "-webkit-animation-delay": AnimationDelay,
        "-moz-animation-delay": AnimationDelay,
        "animation-delay": AnimationDelay,
        opacity: 0,
      });

      var ckTrigger = trigger ? trigger : ckElement;

      ckTrigger.waypoint(
        function () {
          ckElement.addClass("animated").css("opacity", "1");
          ckElement.addClass("animated").addClass(AnimationClass);
        },
        {
          triggerOnce: true,
          offset: "90%",
        }
      );
    });
  }

  ckScrollInit($(".animation"));
  ckScrollInit($(".staggered-animation"), $(".staggered-animation-wrap"));
});

$(".navbar-toggler").on("click", function () {
  $("body").addClass("sidetoggle_active");
  $("#header-overlay").addClass("active");
});
$("#header-overlay").on("click", function () { 
  $("#header-overlay").removeClass("active");
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("sidetoggle_active");
})

$('.testimonial-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.testimonial-thumb',
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
});
$('.testimonial-thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0
});

AOS.init();