import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";
// initData.js에서 export한 함수들 중에서
// initData()함수만 필요하니 구조분해를 통해 import하기
import { initData } from "../data/initData";
import uuid from "react-uuid";
// uuid()
// react-uuid 의 export type이 무엇인가?=> export default

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

  // initData()함수를 실행하여 initData()함수가
  //  생성한 (return한)객체로 todo를 초기화
  const [todo, setTodo] = useState(() => initData());
  // const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });

  useEffect(() => {
    const resetTodo = () => {
      setTodo(initData());
      console.log("useEffect");
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    };
    resetTodo();
  }, [todoList]);

  // 입력한 todoContent를 사용하여 새로운 Todo 추가하기
  const todoListAdd = (content) => {
    const newTodo = { ...todo, id: uuid(), content: content };
    setTodoList([...todoList, newTodo]);
  };

  // Todo완료처리
  const itemComplete = (id) => {
    const comTodoList = todoList.map((item) => {
      if (item.id === id) {
        // Todo.complete 속성을 반전(NOT)시키기
        // true 이면 false , false면 true
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...comTodoList]);
  };

  const itemDelete = (id) => {
    // id에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제 할거에요? ㅠ")) {
      // list를 forEach하면서 item의 id와 일치하는 데이터가 있으면
      // 해당 데이터를 제외하면서 새로운 리스트를 만들기
      // filter는 참 혹은 거짓을 리턴한다
      // 전달받은 id와 일치하지 않은 item만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  //Content를 클릭했을 때 선택된 item을 찾아주는 함수
  const updateItemSelect = (id) => {
    // 현재 전달받은 id값은 pk성질을 가지므로
    // id에 해당하는 List만 추출하면 그 결과는 item이
    // 1개인 리스트가 생성된다.
    alert(id);
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });
    // update를 위한 Todo데이터 생성
    setTodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭했을 떄 업데이트 and insert했을때 실행하는 함수
  const todoInput = (content) => {
    // id값이 null또는 ""이면 List에 추가하기
    if (!todo.id) {
      todoListAdd(content);
      // id값이 null또는 "" 이 아니면 Update실행
    } else {
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, content: content };
        }
        return item;
      });
      // setState 함수
      setTodoList(updateTodoList);
    }
    // Add 또는 update를 실행 한 후 Todo를 초기화 하기
    // setTodo(initData()); 이제 이건 useEffect가 있으니 필요없다
  };

  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
      <TodoList
        todoList={todoList}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default TodoMain;
