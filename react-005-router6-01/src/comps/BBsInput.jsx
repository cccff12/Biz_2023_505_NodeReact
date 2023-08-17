import { Form, InputDiv } from "../styled/BBsStyled";
// const Form = styled.form`
//   width: 80%;
//   margin: 0px auto;
//   border-collapse: collapse;
//   border: 1px solid #ddd;
//   padding: 10px;
// `;

// const InputDiv = styled.div``;

const BBsInput = () => {
  return (
    <Form>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input type="text" />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input type="text" />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea row={10} />
      </InputDiv>
    </Form>
  );
};
export default BBsInput;
