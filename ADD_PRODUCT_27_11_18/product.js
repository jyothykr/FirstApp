var productid = document.getElementById("product_id");
var productname = document.getElementById("name");
var des = document.getElementById("des");
var price = document.getElementById("price");
var image = document.getElementById("image");
var products = [];
var data = [];
function addproduct() {
    event.preventDefault();
    var d = validation();
    data['id'] = productid.value;
    data['name'] = productname.value;
    data['des'] = des.value;
    data['price'] = price.value;
    data['image'] = image.value;

    if (d == true) {
        createDiv();

    }
}

function validation() {
    if (productid.value == "") {
        alert("ProductId cannot be empty");
        return false;
    }
    if (productname.value == "") {
        alert("Name cannot be empty");
        return false;
    }

    return true;
}

function createDiv() {
    //for (var i = 0; i < Object.keys(products).length; i++) {
       
        console.log("hiii" + data['id']);
        var iDiv = document.createElement('div');
        iDiv.id = 'block';
        // iDiv.className = 'block';
        var img = document.createElement('img');
        // iDiv.style.backgroundImage="url('https://www.fnordware.com/superpng/pnggrad16rgb.png')";
        img.src = data['image'];
        img.style.width = "250px";
        img.style.height = "250px";
        iDiv.style.display = "inline-block";
        iDiv.appendChild(img);
        var close=document.createElement('input');
        close.type="button";
        //close.style.backgroundColor="red";
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
        var namelabel = document.createElement("div");
        namelabel.innerHTML = "Name:  " + data['name'];
        iDiv.appendChild(namelabel);
        var pricelabel = document.createElement("div");
        pricelabel.innerHTML = "Price  :" + data['price'];
        iDiv.appendChild(pricelabel);
        var deslabel = document.createElement("div");
        deslabel.innerHTML = "Description  :" + data['des'];
        iDiv.appendChild(deslabel);
        
   //}
    var div = document.getElementById('cont');
    div.appendChild(iDiv);



}