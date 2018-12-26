var prId = window.localStorage.getItem("prId");
loadData();

function logout() {
    // alert("hii");
    window.sessionStorage.clear();
    window.location.href = "index.html";
}

function loadData() {

    if ((window.localStorage.getItem("products")) != null) {
        var c = JSON.parse(window.localStorage.getItem("products"));
        console.log(c[prId]);
        document.getElementById('pid').innerHTML = c[prId].id;
        document.getElementById('pname').innerHTML = c[prId].name;
        document.getElementById('pdes').innerHTML = c[prId].des;
        document.getElementById('pprice').innerHTML = "Price: " + c[prId].price;
        document.getElementById('pimage').src = c[prId].image;
    }


}

function addtocart() {
    event.preventDefault();
    var data = [];
    var stored_products = [];
    var i = 0;
    var getproduct;
    var logduser = window.sessionStorage.getItem("username");

    data[i] = { 'pid': prId, "quantity": document.getElementById("quantity").value };
    stored_products.push(data[i]);
    console.log(data[i]);
    if (window.localStorage.getItem(logduser + "_cartproducts") != null) {
        getproduct = JSON.parse(window.localStorage.getItem(logduser + "_cartproducts"));
        getproduct.push(data[i]);
        window.localStorage.setItem(logduser + "_cartproducts", JSON.stringify(getproduct));
    }
    else {
        window.localStorage.setItem(logduser + "_cartproducts", JSON.stringify(stored_products));
    }

    window.location.href = "cart.html";

}
