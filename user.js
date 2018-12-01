document.getElementById("loginform").style.visibility="hidden";
function register()
{
    event.preventDefault();
    var name = document.getElementById("name").value;
   // alert(name);
    var username = document.getElementById("username").value;
  
    var password = document.getElementById("password").value;
    var email = document.getElementById("emailid").value;
  var person={'username':username,'password':password,'name':name,'emailid':email};
    window.localStorage.setItem(username,JSON.stringify(person));
    document.getElementById("registerform").reset();
  
}

function login_user()
{
    event.preventDefault();
    document.getElementById("login").style.visibility="hidden";
    document.getElementById("loginform").style.visibility="visible";
    document.getElementById("registerform").style.visibility="hidden";
   
}

function login()
{
    event.preventDefault();
    var user_name=document.getElementById("lgusername").value;
    var user_pswd=document.getElementById("lgpassword").value;
    var user;
    if(window.localStorage.getItem(user_name)!=null)
    {
    user=JSON.parse(window.localStorage.getItem(user_name));
   
    var usrname=user.username;
    var pswd=user.password;
    console.log("userr"+usrname);
    console.log("succ"+pswd);
    if(user_name==usrname && user_pswd==pswd)
    {
        alert("login success");
    }
    else
    {
        alert("either username or pswd incorrect");
    }
    }
    else
    {
        alert("user not found");
    }
  
}