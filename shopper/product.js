var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;

var products = [];
var data = [];
var stored_products = [];
var i = 0;
var getproduct;
if (window.localStorage.getItem("products") != null) {
    document.getElementById('clearbtn').style.visibility = "visible";
    loadProducts();
    //  document.getElementById('clearbtn').style.visibility="visible";
}

function clearProducts() {
    document.getElementById('clearbtn').style.visibility = "hidden";
    localStorage.removeItem("products");
    loadProducts();
}



function logout() {
    // alert("hii");
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function loadProducts() {

    // alert("hii");
    var div = document.getElementById('cont');
    if ((window.localStorage.getItem("products")) != null) {
        var c = JSON.parse(window.localStorage.getItem("products"));
        // console.log("type"+c.length);
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
            // anchor_.href="#";
            div_.appendChild(anchor_);
            var img = document.createElement('img');
            // iDiv.style.backgroundImage="url('https://www.fnordware.com/superpng/pnggrad16rgb.png')";
            img.src = c[i]['image'];
            img.value = i;
            //img.style.width = "250px";
            //img.style.height = "250px";
            // iDiv.style.display = "inline-block";
            anchor_.appendChild(img);
            // var edit=document.createElement('div');
            // edit.value=i;
            // edit.style.visibility="hidden";
            //img.appendChild(edit);

            img.onclick = function () {
                // alert(this.value);
                window.localStorage.setItem("pId", this.value);
                window.location.href = "editproduct.html";
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
            /* var close=document.createElement('input');
             close.type="button";
            
             iDiv.style.position="relative";
             close.style.position="absolute";
             close.style.width="26px";
             close.style.height="26px";
             close.style.backgroundImage="url('icon.png')";
             iDiv.appendChild(close);
             
             close.onclick = function() {
                 console.log("click");
                 iDiv.remove();
               }
               var edit=document.createElement('div');
               var editobuttn=document.createElement('input');
               editobuttn.type="button";
               editobuttn.value="edit";
               edit.value=i;
               edit.style.visibility="hidden";
               iDiv.appendChild(edit);
               iDiv.appendChild(editobuttn);
               editobuttn.onclick = function() {
     
                 submit.hidden = true;
                 editbtn.hidden = false;
                 console.log("edit"+edit.value);
                 var editprdct=edit.value;
                 productid.value=data[editprdct]['id'];
                 productname.value=data[editprdct]['name'];
                 des.value=data[editprdct]['des'];
                 price.value=data[editprdct]['price'];
                 image.value=data[editprdct]['image'];
     
                 editbtn.onclick = function () {
                     event.preventDefault();
                     var b = validation();
                     if (b == true) {
                         data[editprdct]['id'] = productid.value;
                         data[editprdct]['name']= productname.value
                         data[editprdct]['des']=des.value;
                          data[editprdct]['price']=price.value;
                         data[editprdct]['image']=image.value;
                       
                         document.getElementById("form").reset();
                         var parent = document.getElementById(editprdct);
                         parent.getElementsByTagName('img')[0].src=data[editprdct]['image'];
                         parent.getElementsByTagName('div')[1].innerHTML="Name:  " + data[editprdct]['name'];
                         parent.getElementsByTagName('div')[2].innerHTML="Price:  " + data[editprdct]['price'];
                         parent.getElementsByTagName('div')[3].innerHTML="Description:  " + data[editprdct]['des'];
                         submit.hidden = false;
                         editbtn.hidden = true;
                     }
                 }
                 
               }
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
       
         div.appendChild(iDiv);
     }
     else
     {
         div.innerHTML="";
     }
        // document.getElementById("form").reset();
        
        // i++;*/
        }
    }
    else {
        div.innerHTML = "";
    }
}
function createDiv() {
    var c = JSON.parse(window.localStorage.getItem("products"));
    console.log("type" + c.length);
    //for (var i = 0; i < Object.keys(data).length; i++) {
    for (i; i < c.length; i++) {
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
        var close = document.createElement('input');
        close.type = "button";

        //close.style.backgroundColor="red";
        iDiv.style.position = "relative";
        close.style.position = "absolute";
        close.style.width = "26px";
        close.style.height = "26px";
        close.style.backgroundImage = "url('icon.png')";
        iDiv.appendChild(close);

        close.onclick = function () {
            console.log("click");
            iDiv.remove();
        }
        var edit = document.createElement('div');
        var editobuttn = document.createElement('input');
        editobuttn.type = "button";
        editobuttn.value = "edit";
        edit.value = i;
        edit.style.visibility = "hidden";
        iDiv.appendChild(edit);
        iDiv.appendChild(editobuttn);
        editobuttn.onclick = function () {

            submit.hidden = true;
            editbtn.hidden = false;
            console.log("edit" + edit.value);
            var editprdct = edit.value;
            productid.value = data[editprdct]['id'];
            productname.value = data[editprdct]['name'];
            des.value = data[editprdct]['des'];
            price.value = data[editprdct]['price'];
            image.value = data[editprdct]['image'];

            editbtn.onclick = function () {
                event.preventDefault();
                var b = validation();
                if (b == true) {
                    data[editprdct]['id'] = productid.value;
                    data[editprdct]['name'] = productname.value
                    data[editprdct]['des'] = des.value;
                    data[editprdct]['price'] = price.value;
                    data[editprdct]['image'] = image.value;

                    document.getElementById("form").reset();
                    var parent = document.getElementById(editprdct);
                    parent.getElementsByTagName('img')[0].src = data[editprdct]['image'];
                    parent.getElementsByTagName('div')[1].innerHTML = "Name:  " + data[editprdct]['name'];
                    parent.getElementsByTagName('div')[2].innerHTML = "Price:  " + data[editprdct]['price'];
                    parent.getElementsByTagName('div')[3].innerHTML = "Description:  " + data[editprdct]['des'];
                    submit.hidden = false;
                    editbtn.hidden = true;
                }
            }

        }
        var namelabel = document.createElement("div");
        namelabel.innerHTML = "Name:  " + c[i]['name'];
        iDiv.appendChild(namelabel);
        var pricelabel = document.createElement("div");
        pricelabel.innerHTML = "Price  :" + c[i]['price'];
        iDiv.appendChild(pricelabel);
        var deslabel = document.createElement("div");
        deslabel.innerHTML = "Description  :" + c[i]['des'];
        iDiv.appendChild(deslabel);

    }
    var div = document.getElementById('cont');
    div.appendChild(iDiv);
    document.getElementById("form").reset();
    if (window.localStorage.getItem("products") != null) {
        document.getElementById('clearbtn').style.visibility = "visible";
    }
    // i++;

}
