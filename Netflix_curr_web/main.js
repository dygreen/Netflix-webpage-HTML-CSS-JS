"use strict";
const toggle = document.querySelector(".navbar__toggle");
const dropdownMenu = document.querySelector(".dropdown__menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("clicked");
  dropdownMenu.classList.toggle("active");
});

// scroll을 내리면 navbar background가 black으로 바뀌는
$(window).on("scroll", () => {
  if ($(window).scrollTop() > 100) {
    $(".navbar").addClass("navbar__black");
  } else {
    $(".navbar").removeClass("navbar__black");
  }
});
