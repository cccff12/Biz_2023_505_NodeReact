import http from "http"; // "type": "module" 전용

http
  .createServer((req, res) => {
    console.log("Hello My Server");
    // res.end 는 응답을 하라는 뜻
    res.end("<h1>Hello</h1>");
  })
  .listen(8080);
