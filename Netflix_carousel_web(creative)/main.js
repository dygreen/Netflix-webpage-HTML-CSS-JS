"use strict";
const toggle = document.querySelector(".navbar__toggle");
const dropdownMenu = document.querySelector(".dropdown__menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("clicked");
  dropdownMenu.classList.toggle("active");
});

// Slider
// 아래 버튼을 클릭하면 다음 이미지가 보여지는
$(".slide-2").click(() =>
  $(".slide-container").css("transform", "translateX(-100vw)")
);
$(".slide-3").click(() =>
  $(".slide-container").css("transform", "translateX(-200vw)")
);
$(".slide-1").click(() =>
  $(".slide-container").css("transform", "translateX(0vw)")
);

// 양 옆 버튼 클릭하면 이미지가 넘어가는
let nowShowingPic = 1;

$(".slide-next").click(() => {
  if (nowShowingPic < 3) {
    $(".slide-container").css("transform", `translateX(-${nowShowingPic}00vw`);
    nowShowingPic++;
  }
});

$(".slide-prev").click(() => {
  if (nowShowingPic > 1) {
    $(".slide-container").css(
      "transform",
      `translateX(-${nowShowingPic - 2}00vw`
    );
    nowShowingPic--;
  }
});

// 체크박스 클릭시 자동 슬라이드
$(".slider_option").change(() => {
  setInterval(() => {
    moveRight();
  }, 3000);
});

let slideWidth = $(".slide-box").width();

function moveRight() {
  $(".slide-container").animate(
    {
      left: -slideWidth,
    },
    200,
    "swing",
    function () {
      $(".slide-box:first-child").appendTo(".slide-container");
      $(".slide-container").css("left", "");
      $(".slide-container").addClass("transforming");
    }
  );
}
