import * as express from "express";
import * as morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req:express.Request, res:express.Response) => {
  return res.send("welcome to the private lounge.");
};

const login = (req:express.Request, res:express.Response) => {
  return res.send("login");
};

// 모든 router에서 사용하는 use
app.use(logger);
// gossipMiddleware next가 있기때문에 종료후 handleHome을 호출
app.get("/", home);
app.get("/protected", login);

const handleLogin = (req:express.Request, res:express.Response) => {
  return res.send("Login");
};

app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

