/**
 * express generator ES6+ Template
 * @author : callor@callor.com
 * @since : 2020-12-10
 * @update : 2023-01-19
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */

// essential modules
import express from "express";
import createError from "http-errors";
import path from "path";
import helmet from "helmet";

// 3rd party lib modules
import cookieParser from "cookie-parser";
import logger from "morgan";

// MySQL Sequelize
import DB from "../models/index.js";

// router modules
import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";
import bbsRouter from "../routes/bbs.js";

// create express framework
const app = express();

// helmet security module
app.use(helmet());

// MySQL DB 연결
// 주의!!! force 를 true 로 하면 기존의 Table 을 모두 DROP 한 후 재생성 한다
DB.sequelize.sync({ force: false }).then((dbConn) => {
  console.log(dbConn.options.host, dbConn.config.database, "DB Connection OK");
});

// Disable the fingerprinting of this web technology.
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "pug");
/*
app.use()
클라이언트에서 요청이 올라오면 모든 요청을 처리하는 함수 
이 요청들을 처리 한 후 router로 전송된다.
app.use()함수를 통해 여러가지 전역 변수, 미들웨어, 각종 설정 등을 할 수 있다.

*/
// 파일을 저장할 폴더
// 클라이언트의 모든 요청은 req.uploadPath값을 사용할 수 있다.
app.use((req, res, next) => {
  req.uploadPath = path.join("react-client/build/static/upload");
  next();
});

// middleWare enable
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("react-client/build")));

// router link enable
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/bbs", bbsRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
