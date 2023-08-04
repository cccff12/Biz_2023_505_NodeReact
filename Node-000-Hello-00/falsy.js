// false, falsy, falsey 라는 개념이 있다.

// boolean type
const yes = true;
const no = false;

const strNull = null;
const strBlank = "";
const numZero = 0;
let valUndefined;
const numNaN = NaN;
const notNum = 0n;

// 변수 strNull의 데이터 타입이 무엇인가
console.log(typeof strNull); // object
console.log(typeof strBlank); // string
console.log(typeof numZero); // number
console.log(typeof valUndefined); //undefined
console.log(typeof numNaN); //number
console.log(typeof notNum); //bigint

// 위에서 선언한 변수들을 if()명령문에 포함 하거나
// !연산자를 동반하면 이 변수들의 성질이 true, false인가로 바뀐다
// 이런 데이터를 falsy falsey형 데이터 라고 한다

if (!strNull) console.log("strNull은", typeof strNull); // object
if (!strBlank) console.log("strBlank은", typeof strBlank); // string
if (!numZero) console.log("numZero은", typeof numZero); // number
if (!valUndefined) console.log("valUndefined은", typeof valUndefined); //undefined
if (!numNaN) console.log("numNaN은", typeof numNaN); //number
if (!notNum) console.log("notNum은", typeof notNum); //bigint

const num = 0;
if (num === 0) {
  console.log("Num은 0이다");
} else {
  console.log("Num 은 0이 아니다");
}
if (!num) console.log("진짜로 Num은 0이다");

const strName = "";
if (!strName) console.log("이름이 없어요"); // 이것과
if (strName === null || strName === "") console.log("이름이 없어요"); // 이것은 같은 코드다

console.log(strName || "홍길동");

const 구매자 = strName || "구매자 없음";
const 판매자 = "판매자 없음";
if (strName !== null && strName !== "") {
  판매자 = strName;
}
