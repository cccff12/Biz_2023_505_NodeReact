import { useState } from "react";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { SampleData } from "../data/Sampletodo";
// js에서 날짜와 관련된 여러가지 문제를 해결한 plug in
// date라고 하는 날짜와 관련된 객체가 있지만
// 실무에서는 거의 moment를 사용한다.
import moment from "moment";

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
  const [todo, settodo] = useState(null);
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoListAdd = (todo) => {
    const id = todoList[todoList.length - 1]?.id + 1 || 0;
    const addTodo = {
      id: id,
      sdate: moment().format("YYYY[-]MM[-]DD"),
      stime: moment().format("HH:mm:ss"),
      content: todo,
      complete: false,
    };
    setTodoList([...todoList, addTodo]);
  };

  const itemComplete = (id) => {
    // 완료처리예정
    const comTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
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
      const deleteTodoList = todoList.filter((todo) => {
        return todo.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  //Content를 클릭했을 때 선택된 item을 찾아주는 함수
  const updateItemSelect = (id) => {
    const selectTodoList = todoList.filter((todo) => {
      return todo.id === id;
    });
    setContent(selectTodoList[0].content);
    settodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭했을 떄 내용을 변경하는 함수
  const updateItemOK = (text) => {
    if (todo) {
      const updateTodo = { ...todo, content: text };
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return updateTodo;
        }
        return item;
      });
      setTodoList(updateTodoList);
      settodo(null);
    } else {
      todoListAdd(text);
    }
  };

  return (
    <div className="todo">
      <TodoInput
        content={content}
        setContent={setContent}
        todoListAdd={updateItemOK}
      />
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
