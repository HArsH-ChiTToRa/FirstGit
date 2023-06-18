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
    li.mail = mail;
    li.name = myObj.Name;
    li.phone = myObj.Phone;
    li.appendChild(document.createTextNode(myObj.Name+"-"+myObj.Email+"-"+myObj.Phone));
    var Delete = document.createElement('button');
    Delete.className = 'delete';
    Delete.appendChild(document.createTextNode("Delete"));
    li.appendChild(Delete);
    var Edit = document.createElement('button');
    Edit.className = 'edit';
    Edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(Edit);
    Div.appendChild(li);
}


var Remove = document.getElementById('dv');
Remove.addEventListener('click', Details);

function Details(e){
    if(e.target.classList.contains('delete')){
        localStorage.removeItem(e.target.parentElement.mail);
        var x = e.target.parentElement;
        Div.removeChild(x);
        
    }
    else if(e.target.classList.contains('edit')){
        localStorage.removeItem(e.target.parentElement.mail);
        (document.getElementById('name')).value = e.target.parentElement.name;
        (document.getElementById('email')).value = e.target.parentElement.mail;
        (document.getElementById('phone')).value = e.target.parentElement.phone;
        Div.removeChild(e.target.parentElement);

    }
}
