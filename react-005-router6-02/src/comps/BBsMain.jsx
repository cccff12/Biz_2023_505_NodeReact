import { useState, useEffect } from "react";
import {
  useRoutes,
  Outlet,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import BBsList from "./BBsList";
import BBsItem from "./BBsItem";
import BBsInput from "./BBsInput";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";
import moment from "moment";
import uuid from "react-uuid";
import localforage from "localforage";

const BBsBody = () => {
  return (
    <>
      <h3>여기는 게시판</h3>
      <Outlet />
    </>
  );
};

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState([]);
  const navigate = useNavigate();

  // 화면이 최초로 랜더링 된 후(Mount 된 후) 에 한 번만 실행하라
  useEffect(() => {
    const getForage = async () => {
      setBbsList(await localforage.getItem("BBS"));
    };
    getForage();
  }, []);

  // bbsList가 변경되면 앞에 있는 함수를 실행하라
  useEffect(() => {
    const setForage = async () => {
      await localforage.setItem("BBS", bbsList);
    };
    setForage();
  }, [bbsList]);

  const bbsUpdate = () => {
    const newBbsList = bbsList.map((bbs) => {
      if (bbs.id === bbsDto.id) {
        const updateBbs = {
          ...bbs,
          bContent: bbsDto.bContent,
          bSubject: bbsDto.bSubject,
        };
        return updateBbs;
      }
      return bbs;
    });
    setBbsList([...newBbsList]);
  };

  const bbsInput = () => {
    let newBbsDto = { ...bbsData };
    if (!bbsDto.id) {
      newBbsDto = {
        ...bbsDto,
        id: uuid(),
        bDate: moment().format("YYYY[-]MM[-]DD"),
      };
    } else {
      return bbsUpdate();
    }
    setBbsList([...bbsList, newBbsDto]);
    navigate("/bbs");
  };

  // 컴포넌트를 합치는걸 합성이라고 부름
  /**
   * 가. BBsList.jsx 에서 bbsList 데이터를 props 로 받아
   *     만들던 BBsItem 컴포넌트를 BBsMain.jsx에서 만들고 있다
   */
  const bbsListItemView = bbsList?.map((item, index) => {
    return <BBsItem item={item} key={item.id} seq={index} />;
  });

  const bbsRouter = useRoutes([
    // rootPath : /bbs 로 요청
    {
      path: "/",
      element: <BBsBody />,
      children: [
        {
          // path에 ""이 연결된 경우
          // rootPath 와 함께 제일 먼저 보여질 Component
          path: "",
          element: (
            <>
              {/* 나. BBsMain영역에서 생성된 bbsListItemView 를 BBsList 컴포넌트 사이에 주입하였다. 
                      별도의 변수로 설정하지 않았다.
              다. 컴포넌트 사이에 주입된 {bbsListItemView} 컴포넌트는 
                  BBsList에서 {children} 이라는 정해진 props변수 변수로 받는다
                  
              item을 list와 같이 main에서 사용함으로서 드릴링을 예방하고 
              컴포넌트를 합치는 '합성'을 이용하게 된다.
              */}
              <BBsList>{bbsListItemView}</BBsList>
              <NavLink to="/bbs/writer">글쓰기</NavLink>,
            </>
          ),
        },
        {
          path: "writer",
          element: (
            <BBsInput
              bbsDto={bbsDto}
              setBbsDto={setBbsDto}
              bbsInput={bbsInput}
            />
          ),
        },
        {
          // Navigate Component
          // 무조건 redirect 하기 위한 컴포넌트
          // to에 지정한 URL path로 무조건 화면 전환한다
          // spring 의 redirect와 같다

          path: "home",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
  return bbsRouter;
};
export default BBsMain;
