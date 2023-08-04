import TodoMain from "./comps/TodoMain";
import "./css/App.css";
// App Component Main
// 밑의 function를 함수 component
// return을 component 본문

const App = () => {
  // App Component 의 본문(Body)
  return (
    <div className="App">
      <header>
        <h1>오늘 할 일</h1>
      </header>
      <TodoMain />
    </div>
  );
};

// App component 를 다른 Component, Container 에서 import 할 수 있도록
// Export하기
export default App;
