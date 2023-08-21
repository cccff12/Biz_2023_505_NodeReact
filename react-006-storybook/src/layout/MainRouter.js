import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BucketContent from "../comps/BucketContent";
import BucketMain from "../comps/BucketMain";

const MainRouterProvider = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/bucket" />,
    },
    {
      path: "/bucket",
      element: <BucketMain />,

      children: [
        // 밑의 2개는 순서가 중요하다 데이터를 받는 param은 항상 뒤로 가야함
        { path: "content/:new", element: <h1>새로잓ㅇ</h1> },
        { path: "content/:id", element: <BucketContent /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};
export default MainRouterProvider;
