import * as express from "express";
import e = require("express");
import * as morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

// Header에서 Express를 표시 안하려면 disable해줌
app.disable('x-powered-by');
// view engine setting
app.set("view engine", "pug");
// view 폴더는 현재 src를 포함하지않고 있음. default폴더를 변경하기 위해서 아래와 같이 세팅함
app.set("views", process.cwd()+"/src/views");
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// 모든 router에서 사용하는 use
app.use(logger);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

