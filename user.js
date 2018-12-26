document.getElementById("loginform").style.visibility="hidden";
function register()
{
    event.preventDefault();
    var name = document.getElementById("name").value;
   // alert(name);
   if(name=="")
   {
       alert("name cannot empty");
       return false;
   }
    var username = document.getElementById("username").value;
  if(username=="")
  {
    alert("username cannot empty");
    return false;
  }
    var password = document.getElementById("password").value;
    if(password=="")
  {
    alert("password cannot empty");
    return false;
  }
    var email = document.getElementById("emailid").value;
    if(email=="")
    {
      alert("email cannot empty");
      return false;
    }
    var emailresult=ValidateEmail(email);
    if(emailresult==false)
    {
        //alert("hiii");
        return false;
    }
    if(window.localStorage.getItem(username)!=null)
    {
        var exist_user=JSON.parse(window.localStorage.getItem(username));
        if(username==exist_user.username)
        {
            alert("user already exist");
            return false;
        }
    }
  var person={'username':username,'password':password,'name':name,'emailid':email};
    window.localStorage.setItem(username,JSON.stringify(person));
    document.getElementById("registerform").reset();
  
}
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
//document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
//document.form1.text1.focus();
return false;
}
}

function forgotpswd()
{
    event.preventDefault();
    window.location.href="ADD_PRODUCT_27_11_18/forgot.html";
}

function showpswd()
{

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
    if(user_name=="admin" && user_pswd=="1234")
    {
        window.location.href="ADD_PRODUCT_27_11_18/product.html";
    }
    else
    {
    if(window.localStorage.getItem(user_name)!=null)
    {
    user=JSON.parse(window.localStorage.getItem(user_name));
   
    var usrname=user.username;
    var pswd=user.password;
    console.log("userr"+usrname);
    console.log("succ"+pswd);
    if(user_name==usrname && user_pswd==pswd)
    {
        window.sessionStorage.setItem("username", user_name);
        window.sessionStorage.setItem("password", user_pswd);
        window.location.href="ADD_PRODUCT_27_11_18/customer.html"
        //alert("login success");
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
  
}