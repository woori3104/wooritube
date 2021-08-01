import * as express from "express";
import e = require("express");
import * as morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoROuter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// 모든 router에서 사용하는 use
app.use(logger);

const handleLogin = (req:express.Request, res:express.Response) => {
  return res.send("Login");
};

app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

