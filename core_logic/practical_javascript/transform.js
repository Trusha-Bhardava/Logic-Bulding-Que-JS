const users = [
  {
    _id: "101",
    fullname: "Trusha",
    email: "trusha@gmail.com",
    role: "student"
  },
  {
    _id: "102",
    fullname: "Rahul",
    email: "rahul@gmail.com",
    role: "Recruiter"
  }
];

const newuser = users.map((user) => {
    return {
        id : user._id,
        name : user.fullname
    };
});
console.log(newuser);