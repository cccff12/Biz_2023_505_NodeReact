import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import BBsMain from "./comps/BBsMain";
import { Button } from "./styled/BBsStyled";

/**
 * react-router-dom의 useNavigate() hooks 함수
 * 보통 react-router-dom 에서 다른 페이지를 열고자 할 떄 NavLink 를 사용하여
 * a tag를 생성하고 페이지 전환을 한다.
 *
 * 하지만 button 등 tag를 사용할 때는 onClick event를 캡쳐하여 페이지를 전환해야 하는데
 *  이때는 NavLink를 사용하기가 다소 불편해진다
 * 이럴때 useNavigate()hooks 함수를 통하여 객체를 생성하고
 * 생성한 객체에 URL(requestPath)를 설정하면
 * JS document.location.href=URL 과 같은 코드를 사용하는 것과 같다
 *
 * v5에서는 UseHistory , Link, useRedirect  등 여러가지 함수와 객체들이 있었는데
 * v6에서는 대부분이 useNavigate() Hooks를 통하여 생성된 객체로 통합되었다.
 *
 * 특히 useRedirect의 경우 별도로 Navigate component를 통하여 실행할수도 있다.
 *
 */

/*
react-router-dom v6에서 useRouter () Hook 함수를 생성하고
router 를 return하는 구조로 변경한다.


*/
function App() {
  // useNavigate hooks 함수를 사용하여 navigate 객체 생성
  const navigate = useNavigate();
  // App Component 내에 inner Component 를 생성하기
  const AppBody = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Outlet />
      </div>
    );
  }; // end AppBody
  // App.js Component 를 화면에 표현하면 , react-router-dom에 의해서 path를 감지하고
  // AppBodt Component를 화면에 렌더링한다.
  const appRouter = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AppBody />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <Button
              bgColor="#aaa"
              color="#fafafa"
              onClick={() => navigate("/bbs")}
            >
              게시판 열기
            </Button>
          ),
        },
        { path: "bbs/*", element: <BBsMain /> },
      ],
    },
  ]);
  return appRouter;
}

export default App;
