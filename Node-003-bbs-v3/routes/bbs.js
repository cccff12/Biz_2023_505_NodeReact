// 2가지 방법이 있는데 2번째 방법이 메모리를 더 가볍게 한다
// import express from "export";
// const router = express.Router();

import { Router } from "express";
const router = Router();

import multer from "multer";
import fs from "fs";

import DB from "../models/index.js";
// const tbl_bbs = DB.models.tbl_bbs;
// const tbl_files = DB.models.tbl_files;
// 위 코드를 구조분해하여 객체로부터 변수를 독립하고, 다른 이름으로 사용하기
// 다른이름 변수를 : 이름 형식으로 추가
const { tbl_bbs: BBS, tbl_files: FILES } = DB.models;

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

// multer 를 사용해 파일을 수신 할 때
// multer 가 파일이름을 latin1 방식으로 파일이름을 encoding 을 적용해 버린다
// window에서는 한글 이름이 깨진다
const encKor = (str) => {
  console.log(str);
  return Buffer.from(str, "latin1").toString("UTF-8");
};

// 파일을 전송하기 위한 설정값 만들기
const storageOption = {
  filename: (req, file, cb) => {
    file.originalname = encKor(file.originalname);
    const originName = file.originalname;
    const filePrix = `${Date.now}-${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    // 파일을 저장할 폴더가 없으면 새로 생성하라
    // 업로드 폴더는 app.js에서 선언한 uploadPath값을 참조한다
    if (!fs.existsSync(req.uploadPath)) {
      fs.mkdirSync(req.uploadPath);
    }
    cb(null, req.uploadPath);
  },
};

const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage });

router.get("/", (req, res, next) => {
  res.json(Hello);
});

router.post("/insert", uploadMiddleWare.array("b_images"), async (req, res) => {
  const body = req.body;
  // multer MiddleWare 가 파일 관련 데이터를 필터링하고, 처리한 후
  // 관련정보를 req.file 객체에 담아준다
  const files = req.files;
  const bbsDto = JSON.parse(body.bbs);
  // console.log("body", files, bbsDto);

  // files 이미지들 중에서 대표이미지는 첫 번째 이미지이다.

  bbsDto.b_image = files[0]?.filename;
  bbsDto.b_origin_image = files[0]?.originalname;

  const result = await BBS.create(bbsDto);

  // 이미지 정보 생성: 대표이미지를 제외한 나머지만 tbl_files에 저장하기
  for (let i = 1; i < files.length; i++) {
    const filesDto = {};
    filesDto.f_image = files[i].filename;
    filesDto.f_origin_image = files[i].originalname;
    filesDto.f_bseq = result.b_seq;
    await FILES.create(filesDto);
  }
  res.send("OK");
});

router.get("/list", async (req, res) => {
  // include
  // sequelize 에서 1:N 관계가 설정되어 있을 때 자동 JOIN 하는 코드

  const bbsList = await BBS.findAll({
    include: { model: FILES, as: "F_FILES" },
  });
  return res.json(bbsList);
});

// 만약 localhost:3000/bbs/detail/3 으로 요청이 되면
// 3이라는 값이 seq변수에 담긴다.
// ?seq = 값 => queryString 방식
//    req.query.seq로 값 받기
// /:seq :PathVarriable 방식
//    req.params.seq로 받기
// form 으로 전송한 데이터는
//    req.body 에 담겨서 통째로
router.get("/detail/:seq", async (req, res) => {
  const seq = req.params.seq;

  // include
  // sequelize 에서 1:N 관계가 설정되어 있을 때 자동 JOIN 하는 코드

  const bbsList = await BBS.findOne({
    where: { b_seq: seq },
    include: { model: FILES, as: "F_FILES" },
  });
  return res.json(bbsList);
});

export default router;
