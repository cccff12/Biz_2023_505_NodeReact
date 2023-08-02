// usestate를 사용하기 위함
import { useState } from "react";

/**
 *
 * @returns : HTML tag를 생성하는 코드
 * HTML tag를 생성하는 코드를 return 하는
 * 함수를 React에서는 Component라고 한다
 *component는 하나의 부속이라고 보면 된다
 *
 */

const Input = () => {
  // usestate로 만들어진 state(여기서는 nation)
  const [nation, setNation] = useState();
  // const nation=""
  // const setnation=()

  //   이건 const nations=[] 이라는 말이다
  const [nations, setNations] = useState(["우리나라,대한민국"]);

  // nations 배열의 개수만큼 <div>{item}</div> 를
  // 생성하는 코드
  //   생성된 tag list를  변수 nationList에 담기
  const nationList = nations.map((item) => {
    return <div>{item}</div>;
  });

  const inputChangeHandler = (e) => {
    // input tag의 값을 nation이라는 값에 세팅하라
    setNation(e.target.value);
  };

  /*
setNations([...nations, nation])
nations 배열을 전개하여 새로운 배열을 하나 만들고
새로 생성된 배열에 nation 문자열을 추가하고 
새로 생성된 배열을 setNations()함수를 통하여
기존의 nations 배열과 `교체하라`
*/

  return (
    <div>
      <input value={nation} onChange={inputChangeHandler} />
      <button onClick={(e) => setNations([...nations, nation])}>추가</button>
      <div>{nationList} </div>
    </div>
  );
};

export default Input;
