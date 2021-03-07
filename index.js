const express = require("express");
const app = express();
const port = 3000;

// 몽구스 연결 : 에러 => 다운그레이드
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://root:1q2w3e4r@basic.in96t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello Node World"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
