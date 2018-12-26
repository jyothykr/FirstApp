var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function checkout() {
    if (document.getElementById('cod').checked) {
       // rate_value = document.getElementById('r1').value;
     // document.getElementById("address_div").style.visibility="visible";
      window.location.href="checkoutcod.html";
      }
      if (document.getElementById('card').checked) {
        // rate_value = document.getElementById('r1').value;
        window.location.href="checkoutcard.html";
       }
       
      
}