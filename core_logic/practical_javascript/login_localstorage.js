// how can javascript store login information on fronted

const user = {
  id: "101",
  name: "Trusha",
  role: "student"
};

// convert user object to string and store it in localstorage
localStorage.setItem("user", JSON.stringify(user));

// retrieve from localstorage and convert it back to object
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser);