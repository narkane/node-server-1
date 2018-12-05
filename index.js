const express = require("express");
const controller = require("./controller");
const { json } = require("body-parser");
const { students } = require("./students");
const app = express();

// use this function on every request
app.use(json());
app.use((req, res, next) => {
  console.log("got a request!");
  next();
});

app.get("/api/students", controller.getStudents);
app.get("/api/students/:id", controller.getStudent);
app.post("/api/students", controller.postStudent);
app.delete("/api/student/:id", controller.deleteStudent);
app.put("/api/students/:id", controller.putStudent);

//----------------------------------------------------

app.listen(5050, () => {
  console.log("yeah, im listening, H03!!1");
});
