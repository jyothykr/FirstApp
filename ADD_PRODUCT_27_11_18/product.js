var productid = document.getElementById("product_id");
var productname = document.getElementById("name");
var des = document.getElementById("des");
var price = document.getElementById("price");
var image = document.getElementById("image");
var editbtn = document.getElementById("edittbtn");
var submit = document.getElementById("submitbtn");
editbtn.hidden = true;
var products = [];
var data=[];
var i=0;
function addproduct() {
    event.preventDefault();
    var d = validation();
    data[i]={'id':productid.value,'name':productname.value,'des':des.value,'price':price.value,'image':image.value};
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

    //for (var i = 0; i < Object.keys(data).length; i++) {
       for (i; i<data.length; i++) {
        var iDiv = document.createElement('div');
        iDiv.id = i;
        // iDiv.className = 'block';
        var img = document.createElement('img');
        // iDiv.style.backgroundImage="url('https://www.fnordware.com/superpng/pnggrad16rgb.png')";
        img.src = data[i]['image'];
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
        namelabel.innerHTML = "Name:  " + data[i]['name'];
        iDiv.appendChild(namelabel);
        var pricelabel = document.createElement("div");
        pricelabel.innerHTML = "Price  :" + data[i]['price'];
        iDiv.appendChild(pricelabel);
        var deslabel = document.createElement("div");
        deslabel.innerHTML = "Description  :" + data[i]['des'];
        iDiv.appendChild(deslabel);
        
   }
    var div = document.getElementById('cont');
    div.appendChild(iDiv);
    document.getElementById("form").reset();
   
   // i++;

}