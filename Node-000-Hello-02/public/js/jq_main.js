// 지금부터 여기는 DOM HTML 영역이다.
document.addEventListener("DOMContentLoaded", () => {});

// 지금부터 여기는 JQeury Script 영역이다
$(document).ready(function () {});
$(function () {});
$(() => {
  $("div.home").html("반갑습니다");
  $("div.bbs").css("color", "blue");

  //const divs1=   document.querySelectorAll("div.main")

  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText;
    alert(text);
  });
});
