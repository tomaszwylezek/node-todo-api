const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const password = "123abc!";

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

const hashedPassword =
  "$2a$10$KzrjEQ1A.7aOQUmbcgdemu1DadhiO5.C3.bKL36D1.1WIWwFfbjIy";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// const data = {
//   id: 10
// };
//
// const token = jwt.sign(data, "123abc");
//
// console.log({ token });
//
// const decoded = jwt.decode(token, "123abc");
//
// console.log({ decoded });
// //
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
