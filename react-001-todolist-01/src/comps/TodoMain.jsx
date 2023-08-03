import { useState } from "react";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { SampleData } from "../data/Sampletodo";

const TodoMain = () => {
  /*
  State 끌어 올리기
  TodoInput과 TodoList 에 있던 state들을 TodoMain(부모컴포넌트)로 이동
  1. TodoInput 에서 입력된 content state 의 값을
  2. TodoList 의 todoList state 배열에 추가하여
  3. TodoList > TodoItem 을 통해 화면에 출력을 해야한다

  이 상황에서 TodoInput과 TodoList 는 같은 부모의 형제간이다.
React 에서는 형제간의 state를 절대 공유할 수 없다
React 부모가 만들어서 전달해준 State만 볼 수 있다.
자식이 만든 State는 부모도 볼 수 없다

이 상황을 해결하기 위하여 자식 Comps있던 state와 state함수를 부모 Comps인 TodoMain으로 끌어올리기를 한다.
그리고 , 자식 Comps에게 전달해주어야 한다
  */
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([...SampleData]);
  return (
    <div className="todo">
      <TodoInput content={content} setContent={setContent} />
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
