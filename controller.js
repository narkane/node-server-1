const { students } = require("./students");

const getStudents = (req, res, next) => {
  res.json(students);
};

const getStudent = (req, res, next) => {
  const student = students.find(student => +student.id === +req.param.id);

  if (!student) {
    res.status(400).json({ error: "No student found. :((" });
  } else {
    res.json(student);
  }
};

const postStudent = (req, res, next) => {
  req.body.id = students.length;
  students.push(req.body);
  res.json(students);
});

const deleteStudent = (req, res, next) => {
  const index = students.findIndex(student => +student.id === +req.params.id);
  students.splice(index, 1);
  res.json(students);
});

const putStudent = (req, res, next) => {
  const index = students.findIndex(student => +student.id === +req.params.id);
  //if (index) {
  students[index] = req.body;
  //   } else {
  // students.push(req.body);
  //   }
  res.json(students);
});

module.exports = {
  getStudents: getStudents,
  getStudent: getStudent,
  postStudent,
  deleteStudent,
  putStudent
};
