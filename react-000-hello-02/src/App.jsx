import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const bbsURL = "http://localhost:8080/file/bbs/list";

function App() {
  const [bbs, setBbs] = useState(["제목"]);

  const ajax = async () => {
    // json 배열을 result에 세팅하라
    const res = await fetch(bbsURL);
    const result = await res.json();
    setBbs([...result]);
  };
  // 화면이 최초로 랜더링될 때 실행하라
  useEffect(() => ajax, []);

  const bbsList = bbs.map((dto) => {
    return <div>{dto.b_title}</div>;
  });
  return (
    <>
      {/* frgmenttag : react는 부모없는 테그가 한개여야한다 그래서 붙이는 테그 */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <section>{bbsList}</section>
    </>
  );
}

export default App;
