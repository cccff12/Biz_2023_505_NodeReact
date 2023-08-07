import "../css/Arith.css";
// 부모 Comp 에게서 전달받은 값의 개수가 적은경우는
// 함수의 매개변수에서 즉시 구조분해가 가능하다
const ArithInput = ({ nums, setNums }) => {
  // const {nums, setNums}= pros; 만약 위대로 안한다면 이렇게 할 것이다.

  //   input이 2개인 경우 이렇게 만들어줄수도 있다.
  //   const onChacgeNum1Handler1 = (e) => {};
  //   const onChacgeNum1Handler2 = (e) => {};
  // 하지만 그렇게 안하고 name속성을 input에 붙일거다
  const onChacgeHandler = (e) => {
    // value에는 입력값이
    // name에는 input의 num값이 담긴다. input 첫번쨰는 num1
    const { name, value } = e.target;
    setNums({ ...nums, [name]: value });
    // 이렇게 한다면 input에 담을 함수를 일일히 만들 필요가 없다
  };

  return (
    <div>
      <div>
        <label>숫자1</label>
        <input
          placeholder="num1"
          name="num1"
          value={nums.num1}
          onChange={onChacgeHandler}
        />
      </div>
      <div>
        <label>숫자2</label>
        <input
          placeholder="num2"
          name="num2"
          value={nums.num2}
          onChange={onChacgeHandler}
        />
      </div>
    </div>
  );
};

export default ArithInput;
