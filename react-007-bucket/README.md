# React BucketList 프로젝트

- `react-router-dom`, `styled-component`,`module.css` 를 연동한 프로젝트

```bash
설치목록
npm install react-router-dom
npm install styled-components
npm install react-uuid
npm install moment
```

## 프로젝트에 storyBook 적용하기

- storyBook: custom 컴포넌트를 관리하는 도구
- storybook 개발도구 전역으로 설치하기 : `npm install -g storybook`
- 생성된 프로젝트 폴더에서 : `storybook init`
- `프로젝트/.storybook 폴더는 절대 편집 금지`
- `프로젝트/src/stories` 폴더의 파일, 폴더 모두 삭제

## 컴포넌트 storyBook DashBoard 에 표시하기

- 자신의 커스텀 컴포넌트를 임의의 src아래 임의의 폴더에 생성한다
- MButton 컴포넌트 생성: `src/shareComps/Mbutton.jsx` 파일생성
- dashBoard 표시 생성하기 : `src/stories/MButton` 폴더를 생성하고, `index.stories.js` 파일 생성
- 파일에 컴포넌트 설명과 예제 작성

```jsx
// 보여줄 컴포넌트 Import
import MButton from "../../shareComps/MButton";
// 설명 작성
export default {
  title: "내가만든 버튼", // 보여줄 이름
  component: [MButton], //보여줄(import할) 컴포넌트
};
// 예제작성
export const 버튼1 = () => (<MButton>클릭</MButton>)``;
```
