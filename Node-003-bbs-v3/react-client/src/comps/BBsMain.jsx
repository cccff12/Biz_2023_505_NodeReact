import { Outlet } from "react-router-dom";
const BBsMain = () => {
  /*
  APP
    BBsMain : /bbs
      BBsList :/bbs ""
      BBsInput: /bbs/insert
이러한 구조를 MainRouter에 구현시켜 놓는다



    위와 같이 계층적(hierarchy) 의 화면 Layout 구현 할 때
    만약 /bss/insert 로 메뉴 링크가 요청되면 
    BBsMain 에 BBsInput을 포함해 하나의 화면을 구현하게 된다
    이때 BBsInput 컴포넌트를 포함할 자지를 BBsMain 에 만들어 두어야 한다.
    <Outlet/> 컴포넌트 키워드를 정해 놓으면 그 자리에 BBsInput 컴포넌트가 
    끼워넣어져 하나의 화면을 구성한다
  */
  return (
    <>
      <Outlet />
    </>
  );
};
export default BBsMain;
