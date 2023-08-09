import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./comps/BBsMain";
// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");
  const hello = async () => {
    // 프록시에 설정된 URL과 합성하여 http://localhost:3000/bbs 로 요청
    const res = await fetch("/bbs");
    // const json = await res.text();
    const json = await res.json();
    console.log(json);
    setTitle(json.title);
  };
  // 화면이 mount 될 때 작동되도록 event 핸들러 등록
  // 두번째 파라미터를 빈(blank) 배열([]) 로 추가하면
  // Effect() 에 의해 실행할 함수는 화면이 rendering 된 후 한 번만 실행된다
  // useEffect (()=>{실행할 함수()},[])
  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "반갑습니다 React BBS Project 입니다"}</p>
      </header>
      <BBsMain />
    </div>
  );
}

export default App;
