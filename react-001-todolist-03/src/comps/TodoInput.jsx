import { useState } from "react";
import TodoList from "./TodoList";

// 여기는 Todo Content를 입력하고 추가를 실행하는 Component
// *원래는 ()안이 비어있었지만 부모에게서 받아야 하기 때문에 추가함

/*
@param{*} props
부모 comps로 부터 전달받은 모든 것을 담아 오는 바구니
props를 통하여 전달 받은 모든 것은 read only이다.
  props 를 통해 전달받은 state도 여기에서 절대 변경 할 수 없다
props 를 통해 전달받은 state를 변경하려면
  state를 변경할 함수도 같이 전달 받아야 한다

*/
const TodoInput = (props) => {
  // 화면에 데이터를 rendering할 떄 사용할 state 선언
  // const [content, setContent] = useState("");

  // 여기는 helloE와 같이 각각을 변수로 선언 한 것이다
  const { todo, setTodo, todoInput } = props;

  const inputChangeHandler = (e) => {
    // input tag 에서 호출했기 때문에 value값이 input 에서 입력한 값이 된다
    const value = e.target.value;
    // setContent(value);
    setTodo({ ...todo, content: value });
  };
  // content는 input으로
  // list는 list로 보냈다

  // 추가버튼을 클릭했을 떄 할 일
  const btnClickHandler = (e) => {
    todoInput(todo.content);
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        value={todo.content}
        onChange={inputChangeHandler}
      />
      {/* jsx 주석
      본문의 tag내에서 사용하는 주석문
      
      button disabled 속성
      html 에서는 disabled="disabled " 라고 속성을 지정하면
      button tag에 click 속성이 사라지는 효과를 낼 수 있다.
      button:disabled style 을 지정해주면 button disabled가 설정되었을 떄
      모양을 만들 수 있다.

      react 에서는 disabled={true} 라는 속성으로 사용한다

      */}
      <button
        onClick={btnClickHandler}
        disabled={todo.content.length < 2}
        // id가 있다면 update
        className={todo.id ? "update" : ""}
      >
        {todo.id ? "변경 " : "추가 "}
      </button>
    </div>
  );
};
export default TodoInput;
