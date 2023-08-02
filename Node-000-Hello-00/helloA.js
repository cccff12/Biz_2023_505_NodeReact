const usetate = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum()];
};
const [num, setNum] = usetate(0);

const nations = ["중국", "일본"];
console.log(nations);
const [n1, n2] = nations;
const nation1 = nations[0];
const nation2 = nations[1];
console.log("n2", n1);
console.log("n1", n2);
// console.log("대한민국");
// console.log("korea");

const nations2 = [nations, "korea"];
console.log(nations2);

const nations3 = nations;
console.log("1", nations);
console.log("2", nations2);
nations2[0] = "아메리카";
console.log("3", nations3);
// 앞이 이렇게 ... 이라 붙은 걸 전개연산자라 하는데 이렇게 하면 주소가
// 복사되는게 아니라 값이 복사된다
const nations4 = [...nations];
nations4[0] = "republic og korea";
console.log("1", nations);

const nations5 = [];
for (let nation of nations) {
  nations5.push(nation);
}
