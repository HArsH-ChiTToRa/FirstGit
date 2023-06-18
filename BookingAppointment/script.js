
var Div = document.getElementById('dv');
var form = document.getElementById('addForm');
form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    var mail = (document.getElementById('email')).value
    var myObj = {
        Name: (document.getElementById('name')).value,
        Email: (document.getElementById('email')).value,
        Phone: (document.getElementById('phone')).value
    }
    var obj_serial = JSON.stringify(myObj);
    localStorage.setItem(mail, obj_serial);

    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(myObj.Name+"-"+myObj.Email+"-"+myObj.Phone));
    Div.appendChild(li);
}




