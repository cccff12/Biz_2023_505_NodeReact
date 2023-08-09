// 2가지 방법이 있는데 2번째 방법이 메모리를 더 가볍게 한다
// import express from "export";
// const router = express.Router();

import { Router } from "express";
const router = Router();

/*
 bbs API Router 설정
 보통 API 서버는 view가 없이 JSON (또는 XML) 데이터를 client 로 
 return 하는 서버를 말한다. (Spring Rest Server) 
 
 res.send()또는 res.json () 함수로 마감한다
  
 */
const Hello = {
  title: "내가 누군지 알아? 내가 누군지 몰라? 여기 관리자나오라고 해",
  message: "Hello NodeJS BBS World",
};
router.get("/", (req, res, next) => {
  res.json(Hello);
});

export default router;
