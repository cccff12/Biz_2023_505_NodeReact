import styled from "styled-components";
import SearchInput from "../shareComps/SearchInput";
const Container = styled.div`
  width: 200px;
`;

export default {
  title: "검색입력박스",
  component: [SearchInput],
};

export const 입력창샘플 = () => {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
};
export const 이룸검색 = () => {
  return (
    <Container>
      <SearchInput placeholder="이룸을 입력하세요 ㅠ" />
    </Container>
  );
};
