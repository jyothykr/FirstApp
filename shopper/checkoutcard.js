var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function checkout(){
var card_number=document.getElementById("card_number").value;
var valid_date=document.getElementById("valid_date").value;
var cvv=document.getElementById("cvv").value;
var name_card=document.getElementById("name_card").value;
document.getElementById("card_number_error").innerHTML="";
document.getElementById("valid_date_error").innerHTML="";
document.getElementById("cvv_error").innerHTML="";
document.getElementById("name_card_error").innerHTML="";

if(card_number=="")
{
    document.getElementById("card_number_error").innerHTML="Please enter card number";
}
if(valid_date=="")
{
    document.getElementById("valid_date_error").innerHTML="Please enter date";
}
if(cvv=="")
{
    document.getElementById("cvv_error").innerHTML="Please enter cvv";
}
if(name_card=="")
{
    document.getElementById("name_card_error").innerHTML="Please enter card name";
}


}