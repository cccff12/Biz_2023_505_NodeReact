import { InputDiv } from "../styled/BBsStyled";
import { Button } from "../styled/MyButton";
import moment from "moment";
import uuid from "react-uuid";

const BBsInput = ({ bbsDto, setBbsDto, bbsInput }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setBbsDto({ ...bbsDto, [name]: value });
  };

  const btnOnClickHandler = () => {
    bbsInput();
  };

  return (
    // <Form>
    <>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input
          type="text"
          value={bbsDto.bWriter}
          name="bWriter"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input
          type="text"
          value={bbsDto.bSubject}
          name="bSubject"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea
          row={10}
          value={bbsDto.bContent}
          name="bContent"
          onChange={inputOnChange}
        />
      </InputDiv>
      <Button type="button" onClick={btnOnClickHandler}>
        저장
      </Button>
      {/* </Form> */}
    </>
  );
};
export default BBsInput;
