import styled from "styled-components";
import BucketSearch from "./BucketSearch";
import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import { getBucketList, newBucket } from "../modules/bucketFech";

const ASideBar = styled.aside`
  width: 22rem;
  background-color: #f7f7f7;
  border-right: solid 2px #cccc;
  display: flex;
  flex-direction: column;
`;
/**
 * 다른 tag로 감싸진 a tag의 속성 지정하기
 * a tag 는 다른 tag와 달리 상당히 독자적인 성질을 많이 갖는다.
 * 다른 tag(여기에서는 li tag) 로 감싸는 구조일 경우
 * 실제 a tag 가 지정된 문자열을 클릭하면 a tag에 의해 URL이 변화되는데
 * 만약 다른 a tag 바깥쪽을 클릭하면 실제로 URL 변화등이 없다
 * <li><a href="#">text</a></li>
 * 위 구조에서 <a href="#"><li>text</li></a> 처럼 만들 수 있지만
 * 이는 HTML5문법 구조에 어긋나는 패턴이다.
 * 이럴때는 a tag의 display를 inline-block으로 설정하고,
 * width, padding 등을 설정해 li tag에 가득 채워지도록 만드는 것이 좋다.
 */
const UL = styled.ul`
  margin: 10px;
  list-style: none;
  & li {
    padding: 0;
    margin 5px auto;
    text-align: left;
    transition: 0.3s;
    &:hover{
      color:blue;  
      font-weight: bold;
      background-color: wheat;
        cursor:pointer
      }
  }
  & a {
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.5),
    2px 3px 3px 3px rgba(0, 0, 0, 0.2);

    text-decoration: none;
    display:inline-block;
    width:100%;
    padding: 12px 16px;
    margin:0;
    // border: 1px solid black;
    color: inherit;
  }
`;

export const mainLoader = async () => {
  const bucketList = await getBucketList();
  return { bucketList }; // 이거랑  return { bucketList:bucketList }; 랑 같다 ES6부터는 생략 가능
};

export const mainAction = async () => {
  const bucket = await newBucket();
  return "";
};

const BucketMain = () => {
  const { bucketList } = useLoaderData();
  const bucketItemListView = bucketList.map((item) => {
    return (
      <li>
        {/* 여기서 도메인 설정했으니 메인 라우터 프로바이더로 가서받을 곳 만든다 */}
        <NavLink to={`content/${item.id}`}>{item.bucket}</NavLink>
      </li>
    );
  });

  return (
    <>
      <ASideBar>
        <BucketSearch />
        <UL>{bucketItemListView}</UL>
      </ASideBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default BucketMain;
// 이것도 가능
// export default const BucketMain = () => {}
