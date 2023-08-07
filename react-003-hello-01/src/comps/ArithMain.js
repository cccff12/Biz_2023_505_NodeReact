import { useState } from "react";
import "../css/Arith.css";
import ArithInput from "./ArithInpu";
import ArithResult from "./ArithResult";

const ArithMain = () => {
  const [nums, setNums] = useState({ num1: 0, num2: 0 });
  // input Comp에는 데이터를 저장할 nums 객체와
  // nums 객체의 데이터를 변경할 setNums함수를 같이 전달하고
  // Result Comp 는 데이터를 읽어서 표현만 할 것이므로
  // 객체만 전달한다
  return (
    <>
      <ArithInput nums={nums} setNums={setNums} />
      <ArithResult nums={nums} />
    </>
  );
};

export default ArithMain;
