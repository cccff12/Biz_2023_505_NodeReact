import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BucketMain, { mainLoader, mainAction } from "../comps/BucketMain";
// import { bucketLoader, bucketAction } from "../modules/routerAction";
import BucketUpdate, { updateLoader } from "../comps/BucketUpdate";

/**
 * RouterProvider 에 연결하여 각종 Routing 을 수행하는 설정만들기
 * createBrowserRouter() 함수를 사용하여 router 객체를 생성
 * path 를 지정하고 path따라 열리는 컴포넌트를 설정
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <BucketMain />,
    // bucketList에 담긴값을 main의 useLoaderData에
    // 의해 state로 변경된다.
    loader: mainLoader,
    // 기본적으로 form의 button은 submit인데 이건 action으로 전달한다.
    // 그 action을 이걸로 전달한다
    action: mainAction,

    // main에서 도메인 주소로 이동하는 것을 설정했고 여기서 표시할 곳을 만든다
    // 하지만 이걸 요청하면 위에서 element: <BucketMain /> 이것때문에 기존 main 이 나타난다 그래서 메인을
    // 나타나는 곳을 바꿔줘야 한다.
    children: [
      { path: "content/:id", element: <BucketUpdate />, loader: updateLoader },
    ],
  },
]);

/**
 * react-router-dom을 사용한 화면 layout을 구현하는 도구
 * ...Provider 는 프로젝트 전반에서
 * router(path 변경, 클릭, 다른 화면 전환 등 )을 쉽게 구현해 주는 도구
 * Provider 로 감싸는 부분은 router 를 사용한 data handling이 가능하다
 * router v6.4 이상에서는 Routing 을 구현할 때 BrowserRouter 컴포넌트를 사용하지 않고,
 *  createBrowserRouter 함수를 사용한다
 * ...Provider 는  createBrowserRouter 함수로 만든 routing 환경을
 * 쉽게 구현하도록 도와주는 도구
 *
 */
const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};
export default MainRouterProvider;
