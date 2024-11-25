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

  $(".planning-solutions-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Убираем активный класс у всех кнопок
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Убираем активный класс у всех панелей
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Добавляем активный класс к текущей кнопке и панели
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  $(".perfect .show-btn").on("click", function (e) {
    e.preventDefault();

    // Показываем все элементы
    $(this).closest(".perfect").find(".items .item").removeClass("hide");

    // Показываем кнопку скрытия, скрываем кнопку показа
    $(this).closest(".perfect").find(".hide-btn").show();
    $(this).hide();
  });

  $(".perfect .hide-btn").on("click", function (e) {
    e.preventDefault();

    // Скрываем все элементы
    $(this).closest(".perfect").find(".items .item").addClass("hide");

    // Показываем кнопку показа, скрываем кнопку скрытия
    $(this).closest(".perfect").find(".show-btn").show();
    $(this).hide();
  });

  AOS.init();
});
