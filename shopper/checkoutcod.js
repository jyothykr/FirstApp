var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function checkout(){
var name=document.getElementById("addname").value;
var email=document.getElementById("addemail").value;
var phone=document.getElementById("addphone").value;
var address=document.getElementById("addaddress").value;
var city=document.getElementById("addcity").value;
var post=document.getElementById("addpost").value;
document.getElementById("name_error").innerHTML="";
document.getElementById("email_error").innerHTML="";
document.getElementById("phone_error").innerHTML="";
document.getElementById("address_error").innerHTML="";
document.getElementById("city_error").innerHTML="";
document.getElementById("post_error").innerHTML="";
if(name=="")
{
    document.getElementById("name_error").innerHTML="Please enter name";
}
if(email=="")
{
    document.getElementById("email_error").innerHTML="Please enter email";
}
if(phone=="")
{
    document.getElementById("phone_error").innerHTML="Please enter phonenumber";
}
if(address=="")
{
    document.getElementById("address_error").innerHTML="Please enter address";
}
if(city=="")
{
    document.getElementById("city_error").innerHTML="Please enter city";
}
if(post=="")
{
    document.getElementById("post_error").innerHTML="Please enter post code";
}
}