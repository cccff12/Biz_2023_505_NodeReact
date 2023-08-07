const name1 = "홍길동";
const name2 = "이몽룡";

// [{이름: "홍길동"},{이름:"이몽룡"}]
const student1 = [{ 이름: name1 }, { 이름: name2 }];

/*
자바스크립트의 계산된 속성(expression property)
JS의 JSON객체는 []로 묶인 연산(계산)식을 사용하여 
속성이름을 만들 수 있다.

일반적으로 프로그래밍에서 변수의 이름은 고정된 영문자를 사용한다.
변수의 이름을 또 다른 변수를 사용거나 연산식을 사용하여 만드는 것은 불가능하다.
하지만 JS의 JSON객체를 만들때는 다양한 연산식을 사용하여 
속성(변수)이름을 만들 수 있다.

*/

const student2 = {
  //   자바스크립트에서는 변수이름을 변수로 만들 수 있음
  [name1]: "서울특별시",
  [name2]: "광주광역시",
};
console.log(student1);
console.log(student2);

const student3 = {
  ["NUM" + 1]: "홍길동",
  ["NUM" + 2]: "이몽룡",
  ["NUM" + 3]: "성춘향",
};
console.log(student3);
const nation = "대한민국";
const 우리나라 = {
  [nation]: "repulic~~~",
};

console.log(우리나라.대한민국);
// blank JSON객체
let num1 = {};
for (let i = 0; i < 10; i++) {
  num1 = { ...num1, [`NUM${i + 1}`]: i + 1 };
}

console.log(num1);
