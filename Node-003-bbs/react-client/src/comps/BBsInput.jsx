import { useState, useRef } from "react";
import { filePriview, filesPriview } from "../modules/ImagePreview";
import { bbsInsert } from "../modules/FetchModule";

const BBsInput = () => {
  const [bbs, setBBs] = useState({
    b_seq: 0,
    b_nickname: "",
    b_title: "",
    b_content: "",
  });
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const imgRef = useRef(null);

  const fileChangeHandler = async (e) => {
    const imgSrc = await filePriview(e.target.files[0]);
    console.log(imgSrc);
    setImage(imgSrc);
  };

  const setMainImage = (image) => {
    setImage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="50px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });

  const filesChacgeHandler = async (e) => {
    const files = e.target.files;
    console.log(files);
    const imgSrcList = await Promise.all(filesPriview(files));
    // console.log(imgSrcList.length);
    // console.log(imgSrcList[0]);
    setImages(imgSrcList);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBBs({ ...bbs, [name]: value });
  };
  /*
fetch를 통해서 서버로 데이터, 이미지를 전송하기
1. formData 만들기
2. formData에 각 데이터들 append하기
3. fetch로 보내기
*/
  const insertButtonClickHandler = async (e) => {
    // js에서 제공하는 Http 객체라고 생각하면 됨
    const formData = new FormData();
    formData.append("bbs", bbs);
    // document.queryselect("#b_img").files[0] 과 밑의 코드는 같음
    formData.append("b_img", imgRef.current.files[0]);

    // formData.append("b_nickname", bbs.b_nickname);
    // formData.append("b_title", bbs.b_title);
    // formData.append("b_content", bbs.b_content);
    await bbsInsert(formData);
  };

  return (
    <section className="main">
      <div className="bbs input">
        <input
          name="b_nickname"
          placeholder="작성자"
          value={bbs.b_nickname}
          onChange={inputChangeHandler}
        />
        <input
          name="b_title"
          placeholder="제목"
          value={bbs.b_title}
          onChange={inputChangeHandler}
        />
        <input
          name="b_content"
          placeholder="내용"
          value={bbs.b_content}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="image main">
        <label htmlFor="main_image">대표이미지</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          ref={imgRef}
          // 각 요소의 key 역할을 하는 속성
        />
        <div className="thumb main">
          <img src={image ? image : ""} width="300px" />
        </div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_image">갤러리</label>
        <input
          id="gallery_image"
          type="file"
          accept="image/*"
          multiple="multiple"
          onChange={filesChacgeHandler}
        />
        <div className="thumb gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button onClick={insertButtonClickHandler}>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};

export default BBsInput;
