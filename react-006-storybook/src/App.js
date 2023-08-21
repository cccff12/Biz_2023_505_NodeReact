import logo from "./logo.svg";
import "./App.css";
import MainRouterProvider from "./layout/MainRouter";

// 주소창에 ~~/를 입력하면 /bucket으로 자동으로 이동한다
/**
 * react-router-dom v6의 Navigate 컴포넌트
 * 어떤 URL로 요청이 들어왔을 때 다른 URL로 즉시 Redirect하고자 할 때
 *
 * localhost:3000/ 로 요청이 들어오면 localhost:3000/bucket으로 이동시켜라
 */
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/bucket" />,
//   },
//   { path: "/bucket/*", element: <BucketMain /> },
// ]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main">
        <MainRouterProvider />
      </section>
    </div>
  );
}

export default App;
