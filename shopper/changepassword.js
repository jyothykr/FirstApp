var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;

function changePassword() {
    var loggeduser = window.sessionStorage.getItem("username");
    var oldpassword = window.sessionStorage.getItem("password");

    var user = JSON.parse(window.localStorage.getItem(loggeduser));
    var newpassword = document.getElementById("lgpassword").value;
    var usrname = user.username;
    var pswd = user.password;
    var email = user.emailid;
    var name = user.name;
    var person = { 'username': usrname, 'password': newpassword, 'name': name, 'emailid': email };
    window.localStorage.setItem(loggeduser, JSON.stringify(person));

}

function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}