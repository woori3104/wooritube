import * as express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req:express.Request, res:express.Response) => {
  return res.send("welcome to the private lounge.");
};

const handleProtected = (req:express.Request, res:express.Response) => {
  return res.send("Home");
};

const logger = (req:express.Request, res:express.Response, next:express.NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  // 현재 middleware가 종료되면 다음 middleware를 호출
  next();
};

const privateMiddleware = (req:express.Request, res:express.Response, next:express.NextFunction) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed<h2>");
  }
  console.log("Allowed, you may continue.");
  next();
};
// 모든 router에서 사용하는 use
app.use(logger);
app.use(privateMiddleware);
// gossipMiddleware next가 있기때문에 종료후 handleHome을 호출
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleLogin = (req:express.Request, res:express.Response) => {
  return res.send("Login");
};

app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

