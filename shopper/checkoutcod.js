var name = window.sessionStorage.getItem("name");
var usrname=window.sessionStorage.getItem("username");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function checkout(){
var aname=document.getElementById("addname").value;
var email=document.getElementById("addemail").value;
var phone=document.getElementById("addphone").value;
var address=document.getElementById("addaddress").value;
var city=document.getElementById("addcity").value;
var post=document.getElementById("addpost").value;
var comment=document.getElementById("comment").value;
document.getElementById("name_error").innerHTML="";
document.getElementById("email_error").innerHTML="";
document.getElementById("phone_error").innerHTML="";
document.getElementById("address_error").innerHTML="";
document.getElementById("city_error").innerHTML="";
document.getElementById("post_error").innerHTML="";
if(aname=="")
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
if(aname!="" && email!="" && phone!="" && address!="" && city!="" && post!="")
{
    var user_checkout = { 'username': usrname, 'name': aname, 'email': email, 'phone': phone, 'address':address, 'city':city, 'post':post, 'comment':comment };
    window.localStorage.setItem(usrname+"_coddetails", JSON.stringify(user_checkout));
    var c = JSON.parse(window.localStorage.getItem(usrname + "_cartproducts"));
    window.localStorage.setItem(usrname+"_checkoutproducts", JSON.stringify(c));
    window.localStorage.removeItem(usrname + "_cartproducts");
     window.location.href="succes.html";
  
}
}