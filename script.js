var password = document.getElementById("password");
var email = document.getElementById("emailid");
var city = document.getElementById("city");
var about = document.getElementById("say");
var submit = document.getElementById("submitbtn");
var editbtn = document.getElementById("edittbtn");
editbtn.hidden = true;
var gender = "";
var terms = "Disagree";
var user_data = [];
// ARRAY FOR HEADER.
var arrHead = new Array();
arrHead = ['', 'username', 'password', 'email', 'City', 'about', 'gender', 'term'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.
function createTable() {

    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

    var tr = empTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);    // ADD THE TABLE TO  WEB PAGE.
    div.style.visibility = "hidden";
}

function validation() {
    if (document.getElementById("tandc").checked == true) {
        terms = "Agree";
    }
    if ((document.querySelector('input[name = "gender"]:checked'))) {
        gender = document.querySelector('input[name = "gender"]:checked').value;

    }

    if (username.value == "") {
        alert("Username cannot be empty");
        return false;
    }
    if (password.value == "") {
        alert("Password cannot be empty");
        return false;
    }
    if (email.value == "") {
        alert("Email cannot be empty");
        return false;
    }
    return true;
}
// ADD A NEW ROW TO THE TABLE
function register() {
    event.preventDefault();
    var d = validation();
    if (d == true) {
        document.getElementById('cont').style.visibility = "visible";
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
        var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
        var person = [username.value, email.value, password.value, city.value, about.value, gender, terms];
        user_data[rowCnt] = person;
        console.log("userarray" + user_data[rowCnt]);
        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(c);

            if (c == 0) {
                // FIRST COLUMN.
                createButton("Edit", "editData(this)", td);
                createButton("Delete", "removeRow(this)", td);

            }
            else {
                var ele = document.createElement('input');
                ele.setAttribute('value', person[c - 1]);

                td.appendChild(ele);
                tr.appendChild(td);

            }
            setFormdata();

        }
    }
}

function setFormdata() {

    document.getElementById("form").reset();
}

function createButton(buttonLabel, onclickdata, td) {
    var button = document.createElement('input');

    // SET INPUT ATTRIBUTE.
    button.setAttribute('type', 'button');
    button.setAttribute('value', buttonLabel);

    // ADD THE BUTTON's 'onclick' EVENT.
    button.setAttribute('onclick', onclickdata);

    td.appendChild(button);
    return;
}

function editData(oButton) {
    submit.hidden = true;
    editbtn.hidden = false;
    var index = oButton.parentNode.parentNode.rowIndex;
    var edit_user_array = [];
    edit_user_array = user_data[index];
    username.value = edit_user_array[0];
    password.value = edit_user_array[1];
    email.value = edit_user_array[2];
    city.value = edit_user_array[3];
    about.value = edit_user_array[4];
    if (edit_user_array[6] == "Agree") {
        document.getElementById("tandc").checked = true;
    }
    else {
        document.getElementById("tandc").checked = false;
    }

    editbtn.onclick = function () {
        event.preventDefault();

        var b = validation();
        if (b == true) {
            var edited = [username.value, password.value, email.value, city.value, about.value, gender, terms];
            user_data[index] = edited;
            var x = document.getElementById('empTable').rows;
            var y = x[index].cells
            for (var i = 1; i < y.length; i++) {
                y[i].innerHTML = edited[i - 1];
            }

            setFormdata();
            submit.hidden = false;
            editbtn.hidden = true;
        }
    }
}
// DELETE TABLE ROW.
function removeRow(oButton) {
    var empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}

// EXTRACT AND SUBMIT TABLE DATA.
function sumbit() {
    var myTab = document.getElementById('empTable');
    var values = new Array();

    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                values.push("'" + element.childNodes[0].value + "'");
            }
        }
    }
    console.log(values);
}

