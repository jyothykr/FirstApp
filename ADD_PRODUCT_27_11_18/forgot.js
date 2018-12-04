function showpswd()
{
    var name=document.getElementById("usr").value;

    if(window.localStorage.getItem(name)!=null)
    {
    user=JSON.parse(window.localStorage.getItem(name));
   
    var usrname=user.username;
    var pswd=user.password;
    alert(pswd);
    }
}