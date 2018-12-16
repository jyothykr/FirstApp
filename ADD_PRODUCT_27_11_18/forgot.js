function showpswd()
{
    var name=document.getElementById("usr").value;

    if(window.localStorage.getItem(name)!=null)
    {
    user=JSON.parse(window.localStorage.getItem(name));
    var usrname=user.username;
    var pswd=user.password;
    var email=user.emailid;
    alert(email);
    event.preventDefault();
    // Email.send("jyothykr26@gmail.com",
    // "jyothykr26@gmail.com",
    // "Password",
    // "password for the username"+usrname+": "+pswd,
    // "smtp.elasticemail.com",
    // "jyothykr26@gmail.com",
    // "b042355e-d565-4534-a155-c72de2ec763a",function (err, message) {
    //     console.log(err || message);
    //   });
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jyothykr26@gmail.com",
        Password : "b042355e-d565-4534-a155-c72de2ec763a",
        To : email,
        From : "jyothykr26@gmail.com",
        Subject : "Password",
        Body : "Password for the username "+usrname+": "+pswd,
    }).then(
      message => console.log(message)
    );
    
    //window.open('mailto:jyothykr26@gmail.com?subject=Forgot Password&body=Your old password is ');
    }
    else
    {
        alert("user not found");
    }
}
