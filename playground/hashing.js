const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

const data = {
  id: 10
};

const token = jwt.sign(data, "123abc");

console.log({ token });

const decoded = jwt.decode(token, "123abc");

console.log({ decoded });
//
// var message = "Iam user number 3";
// const has = SHA256(message).toString();
//
// console.log({ message });
// console.log({ has });

// const data = {
//   id: 4
// };
//
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };
//
// const resultHash = SHA256(JSON.stringify(data) + "somesecret").toString();
// if (resultHash === token.hash) {
//   console.log("Data was not changed");
// } else {
//   console.log("Data was changed. Do not trust.");
// }
