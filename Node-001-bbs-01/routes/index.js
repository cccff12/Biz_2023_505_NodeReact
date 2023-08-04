import DB from "../models/index.js";
import express from "express";

const router = express.Router();
const BBS = DB.models.tbl_bbs;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});

router.get("/bbs", async (req, res, next) => {
  const bbs = await BBS.findAll();
  res.json(bbs); // res.send("메롱");
});

router.get("/insert", async (req, res) => {
  const mBBS = {
    b_title: "안녕",
    b_content: "절대 안하지",
  };
  try {
    await BBS.create(mBBS);
    res.redirect("/bbs");
  } catch (error) {
    res.send("SQL ERROR");
  }
});

router.post("/insert", async (req, res) => {
  // form의 input은 body에 담긴다
  const bbs = new BBS(req.body);
  try {
    await BBS.create(bbs);
    // 업데이트문
    // await BBS.update(req.body, {where : {b_seq : req_body.b_seq}})
    res.redirect("/bbs");
  } catch (error) {
    res.send("INSERT ERROR");
  }
});

export default router;
