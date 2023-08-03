const student = {
  이름: "홍길동",
  나이: 19,
  전화: "010-111-1111",
};
// JSON에서 각각의 요소를 개별 변수로 추출하기
const 이름 = student.이름;
const 나이 = student.나이;
const 전화 = student.전화;
const student1 = {
  name: "홍길동",
  age: 19,
  tel: "010-111-1111",
};

// ES6에서 만들어진 객체의 구조분해
// 객체의 각 속성을 분해하여
// 개별 변수로 생성하기
const { name, age, tel } = student1;
console.log(student1.name);
console.log(name);

// 객체를 구조분해를 하면 객체. 속성 형식으로 사용하는 것보다
// 각 속성의 값을 참조할 때 코드를 짧게 할 수 있다.
// 전개 연산자를 사용하여 객체 통째로 복제하기
// 객체일 때는 전개 연산자를 앞쪽에 붙인다
const { ...all } = student1;

console.log(all);
console.log(name);

const address = {
  성명: "홍길동",
  주소: "감옥",
  전화: "010-111-1111",
  나이: 20,
  취미: "독사",
};
// 객체의 구조분해- address객체로부터 성명, 주소를 개별 변수로 분해하고 나머지는 또 다른 객체로 복제하는 구조분해
// 성명과 주소, 그리고 나머지까지 3가지 객체가 만들어지는데
// 3번째부터 마지막 까지의 요소가 나머지라는 객체에 담겼다
const { 성명, 주소, ...나머지 } = address;
console.log(성명, 주소, 나머지);

// 배열의 구조분해
// n1 과 n2는 nums 배열의 0번 ({a:1}) 1번(2)가 각각 할당되는
// 변수가 나머지는 nAll에 별도의 배열로 생성된다
const nums = [{ a: 1 }, 2, 3, 4, 5];
const [n1, n2, ...nAll] = nums;
console.log(n1, n2, nAll);

// 함수의 매개변수에 나머지 연산자 사용
const func = (num1, num2, ...nums) => {
  console.log(num1, num2);
  console.log(nums);
};
// func을 호출하면서 다수의 값을 전달하면
// 첫 번째와 두 번째는 일반 변수에 받고 나머지는
// nums 에 배열처럼 받는다
func(5, 1, 5, 3, 13.5, 1.35, 3541, 35, 413, 53, 5);

const func1 = (...nums) => {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  console.log(sum);
};
func1(31, 51, 3, 135, 3, 6851);
/*
JS의 나머지 연산자
배열을 위한 전개연산자로 탄생을 했다
그런데 모든 요소의 마지막 위치에서 전개 연산자가 붙은 변수가
발견되면 나머지 연산자도 형태가 변경된다
나머지 연산자를 배열의 나머지 요소, 객체의 나머지 요소
함수에서 매개변수의 나머지 요소들을 배열로 만들어 값을
취하게 된다

*/
