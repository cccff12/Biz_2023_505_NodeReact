import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BBsMain from "../comps/BBsMain";
import App from "../App";
import MyPage from "../comps/MyPage";
import BBsList from "../comps/BBsList";
import BBsInput from "../comps/BBsInput";
import BBsDetail from "../comps/BBsDetail";
// Nav Provider 컴포넌트
// Nav 의 모든 설정(IA)를 한 곳에서 설정하는 컴포넌트
const MainRouter = () => {
  // nav에서 Menu를 클릭했을때 보여질 화면들 설정하기
  const rounter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>na non home ida</h1> },
        { path: "/notice", element: <h1>na non gongisahang</h1> },
        {
          path: "/bbs",
          element: <BBsMain />,
          children: [
            { path: "", element: <BBsList /> },
            { path: "insert", element: <BBsInput /> },
            { path: "detail/:seq", element: <BBsDetail /> },
          ],
        },
        { path: "/mypage", element: <MyPage /> },
        {
          path: "/login",
          element: <>na non login hwamun</>,
          errorElement: <h1>error ga valsanghaesser</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={rounter} />;
};
export default MainRouter;
