import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
// 프로젝트 폴더의
// 1.package.json의  "scripts": {
// "start": "react-scripts start"는 시작되면 제일 먼저 실행되는 것이다
// 2. 그리고 index.js로 감
// 3.public(이름이 반드시 public 이어야 함) 이라는 폴더를  읽어서 root 를 가진 id를 읽어옴

// 바로밑은 객체로 만드는 것. div id=root 인 박스안에 붙이는 것이다
// 그리고const root = ReactDom.createRoot(document.querySelector("#root")); 로
// 불러와
// root.render로 불러 붙여넣는 것
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
