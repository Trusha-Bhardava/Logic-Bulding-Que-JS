function validform(name, password, email)
{
    if (name.trim() == "")
    {
        alert ("name is required");
    }
    if (!email.includes("@"))
    {
        alert ("email is invalid");
    }
    if (password.length < 6)
    {
        return "password contain at least 6 character";
    }

    return "valid";
}

console.log(
  validform("Trusha", "trusha@gmail.com", "123456")
);