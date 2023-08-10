import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { getBbsList, bbsInsert } from "../modules/FetchModule";

const BBsContext = createContext();
// use* 로 시작되는 함수는 react에서 Hook 함수라고 한다.
// 여러가지 react와 협력하여 다양한 기능을 구현하는 함수들이다.
// 기본적으로 제공하는 Hook함수와 함께 개발자정의 Hook 함수를 만들어
// 사용할 수 있다.
// 이때 사용자 정의 Hook 함수는 반드시 use 접두사로 시작한다
const useBBsContext = () => {
  return useContext(BBsContext);
};

const BBsContextProvider = ({ children }) => {
  const imgRef = useRef(null);
  const imgsRef = useRef(null);
  const [bbs, setBBs] = useState({
    b_seq: 0,
    b_nickname: "",
    b_title: "",
    b_content: "",
  });

  const [bbsList, setBbsList] = useState([]);
  useEffect(() => {
    const fetchBBsList = async () => {
      const result = await getBbsList();
      setBbsList(result);
    };
    fetchBBsList();
  }, []);

  //   const props = {
  //     bbs: bbs,
  //     setBBs: setBBs,
  //     bbsList: bbsList,
  //     setBbsList: setBbsList,
  //   };
  // 위의 함수를
  // JS의 객체를 만들 대 {속성:변수} 형식일 경우
  // 속성 명칭과 변수의 이름이 같으면 한 번만 써도 된다. ES5+

  const bbsInsertCB = useCallback(async () => {
    const formData = new FormData();
    const file = imgRef?.current.files[0];
    const files = imgsRef.current.files;

    const bbsStr = JSON.stringify(bbs);

    formData.append("b_images", file);
    for (let file of files) {
      formData.append("b_images", file);
    }
    formData.append("bbs", bbsStr);
    console.log(bbs, formData);
    await bbsInsert(formData);
    // 이거하면 입력했을때 바로 리스트 갱신됨
    const result = await getBbsList();
    setBbsList(result);
  });

  const props = {
    bbs,
    setBBs,
    bbsList,
    setBbsList,
    bbsInsertCB,
    imgRef,
    imgsRef,
  };
  // BBsContext.Provider 라는 Store 에 state와 setState() 함수를 담아준다
  return <BBsContext.Provider value={props}>{children}</BBsContext.Provider>;
};
export { BBsContextProvider, useBBsContext };
