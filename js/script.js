$(document).ready(function () {
  $(".perfect .show").on("click", function () {
    $(this).closest(".perfect").find(".items .item").removeClass("hide");
  });

  $(".partners-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });
});
