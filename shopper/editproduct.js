var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;

var pId = window.localStorage.getItem("pId");
loadData();
var products = [];
var data = [];
var stored_products = [];
var i = 0;
var getproduct;
function loadData() {

    if ((window.localStorage.getItem("products")) != null) {
        var c = JSON.parse(window.localStorage.getItem("products"));
        console.log(c[pId]);
        document.getElementById('pid').value = c[pId].id;
        document.getElementById('pname').value = c[pId].name;
        document.getElementById('pdes').value = c[pId].des;
        document.getElementById('pprice').value = c[pId].price;
        document.getElementById('pimage').value = c[pId].image;
    }


}

function editproduct() {
    var productid = document.getElementById("pid");
    var productname = document.getElementById("pname");
    var des = document.getElementById("pdes");
    var price = document.getElementById("pprice");
    var image = document.getElementById("pimage");
    event.preventDefault();
    var d = validation(productid.value, productname.value);

    if (d === true) {
        //alert("hiii");
        data[i] = { 'id': productid.value, 'name': productname.value, 'des': des.value, 'price': price.value, 'image': image.value };
        stored_products.push(data[i]);
        console.log(data[i]);
        if (window.localStorage.getItem("products") != null) {
            getproduct = JSON.parse(window.localStorage.getItem("products"));
            //  getproduct[pId].push(data[i]);
            getproduct[pId] = data[i];
            window.localStorage.setItem("products", JSON.stringify(getproduct));
        }
        else {
            // window.localStorage.setItem("products", JSON.stringify(stored_products));
        }



        window.location.href = "products.html";
    }
}
function validation(pidval, pnameval) {
    if (pidval === "") {
        document.getElementById("pid_error").innerHTML = "Please enter product id";
        return false;
    }
    else {
        document.getElementById("pid_error").innerHTML = "";
    }
    if (pnameval === "") {
        document.getElementById("pname_error").innerHTML = "Please enter product name";
        return false;
    }
    else {
        document.getElementById("pname_error").innerHTML = "";
    }
    return true;
}

function deleteproduct() {
    var arr = [];
    var newarr = [];
    event.preventDefault();
    if (window.localStorage.getItem("products") != null) {
        getproduct = JSON.parse(window.localStorage.getItem("products"));
        arr = getproduct;
        var d = 0;
        for (var c = 0; c < arr.length; c++) {
            if (c != pId) {
                newarr[d] = arr[c];
                d++;
            }
        }
        getproduct[pId] = "";
        window.localStorage.setItem("products", JSON.stringify(newarr));
        window.location.href = "products.html";
    }
}

