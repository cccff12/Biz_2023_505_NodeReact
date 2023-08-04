// 1개의 Todo Data를 생성 하기 위한 함수
// java Dto 클래스 선언

// js에서 날짜와 관련된 여러가지 문제를 해결한 plug in
// date라고 하는 날짜와 관련된 객체가 있지만
// 실무에서는 거의 moment를 사용한다.
import moment from "moment";

// init 함수를 호출하면 새로운 Todo Data를 생성하여
// return 한다
const initData = () => {
  return {
    id: null,
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:ss:mm"),
    content: "",
    complete: false,
  };
};

const func1 = () => {};
const func2 = () => {};
const func3 = () => {};

export { initData, func1, func2, func3 };
