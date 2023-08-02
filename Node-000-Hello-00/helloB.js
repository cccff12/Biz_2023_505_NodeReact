// js의 배열은 데이터형이 여러가지 섞여있어도 가능하다
// java에서의 배열은 반드시 같은 데이터 타입만 가능하다
const arrayValue = [10, 20, 30, "우리나라", "대한민국"];
console.log(arrayValue);

// 배열복사 세 가지 방법
const arrayValue1 = arrayValue; // 얕은 복사 :  `배열의 주소`만 복사되어 원본과 복사본 배열이 동안 배열이다
// 만약 복사본 배열의 요소 값이 변경되면 원본도 같이 변경된다.
const arrayValue2 = [...arrayValue]; // 전개연산자(...)를 이용한 깊은 복사 , 배열의 요소값 한 개 한개를 일일이
// 복사한다. 원본과 복사복이 동일한 값을 값지만 저장되는 주소는 두 배열이 다르다, 그리고 한 배열의 값이
// 변경돼도 다른 배열에 영향을 미치진 않는다
//

// 여기에 있는 복사 방법 중 전개연산자를 이용해 만든걸 권장한다

// ES5 이전의  JS 에서 사용하는 for를 사용한 배열복사
const arrayValue3 = [];
for (let array of arrayValue) {
  arrayValue3.push(array);
}

const arrayValue4 = [];
for (let index = 0; index < arrayValue.length; index++) {
  arrayValue4[index] = arrayValue[index];
}

const arrayValue5 = [];
arrayValue.forEach((item) => {
  arrayValue5.push(item);
});
