# React Router

- React Project 에서 navigation 을 구현하기 위해서는 별도의 Router 를 설정해야 한다
- 도구설치 : `npm install react-router-dom`
- react-router-dom은 5.x 버전과 6.x버전은 호환되지 않는다
- 6.x 버전에서는 Navigation 설정 부분이 새롭게 만들어지고, Menu 만들기가 매우 쉬워졌다

## react-router-dom 을 이용한 Menu 생성

- `NavList.jsx` 파일에서 화면에 보여질 Menu를 구현
- `NavLink` 컴포넌트를 사용하여 각 a Link 를 구현
- `MainRouter.js` (Navigation Provier)에서 Link 가 클릭되었을 대 보여질 화면의 Layout을 구현
- 최상단의 index.js에 부착하고 App.js 를 최상단 layout 컴포넌트로 구현
- App.js에는 `<Outlet/>` 컴포넌트가 위치하고 여기에 메뉴를 클릭했을 때 보여질 컴포넌트들이 위치하게 된다.
