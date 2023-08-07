// express 의 Router : Client 의 Request 를 수신하여 처리하는 문지기
// import express from "express";
// const router = express.Router();
import { Router } from "express";
const router = Router();
import DB from "../models/index.js";
const BBS = DB.models.tbl_bbs;
//  이 사이는 라우터 영역
router.get("/", async (req, res) => {
  BBS.findAll().then((result) => {
    res.render("bbs/list", { BBS: result });
  });
});

export default router;
