var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
if (window.localStorage.getItem("products") != null) {
    loadProducts();
}


function logout() {
    window.sessionStorage.clear();
    window.location.href = "index.html";
}
function changepassword() {
    window.location.href = "changepassword.html"
}

function loadProducts() {
    var i = 0;
    // alert("hii");
    var div = document.getElementById('cont');
    if ((window.localStorage.getItem("products")) != null) {
        var c = JSON.parse(window.localStorage.getItem("products"));
        console.log("type" + c.length);
        //for (var i = 0; i < Object.keys(data).length; i++) {
        for (i; i < c.length; i++) {
            var iDiv = document.createElement('li');
            iDiv.id = i;
            iDiv.className = 'span3';
            var div_ = document.createElement('div');
            div_.className = "product-box";
            iDiv.appendChild(div_);
            var span_ = document.createElement('span');
            span_.className = "sale_tag";
            div_.appendChild(span_);
            var anchor_ = document.createElement('a');
            anchor_.href = "#";
            div_.appendChild(anchor_);
            var img = document.createElement('img');
            // iDiv.style.backgroundImage="url('https://www.fnordware.com/superpng/pnggrad16rgb.png')";
            img.src = c[i]['image'];
            img.value = i;
            //img.style.width = "250px";
            //img.style.height = "250px";
            // iDiv.style.display = "inline-block";
            anchor_.appendChild(img);
            img.onclick = function () {
                // alert(this.value);
                window.localStorage.setItem("prId", this.value);
                window.location.href = "product_detail.html";
            }
            var break_ = document.createElement('br');
            div_.appendChild(break_);
            var title_div = document.createElement('a');
            title_div.className = "title";
            title_div.innerHTML = c[i]['name'];
            div_.appendChild(title_div);
            var des_div = document.createElement('a');
            des_div.className = "category";
            des_div.innerHTML = c[i]['des'];
            div_.appendChild(des_div);
            var price_p = document.createElement('p');
            price_p.className = "price";
            price_p.innerHTML = c[i]['price'];
            div_.appendChild(price_p);
            div.appendChild(iDiv);

        }
    }
}