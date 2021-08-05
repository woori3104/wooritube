import * as mongoose from "mongoose";

const mongodb : string = "mongodb://127.0.0.1:27017/wooritube";
mongoose.connect(mongodb, {
    useNewUrlParser : true, 
    useUnifiedTopology:true
});
const db = mongoose.connection;


const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);
db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);