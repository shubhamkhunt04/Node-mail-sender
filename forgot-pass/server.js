const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./router/authRouter");

const app = express();
app.use(cors());
const server = require("http").createServer(app);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Forgot-pass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/resetpassword", auth);

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
