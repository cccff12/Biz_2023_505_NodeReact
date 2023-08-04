import BBsItem from "./BBsItem";
import { useState, useEffect } from "react";
import "../css/BBs.css";

const BBsList = () => {
  const [bbs, setBbs] = useState([]);

  useEffect(() => {
    const getBBsListAll = async () => {
      // proxy 주소를 사용하여 Server에 요청
      // CORS 오류를 이래야 방지할 수 있다.
      const res = await fetch("/bbs");
      const result = await res.json();
      setBbs([...result]);
    };
    getBBsListAll();
  }, []);

  const BBsItemList = bbs.map((item) => {
    return <BBsItem item={item} key={item.b_seq} />;
  });

  return (
    <>
      <h1>게시판</h1>
      <table>
        <thead>
          <th>일련번호</th>
          <th>제목</th>
          <th>내용</th>
        </thead>
        <tbody>{BBsItemList}</tbody>
      </table>
    </>
  );
};

export default BBsList;
