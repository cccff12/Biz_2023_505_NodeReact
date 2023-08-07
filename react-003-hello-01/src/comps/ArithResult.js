import "../css/Arith.css";

const Arithresult = ({ nums }) => {
  const { num1, num2 } = nums;

  // const intNum1= Number(num1)
  // const intNum2= Number(num2)
  const [intNum1, intNum2] = [Number(num1), Number(num2)];
  //   아래9줄을 20열의 한 줄로 대체: 최대값과 최소값을 정렬
  //   let minNum = 0;
  //   let maxNum = 0;
  //   if (intNum1 > intNum2) {
  //     maxNum = intNum1;
  //     minNum = intNum2;
  //   } else {
  //     maxNum = intNum2;
  //     minNum = intNum1;
  //   }

  const [minNum, maxNum] = num2 > num1 ? [num1, num2] : [num2, num1];

  return (
    <div>
      <div>
        <strong>
          덧셈({intNum1} +{intNum2}: &nbsp;)
        </strong>
        <span>{intNum1 + intNum2}</span>
      </div>
      <div>
        <strong>
          뺄셈 ({maxNum} &minus; {minNum}: &nbsp;)
        </strong>
        <span>{maxNum - minNum}</span>
      </div>
      <div>
        <strong>
          곱셈 ({num1} &times; {num2}: &nbsp;)
        </strong>
        <span>{num1 * num2}</span>
      </div>
      <div>
        <strong>
          나눗셈 ({maxNum} &divide; {minNum}: &nbsp;)
        </strong>
        <span>{num1 / num2}</span>
      </div>
    </div>
  );
};

export default Arithresult;
