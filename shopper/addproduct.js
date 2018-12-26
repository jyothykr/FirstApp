var name = window.sessionStorage.getItem("name");
document.getElementById("logduser").innerHTML = "Welcome  " + name;
var productid = document.getElementById("pid");
var productname = document.getElementById("pname");
var des = document.getElementById("pdes");
var price = document.getElementById("pprice");
var image = document.getElementById("pimage");

var products = [];
var data = [];
var stored_products = [];
var i = 0;
var getproduct;



function addproduct() {
    event.preventDefault();
    var d = validation();

    if (d == true) {
        data[i] = { 'id': productid.value, 'name': productname.value, 'des': des.value, 'price': price.value, 'image': image.value };
        stored_products.push(data[i]);
        console.log(data[i]);
        if (window.localStorage.getItem("products") != null) {
            getproduct = JSON.parse(window.localStorage.getItem("products"));
            getproduct.push(data[i]);
            window.localStorage.setItem("products", JSON.stringify(getproduct));
        }
        else {
            window.localStorage.setItem("products", JSON.stringify(stored_products));
        }



        document.getElementById("productform").reset();
    }
}

function validation() {
    if (productid.value == "") {
        document.getElementById("pid_error").innerHTML = "Please enter product id";
        //  document.getElementById("pid_error").focus();
        return false;
    }
    else {
        document.getElementById("pid_error").innerHTML = "";
    }
    if (productname.value == "") {
        document.getElementById("pname_error").innerHTML = "Please enter product name";
        //  document.getElementById("pname_error").focus();
        return false;
    }
    else {
        document.getElementById("pname_error").innerHTML = "";
    }
    return true;
}

function logout() {
    // alert("hii");
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

