var logduser = window.sessionStorage.getItem("username");
var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
if (window.localStorage.getItem(logduser + "_cartproducts") != null) {
    loadProducts();
}

function loadProducts() {
    // alert(logduser);
    var i = 0;
    var div = document.getElementById('cont');
    if ((window.localStorage.getItem(logduser + "_cartproducts")) != null) {
        document.getElementById('checkout').style.visibility="visible";
        var c = JSON.parse(window.localStorage.getItem(logduser + "_cartproducts"));
        //for (var i = 0; i < Object.keys(data).length; i++) {
        for (i; i < c.length; i++) {
            var iDiv = document.createElement('tr');
            div.appendChild(iDiv);
            var pid = c[i]['pid'];
            console.log(pid);
            if ((window.localStorage.getItem("products")) != null) {
                var d = JSON.parse(window.localStorage.getItem("products"));
                //  console.log(c[prId]);
                //  document.getElementById('pid').innerHTML=c[prId].id;
                //  document.getElementById('pname').innerHTML=c[prId].name;
                //  document.getElementById('pdes').innerHTML=c[prId].des;
                //  document.getElementById('pprice').innerHTML="Price: "+c[prId].price;
                //  document.getElementById('pimage').src=c[prId].image;
                var imgtd = document.createElement('td');
                var image = document.createElement('img');
                image.src = d[pid].image;
                imgtd.appendChild(image);
                iDiv.appendChild(imgtd);
                var pname = document.createElement('td');
                pname.innerHTML = d[pid].name;
                iDiv.appendChild(pname);
                var quantitytxt = document.createElement('td');
                quantitytxt.innerHTML = c[i]['quantity'];
                iDiv.appendChild(quantitytxt);
                var pricetd = document.createElement('td');
                pricetd.innerHTML = d[pid].price;
                iDiv.appendChild(pricetd);
                var totaltd = document.createElement('td');
                totaltd.innerHTML = c[i]['quantity'] * d[pid].price;
                iDiv.appendChild(totaltd);
                var removetd = document.createElement('td');
                var removebtn = document.createElement("button");
                removebtn.innerHTML = "Remove";
                removebtn.value = i;
                removetd.appendChild(removebtn);
                iDiv.appendChild(removetd);
                removebtn.onclick = function () {

                    var removed = c.splice(this.value, 1);
                    if(c.length==0)
                    {
                        window.localStorage.removeItem(logduser + "_cartproducts");
                    }
                    else{
                    window.localStorage.setItem(logduser + "_cartproducts", JSON.stringify(c));
                    }
                    location.reload();

                }
            }



        }
    }
    else{
        document.getElementById('checkout').style.visibility="hidden";
    }
}

function checkout()
{
    window.location.href="checkout.html";
}
function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}