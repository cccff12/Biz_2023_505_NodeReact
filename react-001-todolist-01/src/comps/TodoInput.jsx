import { useState } from "react";

// 여기는 Todo Content를 입력하고 추가를 실행하는 Component
// *원래는 ()안이 비어있었지만 부모에게서 받아야 하기 때문에 추가함
const TodoInput = (props) => {
  // 화면에 데이터를 rendering할 떄 사용할 state 선언
  // const [content, setContent] = useState("");

  // 여기도 바뀜
  const { content, setContent } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  return (
    <div className="input">
      <input placeholder="TODO" value={content} onChange={inputChangeHandler} />
      {/* jsx 주석
      본문의 tag내에서 사용하는 주석문
      
      button disabled 속성
      html 에서는 disabled="disabled " 라고 속성을 지정하면
      button tag에 click 속성이 사라지는 효과를 낼 수 있다.
      button:disabled style 을 지정해주면 button disabled가 설정되었을 떄
      모양을 만들 수 있다.

      react 에서는 disabled={true} 라는 속성으로 사용한다

      */}
      <button disabled={content.length < 2}>추가</button>
    </div>
  );
};
export default TodoInput;
