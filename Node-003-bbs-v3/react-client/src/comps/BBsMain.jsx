import BBsList from "./BBsList";
import BBsInput from "./BBsInput";

const BBsMain = () => {
  // Effect 함수의 기본구조: useEffect(() => {}, []);
  // deps (useEffect ()함수의 구번째 파라미터)가 빈 배열이면
  // 화면이 최초 Rendering 된 직후 한 번 발생하는 Event 함수
  // 컴포넌트 마운트: 화면이 최초 Rendering 이 된 직후
  // 마운트 시점 event
  // useEffect(() => {
  //   const fetchBBsList = async () => {
  //     const result = await getBbsList();
  //     setBbsList(result);
  //   };
  //   fetchBBsList();
  // }, []);

  return (
    <>
      <BBsInput />
      <BBsList />
    </>
  );
};
export default BBsMain;
