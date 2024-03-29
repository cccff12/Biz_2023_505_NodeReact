# NodeJS 와 React 프로젝트

## NodeJS 설치

- NodeJS Back-End Server 와 React Font-End 개발을 위한 도구
- Vanila JS 코드를 실행하고 테스트 할 수 있는 도구

## 개발도구 설치

`nodejs.org` 사이트에서 NodeJS LTS 버전 다운로드 후 설치

- windows 에서는 관리자 권한으로 cmd 창을 열고 도구를 설치한다.

1. `npm -g install npm` : nodeJS Package Manager 프로그램으로 NodeJS와 React 프로젝트에서 사용하는 여러가지 부수적 도구를 설치하는 도구
2. `npm -g install nodemon` Node Server Demoon, 아주 작은 Server 실행도구, NodeJS 프로젝트의 소스를 변경 후 저장을 하면 NodeJS서버를 자동으로 재 실행하는 도구

## 사용하여 React 폴더에서 vsCode열기

\*`node --version` : 설치된 nodejs 버전 확인

## NodeJS 서버 만들기

- React 폴더에 프로젝트폴더(Node-000-Hello)를 생성하기
- 생성된 폴더에서 터미널 창을 열고 `npm init`(노드서버 만들기) 명령 실행(실행하면 package.json파일 생성된다. 이 파일에 NodeJS프로젝트 설정 항목이 들어있다.)

- 다음과 같이 package.json을 변경한다

```json
{
  "name": "000-hello",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "scripts": {
    "start": "node ./server.js"
  },
  "author": "",
  "license": "ISC"
}
```

## NodeJS + Express Server 만들기

1. NodeJS를 이용한 Back-End Project 에서 가장 많이 사용하는 Framwork 인 Express 를 사용하여 서버 만들기
2. express-generator를 이용한 Express Server 만들기 : `npx express-generator`
3. express-21c 를 이용한 ES6+ Express Server 만들기: `npx express-21c [project]`-\*<!-- 이걸 하면 project이름의 파일이 생긴다 -->

## React Project 만들기 <!-- 다만 시간관계상 누가 만들어놓은 것을 쓸 것임-->

1. React 폴더에서 새로운 폴더 생성 `mkdir react-000-hello`
2. 프로젝트 시작: `npm init`
3. package.json에 다음 설정

```json
{
  "name": "react-000-hello",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": ["0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version"]
  },
  "author": "",
  "license": "ISC"
}
```

4. dependency 설정 (대상폴더에서 bash열어서)

```bash
npm install react
npm install react-dom
npm install react-scripts
```

5. project 구성
1. `public 폴더 생성하고 index.html `파일생성`div#root` tag 생성

```html
<body>
  <div id="root"></div>
</body>
```

2. `src` 폴더 생성. `App.js` 파일 생성

```js
const App = () => {
  return (
    <div>
      <button>클릭하세요</button>
    </div>
  );
};
export default App;
```

3. `src/index.js`파일 생성하고 아래 코드 넣기

```js
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## create-react-app을 이용한 React Project 생성

`npx create-react-app [프로젝트이름]`-\* 대중적으로 많이 사용되는 틀

### 개인적인 이해:

- 프로젝트 폴더의
  // 1.package.json의 "scripts": {
  // "start": "react-scripts start"}는 시작되면 제일 먼저 실행되는 것이다
  // 2. 그리고 index.js로 감
  // 3.public(이름이 반드시 public 이어야 함) 이라는 폴더를 읽어서 root 를 가진 id를 읽어옴

// 바로밑은 객체로 만드는 것. div id=root 인 박스안에 붙이는 것이다
// 그리고const root = ReactDom.createRoot(document.querySelector("#root")); 로
// 불러와
// root.render로 불러 붙여넣는 것

## NodeJS와 React 연동할 때 port 충돌 방지

- NodeJS는 기본 3000 Port 에서 실행
- React의 실행 Port 변경
- package.json 의 다음 Script 변경

```json
윈도우의 경우
"start" : "react-scripts start"를
"start" : "set PORT=5000 && react-scripts start" 으로 변경

MAC이나 Linux 의 경우
"start" : "react-scripts start"를
"start" : "export PORT=5000 && react-scripts start" 으로 변경



```
