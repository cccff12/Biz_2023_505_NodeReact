import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./comps/BBsMain";
import { hello } from "./modules/FetchModule";
import NavList from "./layout/NavList";
import MainRouter from "./layout/MainRouter";
import { Outlet } from "react-router-dom";

// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");

  // 화면이 mount 될 때 작동되도록 event 핸들러 등록
  // 두번째 파라미터를 빈(blank) 배열([]) 로 추가하면
  // Effect() 에 의해 실행할 함수는 화면이 rendering 된 후 한 번만 실행된다
  // useEffect (()=>{실행할 함수()},[])

  // hello ()함수는 await 를 부착하여 결과를 기다려야 하는 함수
  // 이 함수에 await 를 부착하기 위해서는 이 함수를 감싸는 함수에 async를 부착해야 한다
  // useEffect(() => {
  //   const fetchTitle = async () => {
  //     setTitle(await hello());
  //   };
  //   fetchTitle();
  // }, []);
  // useEffect() 첫 번째 함수에는 async를 부착할 수 없다

  // 즉시 실행 함수(익명 함수 호출 방식)로 만들기
  // 생성된 함수를 바로 사용하기
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "반갑습니다 React BBS Project 입니다"}</p>
      </header>
      <input placeholder="입력하기" />
      <NavList />
      {/* Router 에서 children 으로 설정된 component가 표시된 위치. 여기 위쪽은 공통코드 */}
      <Outlet />
    </div>
  );
}

export default App;
