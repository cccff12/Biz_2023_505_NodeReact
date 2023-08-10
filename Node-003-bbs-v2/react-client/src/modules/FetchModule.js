// 함수 선언문에 export 를 붙이면 개별 함수가 export된다
// export {hello}한 것과 같다
export const hello = async () => {
  // 프록시에 설정된 URL과 합성하여 http://localhost:3000/bbs 로 요청
  const res = await fetch("/bbs");
  // const json = await res.text();
  const json = await res.json();
  console.log(json);
  // setTitle(json.title);
  return json.title;
};

export const bbsInsert = async (FormData) => {
  const URL = "/bbs/insert";
  const fetchData = {
    method: "POST",
    body: FormData,
  };
  const response = await fetch(URL, fetchData);
};
