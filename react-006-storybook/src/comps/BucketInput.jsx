import Input from "../shareComps/Input";
import Button from "../shareComps/Button";
import style from "./BucketInput.module.css";
import { Form } from "react-router-dom";
const BucketInput = () => {
  return (
    <div className={style.input_box}>
      <div>
        <Input />
      </div>
      {/* react에서는 From tag를 다양하게 사용하는 방법이 있음 - router에서 사용방법이 존재 */}
      <Form method="get" action="content/new">
        <Button>새로작성</Button>
      </Form>
    </div>
  );
};
export default BucketInput;
