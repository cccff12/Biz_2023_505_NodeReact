/*
현재 화면의 모든 html tag가 다 그려진 다음에 시작하라

*/
// $는 단순한 함수 이름임 js에서는 가능
const $ = (x, parent = document) => {
  return parent.querySelector(x);
};
/*

Element 객체: Element 는 html로 구현하는 모든 tag의 부모 tag
Element.prototype: 기본적으로 JS , HTML에서 제공하지 않는 함수를 추가할 때 사용하는 키워드
Element.prototype.css: function(): Element tag에 css라는 이름으로 새로운 함수를 하나 등록하겠다
prototy으로 함수를 등록할때는 function 키워드로 함수를 만든다
*/
Element.prototype.css = function (key, value) {
  // 여기서 this는 Element
  this.style[key] = value;
};
Element.prototype.html = function (value) {
  this.innerHTML = value;
};

document.addEventListener("DOMContentLoaded", () => {
  $("div.home").style.backgroundColor = "blue";

  // 이건 바로 밑에 코드와 같음 document.querySelector("div.bbs").style.color = "red";
  $("div.bbs").css("color", "red");

  $("div.notice").css("background-color", "yellow");

  // 밑의 2개는 같은 코드
  $("div.mypage").html("여기는 나의 페이지야 접근 금지~");
  document.querySelector("div.mypage").innerHTML = "ghghh";
});
