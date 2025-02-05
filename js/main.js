document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});

$(".company-slider").slick({
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

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

$(document).ready(function () {
  $(".product-slider").slick({
    vertical: true,
    slidesToShow: 2,
    verticalSwiping: true,
    arrows: false,
    infinite: false,
    dots: false,
  });

  // Handle mouse scroll event
  $(".product-slider").on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      // Scroll up - previous slide
      $(this).slick("slickPrev");
    } else {
      // Scroll down - next slide
      $(this).slick("slickNext");
    }
  });
  $("#myTab button").on("click", function (e) {
    e.preventDefault();
    var tabIndex = $(this).parent().index();
    $(".product-slider").slick("slickGoTo", tabIndex);
  });
});

$(".service-slider").owlCarousel({
  loop: true,
  dots: false,
  margin: 25,
  nav: false,
  center: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1.5,
    },
    475: {
      items: 2.5,
    },
    900: {
      items: 4,
    },
    1600: {
      items: 5.5,
    },
  },
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
  setTimeout(() => {
    $("#header-overlay").addClass("active");
  }, 1000);
});

$(document).on("click", "#header-overlay", function () {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("sidetoggle_active");
  $(".sidebar_menu").removeClass("active");
  $("#header-overlay").removeClass("active");
  return false;
});
$(document).ready(function () {
  $('.accordion-item').on('click', function () {
    $('.accordion-item').removeClass('active');
    $(this).toggleClass('active');
  });
});
$(function () {
class TxtType {
  constructor(el, toRotate, period) {
    this.el = el;
    this.toRotate = JSON.parse(toRotate);
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const fullTxt = this.toRotate[this.loopNum % this.toRotate.length];
    this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
    this.el.html(`<span class="wrap">${this.txt}</span>`);

    let delta = this.isDeleting ? 100 : 200 - Math.random() * 100;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}

$('.typewrite').each(function () {
  const $el = $(this);
  new TxtType($el, $el.attr('data-type'), $el.attr('data-period'));
});

// Inject CSS
$('head').append('<style>.typewrite > .wrap {padding-right:14px; border-right: 8px solid #000000 }</style>');

});