const testControllerOne = (req, res) => {
  // res.send("ok");
  res.send("get,ok1");
};
const testControllerTwo = (req, res) => {
  // res.send("ok");
  res.send("post,ok2");
};
const controllers = { testControllerOne, testControllerTwo };
//
// const controllers = [];
// for (let i = 0; i < 2; i++) {
//   controllers.push();
// }

module.exports = controllers;
