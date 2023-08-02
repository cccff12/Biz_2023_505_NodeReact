import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// comps의 input을(뒤에있는) 가져와서 Input(앞에있는)이라는 이름으로 쓰겠다
// component는 첫 글자가 대문자로 만드는 것을 권장한다. 기본적으로 html에서는 소문자를 쓰기 때문에
// component를 소문자로 만들었을때 겹치면 에러가 나고 소문자면 헷갈리수 있다
import Input from "./comps/input";

function App() {
  // useState라는 함수를 이용해 count라는 변수와 setCount라는 함수를 만든다
  const [count, setCount] = useState(0);

  // let count = 0;
  const clickHandlerDecre = () => {
    setCount(count - 1);
  };

  const clickHandlerIncre = () => {
    // count = count + 1; <- 절대로 자기 자신을 변경할 수 없음
    setCount(count + 1);
    // p tag에 표시된 count 값이 변화되었으니
    // p tag에 count 값을 표시하라
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 함수에 변화가 생기면 react는 자동으로 랜더링한다-
         이것의 놀라운 점은 자동으로 이게 이루어지는 것*/}
        <p>{count}</p>
        {/* <div onClick={() => setCount(count + 1)}>카운터 증가</div> */}
        <div onClick={clickHandlerDecre}>카운터 감소</div>
        <div onClick={clickHandlerIncre}>카운터 증가</div>
        <Input />
      </header>
    </div>
  );
}

export default App;
