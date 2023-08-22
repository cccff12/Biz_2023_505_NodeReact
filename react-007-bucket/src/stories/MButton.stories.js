import styled from "styled-components";
import MButton from "../shareComps/MButton";

const Container = styled.div`
  width: 200px;
`;
// MButton을 내가만든버튼이라는 이름으로 보여주겠다
// storybook dash보드에 표현 할 이름
export default { title: "내가만든버튼", component: [MButton] };

export const 버튼샘플 = () => (
  <Container>
    <MButton>클릭하세요</MButton>
  </Container>
);
