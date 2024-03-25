import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "nsahemade@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "fe6ar6@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
