function sum(x, y) {
    if (isNaN(x) === true) {
        throw new Error("That is not a number");
    } else if (isNaN(y) === true) {
        throw new Error("That is not a number")
    }
    return x + y;
}
try {
    sum("1", "2");
} catch (err) {
    console.log(err);
}

var user = { username: "sam", password: "123abc" };

function login(username, password) {
    const successfull = "login successfull"
    if (username === user.username && password === user.password) {
        console.log(successfull);
    } else throw new Error("Login Failed")
}

try {
    login("sam", "123abc")
} catch (err) {
    console.log(err)
}
try {
    login("george", "13412434")
} catch (err) {
    console.log(err)
}