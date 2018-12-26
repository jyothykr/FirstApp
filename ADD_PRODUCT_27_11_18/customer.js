createDiv();

function logout()
{
    window.sessionStorage.clear();
    window.location.href="../adduser.html";
}
function changepassword()
{
    window.location.href="changepassword.html"
}
function createDiv() {
    var div = document.getElementById('cont');
    if((window.localStorage.getItem("products"))!=null)
    {
    var c=JSON.parse(window.localStorage.getItem("products"));
    console.log("type"+c.length);
    //for (var i = 0; i < Object.keys(data).length; i++) {
       for (var i=0; i<c.length; i++) {
        var iDiv = document.createElement('div');
        iDiv.id = i;
        // iDiv.className = 'block';
        var img = document.createElement('img');
        // iDiv.style.backgroundImage="url('https://www.fnordware.com/superpng/pnggrad16rgb.png')";
        img.src = c[i]['image'];
        img.style.width = "250px";
        img.style.height = "250px";
        iDiv.style.display = "inline-block";
        iDiv.appendChild(img);
        
       
        //close.style.backgroundColor="red";
        iDiv.style.position="relative";
       
        
        
        
         
        var namelabel = document.createElement("div");
        namelabel.innerHTML = "Name:  " + c[i]['name'];
        iDiv.appendChild(namelabel);
        var pricelabel = document.createElement("div");
        pricelabel.innerHTML = "Price  :" + c[i]['price'];
        iDiv.appendChild(pricelabel);
        var deslabel = document.createElement("div");
        deslabel.innerHTML = "Description  :" + c[i]['des'];
        iDiv.appendChild(deslabel);
        div.appendChild(iDiv);
       }
   }
   
    
   
   // i++;

}