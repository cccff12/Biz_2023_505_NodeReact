# firebase 적용하기

- `firebase.google.com` 사이트에 접속하여 프로젝트 생성하기
- 프로젝트 생성과정에서 나오는 마법사 지시대로 프로젝트 설정하기

```bash
npm install firebase
```

- firebaseConfig.js 파일 생성하고 config 정보 복사 붙이기
- react 프로젝트 firebase에 배포하기 위하여 CLI(Command 명령도구) 설치

```bash
npm install -g firebase-tools
```

-react project build 하기

```bash
npm run build
```

- firebase에 프로젝트 배포하기

```bash
firebase login
firebase init
firebase deploy
```

- 설치 안하고 하용하기

```bash
npx firebase-tools login
npx firebase-tools init
npx firebase-tools deploy
```

## firebase 에 배포하기

```bash
firebase login
npm run build

firebase init
# () Hosting : Configure files ... 선택
# Use an existing project 선택
# 배포할 프로젝트 선택
# public 폴더입력 : build
# 기타 나머지는 모두 n

firebase deploy
```

만약 수정했을 경우

1. npm run build
2. firebase deploy
