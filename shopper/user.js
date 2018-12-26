document.getElementById("loginform").style.visibility = "hidden";
function register() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var username = document.getElementById("user_name").value;
    var email = document.getElementById("emailid").value;
    var password = document.getElementById("password_").value;
    document.getElementById("name_error").innerHTML = "";
    document.getElementById("username_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("password_error").innerHTML = "";
    document.getElementById("user_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    var emailresult;
    //alert(name);
    if (name == "") {
        document.getElementById("name_error").innerHTML = "Please enter name";
        //  return false;
    }
    if (username == "") {
        //alert("username cannot empty");
        document.getElementById("username_error").innerHTML = "Please enter username";
        // return false;
    }
    if (email == "") {
        document.getElementById("email_error").innerHTML = "Please enter email";
        // return false;
    }
    else {
        emailresult = ValidateEmail(email);
    }

    if (password == "") {
        document.getElementById("password_error").innerHTML = "Please enter password";
        // return false;
    }
    if (name != "" && email != "" && password != "" && username != "" && emailresult == true) {
        if (window.localStorage.getItem(username) != null) {
            var exist_user = JSON.parse(window.localStorage.getItem(username));
            if (username == exist_user.username) {
                document.getElementById("user_error").innerHTML = "User Already Exist";
                return false;
            }
        }
        var person = { 'username': username, 'password': password, 'name': name, 'emailid': email };
        window.localStorage.setItem(username, JSON.stringify(person));
        document.getElementById("registerform").reset();
    }
    else {

    }

}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        //document.form1.text1.focus();
        return true;
    }
    else {
        document.getElementById("email_error").innerHTML = "You have entered an invalid email address!";
        //document.form1.text1.focus();
        return false;
    }
}

function forgotpswd() {
    event.preventDefault();
    window.location.href = "ADD_PRODUCT_27_11_18/forgot.html";
}

function showpswd() {

}

function login_user() {
    event.preventDefault();
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("loginform").style.visibility = "visible";
    document.getElementById("registerform").style.visibility = "hidden";

}

function login() {
    document.getElementById("login_error_username").innerHTML = "";
    document.getElementById("login_error_password").innerHTML = "";
    document.getElementById("login_error").innerHTML = "";
    event.preventDefault();
    var user_name = document.getElementById("username").value;
    var user_pswd = document.getElementById("password").value;
    var user;
    if (user_name === "") {
        document.getElementById("login_error_username").innerHTML = "Please enter username";
        return false;
    }
    if (user_pswd === "") {
        document.getElementById("login_error_password").innerHTML = "Please enter password";
        return false;
    }
    if (user_name === "" && user_pswd === "") {
        document.getElementById("login_error").innerHTML = "Please enter username and password";
        return false;
    }

    if (user_name == "admin" && user_pswd == "1234") {
        window.sessionStorage.setItem("name", "Admin");
        window.location.href = "products.html";
    }
    else {
        if (window.localStorage.getItem(user_name) != null) {
            user = JSON.parse(window.localStorage.getItem(user_name));

            var usrname = user.username;
            var pswd = user.password;
            var name = user.name;
            console.log("userr" + usrname);
            console.log("succ" + pswd);
            if (user_name == usrname && user_pswd == pswd) {
                window.sessionStorage.setItem("username", user_name);
                window.sessionStorage.setItem("password", user_pswd);
                window.sessionStorage.setItem("name", name);
                window.location.href = "customer.html"
                //alert("login success");
            }
            else {
                document.getElementById("login_error").innerHTML = "Either username or pswd is incorrect";

                // alert("either username or pswd incorrect");
            }
        }
        else {
            document.getElementById("login_error").innerHTML = "User not found";

        }
    }

}