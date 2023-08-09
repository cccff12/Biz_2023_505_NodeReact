// react-rounter-dom에서 제공하는 a link 확장 컴포넌트
import { NavLink } from "react-router-dom";
import "../css/NavList.css";

const NavList = () => {
  return (
    <>
      <nav className="main">
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/notice">gongisahang</NavLink>
          </li>
          <li>
            <NavLink to="/bbs">jaugaesipan</NavLink>
          </li>
          <li>
            <NavLink to="/mypage">nae page</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavList;
